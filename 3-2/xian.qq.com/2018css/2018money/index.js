$(function(){
	'use strict';

	var tool = {
		// 设置z-index值
		setZIndex : function(){
			$('.list').find('.item').each(function(index){
				$(this).css('z-index', 1010-index);
			})
			$('.list').find('.Q-tpList, .Q-pList').each(function(index){
				$(this).css('z-index', 500-index);
			})
		},

		loadImg : function( $obj ){
			var $img = $obj.find('img[name=lazy]');

			$img.each(function(){
				var $this = $(this);

				$this.prop('src', $this.attr('_src')).removeAttr('_src');
			})
		},

		// 设置关键词
		setKeywords : function(){
			$('.keywords').each(function(){
				var text = $.trim( $(this).text() ),
					arr = text.split(';'),
					t=arr.length,
					max = t>3 ? 3 : t,
					html = '';

				for(var i=0; i<max; i++){
					var s = $.trim(arr[i]);
					if( s ){
						html += '<a href="http://finance.qq.com/dc_column_article/TagsList.htm?tags='+ encodeURIComponent(s) +'" target="_blank">'+s+'</a>';
					}
				}
				$(this).html( html ).show();
			})
		},

		init : function(){
			this.setZIndex();
			this.setKeywords();
		}
	}

	tool.init();

	$('.s_weibo').each(function( index ){
		$(this).prop('id', index+1);
	}).each(function(){ 
		_MI.ShareArticle2.build($(this).attr("id"));		
	});

	// 分享按钮
	$('.list').on('mouseover', '.shareBtn', function(){
		$(this).addClass('shareBtnHover').children('.shareBtn16').show();
	}).on('mouseout', '.shareBtn', function(){
		$(this).removeClass('shareBtnHover').children('.shareBtn16').hide();
	}).on('click', '.more', function(e){
		var $this = $(this),
			page = parseInt( $this.attr('page') || 1 ),
			len = $('.list .sst').length;

		if( page<len ){
			var $cur = $('.list .sst').eq(page);
			$cur.show();
			tool.loadImg( $cur );

			page++;
			$this.attr('page', page);
			
			if( page==len ){
				$this.text( '点击进入滚动要闻' ).prop('href', 'http://xian.qq.com/l/money/2016finance/cjyw/list20161028111645.htm');
			}
			e.preventDefault();
		}
	});
})/*  |xGv00|58b0ad51042ef00f6444d0d522bc8b2c */