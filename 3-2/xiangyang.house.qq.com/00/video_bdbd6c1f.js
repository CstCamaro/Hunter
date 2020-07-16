(function($){
    $('.d_img li').on('click',function(){
        var vid = $(this).attr('vid');
        if(vid !=''){
            showPop(vid);
        }
    });
    $('.close').click(function(){
        $('#videoPlay1').html('');
        $('.overlay,.pop-video').fadeOut();
    });
    function showPop(vid){
        videoPlay('videoPlay1',vid,730,480,true);
        $('.pop-video').css('top',($(window).height()-450)/2);
        $('.overlay,.pop-video').fadeIn();
    }
    function videoPlay(id,guid,w,h,autoplay, adplay) {
        if (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1)// ipad,iphone
        {
            if (autoplay) {
                ipadautoplay = autoplay;
            }
            var url = "http://partner.itv.ifeng.com/IfengVideoSearch/getplayermsgnew.aspx?msg=" + videoid + "&callback=showhtml5video&param=playermsg";
            getScript_cds(url);
        } else {
            var _sitedomain = window.location.href;
            var fo = new FlashWriter({
                url : '//static.video.qq.com/TPout.swf',/*http://img.ifeng.com/swf/zuheVplayer_v5.0.11.swf*/
                width : w,
                height : h,
                id : 'fplay'
            });
            fo.addVariable('vid', guid);
            fo.addVariable('from', _sitedomain);
            fo.addVariable('playerName', "VZHPlayer");
            fo.addVariable('auto', "0");

            if ( typeof (autoplay) != "undefined")
                fo.addVariable('AutoPlay', autoplay);
            else
                fo.addVariable('AutoPlay', 'false');

            if ( typeof (adplay) != "undefined")
                fo.addVariable('ADPlay', adplay);
            else
                fo.addVariable('ADPlay', 'true');
            fo.addVariable('writeby', 'webjs');
            //为了兼容以前的组合传播页面。如果source=webjs，表示是js渲染播放器，此时分享功能直接调用脚本方法；否则调用swf自身的分享方法
            fo.addVariable('clickPlay', 'true');
            fo.addVariable('subject', '2013addzzzt');
            fo.addVariable('width', w);
            fo.addVariable('height', h);
            fo.addParam('allowFullScreen', 'true');
            fo.addParam('wmode', 'transparent');
            fo.addVariable('canShare', 'true');
            fo.addVariable('ADOrderFirst', '1');//页面打开就播放广告
            fo.addVariable('adType', '1');//表示是资讯内页
            fo.addParam('allowScriptAccess', 'always');
            fo.write(id);
        }
    }
})(jQuery);
