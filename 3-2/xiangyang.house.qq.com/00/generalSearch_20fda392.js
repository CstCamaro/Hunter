var generalSearch = {
	init: function(){
		var locationUrl = window.location.href.toString().toLowerCase();
		var locationDomain = "http://xiangyang.house.qq.com";
		var headurl_0,headurl;
		if( !/xiangyang.house.qq.com/.test(locationUrl) ){
			jQuery("a.headurl").each(function(idx,ele){
				headurl_0 = jQuery(ele).attr("href");
				headurl = locationDomain + headurl_0;
				jQuery(ele).attr("href",headurl);
			});
		}
		this.bind();
	},
	bind: function(){
		//头部搜索绑定
		var _generalSearchSelf = this;
		jQuery("#generalSearch_select").bind("click", function(){
			if(jQuery("#generalSearch_select_list").css("display")=="none"){
				jQuery("#generalSearch_select_list").show();
				jQuery("#generalSearch_select_list").on("mouseleave", function(){jQuery(this).hide();});
			}else{			
				jQuery("#generalSearch_select_list").hide();
			}
		});
		jQuery("#generalSearch_select_list").bind("click", function(e){
			if(e.target.tagName != "LI" && e.target.tagName != "A"){return;}
			var select_text = jQuery(e.target).text();
			var select_sort = "";
			if( select_text == "楼盘" ){
				select_sort = "house";
				jQuery("#generalLp_keyword").show();
				jQuery("#generalSearch_keyword").hide();
			}else if( select_text == "新闻" ){
				select_sort = "news";
				jQuery("#generalLp_keyword").hide();
				jQuery("#generalSearch_keyword").show();
			}
			jQuery("#generalSearch_select").text(select_text);
			jQuery("#generalSearch_select").attr("value",select_sort);
			jQuery(this).hide();
		});
		var search_keyword_oldValue = jQuery("#generalLp_keyword").attr("oldval");
		jQuery("#generalSearch_keyword").bind("keydown", function(e){
			//jQuery(this).addClass("generalSearch-input-active");
			if( e.which == "13" ){
				_generalSearchSelf.searchSubmit();
				return false;
			}
		});
		jQuery("#generalLp_keyword").bind("keydown", function(e){
			//jQuery(this).addClass("generalSearch-input-active");
			if( e.which == "13" ){
				_generalSearchSelf.searchSubmit();
				return false;
			}
		});
		jQuery("#generalLp_keyword").bind("focus", function(){
			if( jQuery(this).val() == search_keyword_oldValue ){
				jQuery(this).val("");
			}
			jQuery(this).addClass("generalSearch-input-active");
		});
		jQuery("#generalLp_keyword").bind("blur", function(){
			if( jQuery(this).val() == "" ){
				jQuery(this).val(search_keyword_oldValue);
				jQuery(this).removeClass("generalSearch-input-active");
			}
		});
		jQuery(".generalSearch-submit input").bind("click", function(){
			_generalSearchSelf.searchSubmit();
			return false;
		});
	},
	searchSubmit: function(){
		var site_info = "";
		var site_domain = "";
		var _city = 3066;
		if( jQuery.cookie("ifh_site") ){
			site_info = jQuery.cookie("ifh_site").split(",");
			site_domain = site_info[1] == "" ? "" : site_info[1] + ".";
			_city = site_info[0];
		}
		var sort = jQuery("#generalSearch_select").attr("value"); //获取搜索类
		var kw = jQuery.trim(jQuery("#generalSearch_keyword").val()).replace(/\s{1,}/g,"_");
		var kw_lp = jQuery.trim(jQuery("#generalLp_keyword").val()).replace(/\s{1,}/g,"_");
		if( sort == "house" ){
			if( kw_lp != "" ){
				window.open('http://'+site_domain+'xiangyang.house.qq.com/sale/search/' + _city + '/_/_/0_0_0_0_0_0_0_0_0_0_0_0_0_0.shtml?keyword='+encodeURIComponent(kw_lp));
			}else{
				window.open('http://'+site_domain+'xiangyang.house.qq.com/sale/search/' + _city + '/_/_/0_0_0_0_0_0_0_0_0_0_0_0_0_0.shtml');
			}
		}else if( sort == "news" ){
			var _url = 'http://search.ifeng.com/sofeng/search.action?q=' + encodeURIComponent(kw) + '&c=1';
			var newwin = window.open(_url,'win');
		}
	}
};
generalSearch.init();
