$(function () {
	/*头部导航*/
	$("#t_nav a").click(function () {
		$("#t_nav a").removeClass("active");
		$(this).addClass("active");

		$('html, body').animate({
			scrollTop: $("#"+$(this).parent().attr("class")).offset().top - 88
		},"slow");
	});

	/*头部图片切换*/
	var a_pic_lis = $("#carousel_box .c_pics_list li"),
		pic_timer = null,
		pic_iCur = 1;
	
	function changePic(index){
		a_pic_lis.fadeOut(1000).eq(index).fadeIn( "1000" );
		$("#carousel_box .c_menu_list li").removeClass("act").eq(index).addClass("act");
	}
	
	$("#carousel_box .c_menu_list a").each(function (i) {
		$(this).mouseover(function (){
			if (pic_timer) {clearInterval(pic_timer)}
			if (pic_iCur == (i + 1)) {
				return false;
			}
			pic_iCur = i;
			changePic(i);
		}).mouseout(function () {
			pic_iCur += 1;
			pic_timer = setInterval(function() {
			if (pic_iCur == a_pic_lis.length) {
				pic_iCur = 0;
			}
			changePic(pic_iCur);
		}, 4000);
		});
	});

	pic_timer = setInterval(function() {
		if (pic_iCur == a_pic_lis.length) {
			pic_iCur = 0;
		}
		changePic(pic_iCur++);
	}, 4000);
	
	/*手风琴*/
	var ac_hv = $("#accordion .ac_hv"),
		ac_con = $("#accordion .ac_con"),
		ac_li = $("#accordion li"),
		ac_i = 0,
		ac_timer = null;
	
	ac_hv.each(function (i) {
		$(this).mouseenter(function () {
			var _this = this;
			if (ac_timer) {clearTimeout(ac_timer)}	
			
			ac_timer = setTimeout(function () {
				$(_this).fadeOut("fast",function () {
					ac_li.eq(i).animate({"width":"716px"},"fast",function () {});
					ac_con.eq(i).fadeIn("fast");
					ac_li.eq(ac_i).animate({"width":"112px"},"fast");
					ac_hv.eq(ac_i).fadeIn("fast");
					ac_con.eq(ac_i).fadeOut("fast",function() {
						ac_i = i;
					});
				});
			}, 300);
		});
	});
	
	/*设计故事*/
	//绑定hover事件
	$(".step_list a:lt(2)").each(function (i){
		$(this).on("mouseover", function (){
			$(".step_list a:lt(2)").removeClass("act").eq(i).addClass("act");
			$("#d_step_ul li").hide().eq(i).show();
		});
	});


	/* tab 切换 */
	function Tab(o){
		this.menu = o.menu;
		this.tab_cons = o.cons;
		this.act = o.act || "active";
		this.type = o.type || "click";
		//this.iCur = 0;
		var _this = this;
		o.menu.each(function (i) {
			$(this).on(_this.type, function () {
				_this.menu.removeClass(_this.act).eq(i).addClass(_this.act);
				_this.tab_cons.hide().eq(i).show();
			});
		});
	}


	/*产品设计*/
	var p_tab = new Tab({
		"menu": $("#product .tab_menu_box li"),
		"cons": $("#product .tab_con_box")
	});


	/*大山印象*/
	var i_tab = new Tab({
		"menu": $("#impress .tab_menu_box li.able"),
		"cons": $("#impress .tab_con_box")
	});

	var pic_tab_1 = new Tab({
		"menu": $("#pic_tab_1 .tab_menu_pic a"),
		"cons": $("#pic_tab_1 .pic_show"),
		"type": "mouseover"
	});
	var pic_tab_2 = new Tab({
		"menu": $("#pic_tab_2 .tab_menu_pic a"),
		"cons": $("#pic_tab_2 .pic_show"),
		"type": "mouseover"
	});
	var pic_tab_3 = new Tab({
		"menu": $("#pic_tab_3 .tab_menu_pic a"),
		"cons": $("#pic_tab_3 .pic_show"),
		"type": "mouseover"
	});
	
	//大图展示
	$(".pic_show li a[rel]").overlay({
        mask: '#000',
        startOpacity: 0.8,
       	onBeforeLoad: function() {
			var wrap = this.getOverlay().find(".contentWrap"),
				$img_box = wrap.find("img_box"),
				$img = wrap.find("img");

			function setWH(w,h) {
				var _w = 0;
				
				if (h >= 800) {
					_w = w * 800 / h; 
				} else {
					_w = w;
				}
				$("#overlay .close").css({"right":(1000-_w)/2});
				$("#overlay .img_box").css({"width":_w,"margin-left":-_w/2});
			}
	 		
			var imgLoad = function (url) {
				var img = new Image();
				img.src = url;
				if (img.complete) {
					setWH(img.width,img.height);
				} else {
					img.onload = function () {
						setWH(img.width,img.height);
						img.onload = null;
					}
				}
			};
 			
            // grab wrapper element inside content
			imgLoad(this.getTrigger().attr("href"));
			$img.attr("src",this.getTrigger().attr("href"));
            $img.show();
    	}
    });
	jQuery.tools.expose.conf.startOpacity = 0.8;
	var img_index = 0;
	
	$(".pic_show li a").each(function (i) {
		$(this).bind("click", function () {
			img_index = i;
		});
	});

	$("#overlay .left_arr").bind("click", function() {
		$("#exposeMask").hide();
		img_index--;
		if (img_index < 0) {
			img_index = $(".pic_show li a").length - 1;
		}
		$(".pic_show li a").eq(img_index).overlay().load();
	});
	
	$("#overlay .right_arr").bind("click", function() {
		
		$("#exposeMask").hide();
		img_index++;
		if (img_index == $(".pic_show li a").length) {
			img_index = 0;
		}
		
		$(".pic_show li a").eq(img_index).overlay().load();
	});
	
	/*产品设计*/
	//产品绑定hover效果
	/*
	$(".product_list li").mouseenter(function () {
		$(this).addClass("hover");
	}).mouseleave(function (){
		$(this).removeClass("hover");
	});
	*/
	
	/* 背景移动 */
	function MoveBk(root) {
		if ( root.offset().top + $('.top_bar').height() > $(window).scrollTop() && 
			$(window).scrollTop() + $(window).height() > root.offset().top) {
			
			var i_lay_y = Math.round(($(window).scrollTop() + $(window).height() - root.offset().top) * (root.find("img").height() - root.height()) / ($(window).height()+ root.height()));	
			
			root.find("img").css({"top" : -i_lay_y});
		}
	}

	$(window).scroll(function () {
		
		var mb1 = new MoveBk($("#lay1")),
			mb2 = new MoveBk($("#lay2"));
	});
});/*  |xGv00|28aa0c7a492b769262be8f9e1d147c0f */