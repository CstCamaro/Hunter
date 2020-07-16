// 抓深度报告和智库分析
var report = {
	startnum: 0, // 显示数量
	endnum: 6,
	analysisId: 43, // 数据调研——智库分析
	chartsId: 117, // 智酷档案
	ztnId: 215, // 智囊团
	initindex: 1, // 初始加载数量
	linkarr: [], // 智库分析
	unlinkarr: [], // 深度报告
	sdbg_sn: 9, // 深度报告初始显示数量
	zkfx_sn: 6, // 智库分析初始显示数量
	sjdyarr: [],
	kfptarr: [],
	homeindex:0,
	getdeepreport: function(endnum, id) {
		var me = this;
		$.ajax({
			url: '//yc.open.qq.com/ninja/index.php?c=index&a=product&count=' + endnum + '&columnId=' + id + '&start=0&format=js',
			type: 'GET',
			dataType: 'jsonp',
			success: function(data) {
				for (var i = 0; i < data.length; i++) {
					var islinkart = data[i].n_externaldata;
					var imgurl = data[i].n_image;
					if (islinkart == 0 && imgurl) {
						me.linkarr.push(data[i])
					} else if (islinkart == 1) {
						me.unlinkarr.push(data[i])
					}

				}
			
				me.pushfirsdbg(me.unlinkarr,0); // 首页抓第一条战略档案；
				me.pushfirsdbg(me.sjdyarr,1); // 首页抓第一条数据调研；
				me.pushfirsdbg(me.linkarr,1); // 首页抓第一条智酷分析；
				me.pushfirsdbg(me.kfptarr,1); // 首页抓第一条开放平台；
								
				
				
				
				report.eachStr('#zkfx ul'); //智库分析
				report.eachStr('#sdbg ul'); //深度报告
				me.qishu();
			}
		})
	},
	eachStr: function(target, clickmore) {
		var me = this;
		$(target).parent().attr({
			'data-num': 1
		});
		$(target).html("");
		me.jsondata(target);
		// 加载更多 	
	},
	renderclick: function(target) {
		var me = this;
		$(target).parent().find('.getmore').on('click', function() {
			if ($(window).scrollTop() > 200) {
				var me = this;
				render.scrolltop();
			}
			var _num = $(target).parent().attr("data-num");
			_num++;
			$(target).parent().attr({
				"data-num": _num
			});
			report.jsondata(target);
		})
	},
	jsondata: function(target) {
		var me = this;
		var data, _allnum;
		var str = '';
		var _num = $(target).parent().attr("data-num");
		if (target == "#zkfx ul") {
			_allnum = me.sdbg_sn;
			data = me.linkarr;
		} else if (target == "#sdbg ul") {
			_allnum = me.zkfx_sn;
			data = me.unlinkarr;
		}

		var en = _allnum * _num;
		var sn = en - _allnum;

		// 判断是否到最后
		if (en > data.length) {
			en = data.length;
			$(target).parent().find('.getmore').text('No More!').addClass('nomoreart');
		}
		for (var s = sn; s < en; s++) {
			var that = data[s];
			var title = that.n_title,
				summary = that.n_summary,
				url = that.n_url,
				imgurl = that.n_image,
				picurl = that.n_pic,
				mobileurl = that.n_mobile_url,
				shorttitle = that.n_short_title,
				name = that.n_editor.name,
				num = that.n_times,
				header = that.n_editor.header,
				time = that.n_pushtime,
				duty = that.n_editor.duty,
				islinkart = that.n_externalislinkart, // 是否是链接型文章 1是 0否
				tag = that.n_tag,
				keyword = that.n_keyword;


			var pagesnum = tag.split(',');
			var pnum = pagesnum[pagesnum.length - 1]
			if (isNaN(pnum)) {
				pnum = ''
			} else {
				pnum = pnum + "P";
			}
			if (target == '#zkfx ul') {
				str += '<li><a href="' + url + '" target="_blank"><img src="' + imgurl + '" alt="' + title + '">';
				str += '<h2>' + shorttitle + '</h2><p>' + summary + '</p></a></li>'
			}
			if (target == '#sdbg ul' && picurl) {
				str += '<li><a href="' + url + '" class="por" target="_blank"><i></i>';
				str += '<em>' + title + '</em><p>' + summary + '</p><img src="' + picurl + '" alt="' + title + '"></a>'
				str += '<div class="poa">'				
				str += '<div class="s_pagenum"><div class="s_num">Num.' + num + '</div><span>' + pnum + '</span></div></div></li>'
			}
		}

		

		if (!$(target).parent().find("a").hasClass('getmore')) {
			$(target).parent().append('<a class="getmore" href="javascript:;">more</a>');
			me.renderclick(target);
		}
		$(target).append(str);
	},
	getlistContent: function(startnum, endnum, id, target, isclick) {
		var me = this;
		$.ajax({
			url: '//yc.open.qq.com/ninja/index.php?c=index&a=product&count=' + endnum + '&columnId=' + id + '&start=' + startnum + '&format=js',
			type: 'GET',
			dataType: 'jsonp',
			success: function(data) {
				if (!isclick) {
					$(target).html("");
					me.isclick = true;
				}
				$(target).parent().find('.getmore').remove();
				var srt = '';
				// 将开放平台第一条放入数据
				if (target == '#kfpt ul') {
					me.kfptarr.push(data[0]);
				} else if (target == '#sjdy ul') {
					me.sjdyarr.push(data[0]);
				}
				for (var i = 0; i < data.length; i++) {
					var title = data[i].n_title,
						summary = data[i].n_summary,
						url = data[i].n_url,
						imgurl = data[i].n_image,
						mobileurl = data[i].n_mobile_url,
						shorttitle = data[i].n_short_title,
						name = data[i].n_editor.name,
						num = data[i].n_times,
						header = data[i].n_editor.header,
						time = data[i].n_pushtime,
						duty = data[i].n_editor.duty,
						islinkart = data[i].n_externaldata, // 是否是链接型文章 1是 0否
						keyword = data[i].n_keyword;


					if (target == '#sjdy ul') {
						srt += '<li><a href="' + url + '" target="_blank"><img src="' + imgurl + '" alt="' + title + '">';
						srt += '<h2>' + shorttitle + '</h2><p>' + summary + '</p></a></li>';
					} else if (target == '#kfpt ul') {
						srt += '<li><a href="' + url + '" target="_blank"><img src="' + imgurl + '" alt="' + title + '"></a>';
						srt += '<div class="guest"><div class="fl"><img src="' + header + '" alt="' + name + '"></div>';
						srt += '<div class="fr"><h3>' + name + '</h3><p>' + duty + '</p></div></div>';
						srt += '<h2><a href="' + url + '" target="_blank">' + shorttitle + '</a></h2>';
						srt += '<p>' + summary + '<a href="' + url + '" target="_blank">[more]</a></p></li>'
					}


				}

				


				$(target).append(srt).parent().append('<a class="getmore" href="javascript:;">more</a>').attr({
					'data-num': me.initindex
				});

				me.addclick(target, endnum, id) // 加载更多
			},
			error: function(e) {
				$(target).parent().find('.getmore').text('No More!').addClass('nomoreart');
				return false;
			}
		})
	},
	addclick: function(target, endnum, id) {
		render.scrolltop();
		var me = this;
		var _num = $(target).parent().attr("data-num");
		$(target).parent().find('.getmore').on('click', function() {
			report.getlistContent((endnum * _num) + 1, endnum, id, target, true); //深度报告
			_num++;
			me.initindex = _num;

			$(target).parent().attr({
				"data-num": me.initindex
			});

		})
	},
	qishu: function() { //首页添加期数
		var me = this;
		$(".nav_sdbg").find('.pagenum').text(me.unlinkarr[0].n_times) // 深度报告
		$(".nav_sjdy").find('.pagenum').text(me.sjdyarr[0].n_times) // 数据调研
		$(".nav_kfpt").find('.pagenum').text(me.kfptarr[0].n_times) //开放平台
		$(".nav_xxhd").find('.pagenum').text(me.linkarr[0].n_times) //智库分析
	},
	pushfirsdbg: function(arr,num) { //为首页push第一条战略档案内容
		var me = this;		
		getdata = arr[0];
		var str = '';
		str += '<li class="float_'+me.homeindex+'"><div class="fl">';
		if (num == 0) {
			str += '<a target="_blank" href="' + getdata.n_url + '" alt="' + getdata.n_title + '"><img src="http://img1.gtimg.com/tech/pics/hv1/72/217/1835/119376282.png"></a>';
			str += '</div><div class="fr">';
			str += '<h2><a class="dingtubiaoti re_tit" target="_blank" href="' + getdata.n_url + '" alt="' + getdata.n_title + '">' + getdata.n_short_title + '</a></h2>';
			str += '<p class="n_dse">' + getdata.n_summary + '</p>';
			str += '</div></li>';
		}
		else{
			str += '<a target="_blank" href="' + getdata.n_url + '" alt="' + getdata.n_title + '"><img src="'+getdata.n_editor.header+'"></a>';
			str += '</div><div class="fr">';
			str += '<h2 class=""><a class="dingtubiaoti re_tit" target="_blank" href="' + getdata.n_url + '" alt="' + getdata.n_title + '">' + getdata.n_short_title + '</a></h3>';
			if ( getdata.n_editor.duty) {
				str += '<h3 class="n_dse">' + getdata.n_editor.name + '<span>'+ getdata.n_editor.duty +'</span></h3>';
			}
			else{
				str += '<h3 class="n_dse">' + getdata.n_editor.name +'</h3>';	
			}	
			str += '<p>'+getdata.n_pushtime +'</p>'
			str += '</div></li>';
		}
		
		$("#floatjson ul").append(str);
		me.homeindex++;
	},
	checkImgOnload: function(imgurl, title) {
		var me = this;
		var newImg = new Image(); 
		newImg.src = imgurl;
		newImg.onerror = function() {
			imgurl = 'http://img1.gtimg.com/tech/pics/hv1/192/117/1834/119285877.jpg';
		}
		return imgurl;
	}
}
$(function() {
	report.getdeepreport(400, report.analysisId);
	// (起始值，结束值，抓取栏目id，替换栏目节点，判断类型)
	report.getlistContent(0, 9, report.chartsId, '#sjdy ul', false); //数据调研————智库分析
	report.getlistContent(0, 9, report.ztnId, '#kfpt ul', false); //开放平台


})/*  |xGv00|6e6b9a6f3da5d05f3406bb1a17f7fb4d */