function html_decode(str)  
{  
	var s = "";  
	if (str.length == 0) return "";  
	s = str.replace(/&amp;/g, "&");   //2 
	s = s.replace(/&lt;/g, "<");  
	s = s.replace(/&gt;/g, ">");  
	s = s.replace(/&nbsp;/g, "");  
	s = s.replace(/&#39;/g, "\'");  
	s = s.replace(/&quot;/g, "\"");  
	s = s.replace(/<br>/g,"\n");  
  	return s;  
} 

//数据列表radio
$(".ico_radio_normal").click(function() {
	$(this).toggleClass("current");
});

// 新建应用  选中状态获取
$(".manage_scroll_list li ").click(function() {
	$(this).toggleClass("scroll_list_current");
});

// 侧栏三级菜单


$("#sideThree .side_category, #sideThree .side_category_sub").click(function(e) {
	var _this = $(e.target);
	var _siblingAnchor = _this.parent().siblings().children('.side_category');
	var _siblingCategory = _this.parent().siblings().children('.side_cate_sub');
	if (_this.siblings().children().length) {
		_siblingAnchor.removeClass('current').removeClass('scroll_list_current');
		_siblingCategory.slideUp(300);
		$(this).toggleClass("scroll_list_current");
		if ($(this).hasClass('current')) {
			$(this).removeClass("current");
			$(this).next(".side_cate_sub").slideUp(300);
		} else {
			$(this).addClass("current");
			$(this).next(".side_cate_sub").slideDown(300);
		}
	}
});

	
$("#sideThree .side_category").each(function(){
	if ( $(this).hasClass("current") ) {
		$(this).next(".side_cate_sub").css("display","block");
	}else{
		$(this).next(".side_cate_sub").css("display","none");
	};
});


$(".side_cate_warp > li").each(function() {

	if ($(this).has("li").length > 0) {

		$(this).find("i").show();
	} else {

		$(this).find("i").hide();
	}
})
$(".help_cont .side_category .dir").hide();
// 返回顶部
$(function() {
	var min_height = 200;

	$('.nav li').on('click', function() {
		$(this).addClass('current').siblings().removeClass('current');
	});

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > min_height) {
			$(".gototop").fadeIn(100);
		} else {
			$(".gototop").fadeOut(200);
		};
	});

	$('.gototop').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 400);
	});
});

// 弹层公共
$(function() {

	$(".mod_select_box").on('click', function(event){
		event.stopPropagation();

		var $this = $(this).find(".mod_select_drop");
		if ( $this.is(":hidden")) {
			$this.show();
			$this.parents(".mod_mag_table tr").siblings("tr").find(".mod_select_drop").hide();
		}else{
			$this.hide();
		};

		$this.find(".cont_row").hover(function() {
			$(this).addClass('hover')
		}, function() {
			$(this).removeClass('hover')
		});

	});

	$('.mod_select_drop').on('click', function(e) {
		e.stopPropagation()

		var target = e.target;

		var $liItem = null;

		if(target.nodeName.toLowerCase() === 'span') {
			$liItem = $(target).closest('li')
		} else if(target.nodeName.toLowerCase() === 'li') {
			$liItem = $(target)
		}

		if($liItem.hasClass('cont_title')) {
			return;
		}

		var val1 = $liItem.find('.data_1').text();
		var val2 = $liItem.find('.data_2').text();
		var val3 = $liItem.find('.data_3').text();

		//console.log(val1, val2, val3)

		var $thisTr = $liItem.closest('tr');

		$thisTr.find('.data_row_1').text(val1)
		$thisTr.find('.data_row_2').text(val2)
		$thisTr.find('.data_row_3').text(val3)

		$(this).hide()

	});

	$(document).click(function(){	
		$('.mod_select_drop').hide();							  
	});

});

$("#join_us").click(function() {
	$(this).parent().find("iframe").remove();
	$(this).parent().append("<iframe src='https://shang.qq.com/wpa/qunwpa?idkey=48b07622c3e15117ded5769cdb9b3bcd1b7a0eaa816d27337851af8948b3e69d' height='1px' width='1px'></iframe>");
});

$(".mod_container_title .contact_qq").click(function() {
	$(this).parent().find("iframe").remove();
	$(this).parent().append("<iframe src='https://shang.qq.com/wpa/qunwpa?idkey=48b07622c3e15117ded5769cdb9b3bcd1b7a0eaa816d27337851af8948b3e69d' height='1px' width='1px'></iframe>");
});

$(".manage_success_btn .contact_qq").click(function() {
	$(this).parent().find("iframe").remove();
	$(this).parent().append("<iframe src='https://shang.qq.com/wpa/qunwpa?idkey=48b07622c3e15117ded5769cdb9b3bcd1b7a0eaa816d27337851af8948b3e69d' height='1px' width='1px'></iframe>");
});