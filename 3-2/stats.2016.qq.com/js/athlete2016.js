$(function(){
	/*�鿴����*/
	/*(function(){		
		var _more = $(".more[t=openMore]");
		_more.each(function(){
			if(parseInt($(this).prev().outerHeight(true)) > 140){
				$(this).prev().height(130).show();
				$(this).show();
			}else{
				$(this).prev().height(parseInt($(this).prev().outerHeight(true)) - 30).css("margin","0 auto").show();
			}
		});	
		_more.on("mousedown",function(){
			$(this).prev().height("auto").css("margin","0 auto").end().hide();
		});
	})();*/
	

	/*���߼�����*/
	var tool = {
		getData: function (url, callback) {
			var me = this;
			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'jsonp',
				success: function (data) {
					if (data && data.code == 0) {
						callback(data);
					} else {
						alert(data.msg || 'error~~~');
					}
				},
				error: function (data) {
					alert('error~~~');
				}
			});
		},
		render: function (data, source, $node, noCover) {
			if (!data) return;
			var html;
			html = template.compile(source);
			
			if (noCover === undefined) {
				noCover = true;
			}

			$node[noCover ? 'append' : 'html'](html({
				list: data
			}));
		},
		twoDigit: function (v) {
			return parseInt(v, 10) < 10 ? '0' + v : v;
		}
	}

	/*��Ŀ key-value*/
	var dataDiscipline = {
		AR:'���',
		AT:'�ﾶ',
		BD:'��ë��',
		BK:'����',
		BX:'ȭ��',
		CS:'Ƥ��ͧ��������',
		CF:'Ƥ��ͧ��ˮ',
		CB:'BMXС�ֳ�',
		CM:'ɽ�����г�',
		CR:'��·���г�',
		CT:'�������г�',
		EQ:'����',
		FE:'����',
		FB:'����',
		GO:'�߶���',
		GA:'���',
		GR:'�������',
		GT:'�Ĵ�',
		HB:'����',
		HO:'������',
		JU:'���',
		MP:'�ִ�����',
		RO:'��ͧ',
		RU:'7���������',
		SA:'����',
		SH:'���',
		SW:'��Ӿ',
		SY:'������Ӿ',
		DV:'��ˮ',
		WP:'ˮ��',
		TT:'ƹ����',
		TK:'��ȭ��',
		TE:'����',
		TR:'��������',
		VO:'����',
		BV:'ɳ̲����',
		WL:'����',
		WR:'ˤ��',
		OW:'��������Ӿ'
	};

	//domain
	var preDomain = '//ziliaoku.sports.qq.com';

	/*�˶�Ա����*/
	var athData = {
		init: function () {
			var id, url, param, url2;

			id = getQueryString('athlete_id');
			url = preDomain + '/cube/index?cubeId=21&dimId=64&order=t2&from=sportsdatabase&params=';
			url2 = preDomain + '/cube/index?cubeId=40&dimId=92&needArr=1&from=sportsdatabase&params=';

			param = id ? ('t1:' + id) : '';
			url += param;
			url2 += param; //���̽ӿ�

			tool.getData(url, this.handle);
			tool.getData(url2, this.handleMatch);

			this.bindEvent();
		},
		handle: function (data) {
			if (!data || !data.data.olyPlayerInfo) return;

			var time;

			data = data.data.olyPlayerInfo;

			//nation
			data.nation = Nation.data[data.organisation] && Nation.data[data.organisation].cnName;

			//birthDate
			time = data.birthDate.split('-');
			data.birthDate = [time[0], '��', time[1], '��', time[2], '��'].join('');

			//discipline
			data.discipline = dataDiscipline[data.disciplineId];
			athData.render(data);

			//news & video & athlete referred
			card.init();
			hotAthlete.init(data.disciplineId, $("#J_athlete"), 'YDY_xg');
		},
		render: function (data) {
			var src;

			src = ['<div class="pic"><img src="{{if list.logoBig}}{{list.logoBig}}{{else}}http://mat1.gtimg.com/2016stats/images/ydyD.jpg{{/if}}" alt="{{list.cnName}}" width="340px" height="193px"></div>',
						'<div class="text">',
							'<h3>{{list.cnName}}</h3>',
							'<p>������<a class="xm-dis" target="_blank" href="/country/match.htm?state={{list.organisation}}">{{list.nation}}</a><br />���գ�{{list.birthDate}}<br />��ߣ�{{if list.height != 0}}{{list.height}}cm{{else}}-{{/if}}<br />���أ�{{if list.weight != 0}}{{list.weight}}����{{else}}-{{/if}}<br />��Ŀ��<a class="xm-dis" target="_blank" href="/item/data.htm?item_id={{list.disciplineId}}">{{list.discipline}}</a></p>',
						'</div>'].join('');

			//render detail
			tool.render(data, src, $("#J_detail"), false);

			//description
			$("#J_desc").html(data.description || '��������');
			//title
			$("#J_title").html(data.cnName || '�˶�Ա');
			athData.cnName = $.trim(data.cnName);
			//records
			$("#J_record").html(data.records || '��������');
		},
		handleMatch: function (data) {
			if (!data || !data.data.olyPartyUnits) {
				$("#J_match").html('<tr><td>������������</td>');
				return;
			}

			var data, time, item, day, hour;
			data = data.data.olyPartyUnits;

			for (var i = 0, len = data.length; i < len; i++) {
				item = data[i];
				time = item.startTime;
				day = parseInt(time.split(' ')[0].split('-')[2], 10);
				hour = time.split(' ')[1].slice(0, 5);
				item.time = [day, '�� ', hour].join('');
				item.day = day;
				item.hour = parseInt(hour.slice(0, 2), 10);
				item.minute = parseInt(hour.slice(3), 10);

				//disciplineCnName - ��Ŀ
				if (!item.disciplineCnName) {
					item.disciplineCnName = dataDiscipline[item.disciplineId];
				}

				//eventName - С��
				if (!item.eventName) {
					item.eventName = '-';
				}
			}
			
			//sort ������������
			data.sort(function (a, b) {
				var dd = a.day - b.day,
					hd = a.hour - b.hour,
					md = a.minute - b.minute;

				if (dd > 0 || (dd == 0 && hd > 0) || (dd == 0 && hd == 0 && md > 0)) {
					return 1;
				} else if (dd < 0 || (dd == 0 && hd < 0) || (dd == 0 && hd == 0 && md < 0)) {
					return -1;
				} else {
					return 1;
				}
			});

			athData.renderMatch(data);
		},
		renderMatch: function (data) {
			var src, $node;

			$node = $("#J_match");
			src = ['{{each list as item}}',
					'<tr><td class="w1">{{item.time}}</td>',
						'<td class="w2">{{item.disciplineCnName}}</td>',
						'<td class="w3">{{item.eventName}}</td>',
						'<td class="w4">{{item.matchName}}</td></tr>', '{{/each}}'].join('');

			tool.render(data, src, $node, false);
		},
		bindEvent: function () {
			/*��̬��Ƶ�л�*/
			(function(){		
				var _tabBtn = $(".tabMod .hd h2 strong"),
					_tabDT = $(".tabDT"),
					_tabSP = $(".tabSP");
					
				_tabBtn.on("mousedown",function(){
					var $this = $(this), type;

					if(!$this.hasClass("now")){
						_tabBtn.removeClass("now");		
						$this.addClass("now");
						_tabDT.is(":visible") ? _tabDT.hide() : _tabDT.show();
						_tabSP.is(":visible") ? _tabSP.hide() : _tabSP.show();

						type = $this.data('type');
						Boss.cardQ(type);
					}
				});
			})();
		}
	}

	/*��Ƶ & ��̬ҳ��*/
	var card = {
		init: function () {
			this.newsMod();
			// this.videoMod();
		},
		videoData: {
			'��˼��':'1485056',
			'������':'220278',
			'�׽���':'124930',
			'����':'136062',
			'������':'1502798',
			'����':'116695',
			'�ż̿�':'104297',
			'����':'71016',
			'����ϼ':'101185',
			'����':'151501',
			'�⾲��':'222069',
			'�ֵ�':'107697',
			'�ձ���':'1499326',
			'����':'1502799',
			'����':'293036',
			'��ɺɺ':'99543',
			'��':'484149',
			'��˧':'104590',
			'��С��':'1485803',
			'�λ�':'1485696',
			'�����':'104931',
			'����':'1502800',
			'��ѩ��':'1485805',
			'������':'1502801',
			'����ϼ':'223095',
			'������':'1342749',
			'����':'102489',
			'Ҷʫ��':'1485801',
			'������':'115911',
			'��ʫ��':'1502802',
			'������':'155821',
			'��¶':'139835',
			'�潨��':'1506744',
			'̷��':'1506748',
			'����':'225818',
			'���ľ�':'1506755',
			'����Ƽ':'1506758',
			'����':'1506763',
			'����':'1506768',
			'��ǿ':'1506771',
			'�����':'1506774',
			'��ޥ�':'1506776',
			'˾�Ž�':'1506778',
			'ʩ͢�':'1506781',
			'����':'1506783',
			'�°�ɭ':'1506784',
			'�γ�':'1506786',
			'����':'1506788',
			'��ѩ��':'1506789',
			'������':'1506791',
			'��ܰ��':'1506792',
			'��Ц':'1326872',
			'������':'1506797',
			'�����':'1506800',
			'����':'219178',
			'�����':'1506805',
			'����':'149010',
			'�̴���':'1506825',
			'ë��':'1506832',
			'̷��н':'1506835',
			'������':'1506838',
			'�ֳ���':'1506839',
			'�ų���':'1506841',
			'�Ⱥ�':'1506843',
			'�����':'1506844',
			'����':'1506846',
			'�':'1506849',
			'������':'1506855',
			'���':'1506860',
			'����':'1506867',
			'��ϣ�':'1506874',
			'���ͩ':'1506877',
			'�Ⱒ˳':'1506878',
			'������':'1506746',
			'����':'1506751',
			'������':'1506749',
			'������':'1506750',
			'����':'1506753',
			'������':'136852',
			'��갾�':'1506754',
			'������':'1506887',
			'��ޱ':'94500',
			'��־��':'1506883',
			'���ž�':'1506882',
			'����Ȫ':'1506884',
			'ʯ����':'110705',
			'����':'1506886',
			'����÷':'1506881',
			'����':'1506889',
			'��Ǿ':'1506764',
			'��һ�':'1506770',
			'��˧':'1506762',
			'֣����':'1506767',
			'���ܺ�':'1506827',
			'�ܫh':'1506808',
			'�½�':'1506739',
			'������':'339904',
			'����':'1506806',
			'��԰��':'1506793',
			'�ν���':'1506851',
			'������':'1506830',
			'������':'1506871',
			'���Դ':'1506865',
			'����':'1506859',
			'�����':'1506864',
			'������':'1506857',
			'����':'1506814',
			'���׳�':'1506873',
			'������':'1506829',
			'½��':'165072',
			'ë����':'1506856',
			'���Ӱ�':'1506866',
			'�̿�Ԫ':'1506861',
			'����':'1506807',
			'ʷ���':'1506801',
			'������':'1506811',
			'����':'1506799',
			'������':'1506834',
			'��˳':'1506852',
			'��ѩ��':'1506826',
			'��ʩ��':'1506802',
			'���':'1506870',
			'����':'1506803',
			'�����':'1506853',
			'���ӱ�':'1506869',
			'�ھ���':'1506831',
			'�����':'1506863',
			'�����':'1506854',
			'��ܰ��':'1506821',
			'������':'1506823',
			'���꺭':'1506824',
			'����':'1506813',
			'������':'1506810',
			'���λ�':'1506820',
			'������':'1506850',
			'��B':'1506804',
			'����':'1486622',
			'��ɸ�':'1506779',
			'�� �':'1491186',
			'�ŝ|':'1506818',
			'���':'1506840',
			'����':'1506775',
			'����':'1506848',
			'����':'1506741',
			'��ޱޱ':'1506819',
			'��ܰ��':'1506772',
			'�Ծ���':'1506790',
			'�Ծ��':'1506845',
			'��ܿ��':'1506872',
			'���Ӻ�':'1506833',
			'��Τΰ':'1506752',
			'������':'1506858',
			'����':'1506798',
			'���':'1506888',
			'�ξ���':'1506747',
			'������':'99346',
			'���':'1506890',
			'������':'1506759',
			'����':'1506743',
			'��Ӯ':'1506876',
			'����':'1506879',
			'����':'1506769',
			'����':'1506815',
			'���':'1506875',
			'÷Ц��':'1506836',
			'����':'1506761',
			'ţ����':'1506842',
			'�˷ɺ�':'1506757',
			'����':'1506822',
			'����':'1506847',
			'��˼��':'1506868',
			'�ζ���':'1506812',
			'������':'1506809',
			'��Ԩ�s':'1506885',
			'����':'1506777',
			'������':'1506780',
			'�����':'1506828',
			'���Ǻ�':'1506880',
			'����΢':'1506773',
			'�ܶ��':'1506837',
			'�쳿':'1506891',
			'������':'1506893',
			'������':'99855',
			'�����':'1506897',
			'���':'109642',
			'����ε':'1506902',
			'����֥':'1506905',
			'Τ����':'1506908',
			'������':'140588',
			'����':'1506915',
			'����ʲ��':'1506917',
			'�����':'1506921',
			'Ԭ����':'1506922',
			'�ֻ۾�':'132711',
			'������':'1506927',
			'��ˮ��':'1506930',
			'����':'1506933',
			'��ʫӱ':'1506938',
			'����':'1506940',
			'��С��':'1506941',
			'����΢':'1506944',
			'�忨':'1506945',
			'������':'1506947',
			'����':	'1506949',
			'���':'1506951',
			'��С��':'1506953',
			'������':'1506955',
			'������':'1506957',
			'������':'1506959',
			'����':'83817',
			'�����':'1506960',
			'������':'1507037',
			'�Ź�ΰ':'1507038',
			'л�Ŀ�':'1507039',
			'����':'513129',
			'����':'1507041',
			'�¶�':'1485806',
			'������':'1507043',
			'����':'1507045',
			'��˶':'302710',
			'л��ҵ':'464658',
			'Ѧ����':'1507046',
			'Ī��ѩ':'1507047',
			'����':'1507048',
			'������':'1507050',
			'�Ƴ���':'1507051',
			'����':'1507052',
			'������':'1507053',
			'�಼��':'1507054',
			'����ǿ':'1507055',
			'�Ʋ���':'1507056',
			'Ҧ��':'102131',
			'������':'1507058',
			'�����':'1507060',
			'��ΰ':'1507061',
			'����ѧ':'1507062',
			'�ƹ���':'1507063',
			'������':'1507064',
			'�ź�':'1507066',
			'�����':'1507067',
			'������':'1507068',
			'�ƶ���':'1507069',
			'������':'1507070',
			'�Ա���':'1507071',
			'����ʹ':'1507072',
			'����¶':'1507073',
			'Ҧƽ':'1507075',
			'�ֿ���':'1507076',
			'����':'1507077',
			'����':'1507029',
			'����':'1507030',
			'�쳬':'1507031',
			'�س�·':'1507032',
			'����':'1507033',
			'��ƽ��':'1507034',
			'Ѧ����':'1507035',
			'�����':'1507014',
			'����':'1485908',
			'�ֻ���':'1507015',
			'��ӽʫ':'1507016',
			'��һ��':'1507018',
			'��':'1507019',
			'�¼�¶':'1507020',
			'����':'1506997',
			'�º���':'1506998',
			'��ΰ':'1507000',
			'������':'1507001',
			'ʩ����':'1507002',
			'��Խ':  '104413',
			'�⺣��':'96261',
			'��ɼɼ':'1506894',
			'����':'1506895',
			'����ɳ':'1506896',
			'����':'188391',
			'��ɺɺ':'190208',
			'���':'1506898',
			'���':'1506900',
			'��Ӱ':'134598',
			'�߳�':'1506904',
			'�ӷ���':'1506907',
			'����':'976302',
			'������':'155821',
			'��˪':'1506910',
			'Ѧ��':'1506919',
			'������':'223756',
			'̷����':'1506923',
			'¦�ѻ�':'1506925',
			'����':'1506928',
			'����':'1506929',
			'������':'1506931',
			'����ϼ':'1506934',
			'������':'1506936',
			'���':'1506939',
			'������':'1506943',
			'����':'1506946',
			'�½���':'1506950',
			'�����':'1506954',
			'������':'1291684',
			'�����':'1506962',
			'����ѩ':'1506966',
			'����':'109541',
			'�����':'1506968',
			'����':'1506971',
			'��ٻ':'1506972',
			'�Ž���':'1506974',
			'����':'1506975',
			'���Ѽ�':'1506977',
			'ŷ��ϼ':'1506979',
			'����':'1506980',
			'�����':'1506981',
			'��Ӣ�':'1506983',
			'�ϼ':'1506985',
			'��˱�':'1506987',
			'�ž��':'1506990',
			'���ĬB':'1506992',
			'��ӱ':'1506993',
			'κ��':'116931',
			'�·�':'115901',
			'κ��':'493623',
			'�ű��':'1507003',
			'����ѩ':'1507005',
			'������':'1486861',
			'����Ԩ':'1507007',
			'��Խ��':'1507008',
			'����ΰ':'1507010',
			'������':'1507011',
			'��ΰ':'1507012',
			'���Ȼ':'1496163',
			'��ǿ':'1507013',
			'�Ÿ���':'1507017',
			'������':'1507021',
			'���ݷ�':'1507022',
			'���ӳ�':'1507023',
			'�ܻ�':'1507024',
			'�����':'1507025',
			'�����':'1507026',
			'����':'1507027',
			'��ѩ��':'1507028',
			'������':'376019',
			'��ٻ':'1507036',
			'�βӲ�':'1507040',
			'������':'1507044',
			'������':'1507049',
			'ɽ��':'1507057',
			'����':'100960',
			'��ǫѷ':'1507059',
			'�ż���':'1507065',
			'��ΰ':'1507074',
			'������':'1507078',
			'�ڷ���':'1507079'
		},
		newsMod: function () {
			var keyword = athData.cnName;
			tagFall.init(keyword, 'YDY_xw');
		},
		videoMod: function () {
			// ��ѡ��Ƶ
			new Videos('J_hotvideo', this.getVideoUrl('hot'), 'YDY_jx', false, 10);
			// �˶�Ա��Ƶҳ��
			new Videos('J_videos', this.getVideoUrl('athlete'), 'YDY_spy', true, 20);
		},
		getVideoUrl: function (type) {
			var cnName = athData.cnName;
			var base = '//sportlist.video.qq.com/fcgi-bin/list_common_cgi?otype=json&platform=1&version=10000&intfname=web_sports_common_vid_list&tid=502&uappid=20001162&uappkey=9da00e02b727f1cd&type=4&&sourcetype=2&c_category=11184,11185,11186&sort=3&novalue=1';

			if (type == 'hot') {
				return '//i.match.qq.com/pac/olympicvideo?';
			} else if (type = 'athlete') {
				return [base, '&1065=', this.videoData[cnName] || ''].join('');
			} else if (type = 'discipline') {//��Ŀ
				return [base, '&742=', this.videoData[cnName] || ''].join('');
			}
		}
	}

	/*ͳ��*/
	var Boss = {
		init: function () {
			ExposureBoss(null, 'YDY_xq');
		},
		cardQ: function (type) {
			registerZone2({
				bossZone: type
			}, 'click');
		}
	}

	//nation -> athData -> card
	Nation.get(function () {
		athData.init();
		Boss.init();
	});
});/*  |xGv00|9acdc90406a1c3130818255968b57bfd */