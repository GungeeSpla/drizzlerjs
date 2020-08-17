import * as constants from './constants.js';
import * as utilities from './utilities.js';

/** Park(alphabet, x, y)
 * 駐車場クラス。
 */
const Park = function Park(alphabet, x, y) {
	this.alphabet = alphabet;
	this.x = x;
	this.y = y;
	this.connectParks = [];
};

/** Course
 */
export default class Course {
	/** .constructor(def, zMap, pointer)
	 */
	constructor(def, zMap, pointer) {
		// defのプロパティを自身に上書きする
		Object.keys(def).forEach((key) => {
			this[key] = def[key];
		});
		// プロパティ初期化
		this.zMap = zMap;
		this.parks = [];
		this.pointer = pointer;
		this.isTrashEnabled = false;
		this.isVisibleArrow = true;
		this.isSelectingVoronoi = false;
		this.isVisibleVoronoi = false;
		this.isTogglingVoronoi = false;
		this.shouldUpdateVoronoi = true;
		this.isVisibleConnectMap = true;
		this.isArrowUpdateStopped = false;
		this.isVisibleDrizzlerCircle = false;
		this.timerOfArrowUpdate = null;
		this.$$parentLayer = pointer.$$parentLayer;
		this.canvasWidth = this.pointer.canvasWidth;
		this.canvasHeight = this.pointer.canvasHeight;
		// 定義defを解釈する
		this.parseDefine(def);
	}

	/** .convertAllCoordinates(def)
	 */
	convertAllCoordinates(def) {
		if ('parks' in def) {
			def.parks.forEach((dot) => {
				this.convertCoordinates(dot);
			});
		}
		if ('homes' in def) {
			def.homes.forEach((dot) => {
				this.convertCoordinates(dot);
			});
		}
		if ('spawners' in def) {
			def.spawners.forEach((spawner) => {
				spawner.vertexes.forEach((dot) => {
					this.convertCoordinates(dot);
				});
			});
		}
	}

	/** .convertCoordinates(def)
	 */
	convertCoordinates(pos) {
		const centerX = this.width / 2;
		const centerY = this.height / 2;
		const xFromRegX = (pos[0] - this.regX) * this.scale;
		const yFromRegY = (pos[1] - this.regY) * this.scale;
		const rotatedVec = utilities.getRotatedVector({
			x: xFromRegX,       
			y: yFromRegY,
		}, this.rotation);
		const x = this.canvasWidth / 2 + rotatedVec.x;
		const y = this.canvasHeight / 2 + rotatedVec.y;
		pos[0] = x;
		pos[1] = y;
	}

	/** .parseDefine(def)
	 * 定義を解釈します。
	 */
	parseDefine(def) {
		// 座標を補正
		this.convertAllCoordinates(def);
		// 駐車場を作成
		def.parks.forEach((pos, i) => {
			// インデックスをアルファベット(A, B, ...)に変換
			const alphabet = utilities.number2alphabet(i);
			// Parkインスタンスを作成
			this.parks.push(new Park(alphabet, pos[0], pos[1]));
		});
		// 駐車場と駐車場を繋げる
		// 'AB', 'BC', 'CD', ... などのデータからコネクトデータを作成
		def.lines.forEach((line) => {
			const strParkA = line.charAt(0).toUpperCase(); // eg. 'A'
			const strParkB = line.charAt(1).toUpperCase(); // eg. 'B'
			const parkA = this.getPark(strParkA);
			const parkB = this.getPark(strParkB);
			parkA.connectParks.push(parkB); // Park AにとってPark Bは繋がっている
			parkB.connectParks.push(parkA); // Park BにとってPark Aは繋がっている
		});
		// 繋がりを持たない駐車場を削除する
		for (let i = 0; i < this.parks.length; i += 1) {
			const park = this.parks[i];
			if (park.connectParks.length === 0) {
				this.parks.splice(i, 1);
				i -= 1;
			}
		}
	}

	/** .getPark(str)
	 * 駐車場をアルファベットから取得します。
	 */
	getPark(str) {
		// strを数値データにパースしてみる
		const parsed = parseInt(str, 10);
		// パースの結果次第
		if (Number.isNaN(parsed)) {
			// 数値にならなかった(アルファベットだった)場合
			// そのアルファベットが設定された駐車場をして返す
			for (let i = 0; i < this.parks.length; i += 1) {
				if (this.parks[i].alphabet === str) {
					return this.parks[i];
				}
			}
		} else {
			// 数字になった場合それをインデックスにしてparkを取得
			return this.parks[parsed];
		}
		// この期に及んで何も返せていないならしょうがないnullを返す
		return null;
	}

	/** .paintVoronoi()
	 * ボロノイ図を塗ります。
	 */
	paintVoronoi() {
		// ボロノイ図表示が有効でないならば
		if (!this.isVisibleVoronoi) {
			// ボロノイ図をアップデートすべきだというフラグだけ立てて帰る
			this.shouldUpdateVoronoi = true;
			return;
		}
		// 2dContextと色を取得
		const ctx = this.$$paint.image.getContext('2d');
		const col = constants.VORONOI_COLORS;
		// とりあえず白色で塗っておく
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
		// ボロノイターゲットのコウモリを取得する
		let drizzler = null;
		this.pointer.drizzlers.forEach((dzr) => {
			if (dzr.isEnabledVoronoi) {
				drizzler = dzr;
			}
		});
		// コウモリがいなければ何もしない
		// if (this.pointer.drizzlers.length === 0) {
		if (!drizzler) {
			return;
		}
		// コウモリがいても、そのコウモリの飛び先がなければ何もしない
		// const drizzler = this.pointer.drizzlers[0];
		const connectParks = utilities.excludeParkDrizzlerExists(
			drizzler.currentPark.connectParks,
			this.pointer.drizzlers,
		);
		if (connectParks.length === 0) {
			return;
		}
		// コウモリがいてしかもその飛び先があっても、飛び先がひとつしかないなら1色で塗って終わり
		if (connectParks.length === 1) {
			ctx.fillStyle = `rgb(${col[0][0]}, ${col[0][1]}, ${col[0][2]})`;
			ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
			return;
		}
		// 少なくとも2色以上の色でボロノイ図を塗る必要があるようだ！
		// イカが複数体いるかどうか
		const pluralSquidsExists = (this.pointer.squids.length >= 2);
		// イカの座標をコピーする
		const tempSquids = [];
		this.pointer.squids.forEach((squid, i) => {
			tempSquids[i] = {
				x: squid.x,
				y: squid.y,
			};
		});
		// ImageDataのすべてのピクセルについて走査する
		const imagedata = ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
		for (let x = 0; x < this.canvasWidth; x += 1) {
			for (let y = 0; y < this.canvasHeight; y += 1) {
				// 何色で塗るか
				let idx;
				// イカが複数体いるかどうか
				if (!pluralSquidsExists) {
					// 1匹しかいないならば
					// このピクセルx, yに最も近い駐車場のインデックスを取得 それで塗る色を決めよう
					[, idx] = utilities.getMinDistancePark({ x, y }, connectParks);
				} else {
					// 複数体いるならば
					// 1匹目のイカがこのピクセルx, yにいると仮定して
					tempSquids[0].x = x;
					tempSquids[0].y = y;
					// 最もコウモリに近いイカを取得
					const squid = utilities.getMinDistancePark(drizzler, tempSquids)[0];
					// そのイカに最も近い駐車場のインデックスを取得 それで塗る色を決めよう
					[, idx] = utilities.getMinDistancePark(squid, connectParks);
				}
				// ピクセルx, yのImageDataにおけるインデックス
				const i = (x + y * this.canvasWidth) * 4;
				// 塗る
				[
					imagedata.data[i + 0],
					imagedata.data[i + 1],
					imagedata.data[i + 2],
				] = col[idx];
			}
		}
		// ImageDataをctxに置く
		ctx.putImageData(imagedata, 0, 0);
		// アップデートの必要はなし(いまアップデートしたので)
		this.shouldUpdateVoronoi = false;
	}

	/** .updateDrizzlerArrows(isAnimation)
	 * コウモリの矢印をアップデートします。
	 */
	updateDrizzlerArrows(isAnimation) {
		clearTimeout(this.timerOfArrowUpdate);
		this.timerOfArrowUpdate = setTimeout(() => {
			this.pointer.drizzlers.forEach((drizzler) => {
				drizzler.updateArrow(isAnimation);
			});
		}, 10);
	}

	/** .hideDrizzlerArrows()
	 */
	hideDrizzlerArrows() {
		this.pointer.drizzlers.forEach((drizzler) => {
			drizzler.hideArrow();
		});
	}

	/** .showDrizzlerArrows()
	 */
	showDrizzlerArrows() {
		this.pointer.drizzlers.forEach((drizzler) => {
			drizzler.showArrow();
		});
	}

	/** .setNull()
	 * プロパティにnullを設定します。
	 */
	setNull() {
		this.$$leftSeconds = null;
		this.$$paint = null;
		this.$$trashOpen = null;
		this.$$trashClose = null;
		this.$$connectMapContainer = null;
	}

	/** .draw()
	 * 描画します。
	 */
	draw() {

		/** 親レイヤー
		 */
		//this.$$parentLayer.set({});
		
		/** コース背景色
		 */
		const $$backgroundColor = new createjs.Shape();
		$$backgroundColor.graphics
		.beginFill(constants.BACKGROUND_COLOR)
		.rect(0, 0, this.canvasWidth, this.canvasHeight);
		this.$$parentLayer.addChild($$backgroundColor);

		/** コース画像
		 */
		const $$background = utilities.create$$bitmap({
			src: this.image,
			rotation: this.rotation,
			scale: this.scale,
			regX: this.width / 2 - (this.width / 2 - this.regX),
			regY: this.height / 2 - (this.height / 2 - this.regY),
			x: this.canvasWidth / 2,
			y: this.canvasHeight / 2,
		});
		this.$$parentLayer.addChild($$background);

		/** 残り秒数
		 */
		this.$$leftSeconds = new createjs.Text(
			'',
			constants.LEFT_TIME_FONT_STYLE,
			constants.LEFT_TIME_FONT_COLOR,
		);
		this.$$leftSeconds.x = constants.LEFT_TIME_X;
		this.$$leftSeconds.y = constants.LEFT_TIME_Y;
		this.$$parentLayer.addChild(this.$$leftSeconds);

		/** ゴミ箱
		 */
		this.isTrashEnabled = false;
		if (!this.pointer.isRTMode) {
			this.isTrashEnabled = true;
			this.$$trashOpen = new createjs.Bitmap(
				`${this.pointer.pieceImageDir}/${constants.TRASH_IMAGE_OPEN}`,
			);
			this.$$trashOpen.set({
				alpha: 0,
				x: constants.TRASH_LEFT,
				y: constants.TRASH_TOP,
			});
			this.$$parentLayer.addChild(this.$$trashOpen);
			this.$$trashClose = new createjs.Bitmap(
				`${this.pointer.pieceImageDir}/${constants.TRASH_IMAGE_CLOSE}`,
			);
			this.$$trashClose.set({
				alpha: 1,
				x: constants.TRASH_LEFT,
				y: constants.TRASH_TOP,
			});
			this.$$parentLayer.addChild(this.$$trashClose);
		}

		/** コウモリマップのContainer
		 */
		this.$$connectMapContainer = new createjs.Container();
		this.$$parentLayer.addChild(this.$$connectMapContainer);

		/** 駐車場のボーダー
		 */
		const $$parkBorders = new createjs.Shape();
		this.parks.forEach((park) => {
			const g = $$parkBorders.graphics;
			g.beginFill(constants.BORDER_COLOR);
			g.drawCircle(park.x, park.y, constants.PARK_RADIUS + constants.BORDER_WIDTH);
		});
		$$parkBorders.cache(0, 0, this.width, this.height);
		this.$$connectMapContainer.addChild($$parkBorders);

		/** コネクトラインとそのボーダー
		 */
		const $$sides = new createjs.Shape();
		this.lines.forEach((line) => {
			const alphabet1 = line.charAt(0).toUpperCase();
			const alphabet2 = line.charAt(1).toUpperCase();
			const park1 = this.getPark(alphabet1);
			const park2 = this.getPark(alphabet2);
			$$sides.graphics
			.setStrokeStyle(
				constants.SIDE_WIDTH + (constants.BORDER_WIDTH * 2),
				constants.STROKE_LINECAP,
			)
			.beginStroke(constants.BORDER_COLOR)
			.moveTo(park1.x, park1.y)
			.lineTo(park2.x, park2.y)
			.endStroke();
		});
		this.lines.forEach((line) => {
			const alphabet1 = line.charAt(0).toUpperCase();
			const alphabet2 = line.charAt(1).toUpperCase();
			const park1 = this.getPark(alphabet1);
			const park2 = this.getPark(alphabet2);
			$$sides.graphics
			.setStrokeStyle(
				constants.SIDE_WIDTH,
				constants.STROKE_LINECAP
			)
			.beginStroke(constants.SIDE_COLOR)
			.moveTo(park1.x, park1.y)
			.lineTo(park2.x, park2.y)
			.endStroke();
		});
		$$sides.cache(0, 0, this.width, this.height);
		this.$$connectMapContainer.addChild($$sides);

		/*
		const $div = document.createElement('div');
		$div.style.setProperty('position', 'absolute');
		$div.style.setProperty('left', '320px');
		$div.style.setProperty('top', '480px');
		$div.style.setProperty('background', 'rgba(255, 0, 0, .1)');
		$div.style.setProperty('margin', '0');
		$div.style.setProperty('padding', '0');
		$div.style.setProperty('width', '320px');
		$div.style.setProperty('height', '480px');
		$div.style.setProperty('z-index', '999999999999');
		document.getElementById('drizzlerjs-wrapper').appendChild($div);
		*/
		
		
		/** 駐車場
		 */
		this.parks.forEach((park, i) => {
			const parkRadius = constants.PARK_RADIUS;
			const $$park = new createjs.Shape().set({
				x: park.x,
				y: park.y,
			});
			$$park.graphics
			.beginFill(constants.PARK_COLOR)
			.drawCircle(0, 0, parkRadius);
			utilities.cache$$object($$park, constants.PARK_RADIUS + constants.BORDER_WIDTH);
			this.$$connectMapContainer.addChild($$park);
			const fontSize = constants.PARK_FONT_SIZE;
			const fontStyle = `bold ${fontSize}px ${constants.PARK_FONT_FAMILY}`;
			const $$text = new createjs.Text(
				park.alphabet,
				fontStyle,
				constants.PARK_FONT_COLOR,
			).set({
				textAlign: 'center',
				textBaseline: 'middle',
				x: park.x,
				y: park.y,
			});
			utilities.cache$$object($$text, Math.ceil(constants.PARK_FONT_SIZE / 2));
			this.$$connectMapContainer.addChild($$text);
			if (constants.IS_DRAGGABLE_PARK) {
				utilities.draggable$$object(this.pointer.stage, $$park, [$$park, $$text], {
					onMouseMove: () => {
						const x = Math.floor($$park.x);
						const y = Math.floor($$park.y);
						console.log(`${park.alphabet} [${x}, ${y}]`);
					},
				});
			}
		});
		//this.$$connectMapContainer.cache(0, 0, this.canvasWidth, this.canvasHeight);

		/** ボロノイ図
		 */
		this.$$paint = utilities.create$$bitmap({
			src: utilities.create$canvas(this.canvasWidth, this.canvasHeight),
			alpha: constants.VORONOI_ALPHA,
			compositeOperation: 'multiply',
		});
		this.$$parentLayer.addChild(this.$$paint);
	}
}
