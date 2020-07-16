/* 2015-01-07 16:16 */
(function($){
    var TVP = window['TVP'] = function(o){
        return new _TVP(o);
    },
    _TVP = function(o){
        var _this = this;
        this.playBox = o.playBox;
        this.playList = $("#" + o.playList);
        this.listTag = o.listTag;
        this.current = o.current;
        this.vidName = o.vidName;
        this.index = o.index - 1;
        this.item = this.playList.find(this.listTag);
        this.itemHeight = _this.item.eq(0).outerHeight();
        this.firstVid = this.item.eq(this.index).attr(this.vidName);
        this.playBoxInfo = o.playBoxInfo;
        this.videos=[];
        this.param = o.param;
        this.item.each(function(index, obj){
            $(obj).bind("click", function(){
                _this.item.removeClass(_this.current);
                _this.param.isAuto = true;
                $(obj).addClass(_this.current);
                _this.creatVD($(obj).attr(_this.vidName));
            })
            _this.videos.push($(obj).attr(_this.vidName));
        });
        setTimeout(function(){
            _this.item.eq(_this.index).addClass(_this.current);
            _this.creatVD(_this.firstVid);
        }, 100);
    };
    _TVP.prototype = {
        creatVD: function(vid){
            var _this = this,
            video = new tvp.VideoInfo(),
            player = new tvp.Player(),
            nextid = "";

            // ���ñ��� 2015-01-06 20:23
            var aHtml = "";
            if($("#" + vid).attr("title") && $("#" + vid).attr("data-link")){
                aHtml = "<a href=" + $("#" + vid).attr("data-link") + " target='_blank'>" + $("#" + vid).attr("title") + "</a>";
            }
            $("#video-tit").html(aHtml);

            video.setVid(vid);
            player.ongetnext = function(vid){
                _this.param.isAuto = true;
                nextvid = "";
                _this.item.each(function(index, ob){
                    if($(ob).attr(_this.vidName) == vid && index < _this.videos.length - 1){
                        index ++;
                        nextvid = _this.videos[index];
                        $(ob).removeClass(_this.current);
                        _this.item.eq(index).addClass(_this.current);
                    }
                });
                if(nextvid != ""){
                    _this.creatVD(nextvid);
                }
            }
            if(this.param.isMini){
                var skin = "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf";
            }

            player.create({
                width: this.playBoxInfo[0],
                height: this.playBoxInfo[1],
                video: video,
                modId: this.playBox, //mod_player�Ǹո���ҳ����ӵ�div����
                autoplay: this.param.isAuto,
                vodFlashSkin: skin,
                flashWmode: "transparent",
                pic: this.param.pic
            });
        }
    }
})(jQuery);

// ��Ƶר���¼�
var videoEvent = {
    getAlbum: function(cid, callback){
        // ר��������ȡ
        jQuery.ajax({
            url: "http://sns.video.qq.com/fcgi-bin/dlib/dataout_ex?auto_id=137&otype=json&cid=" + cid,
            dataType: "jsonp",
            success: function(res){
                if(res){
                    var data = { 
                        title: res.title,
                        playurl: res.playurl,
                        list: res.videos 
                    };
                    var html = template("album-temp", data);
                    jQuery("ul[data-cid = " + cid + "]").html(html);
                    callback && callback();
                }
            }
        });
    },
    init: function(){
        var _this= this;

        // ר��������ȡ
        jQuery("ul[data-cid]").each(function(index, obj){
            var cid = jQuery(obj).attr("data-cid");
            // ��ȡר������
            _this.getAlbum(cid, function(){
                // ��ʼ����Ƶ����
                TVP({
                    playBox: "mod_player",
                    playList: "playList",
                    playBoxInfo: ["100%", "439"],
                    listTag: "li",
                    vidName: "id",
                    current: "current",
                    index: 1,
                    param: {
                        isAuto: true,
                        isMini: false,
                        pic: ""
                    }
                });
            });
        });

        // ��Ƶ���
        jQuery("#btn_player_expand").on("click", function(){
            var _modvideo = jQuery("#mod-video");
            if(_modvideo.hasClass("mod-video-wide")){
                _modvideo.removeClass("mod-video-wide");
            }else{
                _modvideo.addClass("mod-video-wide");
            }
        });

        // ���ڻع˹���
        var scrollA = jQuery("#scroll_A");
        scrollA.qqScroll({
            split:".item",
            auto: false,
            step: 4
        });

        // ���ڻع�չ��
        jQuery("#btn-expand").on("click", function(){
            if(scrollA.hasClass("mod-review-extand")){
                scrollA.removeClass("mod-review-extand");
                scrollA.animate({height: 0});
            }else{
                scrollA.addClass("mod-review-extand");
                scrollA.animate({height: "146px"});
            }
        });

    }
}
videoEvent.init();

/**
 * Fixed({
 *    id: "menu",       ����ID
 *    distance: 100,    �����붥���ľ���
 *    stay: 30,         �������붥���ľ���
 *    isTop: true       �Ƿ�Ϊ������λ
 * });
 */
Fixed({
    id: "main-nav",
    distance: 0,
    stay: 200,
    isTop: true
});

var FBrowser = (function() {
    var ua = navigator.userAgent;
    var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
    return {
        isIE: !!window.attachEvent && !isOpera,
        isOpera: isOpera,
        isSafari: ua.indexOf('AppleWebKit/') > -1,
        isFirefox: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
        MobileSafari: /Apple.*Mobile.*Safari/.test(ua),
        isChrome: !!window.chrome
    };
})();
FBrowser.isIE6 = FBrowser.isIE && !window.XMLHttpRequest;

//��������
function nextPage(n){
    jQuery("html, body").animate({scrollTop: jQuery('#container .layout').eq(n).offset().top + "px"});
    jQuery('#main-nav a').eq(n).addClass('current').siblings().removeClass('current');
}
var navscrll = {
    bnt: jQuery('#main-nav a'),
    boxL: jQuery('#container .page'),
    arr: [],
    cur: 0,
    scroll: function(){
        var _this = this;
        var sTop = jQuery(window).scrollTop();
        switch(true){
            case sTop >= 0 && sTop < _this.arr[1]:
                _this.setPos(0);
                _this.cur = 0;
                break;
            case sTop >= _this.arr[1] && sTop < _this.arr[2]:
                _this.setPos(1);
                _this.cur = 1;
                break;
            case sTop >= _this.arr[2] && sTop < _this.arr[3]-400:
                _this.setPos(2);
                _this.cur = 2;
                break;
            default:
                _this.setPos(3);
                _this.cur = 3;
                break;
        }
    },
    getToph: function(){
        var _this = this;
        for (var i = 0; i < _this.bnt.length; i++) {
            var myTop = _this.boxL.eq(i).offset().top;
            _this.arr.push(myTop);
            
        }
    },
    setPos: function(i){
        var _this = this;
        _this.bnt.eq(i).addClass('current').siblings().removeClass('current');
        jQuery(".page").removeClass("page-cur").eq(i).addClass("page-cur");
    },
    ftSet: function(){
        var _this = this;
        if (jQuery('body').hasClass('smscen')) {
            jQuery('.lhyw .hd').animate({top: '20px'},400);
        }else{
            jQuery('.lhyw .hd').animate({top: '90px'},400);
        }
        jQuery('.lhyw .main').animate({left: '0px'},500);
        jQuery('.lhyw .sub').animate({right: '0px'},500);
    },
    init:function(){
        var _this = this;
        var bH = jQuery("body").height();
        var wH = jQuery(window).height();

        if(wH < 850){
            jQuery(".page").css({height: "850px"});
        }else if(wH < 1056){
            jQuery(".page").css({height: wH + "px"});
        }

        jQuery("#fixed-bottom").css({top: jQuery(window).height() - 70 + "px"});

        _this.getToph();
        _this.ftSet();
        _this.bnt.bind("click",function(){
            jQuery(this).addClass('current').siblings().removeClass('current');
            _this.cur = jQuery(this).index();
            jQuery("html, body").animate({scrollTop: _this.boxL.eq(_this.cur).offset().top + "px"});
        });
        
        jQuery(window).bind("scroll", function(){
            _this.scroll();
        });
        _this.scroll();

        jQuery(window).on("resize", function(){
            jQuery("#fixed-bottom").css({top: jQuery(window).height() - 70 + "px"});
        });
/*
        if (FBrowser.isIE6) {
            _this.cur = 0;
            _this.setPos(0);
            window.scrollTo(0,0);
            return ;
        }
        */
    }
}
navscrll.init();

//�����ֹ����¼�
var timeDelay=true;
var scrollFunc=function(e){
    if(timeDelay){
        e=e || window.event;
        var driection = 1;//���ù�������
        if(e.wheelDelta){//IE/Opera/Chrome
            if(e.wheelDelta<0){
                if (navscrll.cur < 3) {
                    navscrll.cur++;
                    nextPage(navscrll.cur)
                }
            }else if(e.wheelDelta>0){
                if (navscrll.cur > 0) {
                    navscrll.cur--;
                    nextPage(navscrll.cur)
                }
            }
        }else if(e.detail){//Firefox
            if(e.detail>0){
                if (navscrll.cur < 3) {
                    navscrll.cur++;
                    nextPage(navscrll.cur)
                }
            }else if(e.detail<0){
                if (navscrll.cur > 0) {
                    navscrll.cur--;
                    nextPage(navscrll.cur)
                }
            }
        }
        timeDelay = false;
        var s = setInterval(function(){timeDelay=true;clearInterval(s);},1000);
    }else{
        if(e && e.preventDefault){
            e.preventDefault();
        }else{
            window.event.returnValue=false;
        }
        return false;
    }
}
if(document.addEventListener){
document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
if (FBrowser.isIE6) {
    /*ע���¼�*/
    if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }//W3C
    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
    ////ע�����
}
/*  |xGv00|73096b3a17a3e113e198740e4c910ed4 */