/**
* @新闻天气数据显示
* @author annan#tencent.com
* @time 2012-12-04
* @version v1.0.0
*/
//城市与城市ID对应关系
        Site = {};
        Site.Weather = {
            defaultCity: "01010101",
            city: {
                "北京市": {
                    "_": "01010101",
                    "北京市": "01010101"
                },
                "上海市": {
                    "_": "01012601",
                    "上海市": "01012601"
                },
                "天津市": {
                    "_": "01012901",
                    "天津市": "01012901"
                },
                "重庆市": {
                    "_": "01010401",
                    "重庆市": "01010401"
                },
                "香港": {
                    "_": "01013101",
                    "香港": "01013101"
                },
                "澳门": {
                    "_": "01010301",
                    "澳门": "01010301"
                },
                "台湾省": {
                    "_": "01012801",
                    "台北": "01012801",
                    "高雄": "01012802",
                    "台中": "01012803",
                    "花莲": "01012801",
                    "基隆": "01012801",
                    "嘉义": "01012801",
                    "金门": "01012801",
                    "连江": "01012801",
                    "苗栗": "01012801",
                    "南投": "01012801",
                    "澎湖": "01012801",
                    "屏东": "01012801",
                    "台东": "01012801",
                    "台南": "01012801",
                    "桃园": "01012801",
                    "新竹": "01012801",
                    "宜兰": "01012801",
                    "云林": "01012801",
                    "彰化": "01012801"
                },
                "安徽省": {
                    "_": "01010208",
                    "安庆市": "01010201",
                    "蚌埠市": "01010202",
                    "亳州市": "01010203",
                    "巢湖市": "01010204",
                    "池州市": "01010205",
                    "滁州市": "01010206",
                    "阜阳市": "01010207",
                    "合肥市": "01010208",
                    "淮北市": "01010209",
                    "淮南市": "01010210",
                    "黄山市": "01010211",
                    "六安市": "01010212",
                    "马鞍山市": "01010213",
                    "铜陵市": "01010214",
                    "芜湖市": "01010215",
                    "宿州市": "01010216",
                    "宣城市": "01010217"
                },
                "福建省": {
                    "_": "01010501",
                    "福州市": "01010501",
                    "龙岩市": "01010502",
                    "南平市": "01010503",
                    "宁德市": "01010504",
                    "莆田市": "01010505",
                    "泉州市": "01010506",
                    "三明市": "01010507",
                    "厦门市": "01010508",
                    "漳州市": "01010509"
                },
                "甘肃省": {
                    "_": "01010607",
                    "白银市": "01010601",
                    "定西市": "01010602",
                    "甘南州": "01010603",
                    "嘉峪关市": "01010604",
                    "金昌市": "01010605",
                    "酒泉市": "01010606",
                    "兰州市": "01010607",
                    "临夏市": "01010608",
                    "陇南市": "01010609",
                    "平凉市": "01010610",
                    "庆阳市": "01010611",
                    "天水市": "01010612",
                    "武威市": "01010613",
                    "张掖市": "01010614"
                },
                "广东省": {
                    "_": "01010704",
                    "潮州市": "01010701",
                    "东莞市": "01010702",
                    "佛山市": "01010703",
                    "广州市": "01010704",
                    "河源市": "01010705",
                    "惠州市": "01010706",
                    "江门市": "01010707",
                    "揭阳市": "01010708",
                    "茂名市": "01010709",
                    "梅州市": "01010710",
                    "清远市": "01010711",
                    "汕头市": "01010712",
                    "汕尾市": "01010713",
                    "韶关市": "01010714",
                    "深圳市": "01010715",
                    "阳江市": "01010716",
                    "云浮市": "01010717",
                    "湛江市": "01010718",
                    "肇庆市": "01010719",
                    "中山市": "01010720",
                    "珠海市": "01010721"
                },
                "广西": {
                    "_": "01010811",
                    "百色市": "01010801",
                    "北海市": "01010802",
                    "崇左市": "01010803",
                    "防城港市": "01010804",
                    "贵港市": "01010805",
                    "桂林市": "01010806",
                    "河池市": "01010807",
                    "贺州市": "01010808",
                    "来宾市": "01010809",
                    "柳州市": "01010810",
                    "南宁市": "01010811",
                    "钦州市": "01010812",
                    "梧州市": "01010813",
                    "玉林市": "01010814"
                },
                "贵州省": {
                    "_": "01010903",
                    "安顺市": "01010901",
                    "毕节地区": "01010902",
                    "贵阳市": "01010903",
                    "六盘水市": "01010904",
                    "黔东南州": "01010905",
                    "黔南州": "01010906",
                    "黔西南州": "01010907",
                    "铜仁地区": "01010908",
                    "遵义市": "01010909"
                },
                "海南省": {
                    "_": "01011008",
                    "澄迈市": "01011004",
                    "儋州市": "01011005",
                    "东方市": "01011007",
                    "海口市": "01011008",
                    "琼海市": "01011012",
                    "三亚市": "01011014",
                    "屯昌县": "01011015",
                    "万宁市": "01011016",
                    "文昌市": "01011017",
                    "五指山市": "01011018"
                },
                "河北省": {
                    "_": "01011108",
                    "保定市": "01011101",
                    "沧州市": "01011102",
                    "承德市": "01011103",
                    "邯郸市": "01011104",
                    "衡水市": "01011105",
                    "廊坊市": "01011106",
                    "秦皇岛市": "01011107",
                    "石家庄市": "01011108",
                    "唐山市": "01011109",
                    "邢台市": "01011110",
                    "张家口市": "01011111"
                },
                "河南省": {
                    "_": "01011216",
                    "安阳市": "01011201",
                    "鹤壁市": "01011202",
                    "焦作市": "01011203",
                    "开封市": "01011204",
                    "洛阳市": "01011206",
                    "漯河市": "01011205",
                    "南阳市": "01011207",
                    "平顶山市": "01011208",
                    "濮阳市": "01011209",
                    "三门峡市": "01011210",
                    "商丘市": "01011211",
                    "济源市": "0101121201",
                    "新乡市": "01011213",
                    "信阳市": "01011214",
                    "许昌市": "01011215",
                    "郑州市": "01011216",
                    "周口市": "01011217",
                    "驻马店市": "01011218"
                },
                "黑龙江省": {
                    "_": "01011303",
                    "大庆市": "01011301",
                    "大兴安岭地区": "01011302",
                    "哈尔滨市": "01011303",
                    "鹤岗市": "01011304",
                    "黑河市": "01011305",
                    "鸡西市": "01011306",
                    "佳木斯市": "01011307",
                    "牡丹江市": "01011308",
                    "齐齐哈尔市": "01011309",
                    "七台河市": "01011310",
                    "双鸭山市": "01011311",
                    "绥化市": "01011312",
                    "伊春市": "01011313"
                },
                "湖北省": {
                    "_": "01011410",
                    "鄂州市": "01011401",
                    "恩施州": "01011402",
                    "黄冈市": "01011403",
                    "黄石市": "01011404",
                    "荆门市": "01011405",
                    "荆州市": "01011406",
                    "潜江市": "0101140701",
                    "神农架林区": "0101140702",
                    "十堰市": "01011408",
                    "随州市": "01011409",
                    "武汉市": "01011410",
                    "天门市": "0101140703",
                    "仙桃市": "0101140704",
                    "咸宁市": "01011411",
                    "襄樊市": "01011412",
                    "孝感市": "01011413",
                    "宜昌市": "01011414"
                },
                "湖南省": {
                    "_": "01011502",
                    "常德市": "01011501",
                    "长沙市": "01011502",
                    "郴州市": "01011503",
                    "衡阳市": "01011504",
                    "怀化市": "01011505",
                    "娄底市": "01011506",
                    "邵阳市": "01011507",
                    "湘潭市": "01011508",
                    "湘西州": "01011509",
                    "益阳市": "01011510",
                    "永州市": "01011511",
                    "岳阳市": "01011512",
                    "张家界市": "01011513",
                    "株洲市": "01011514"
                },
                "吉林省": {
                    "_": "01011603",
                    "白城市": "01011601",
                    "白山市": "01011602",
                    "长春市": "01011603",
                    "吉林市": "01011604",
                    "辽源市": "01011605",
                    "四平市": "01011606",
                    "松原市": "01011607",
                    "通化市": "01011608",
                    "延边州": "01011609"
                },
                "江苏省": {
                    "_": "01011704",
                    "常州市": "01011701",
                    "淮安市": "01011702",
                    "连云港市": "01011703",
                    "南京市": "01011704",
                    "南通市": "01011705",
                    "苏州市": "01011706",
                    "宿迁市": "01011707",
                    "泰州市": "01011708",
                    "无锡市": "01011709",
                    "徐州市": "01011710",
                    "盐城市": "01011711",
                    "扬州市": "01011712",
                    "镇江市": "01011713"
                },
                "江西省": {
                    "_": "01011806",
                    "抚州市": "01011801",
                    "吉安市": "01011803",
                    "赣州市": "01011802",
                    "景德镇市": "01011804",
                    "九江市": "01011805",
                    "南昌市": "01011806",
                    "萍乡市": "01011807",
                    "上饶市": "01011808",
                    "新余市": "01011809",
                    "宜春市": "01011810",
                    "鹰潭市": "01011811"
                },
                "辽宁省": {
                    "_": "01011912",
                    "鞍山市": "01011901",
                    "本溪市": "01011902",
                    "朝阳市": "01011903",
                    "大连市": "01011904",
                    "丹东市": "01011905",
                    "抚顺市": "01011906",
                    "阜新市": "01011907",
                    "葫芦岛市": "01011908",
                    "锦州市": "01011909",
                    "辽阳市": "01011910",
                    "盘锦市": "01011911",
                    "沈阳市": "01011912",
                    "铁岭市": "01011913",
                    "营口市": "01011914"
                },
                "内蒙古": {
                    "_": "01012004",
                    "包头市": "01012001",
                    "赤峰市": "01012002",
                    "鄂尔多斯市": "01012003",
                    "呼和浩特市": "01012004",
                    "呼伦贝尔市": "01012005",
                    "通辽市": "01012006",
                    "乌海市": "01012007",
                    "阿拉善盟": "01012008",
                    "锡林郭勒盟": "01012009",
                    "兴安盟": "01012010",
                    "巴彦淖尔市": "01012011",
                    "乌兰察布市": "01012012"
                },
                "宁夏": {
                    "_": "01012104",
                    "固原市": "01012101",
                    "石嘴山市": "01012102",
                    "吴忠市": "01012103",
                    "银川市": "01012104",
                    "中卫市": "01012105"
                },
                "青海": {
                    "_": "01012207",
                    "果洛州": "01012201",
                    "海东地区": "01012202",
                    "海西州": "01012203",
                    "海北州": "01012204",
                    "海南州": "01012205",
                    "黄南州": "01012206",
                    "西宁市": "01012207",
                    "玉树州": "01012208"
                },
                "山东省": {
                    "_": "01012305",
                    "济南市": "01012305",
                    "滨州市": "01012301",
                    "德州市": "01012302",
                    "东营市": "01012303",
                    "菏泽市": "01012304",
                    "济宁市": "01012306",
                    "莱芜市": "01012307",
                    "聊城市": "01012308",
                    "临沂市": "01012309",
                    "青岛市": "01012310",
                    "日照市": "01012311",
                    "泰安市": "01012312",
                    "威海市": "01012313",
                    "潍坊市": "01012314",
                    "烟台市": "01012315",
                    "枣庄市": "01012316",
                    "淄博市": "01012317"
                },
                "山西省": {
                    "_": "01012408",
                    "长治市": "01012401",
                    "大同市": "01012402",
                    "晋城市": "01012403",
                    "晋中市": "01012404",
                    "临汾市": "01012405",
                    "吕梁市": "01012406",
                    "朔州市": "01012407",
                    "太原市": "01012408",
                    "忻州市": "01012409",
                    "阳泉市": "01012410",
                    "运城市": "01012411"
                },
                "陕西省": {
                    "_": "01012507",
                    "安康市": "01012501",
                    "宝鸡市": "01012502",
                    "汉中市": "01012503",
                    "商洛市": "01012504",
                    "铜川市": "01012505",
                    "渭南市": "01012506",
                    "西安市": "01012507",
                    "咸阳市": "01012508",
                    "延安市": "01012509",
                    "榆林市": "01012510"
                },
                "四川省": {
                    "_": "01012703",
                    "阿坝州": "01012701",
                    "巴中市": "01012702",
                    "成都市": "01012703",
                    "达州市": "01012704",
                    "德阳市": "01012705",
                    "甘孜州": "01012706",
                    "广安市": "01012707",
                    "广元市": "01012708",
                    "乐山市": "01012709",
                    "凉山州": "01012710",
                    "泸州市": "01012711",
                    "眉山市": "01012712",
                    "绵阳市": "01012713",
                    "内江市": "01012715",
                    "南充市": "01012714",
                    "攀枝花市": "01012716",
                    "遂宁市": "01012717",
                    "雅安市": "01012718",
                    "宜宾市": "01012719",
                    "资阳市": "01012720",
                    "自贡市": "01012721"
                },
                "西藏": {
                    "_": "01013003",
                    "阿里地区": "01013001",
                    "昌都地区": "01013002",
                    "拉萨市": "01013003",
                    "林芝地区": "01013004",
                    "那曲地区": "01013005",
                    "日喀则地区": "01013006",
                    "山南地区": "01013007"
                },
                "新疆": {
                    "_": "01013213",
                    "阿克苏地区": "01013201",
                    "阿勒泰地区": "01013202",
                    "巴音郭楞州": "01013203",
                    "博尔塔拉州": "01013204",
                    "昌吉州": "01013205",
                    "哈密地区": "01013206",
                    "和田地区": "01013207",
                    "喀什地区": "01013208",
                    "克拉玛依市": "01013209",
                    "克孜勒苏柯州": "01013210",
                    "塔城地区": "01013211",
                    "吐鲁番地区": "01013212",
                    "乌鲁木齐市": "01013213",
                    "伊犁州": "01013214",
                    "石河子市": "0101321501",
                    "阿拉尔市": "0101321502"
                },
                "云南省": {
                    "_": "01013307",
                    "保山市": "01013301",
                    "楚雄州": "01013302",
                    "大理州": "01013303",
                    "德宏州": "01013304",
                    "迪庆州": "01013305",
                    "红河州": "01013306",
                    "昆明市": "01013307",
                    "丽江市": "01013308",
                    "临沧市": "01013309",
                    "怒江州": "01013310",
                    "曲靖市": "01013312",
                    "思茅市": "01013307",
                    "文山州": "01013313",
                    "西双版纳州": "01013314",
                    "玉溪市": "01013315",
                    "昭通市": "01013316"
                },
                "浙江省": {
                    "_": "01013401",
                    "杭州市": "01013401",
                    "湖州市": "01013402",
                    "嘉兴市": "01013403",
                    "金华市": "01013404",
                    "丽水市": "01013405",
                    "宁波市": "01013406",
                    "衢州市": "01013407",
                    "绍兴市": "01013408",
                    "台州市": "01013409",
                    "温州市": "01013410",
                    "舟山市": "01013411"
                }
            }
        }        
       

        Site.weatherTxt = ['晴', '多云', '阴', '阵雨', '雷阵雨', '雷阵雨并伴有冰雹', '雨夹雪', '小雨', '中雨', '大雨', '暴雨', '大暴雪', '特大暴雪', '阵雪', '小雪', '中雪', '大雪', '暴雪', '雾', '冻雨', '沙尘暴', '小雨-中雨', '中雨-大雨', '大雨-暴雨', '暴雨-大暴雨', '大暴雨-特大暴雨', '小雪-中雪', '中雪-大雪', '大雪-暴雪', '浮尘', '扬沙', '强沙尘暴', '飑', '龙卷风', '弱高吹雪', '轻雾']
       
        Site.weatherimgIco = { 'defaultUrl': '//mat1.gtimg.com/weather/weatherIco/imgIco/', 'ico': [{ 'img': '0.png' }, { 'img': '1.png' }, { 'img': '2.png' }, { 'img': '3.png' }, { 'img': '4.png' }, { 'img': '5.png' }, { 'img': '6.png' }, { 'img': '7.png' }, { 'img': '8.png' }, { 'img': '9.png' }, { 'img': '10.png' }, { 'img': '10.png' }, { 'img': '10.png' }, { 'img': '13.png' }, { 'img': '14.png' }, { 'img': '16.png' }, { 'img': '16.png' }, { 'img': '17.png' }, { 'img': '18.png' }, { 'img': '19.png' }, { 'img': '20.png' }, { 'img': '8.png' }, { 'img': '9.png' }, { 'img': '10.png' }, { 'img': '10.png' }, { 'img': '10.png' }, { 'img': '16.png' }, { 'img': '16.png' }, { 'img': '17.png' }, { 'img': '29.png' }, { 'img': '30.png' }, { 'img': '20.png' }, { 'img': '32.png' }, { 'img': '33.png' }, { 'img': '14.png' }, { 'img': '18.png'}] };
        Site.weatherIcon={
		"00":{ //晴
			"day":"//mat1.gtimg.com/news/newsweather/wIco/sun.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/sunnight.png"
		},
		"01":{ //多云
			"day":"//mat1.gtimg.com/news/newsweather/wIco/cloudy.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/cloudynight.png"
		},
		"02":{ //阴
			"day":"//mat1.gtimg.com/news/newsweather/wIco/overcast.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/cloudynight.png"
		},
		"03":{ //阵雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/rain.sun.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/rain.sun.png"
		},
		"04":{ //雷阵雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/rainstorm.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/rainstorm.png"
		},
		"05":{ //雷阵雨并伴有冰雹
			"day":"//mat1.gtimg.com/news/newsweather/wIco/rainstorm.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/rainstorm.png"
		},
		"06":{ //雨夹雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/sleet.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/sleet.png"
		},
		"07":{ //小雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/drizzle.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/drizzle.png"
		},
		"08":{ //中雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/rainy2.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/rainy2.png"
		},
		"09":{ //大雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/rainy1.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/rainy1.png"
		},
		"10":{ //暴雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/showers.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/showers.png"
		},
		"11":{ //大暴雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png"
		},
		"12":{ //特大暴雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png"
		},
		"13":{ //阵雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snow1.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snow1.png"
		},
		"14":{ //小雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snow1.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snow1.png"
		},
		"15":{ //中雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snow2.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snow2.png"
		},
		"16":{ //大雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png"
		},
		"17":{ //暴雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png"
		},
		"18":{ //雾
			"day":"//mat1.gtimg.com/news/newsweather/wIco/mist.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/mist.png"
		},
		"19":{ //冻雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/sleet.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/sleet.png"
		},
		"20":{ //沙尘暴
			"day":"//mat1.gtimg.com/news/newsweather/wIco/sand.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/sand.png"
		},
		"21":{ //小雨-中雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/drizzle.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/drizzle.png"
		},
		"22":{ //中雨-大雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/rainy2.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/rainy2.png"
		},
		"23":{ //大雨-暴雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/rainy1.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/rainy1.png"
		},
		"24":{ //暴雨-大暴雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/showers.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/showers.png"
		},
		"25":{ //大暴雨-特大暴雨
			"day":"//mat1.gtimg.com/news/newsweather/wIco/showers.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/showers.png"
		},
		"26":{ //小雪-中雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snow1.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snow1.png"
		},
		"27":{ //中雪-大雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snow2.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snow2.png"
		},
		"28":{ //大雪-暴雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snowstorm.png"
		},
		"29":{ //浮尘
			"day":"//mat1.gtimg.com/news/newsweather/wIco/sand.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/sand.png"
		},
		"30":{ //扬沙
			"day":"//mat1.gtimg.com/news/newsweather/wIco/sand.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/sand.png"
		},
		"31":{ //强沙尘暴
			"day":"//mat1.gtimg.com/news/newsweather/wIco/sand.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/sand.png"
		},
		"32":{ //飑
			"day":"//mat1.gtimg.com/news/newsweather/wIco/rainy2.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/rainy2.png"
		},
		"33":{ //龙卷风
			"day":"//mat1.gtimg.com/news/newsweather/wIco/sand.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/sand.png"
		},
		"34":{ //弱高吹雪
			"day":"//mat1.gtimg.com/news/newsweather/wIco/snow2.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/snow2.png"
		},
		"35":{ //轻雾
			"day":"//mat1.gtimg.com/news/newsweather/wIco/mist.png",
			"night":"//mat1.gtimg.com/news/newsweather/wIco/mist.png"
		}
	}
       
        function weatherInfo() { }

        weatherInfo.prototype = {
            //获取准确城市ID
            getCityID: function () {
                var proviceName = IPData[2];
                var cityName = IPData[3];
                //console.log(proviceName,cityName);
                var ciytId = null;
                if ((proviceName != '')) {
                    if (cityName == '' || cityName == '未知') {
                        ciytId = Site.Weather.city[proviceName]['_'];
                    } else {
                        ciytId = Site.Weather.city[proviceName][cityName];
                    }
                } else {
                    ciytId = Site.Weather.defaultCity;
                }
                this.setcookie
                return ciytId;
            },
            //加载js
            loadJs: function (url, charsetMode, jsName, callback) {
                var script = document.createElement('script');
                script.charset = charsetMode;
                script.id = jsName;
                script.src = url;
                script.type = 'text/javascript';
                var head = document.getElementsByTagName('head')[0];
                head.appendChild(script);
                if (script.attachEvent) {
                    script.attachEvent('onreadystatechange', function () {
                        if (script.readyState == 4 || script.readyState == 'complete' || script.readyState == 'loaded') {
                            callback();
                        }
                    });
                } else if (script.addEventListener) {
                    script.addEventListener('load', callback, false)
                }
            },
            //删除js
            removeJs: function (jsName) {
                var script = document.getElementById(jsName);
                var head = document.getElementsByTagName('head')[0];
                head.removeChild(script);
            },
            //获取天气信息，例如气温等
            getWeatherInfo: function () {
                var cityId = this.getCityID();
                //console.log(cityId);
                var _url = 'http://weather.gtimg.cn/city/' + cityId + '.js?ref=qqnews';
                var that = this;

                this.loadJs(_url, 'gb2312', 'weatherJs', function () {
                    var wInfo = __weather_city;
                    //console.log(wInfo);
                    if (document.getElementById('wCity') != null) {
                        document.getElementById('wCity').innerHTML = wInfo.bi_name;
                    }

                    if (document.getElementById('wTp') != null) {
                        document.getElementById('wTp').innerHTML = wInfo.sk_tp + '℃';
                    }
                    var imgIco = Site.weatherIcon[wInfo.sk_wt].day;
					if((wTime.currentHours<4)||(wTime.currentHours>=20)){
						imgIco = Site.weatherIcon[wInfo.sk_wt].night;
					}
					
                    var ie6 = ! -[1, ] && !window.XMLHttpRequest;

                    if (document.getElementById('weatherIco') != null) {
                        if (ie6) {
                            document.getElementById('weatherIco').style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + imgIco + '" ,sizingMethod="noscale")';
                        } else {
                            document.getElementById('weatherIco').innerHTML = '<img src="' + imgIco + '" /> ';
                        }
                    }
                    that.removeJs('weatherJs');
                });
            }
        }
        weatherInfo.prototype.getWeatherInfo();/*  |xGv00|9b60428ecffbe02e1cf55565c87f0112 */