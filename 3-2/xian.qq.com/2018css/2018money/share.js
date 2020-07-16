    $(function(){
      $('.Q-tpList .btns').append('\
		<div class="shareBtn" role="button" tabindex="0" aria-haspopup="true" aria-pressed="false" aria-label="分享">\
									<ul class="shareBtn16" id="shares" style="display: none;">\
										<li class="shareButton" id="share2wb"><a href="javascript:;" class="iconA" target="_blank" title="\u5206\u4eab\u5230\u817e\u8baf\u5fae\u535a">\u817e\u8baf\u5fae\u535a</a></li>\
										<li class="shareButton" id="share2qzone"><a href="javascript:;" class="iconB" target="_blank" title="\u5206\u4eab\u5230\u0051\u0051\u7a7a\u95f4">\u0051\u0051\u7a7a\u95f4</a></li>\
										<li class="shareButton" id="share2qq"><a href="javascript:;" class="iconC" target="_blank" title="\u5206\u4eab\u7ed9\u0051\u0051\u597d\u53cb">\u0051\u0051\u597d\u53cb</a></li>\
										<li id="share2sina" class="shareButton"><a href="javascript:;" class="iconD"  target="_blank" title="\u5206\u4eab\u5230\u65b0\u6d6a\u5fae\u535a">\u65b0\u6d6a\u5fae\u535a</a></li>\
									</ul>\
								</div>\
								');

      $('.shareBtn').on({
        'mouseenter': function(){
          $(this).addClass('share-menu-open');
          $(this).find('.shareBtn16').show();
        },
        'mouseleave': function(){
          $('.shareBtn16').stop().hide();
          $(this).removeClass('share-menu-open');
        }
      });

      $('.shareBtn .shareBtn16 a').click(function(event) {
        event.preventDefault();
        var shareData = {
          title: $(this).parents('.st').parent().parent().find('em a').text(), //标题
          url: $(this).parents('.st').parent().parent().find('em a').attr('href'),
          site: '\u817e\u8baf\u5927\u79e6\u7f51',
          desc: $(this).parents('.st').parent().parent().find('em a').text(), //摘要
          pics: $(this).parents('.st').parent().parent().parent().find('img').attr('src')
        }

        switch (this.className) {
          case 'iconA':
            window.open('http://share.v.t.qq.com/index.php?c=share&a=index&title=' + encodeURIComponent(shareData.desc) + '&url=' + encodeURIComponent(shareData.url) + '&pic=' + encodeURIComponent(shareData.pics), '转播到腾讯微博', 'width=700,height=680,top=0,left=0,toolbar=no,menubar=no, scrollbars=no,location=yes,resizable=no,status=no');
            break;
          case 'iconB':
            window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + encodeURIComponent(shareData.title) + '&url=' + encodeURIComponent(shareData.url) + '&desc=' + encodeURIComponent(shareData.desc) + '&summary=' + encodeURIComponent(shareData.site) + '&site=' + encodeURIComponent(shareData.site) + '&pics=' + encodeURIComponent(shareData.pics), '分享到QQ空间', 'width=700,height=680,top=0,left=0,toolbar=no,menubar=no, scrollbars=no,location=yes,resizable=no,status=no');
            break;
          case 'iconC':
            window.open('http://connect.qq.com/widget/shareqq/index.html??title=' + encodeURIComponent(shareData.title) + '&url=' + encodeURIComponent(shareData.url) + '&desc=' + encodeURIComponent(shareData.desc) + '&summary=' + encodeURIComponent(shareData.site) + '&pics=' + encodeURIComponent(shareData.pics), '分享给QQ好友');
            break;
          case 'iconD':
            window.open('http://service.weibo.com/share/share.php?title=' + encodeURIComponent(shareData.title) + '&url=' + encodeURIComponent(shareData.url) + '&pic=' + encodeURIComponent(shareData.pics), '转播到新浪微博', 'width=700,height=680,top=0,left=0,toolbar=no,menubar=no, scrollbars=no,location=yes,resizable=no,status=no');
            break;
        }
      });

      
    });

/*  |xGv00|2f2e7cf577a9e407a2cbd4a5b2a4b6ed */