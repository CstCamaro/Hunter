/*动态加载作品集*/
	function DynamicLoad (options) {
		this.con = options.con;
		this.load = options.load;
		this.type = options.type || 0;
		this.cells = options.cells || 4;
		this.width = options.width || 238;
		this.wSpace = options.wSpace || 13;
		this.hSpace = options.hSpace || 12;
		this.intro = options.intro || 110;
		this.picWidth = options.picWidth;
		this.picHeight = options.picHeight;
		this.errRange = options.errRange || 2;
		this.outerWidth = this.width + this.wSpace + this.errRange;
		this.sUrl = options.sUrl || 'http://www.wookmark.com/api/json/popular?callback=?';
		this.arrT = [];
		this.arrL = [];
		this.iPage = 0;
		this.iBtn = true;

		var _this = this;

		for (var i = 0; i < this.cells; i++) {
			this.arrT[i] = 0;
			this.arrL[i] = this.outerWidth * i;
		}

		this.getData();

		/*
		$(window).on('scroll', function() {
			var _index = _this.getMin();
				_iH = $(window).scrollTop() + $(window).innerHeight();

			if (_this.arrT[_index] + 50 < _iH) {
				_this.getData();
			}
		});*/
	}

	DynamicLoad.prototype.getData = function () {
		var _this = this;

		if (!this.iBtn) {return;}
		this.iBtn = false;
		this.iPage++;

		$.getJSON(this.sUrl, {page: _this.iPage}, function(jData) {
			_this.load.show();
			$.each(jData, function(index, obj) {
				
				var oA = $('<a uid="' + obj.uid + '" zid="' + obj.id + '" rel="#zpj_pop" href="http://www.iconfans.com/html.php?id=' + obj.id + '" class="item_box" target="_blank"><div class="mask">查看详情</div><div class="s_pic"><img /></div><div class="intro_box"><p>' + obj.title + '</p><span class="time"></span></div><div class="user_box cf"><div class="u_pic fl"><img src="' + obj.avat + '"/></div><div class="fl"><p class="u_name">' + obj.username + '</p><p class="u_job">时尚饰品设计师</p></div></div></a>');
				/*
				var oA = $('<a uid="' + obj.uid + '" zid="' + obj.id + '" rel="#zpj_pop" href="javascript:;" class="item_box" target="_blank"><div class="mask">查看详情</div><div class="s_pic"><img /></div><div class="intro_box"><p>' + obj.title + '</p><span class="time"></span></div><div class="user_box cf"><div class="u_pic fl"><img src="' + obj.avat + '"/></div><div class="fl"><p class="u_name">' + obj.username + '</p><p class="u_job">时尚饰品设计师</p></div></div></a>');*/
				var oSImg = oA.find(".s_pic img"),
					iHeight = _this.picHeight || 180,
					_index = _this.getMin();
					
				oA.css({
					width: _this.picWidth,
					height: iHeight + _this.intro,
					left: _this.arrL[_index],
					top: _this.arrT[_index]
				});
				
				oSImg.css({
					width: _this.picWidth,
					height: iHeight
				});

				_this.arrT[_index] += iHeight + _this.intro + _this.hSpace;				
				_this.con.append(oA);

				/*
				oA.overlay({
					mask: '#000',
			        startOpacity: 0.8,
			       	onBeforeLoad: function() {
						var url = "http://www.iconfans.com/event/qqyslp/user.php?uid=2780";
						$.getJSON(url, function(data) {
							alert(data);
						});
				       	
						if (pData) {
							$("#p_user_pic").attr("src", pData.avtar);
							$("#p_user_name").html(pData.username);
							$("#p_user_job").html(pData.job);
							$("#p_user_summary").html(pData.summary);
						}
			    	}
				});
				*/
				
				oA.on("mouseover", function () {
					$(this).addClass("hover");
				}).on("mouseout", function () {
					$(this).removeClass("hover");
				});
				/*.on("click", function () {
					var uid = $(this).attr("uid");
					$.ajax({
						url: "http://www.iconfans.com/event/qqyslp/user.php?uid=" + uid,
						success: function () {
							alert(2);
						}
					});
				});
				*/
				
				
				
				_this.con.css({
					height: _this.arrT[_this.getMax()]
				});

				var objImg = new Image();
				objImg.onload = function () {
					oSImg.attr('src', this.src);
				};

				objImg.src = obj.top_pic;

				setTimeout(function() {
					_this.load.hide();
				}, 1000);

				_this.iBtn = true;
			});
		});
	};

	DynamicLoad.prototype.getMin = function () {
		
		var v = this.arrT[0],
			_index = 0;

		for (var i = 1; i < this.arrT.length; i++) {	
			if (this.arrT[i] < v) {
				v = this.arrT[i];
				_index = i;
			}
		}

		return _index;
	};

	DynamicLoad.prototype.getMax = function () {
		var v = this.arrT[0],
			_index = 0;

		for (var i = 1; i < this.arrT.length; i++) {	
			if (this.arrT[i] > v) {
				v = this.arrT[i];
				_index = i;
			}
		}

		return _index;
	};

	DynamicLoad.prototype.init = function () {
		this.con.html("").css({height: 0});
	};

$(function () {
	var zxlp = new DynamicLoad({
		con: $("#zpj_con"),
		load: $("#zpj_loading"),
		sUrl: "http://www.iconfans.com/event/qqyslp/api.php?callback=?",
		picWidth: 238,
		picHeight: 180
	});

	$(window).on("scroll", function() {
		$("#go_top_btn").show();
	});
	
	$("#go_top_btn").on("click", function() {
		$('html, body').animate({scrollTop:0},"slow");

		setTimeout(function() {
			$("#go_top_btn").hide();
		}, 1000);
	});
});
/*  |xGv00|38bcfc113920805f2f35b68aaf8fe855 */