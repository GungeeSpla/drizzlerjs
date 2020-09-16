/** - 全般設定 -
 */
// フレームレート（リアルタイムモード時）
export const FRAME_RATE = 60;
// フレームレート（非リアルタイムモード時）
export const FRAME_RATE_NOT_RT = 30;
// キャンバスの横幅
export const CANVAS_WIDTH = 640;
// キャンバスの高さ
export const CANVAS_HEIGHT = 960;
// キャンバスの中央X座標
export const CANVAS_CENTER_X = CANVAS_WIDTH / 2;
// キャンバスの中央Y座標
export const CANVAS_CENTER_Y = CANVAS_HEIGHT / 2;
// キャンバスの背景色
export const BACKGROUND_COLOR = '#f2f2f2';
// キャンバスのレイヤー
export const CANVAS_LAYERS = [
	'course', 'drizzler', 'tool',
];
// StageGLを利用するか
export const IS_STAGEGL = false;
export const STORAGE_KEY = 'drizzlerjs'

/** - ボロノイ図 -
 */
// ボロノイ図の不透明度
export const VORONOI_ALPHA = 0.25;
// ボロノイ図の配色
export const VORONOI_COLORS = [
	[255, 255, 1],
	[255, 1, 255],
	[1, 255, 255],
	[255, 1, 1],
	[1, 1, 255],
	[1, 255, 1],
	[255, 127, 1],
	[1, 255, 127],
	[127, 1, 255],
	[127, 255, 1],
	[1, 127, 255],
	[255, 1, 127],
];

/** - ゴミ箱 -
 */
export const TRASH_IMAGE_CLOSE = 'trash-close.png';
export const TRASH_IMAGE_OPEN = 'trash-open.png';
export const TRASH_TOP = 0;
export const TRASH_LEFT = 0;
export const TRASH_WIDTH = 100;
export const TRASH_HEIGHT = 100;
export const TRASH_NATURAL_WIDTH = 100;
export const TRASH_NATURAL_HEIGHT = 100;

/** - コウモリマップ -
 */
export const PARK_RADIUS = 13;
export const PARK_COLOR = '#2196f3';
export const PARK_FONT_SIZE = 20;
export const PARK_FONT_FAMILY = 'sans-serif';
export const PARK_FONT_STYLE = `bold ${PARK_FONT_SIZE}px sans-serif`;
export const PARK_FONT_COLOR = '#ffffff';
export const SIDE_WIDTH = 2;
export const SIDE_COLOR = '#00bcd4';

/** - グラフィックその他 -
 */
export const CLEAR_COLOR = '#ffffff';
export const BORDER_WIDTH = 1;
export const BORDER_COLOR = '#ffffff';
export const STROKE_LINECAP = 'round';

/** - 矢印 -
 */
export const ARROW_WIDTH = 2;
export const ARROW_STROKE_WIDTH = 8;
export const ARROW_COLOR = '#aaa485';
export const ARROW_STROKE_COLOR = '#605b3e';

/** - イカ -
 */
export const SQUID_IMAGE = 'squid.png';
export const OCTA_IMAGE = 'octa.png';
export const SQUID_MAX_NUM = 4;
export const SQUID_WIDTH = 50;
export const SQUID_HEIGHT = 50;
export const SQUID_NATURAL_WIDTH = 128;
export const SQUID_NATURAL_HEIGHT = 128;
export const SQUID_REG_X = SQUID_NATURAL_WIDTH / 2;
export const SQUID_REG_Y = SQUID_NATURAL_HEIGHT / 2;
export const SQUID_SCALE = SQUID_WIDTH / SQUID_NATURAL_HEIGHT;

/** - コウモリ -
 */
export const DRIZZLER_IMAGE = 'drizzler.png';
export const DRIZZLER_WIDTH = 60;
export const DRIZZLER_HEIGHT = 60;
export const DRIZZLER_NATURAL_WIDTH = 128;
export const DRIZZLER_NATURAL_HEIGHT = 128;
export const DRIZZLER_REG_X = DRIZZLER_NATURAL_WIDTH / 2;
export const DRIZZLER_REG_Y = DRIZZLER_NATURAL_HEIGHT / 2;
export const DRIZZLER_SCALE = DRIZZLER_WIDTH / DRIZZLER_NATURAL_HEIGHT;
export const DRIZZLER_POS_BG_COLOR = '#d8d4c7';
export const DRIZZLER_POS_TEXT_COLOR = '#28331f';
export const DRIZZLER_TWEEN_BASE_D = 100;
export const DRIZZLER_TWEEN_TIME_MIN = 100;
export const DRIZZLER_TWEEN_TIME = 300;
export const DRIZZLER_TWEEN_EASE = 'cubicOut';
export const DRIZZLER_CIRCLE_COLOR = 'rgb(180, 230, 255)';
export const DRIZZLER_CIRCLE_STROKE_COLOR = 'rgb(180, 230, 255)';
export const DRIZZLER_CIRCLE_STROKE_WIDTH = 1;
export const DRIZZLER_TRIANGLE_IMAGE = 'triangle.png';
// コウモリのスポーン時の透明度
export const DRIZZLER_ALPHA_WHEN_SPAWN = 0.3;
// コウモリの攻撃回数
export const DRIZZLER_ATTACK_NUM = 2;
// コウモリの索敵範囲
export const DRIZZLER_CIRCLE_RADIUS = 322;
// コウモリの体力
export const DRIZZLER_HP = 900;
// コウモリがひっくり返っているフレーム
export const DRIZZLER_HEADSTAND_FRAME = 180;
// コウモリが飛行するのにかかるフレーム
export const DRIZZLER_FLY_FRAME = 180;
// コウモリが攻撃態勢に入ることが確定してから弾を撃つまでの待機フレーム
export const DRIZZLER_ATTACK_PREPARATION_FRAME = 220;
// コウモリが飛翔耐性に入ることが確定してから飛びたつまでの待機フレーム
export const DRIZZLER_FLY_PREPARATION_FRAME = 80;
// コウモリが受けるデフォルトダメージ
export const DRIZZLER_DEFAULT_DAMAGE = 85;

/** - ロケット -
 */
export const ROCKET_IMAGE = 'rocket.png';
export const ROCKET_MEAT_IMAGE = 'rocket-meat.png';
export const ROCKET_WIDTH = 40;
export const ROCKET_HEIGHT = 40;
export const ROCKET_NATURAL_WIDTH = 128;
export const ROCKET_NATURAL_HEIGHT = 128;
export const ROCKET_REG_X = ROCKET_NATURAL_WIDTH / 2;
export const ROCKET_REG_Y = ROCKET_NATURAL_HEIGHT / 2;
export const ROCKET_SCALE = ROCKET_WIDTH / ROCKET_NATURAL_HEIGHT;
// コウモリが乗り越えられるzMapの段差
export const ROCKET_DEAD_SLIP = 35;
// コウモリの初速を何倍にするか
export const ROCKET_INITIAL_VELOCITY_RATIO = 2;
// ロケットの射程
export const ROCKET_RANGE = 180;
// ロケットをはじき返したときの速度
export const ROCKET_TURN_SPEED = 250;
// ロケットをはじき返したときに消失するまでの時間
export const ROCKET_TURN_FRAME = 50;
// ロケットの耐久値
export const ROCKET_HP = 100;
// ロケットの弾ブレの角度
export const ROCKET_SHAKE_DEGREE = 40;
// 雨が降るまでの時間
export const ROCKET_WAIT_DIE_FRAME = 140;
// ロケットが目的地に飛ぶのにかかる時間(アーマーが外れるまでの時間でもある）
export const ROCKET_MOVE_FRAME = 60;

/** - HPバー -
 */
export const HP_BAR_BORDER_COLOR = '#000000';
export const HP_BAR_COLOR = '#00ff00';
export const HP_BAR_BORDER_WIDTH = 2;
export const HP_BAR_MARGIN = 34;
export const HP_BAR_WIDTH = 40;
export const HP_BAR_HEIGHT = 10;

/** - 敵駒 -
 */
export const ENEMY_PIECE_DATA = {
	'squid-a': {},
	'squid-b': {},
	'squid-c': {},
	'squid-d': {},
	steelhead: { range: 186, blast: 51 },
	scrapper: {},
	maws: {},
	stinger: {},
	flyfish: {},
	steeleel: {},
	griller: {},
	goldie: {},
	chum: {},
};
export const ENEMY_PIECE_NATURAL_WIDTH = 128;
export const ENEMY_PIECE_WIDTH = 50;
export const ENEMY_PIECE_CIRCLE_COLORS = [
	'rgb(150,220,150)',
	'rgb(217,255,217)',
	'rgb(217,255,217)',
];

/** - ブキ -
 */
export const WEAPON_WIDTH = 50;
export const WEAPON_HEIGHT = 50;
export const WEAPON_NATURAL_WIDTH = 128;
export const WEAPON_NATURAL_HEIGHT = 128;
export const WEAPON_HANDLE_COLOR = 'rgba(170, 170, 170, 0.7)';
export const WEAPON_HANDLE_MARGIN = 2;
export const WEAPON_CIRCLE_RATIO = 230 / 44;
export const WEAPON_CIRCLE_COLORS = [
	'rgb(255,160,255)',
	'rgb(255,200,255)',
	'rgb(255,200,255)',
];

/** - ブキ･敵駒の追加ツール -
 */
export const ADDTOOL_WIDTH = 64;
export const ADDTOOL_TOP = 30;
export const ADDTOOL_LEFT = 30;
export const ADDTOOL_MARGIN = 20;
export const ADDTOOL_COLUMN_NUM = 7;

/** - その他 -
 */
export const CHAR_CODE_OF_A = ('A').charCodeAt();
export const DO_LOG_CLICK_POS = false;
export const DO_LOG_OBJECT_COUNT = false;
export const LOG_OBJECT_COUNT_INTERVAL = 120;
export const IS_DRAGGABLE_PARK = false;
export const BOSS_ONE_KIND_MAX_NUM = 3;
export const ONE_WAVE_SECONDS = 100;
export const LEFT_TIME_FONT_COLOR = 'black';
export const LEFT_TIME_FONT_STYLE = 'bold 30px sans-serif';
export const LEFT_TIME_X = 20;
export const LEFT_TIME_Y = 20;
export const RTMODE_WAVE_START_SECONDS = 1;
export const RTMODE_WAVE_START_FRAME = Math.floor(RTMODE_WAVE_START_SECONDS * FRAME_RATE);

/** - コースデータ -
 */
export const COURSE_DATA = {
	/** - シェケナダム -
	 */
	shekenadamu: {
		normal: {
			name: {
				ja: 'シェケナダム通常潮',
				en: 'Spawning-Grounds-Normal-Tide',
			},
			parks: [
				[1270, 1029],
				[1408, 786],
				[1618, 799],
				[1485, 1074],
				[1660, 1149],
				[1277, 1275],
				[1178, 1395],
				[1032, 1364],
				[979, 1103],
				[919, 984],
				[1070, 937],
				[944, 810]
			],
			lines: ['LK', 'LJ', 'JK', 'IJ', 'IK', 'IA', 'IF', 'IG', 'IH', 'KA', 'AF', 'FG', 'GH', 'AB', 'BD', 'DA', 'DF', 'FE', 'ED', 'CB', 'CD', 'CE'],
			width: 2000,
			height: 2000,
			scale: 0.73,
			regX: 1333,
			regY: 1113,
			rotation: 0,
			homes: [
				[1185, 1063],
				[1134, 1063],
				[1134, 1125],
				[1185, 1125]
			],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[1240, 1674],
					[1093, 1581],
					[947, 1522]
				]
			}, {
				name: 'kanaami',
				probability: 35,
				vertexes: [
					[1601, 745],
					[1664, 905],
					[1464, 1238]
				]
			}, {
				name: 'kancho',
				probability: 30,
				vertexes: [
					[1056, 656],
					[903, 742],
					[819, 968]
				]
			}]
		},
		high: {
			name: {
				ja: 'シェケナダム満潮',
				en: 'Spawning-Grounds-High-Tide',
			},
			excludeParks: ['L', 'J', 'H', 'G', 'B', 'C', 'D'],
			'pushedParks': {
				'4': [1619, 1149]
			},
			additionalLines: ['EA'],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[1007, 1130],
					[1060, 1196],
					[1196, 1196]
				]
			}, {
				name: 'kanaami',
				probability: 35,
				vertexes: [
					[1415, 859],
					[1608, 1099]
				]
			}, {
				name: 'kancho',
				probability: 30,
				vertexes: [
					[1016, 1044],
					[1132, 937],
					[1011, 871]
				]
			}],
		},
		low: {
			name: {
				ja: 'シェケナダム干潮',
				en: 'Spawning-Grounds-Low-Tide',
			},
			parks: [
				[681, 773],
				[742, 454],
				[911, 636],
				[923, 941],
				[696, 1048],
				[399, 984],
				[492, 724],
				[971, 1090],
				[1184, 913],
				[1133, 787]
			],
			lines: ['FE', 'FA', 'GA', 'GE', 'BA', 'BC', 'AE', 'AD', 'AC', 'ED', 'CD', 'DH', 'DI', 'DJ', 'HI', 'JI', 'CJ'],
			width: 2000,
			height: 2000,
			scale: 0.721,
			regX: 851,
			regY: 887,
			rotation: 57.5,
			homes: [
				[737, 772],
				[700, 830],
				[753, 864],
				[790, 805]
			],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[342, 739],
					[311, 597],
					[488, 537]
				]
			}, {
				name: 'hidari',
				probability: 35,
				vertexes: [
					[417, 1068],
					[282, 1005],
					[312, 890]
				]
			}, {
				name: 'migi',
				probability: 30,
				vertexes: [
					[672, 464],
					[700, 358],
					[860, 368]
				]
			}]
		}
	},
	/** - ドンブラコ -
	 */
	domburako: {
		normal: {
			name: {
				ja: 'ドンブラコ通常潮',
				en: 'Marooners-Bay-Normal-Tide',
			},
			parks: [
				[934, 1109],
				[1087, 904],
				[916, 770],
				[1072, 711],
				[954, 605],
				[1093, 567],
				[1018, 498],
				[1199, 400],
				[645, 982],
				[772, 876],
				[571, 830],
				[772, 560],
				[582, 496],
				[897, 443],
				[839, 320],
				[965, 263],
				[1150, 259],
				[1260, 314],
				[1270, 571],
				[1198, 802],
				[1319, 965],
				[1280, 1107]
			],
			lines: ['ML', 'KJ', 'IJ', 'LJ', 'JC', 'CA', 'LN', 'ON', 'OP', 'PN', 'PQ', 'QR', 'QH', 'HR', 'HG', 'GF', 'FH', 'SR', 'SF', 'ST', 'GN', 'NE', 'EG', 'DE', 'DF', 'DC', 'DB', 'TU', 'UV', 'BA', 'EC', 'BT', 'CB'],
			width: 2000,
			height: 2000,
			scale: 0.653,
			regX: 905,
			regY: 750,
			rotation: 0,
			homes: [
				[939, 1107],
				[979, 1139],
				[1041, 1139],
				[1103, 1107]
			],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[784, 257],
					[1070, 196],
					[1345, 323]
				]
			}, {
				name: 'hidari',
				probability: 30,
				vertexes: [
					[582, 380],
					[521, 802],
					[585, 991]
				]
			}, {
				name: 'migi',
				probability: 35,
				vertexes: [
					[1228, 1191],
					[1368, 1054],
					[1358, 822]
				]
			}]
		},
		high: {
			name: {
				ja: 'ドンブラコ満潮',
				en: 'Marooners-Bay-High-Tide',
			},
			regX: 955,
			regY: 750,
			excludeParks: ['K', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'],
			additionalLines: [],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[1162, 354],
					[1031, 352],
					[998, 443]
				]
			}, {
				name: 'hidari',
				probability: 30,
				vertexes: [
					[1009, 443],
					[946, 440],
					[946, 530]
				]
			}, {
				name: 'migi',
				probability: 35,
				vertexes: [
					[1161, 354],
					[1142, 502],
					[1147, 629]
				]
			}],
		},
		low: {
			name: {
				ja: 'ドンブラコ干潮',
				en: 'Marooners-Bay-Low-Tide',
			},
			parks: [
				[1301, 1299],
				[1474, 1481],
				[1411, 1624],
				[1293, 1701],
				[1058, 1734],
				[1012, 1387],
				[871, 1325],
				[662, 1521],
				[795, 1140],
				[1095, 1103],
				[932, 1103],
				[1281, 1103]
			],
			lines: ['AB', 'BC', 'CD', 'DE', 'EF', 'FA', 'AL', 'AJ', 'JK', 'KG', 'GF', 'GI', 'GH'],
			width: 2000,
			height: 2000,
			scale: 0.591,
			regX: 1077,
			regY: 1154,
			rotation: 180,
			homes: [
				[1093, 1398],
				[1178, 1398],
				[1178, 1321],
				[1093, 1321]
			],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[1157, 1819],
					[1054, 1843],
					[975, 1782]
				]
			}, {
				name: 'hidari',
				probability: 35,
				vertexes: [
					[1409, 1728],
					[1519, 1641],
					[1574, 1548]
				]
			}, {
				name: 'migi',
				probability: 30,
				vertexes: [
					[755, 1606],
					[602, 1629],
					[558, 1462]
				]
			}]
		}
	},
	/** - シャケト場 -
	 */
	shaketoba: {
		normal: {
			name: {
				ja: 'シャケト場通常潮',
				en: 'Lost-Outpost-Normal-Tide',
			},
			parks: [
				[1134, 875],
				[1040, 801],
				[903, 912],
				[893, 1142],
				[808, 1112],
				[566, 1228],
				[743, 914],
				[457, 953],
				[545, 749],
				[858, 694],
				[872, 434],
				[988, 322],
				[1060, 640],
				[1160, 517],
				[1265, 682],
				[1492, 657],
				[1422, 764],
				[1232, 868],
				[1397, 905],
				[1260, 1109]
			],
			lines: ['FE', 'ED', 'DT', 'TR', 'TS', 'RS', 'RO', 'OQ', 'QR', 'OP', 'RA', 'AB', 'BC', 'CG', 'GE', 'EH', 'HG', 'HI', 'IJ', 'JG', 'JM', 'MB', 'MO', 'ON', 'LK', 'LN', 'KN', 'KJ', 'NM'],
			width: 2000,
			height: 2000,
			scale: 0.569,
			regX: 957,
			regY: 772,
			rotation: 0,
			homes: [
				[982, 810],
				[982, 854],
				[1040, 854],
				[1040, 810]
			],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[835, 227],
					[984, 269],
					[1120, 267]
				]
			}, {
				name: 'hidari',
				probability: 35,
				vertexes: [
					[471, 731],
					[404, 947],
					[510, 1192]
				]
			}, {
				name: 'migi',
				probability: 30,
				vertexes: [
					[1527, 691],
					[1501, 803],
					[1455, 930]
				]
			}]
		},
		high: {
			name: {
				ja: 'シャケト場満潮',
				en: 'Lost-Outpost-High-Tide',
			},
			excludeParks: ['I', 'H', 'F', 'E', 'D', 'S', 'Q', 'P', 'N', 'L', 'K'],
			'pushedParks': {
				'19': [1199, 1039]
			},
			additionalLines: [],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[924, 566],
					[1032, 568],
					[1127, 568]
				]
			}, {
				name: 'hidari',
				probability: 35,
				vertexes: [
					[684, 731],
					[682, 921],
					[782, 1046]
				]
			}, {
				name: 'migi',
				probability: 30,
				vertexes: [
					[1366, 712],
					[1290, 884],
					[1192, 1109]
				]
			}],
		},
		low: {
			name: {
				ja: 'シャケト場干潮',
				en: 'Lost-Outpost-Low-Tide',
			},
			parks: [
				[1255, 1312],
				[1373, 1322],
				[1488, 1588],
				[1248, 1514],
				[1256, 1695],
				[936, 1616],
				[894, 1446],
				[1038, 1312],
				[1157, 1140],
				[1331, 1159],
				[1265, 1117],
				[890, 1145]
			],
			lines: ['DE', 'DC', 'DB', 'DA', 'DH', 'DF', 'CB', 'BA', 'AH', 'HG', 'GF', 'AJ', 'AI', 'BJ', 'JK', 'KI', 'IH', 'HL', 'HI'],
			width: 2000,
			height: 2000,
			scale: 0.737,
			regX: 1192,
			regY: 1314,
			rotation: 180,
			homes: [
				[1198, 1377],
				[1130, 1377],
				[1130, 1313],
				[1198, 1313]
			],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[1330, 1805],
					[1255, 1806],
					[1198, 1805]
				]
			}, {
				name: 'hidari',
				probability: 30,
				vertexes: [
					[1563, 1666],
					[1520, 1668],
					[1479, 1668]
				]
			}, {
				name: 'migi',
				probability: 35,
				vertexes: [
					[1012, 1802],
					[897, 1798],
					[843, 1798]
				]
			}]
		}
	},
	/** - トキシラズ -
	 */
	tokishirazu: {
		normal: {
			name: {
				ja: 'トキシラズ通常潮',
				en: 'Salmonid-Smokeyard-Normal-Tide',
			},
			parks: [
				[768, 1027],
				[607, 1135],
				[568, 1293],
				[575, 977],
				[481, 910],
				[543, 687],
				[664, 719],
				[758, 669],
				[851, 691],
				[937, 762],
				[1021, 838],
				[1027, 964],
				[894, 1046],
				[960, 1227]
			],
			lines: ['CB', 'BA', 'AM', 'MN', 'ML', 'LK', 'KJ', 'JM', 'JI', 'IH', 'HG', 'GF', 'FE', 'ED', 'GD', 'DB'],
			width: 2000,
			height: 2000,
			scale: 0.777,
			regX: 726,
			regY: 976,
			rotation: 0,
			homes: [
				[757, 1062],
				[667, 1062],
				[667, 965],
				[757, 965]
			],
			spawners: [{
				name: 'hidari',
				probability: 35,
				vertexes: [
					[539, 505],
					[381, 633],
					[385, 897]
				]
			}, {
				name: 'ura',
				probability: 30,
				vertexes: [
					[1127, 1036],
					[951, 1390],
					[541, 1378]
				]
			}, {
				name: 'migi',
				probability: 35,
				vertexes: [
					[1012, 495],
					[1121, 680],
					[1125, 849]
				]
			}]
		},
		high: {
			name: {
				ja: 'トキシラズ通常潮',
				en: 'Salmonid-Smokeyard-High-Tide',
			},
			excludeParks: ['C', 'E', 'F', 'K', 'L', 'N'],
			additionalLines: [],
			spawners: [{
				name: 'hidari',
				probability: 35,
				vertexes: [
					[588, 578],
					[514, 629],
					[535, 734]
				]
			}, {
				name: 'ura',
				probability: 30,
				vertexes: [
					[488, 1051],
					[746, 1196],
					[943, 970]
				]
			}, {
				name: 'migi',
				probability: 35,
				vertexes: [
					[958, 578],
					[1035, 665],
					[1001, 767]
				]
			}],
		},
		low: {
			name: {
				ja: 'トキシラズ干潮',
				en: 'Salmonid-Smokeyard-Low-Tide',
			},
			parks: [
				[1184, 887],
				[1250, 1058],
				[1026, 1077],
				[1429, 1080],
				[1356, 1227],
				[1564, 1154],
				[1614, 1031],
				[1616, 779],
				[1564, 668],
				[1514, 547],
				[1412, 629],
				[1243, 537],
				[1225, 691],
				[1337, 755],
				[1026, 803]
			],
			lines: ['GH', 'HI', 'IJ', 'IK', 'KJ', 'KL', 'KN', 'NM', 'LM', 'MO', 'OC', 'CB', 'BA', 'AN', 'GF', 'FD', 'FE', 'ED', 'DB', 'BE'],
			width: 2000,
			height: 2000,
			scale: 0.777,
			regX: 1267,
			regY: 890,
			rotation: -90,
			homes: [
				[1228, 853],
				[1228, 931],
				[1228, 776],
				[1228, 1008]
			],
			spawners: [{
				name: 'hidari',
				probability: 35,
				vertexes: [
					[1781, 570],
					[1781, 660],
					[1781, 750]
				]
			}, {
				name: 'chuo',
				probability: 30,
				vertexes: [
					[1781, 763],
					[1781, 892],
					[1781, 1021]
				]
			}, {
				name: 'migi',
				probability: 35,
				vertexes: [
					[1781, 1021],
					[1781, 1111],
					[1781, 1201]
				]
			}]
		}
	},
	/** - ポラリス -
	 */
	porarisu: {
		normal: {
			name: {
				ja: 'ポラリス通常潮',
				en: 'Ruins-of-Ark-Polaris-Normal-Tide',
			},
			parks: [
				[962, 731],
				[788, 797],
				[883, 636],
				[918, 507],
				[832, 423],
				[628, 411],
				[628, 639],
				[907, 862],
				[982, 921],
				[880, 1062],
				[684, 836],
				[1223, 918],
				[1428, 932],
				[1428, 718],
				[1235, 833],
				[1228, 654],
				[1152, 590],
				[1341, 502],
				[1299, 317],
				[1111, 313]
			],
			lines: ['TS', 'SR', 'RP', 'PN', 'NM', 'ML', 'LO', 'OP', 'PQ', 'QC', 'CA', 'AO', 'OI', 'IH', 'HA', 'IL', 'IJ', 'JK', 'KB', 'BC', 'BG', 'GF', 'FE', 'ED', 'DC', 'DT', 'QA'],
			width: 2000,
			height: 2000,
			scale: 0.659,
			regX: 1036,
			regY: 755,
			rotation: 0,
			homes: [
				[1106, 707],
				[1015, 707],
				[1015, 791],
				[1106, 791]
			],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[1129, 164],
					[991, 338],
					[888, 335]
				]
			}, {
				name: 'ura',
				probability: 30,
				vertexes: [
					[947, 1105],
					[657, 989],
					[651, 748]
				]
			}, {
				name: 'migi',
				probability: 35,
				vertexes: [
					[1323, 168],
					[1404, 466],
					[1408, 604]
				]
			}]
		},
		high: {
			name: {
				ja: 'ポラリス満潮',
				en: 'Ruins-of-Ark-Polaris-High-Tide',
			},
			excludeParks: ['F', 'E', 'D', 'T', 'S', 'R', 'N', 'M', 'L', 'J', 'K', 'B', 'G'],
			additionalLines: [],
			spawners: [{
				name: 'hidari',
				probability: 35,
				vertexes: [
					[848, 709]
				]
			}, {
				name: 'ura',
				probability: 30,
				vertexes: [
					[1164, 898]
				]
			}, {
				name: 'migi',
				probability: 35,
				vertexes: [
					[1206, 580]
				]
			}],
		},
		low: {
			name: {
				ja: 'ポラリス干潮',
				en: 'Ruins-of-Ark-Polaris-Low-Tide',
			},
			parks: [
				[1168, 1351],
				[935, 1354],
				[1060, 1161],
				[873, 1062],
				[647, 1182],
				[652, 1370],
				[743, 1683],
				[890, 1729],
				[1211, 1692],
				[1428, 1539],
				[1478, 1269],
				[1260, 1031]
			],
			lines: ['LC', 'CD', 'DE', 'EC', 'CB', 'BE', 'EF', 'FG', 'GB', 'GH', 'HI', 'IJ', 'JK', 'KL', 'KA', 'AC', 'AI', 'AB'],
			width: 2000,
			height: 2000,
			scale: 0.584,
			regX: 1090,
			regY: 1260,
			rotation: 180,
			homes: [
				[1024, 1334],
				[1127, 1334],
				[1127, 1240],
				[1024, 1240]
			],
			spawners: [{
				name: 'shomen',
				probability: 35,
				vertexes: [
					[1259, 1798],
					[1036, 1885],
					[813, 1820]
				]
			}, {
				name: 'hidari',
				probability: 35,
				vertexes: [
					[1349, 1798],
					[1536, 1592],
					[1589, 1360]
				]
			}, {
				name: 'migi',
				probability: 30,
				vertexes: [
					[651, 1735],
					[567, 1543],
					[582, 1300]
				]
			}]
		}
	}
};

/** - ブキデータ -
 */
export const WEAPON_DATA = {
	0: { jp: 'ボールドマーカー', en: 'Sploosh-o-matic', range: 16 },
	10: { jp: 'わかばシューター', en: 'Splattershot Jr.', range: 23 },
	20: { jp: 'シャープマーカー', en: 'Splash-o-matic', range: 24 },
	30: { jp: 'プロモデラーMG', en: 'Aerospray MG', range: 23 },
	40: { jp: 'スプラシューター', en: 'Splattershot', range: 26 },
	50: { jp: '.52ガロン', en: '.52 Gal', range: 28 },
	60: { jp: 'N-ZAP85', en: 'N-ZAP \'85', range: 26 },
	70: { jp: 'プライムシューター', en: 'Splattershot Pro', range: 34 },
	80: { jp: '.96ガロン', en: '.96 Gal', range: 34 },
	90: { jp: 'ジェットスイーパー', en: 'Jet Squelcher', range: 44 },
	200: {
		jp: 'ノヴァブラスター', en: 'Luna Blaster', range: 15, blast: 7,
	},
	210: {
		jp: 'ホットブラスター', en: 'Blaster', range: 21, blast: 7,
	},
	220: {
		jp: 'ロングブラスター', en: 'Range Blaster', range: 28, blast: 7,
	},
	230: {
		jp: 'クラッシュブラスター', en: 'Clash Blaster', range: 19, blast: 7,
	},
	240: {
		jp: 'ラピッドブラスター', en: 'Rapid Blaster', range: 31, blast: 7,
	},
	250: {
		jp: 'Rブラスターエリート', en: 'Rapid Blaster Pro', range: 36, blast: 7,
	},
	300: { jp: 'L3リールガン', en: 'L-3 Nozzlenose', range: 30 },
	310: { jp: 'H3リールガン', en: 'H-3 Nozzlenose', range: 34 },
	400: { jp: 'ボトルガイザー', en: 'Squeezer', range: 41 },
	1000: { jp: 'カーボンローラー', en: 'Carbon Roller', range: 16 },
	1010: { jp: 'スプラローラー', en: 'Splat Roller', range: 25 },
	1020: { jp: 'ダイナモローラー', en: 'Dynamo Roller', range: 31 },
	1030: { jp: 'ヴァリアブルローラー', en: 'Flingza Roller', range: 20 },
	1100: { jp: 'パブロ', en: 'Inkbrush', range: 16 },
	1110: { jp: 'ホクサイ', en: 'Octobrush', range: 21 },
	2000: { jp: 'スクイックリンα', en: 'Classic Squiffer', range: 38 },
	2010: { jp: 'スプラチャージャー', en: 'Splat Charger', range: 52 },
	2020: { jp: 'スプラスコープ', en: 'Splatterscope', range: 56 },
	2030: { jp: 'リッター4K', en: 'E-liter 4K', range: 62 },
	2040: { jp: '4Kスコープ', en: 'E-liter 4K Scope', range: 66 },
	2050: { jp: '14式竹筒銃・甲', en: 'Bamboozler 14 Mk I', range: 43 },
	2060: { jp: 'ソイチューバー', en: 'Goo Tuber', range: 42 },
	3000: { jp: 'バケットスロッシャー', en: 'Slosher', range: 30 },
	3010: { jp: 'ヒッセン', en: 'Tri-Slosher', range: 24 },
	3020: {
		jp: 'スクリュースロッシャー', en: 'Sloshing Machine', range: 30, blast: 3,
	},
	3030: {
		jp: 'オーバーフロッシャー', en: 'Bloblobber', range: 39, blast: 11,
	},
	3040: {
		jp: 'エクスプロッシャー', en: 'Explosher', range: 42, blast: 5,
	},
	4000: { jp: 'スプラスピナー', en: 'Mini Splatling', range: 30 },
	4010: { jp: 'バレルスピナー', en: 'Heavy Splatling', range: 42 },
	4020: { jp: 'ハイドラント', en: 'Hydra Splatling', range: 50 },
	4030: { jp: 'クーゲルシュライバー', en: 'Ballpoint Splatling', range: 46 },
	4040: { jp: 'ノーチラス47', en: 'Nautilus 47', range: 36 },
	5000: { jp: 'スパッタリー', en: 'Dapple Dualies', range: 19 },
	5010: { jp: 'スプラマニューバー', en: 'Splat Dualies', range: 26 },
	5020: {
		jp: 'ケルビン525', en: 'Glooga Dualies', range: 31, blast: 4,
	},
	5030: { jp: 'デュアルスイーパー', en: 'Dualie Squelchers', range: 34 },
	5040: { jp: 'クアッドホッパーブラック', en: 'Dark Tetra Dualies', range: 28 },
	6000: { jp: 'パラシェルター', en: 'Splat Brella', range: 26 },
	6010: { jp: 'キャンピングシェルター', en: 'Tenta Brella', range: 32 },
	6020: { jp: 'スパイガジェット', en: 'Undercover Brella', range: 26 },
	7000: { jp: 'クマサン印のブラスター', en: 'Grizzco Blaster', range: 19 },
	7010: { jp: 'クマサン印のシェルター', en: 'Grizzco Brella', range: 26 },
	7020: { jp: 'クマサン印のチャージャー', en: 'Grizzco Charger', range: 62 },
	7030: {
		jp: 'クマサン印のスロッシャー', en: 'Grizzco Slosher', range: 42, blast: 3,
	},
	8000: {
		jp: 'スプラッシュボム', en: 'Bomb', range: 48, blast: 10,
	},
	8010: {
		jp: 'ボムピッチャー', en: 'Bomb Rush', range: 60, blast: 10,
	},
	8020: { jp: 'ジェットパック', en: 'Inkjet', range: 62 },
	8030: { jp: 'スーパーチャクチ', en: 'Splashdown', range: 29 },
	8040: { jp: 'ハイパープレッサー', en: 'Stringray' },
};
