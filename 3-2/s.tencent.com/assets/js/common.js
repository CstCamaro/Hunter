/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));


var ismobile=false;
var _dpi=1;
if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || /\(Android.*Mobile.+\).+Gecko.+Firefox/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
    if(/iPad/i.test(navigator.userAgent)){}else{
        //mobile
        ismobile=true;
        _dpi = typeof window.devicePixelRatio != "undefined" ? window.devicePixelRatio : 1;
        document.getElementsByTagName("html")[0].setAttribute("class","mobile");

        var vp = document.createElement("meta");
        vp.name="viewport";
        vp.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
        document.getElementsByTagName("head")[0].appendChild(vp);

        var wfc = document.createElement("meta");
        wfc.name="wap-font-scale";
        wfc.content="no";
        document.getElementsByTagName("head")[0].appendChild(wfc);

        //rem
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var recalc = function () {
            var stl;
            if(stl=document.getElementById("forhtml")){
                stl.parentNode.removeChild(stl);
            }
            var clientWidth = document.documentElement.clientWidth;
            if (clientWidth){
                var fontSize = (100 * (clientWidth / 750)).toFixed(2);

                stl = document.createElement("style");
                stl.id="forhtml";
                document.head.appendChild(stl);
                stl.appendChild(document.createTextNode("html{font-size:"+fontSize+"px !important;}"));
            }
        };
        if (document.addEventListener){
            window.addEventListener(resizeEvt, recalc, false);
            document.addEventListener('DOMContentLoaded', recalc, false);
        }
    }
}

//------企点start---------
(function(w, a, m){m='__qq_qidian_da';w[m]=a;w[a]=w[a]||function(){(w[a][m]=w[a][m]||[]).push(arguments);};})(window,'qidianDA');
qidianDA('create', '2852058994', '95d0933a841132a50efa5698e8f2d60d', {
    mtaId: '500668808'
});
qidianDA('set', 't1', new Date());
$.getScript("//bqq.gtimg.com/da/i.js",function(){});
//------企点end---------

//咨询框数据
$.getScript("/assets/js/contact.js?_t=20200330",function(){});

$(document).ready(function(){
    if(window._redirecting){
        return;
    }

    var now = new Date().getTime()
    if(now >= 1585929600000 && now < 1585929600000){
        $('body').append('<style>html{-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray;}</style>')
    }

    var isIE = function(ver){
        var b = document.createElement('b')
        b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
        return b.getElementsByTagName('i').length === 1
    }
    var withPlaceholder = function(){
        return 'placeholder' in document.createElement('input');
    }
    if(isIE(6) || isIE(7)){
        alert("您的IE版本过低，请升级浏览器。");
        return false;
    }

    //--统计--//
    $.getScript("//s.pc.qq.com/guanjia/js/tj.js",function(){
        if(typeof mtj == 'object'){
            mtj.run().prefix('pcmgr.stencent.web');
        }
    });

    //获取参数
    var GetQueryString = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return encodeURIComponent(r[2]); return null;
    }

    var getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }

    var urladtag = GetQueryString('ADTAG');
    if(urladtag){
        $.cookie("adtag", urladtag, { path: '/',expires: 7 });
    }

    //点击流
    var tcss_url = "http://pingjs.qq.com/tcss.ping.js";
    if(document.location.protocol == "https:"){
        tcss_url = "https://pingjs.qq.com/tcss.ping.https.js";
    }
    $.getScript(tcss_url,function(){
        if(typeof pgvMain == 'function'){
            pgvMain({virtualDomain:"stencent.qq.com"});
        }
    });
    $(document).click(function (evt) {
        //点击流点击事件
        var tagAttr = 'data-stats',tag=null;

        evt=evt||window.event

        if ('function' !== typeof pgvSendClick) {
            return;
        }

        var ele = evt.srcElement||evt.target;
        if(!ele){
            return;
        }

        var clickable = $(ele).closest("["+tagAttr+"]");
        if(clickable.length <=0){
            return;
        }

        var tag = clickable.attr(tagAttr);
        if(!tag || tag == ""){
            return;
        }

        var adtag_map = {
            "askbox.btn.btnkf.btnkf": "kefu",
            "askbox.btn.btncontact.btncontact": "zixun"
        }

        var adtag = $.cookie("adtag");
        if(adtag && typeof adtag_map[tag] != "undefined"){
            tag = adtag.replace(/^media\./, adtag_map[tag]+'.');
        }
        var from = getUrlParam("s");
        if (from != null) {
            tag = tag + "." + from
        }
        try{
            pgvSendClick({
                hottag: tag,
                virtualDomain:"stencent.qq.com"
            });
        }catch(e){

        }
    });
    //--统计 end--//

    //产品，服务，解决方案锚点跳转
    if($(".prodsol_wrapper").length > 0){
        var titlekey = 1;
        $(".prodsol_wrapper .info_wrap h3").each(function(k,v){
            $(this).attr("id","title-"+titlekey);
            titlekey++;
        });
        var url = window.location.toString();
        var id = url.split("#")[1];
        if(id){
            var idk = id.split("-")[1];
            idk -= 1;
            var t = $(".prodsol_wrapper .info_wrap h3:eq("+idk+")").offset().top;
            $(window).scrollTop(t);
        }
    }

    //产品中心，解决方案，安全服务左侧边栏
    var proNaviChange = function(){
        $(".navi_sidebar .menu-item .active").removeClass("active");
        $(".navi_sidebar .menu-item a").each(function(){
            if(window.location.pathname+window.location.hash == $(this).attr("href")){
                $(this).addClass("active");
                return false;
            }
        });
    };

    var dynamicCount = $("[data-src]").length + 2, loadedDynamic = 0;

    var domReady = function(){
        //产品中心左侧边栏
        if($(".navi_sidebar").length > 0){
            proNaviChange();

            window.onhashchange = function(){
                proNaviChange();
            }
        }

        setTimeout(function(){
            $("body").css("opacity","1");
        },200);
    };

    //导航条动画
    var slideTo = function(index){
        var $navline = $("#navline");
        if($navline.length <= 0){
            return;
        }
        var allObj = $(".headwrap  li");
        var nobj = $(".headwrap  li:eq("+index+")");
        var pos = nobj.position().left + 18;
        var width = nobj.find(".navi-tag").width();
        // $("#navline").stop().animate({width:width+"px",left:pos+"px"}, "fast");
        if(nobj.hasClass('dropdown')){
            $navline.css({left:pos+(width/2)+"px"}).show();
        }else{
            $navline.hide()
        }
        allObj.removeClass('active');
        nobj.addClass('active');
    };

    //mobile目录下
    var htmlprefix = ismobile ? "/m" : "";

    //头部
    if($("#header_holder")){
        var currentActive = 0;

        //获取头部html
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: htmlprefix+'/header.html',
            complete:function(){
                loadedDynamic++;
                loadedDynamic == dynamicCount ? domReady() : '';
            },
            success: function(ret){
                $("#header_holder").html(ret);
                setTimeout(function(){
                    //添加active
                    if(window.location.href.indexOf('/product/') > -1){
                        currentActive = 1;
                    }else if(window.location.href.indexOf('/solution/') > -1){
                        currentActive = 2;
                    }else if(window.location.href.indexOf('/service/') > -1){
                        currentActive = 3;
                    }else if(window.location.href.indexOf('/case/') > -1){
                        currentActive = 4;
                    }else if(window.location.href.indexOf('/research/') > -1){
                        if(window.location.pathname.indexOf('/research/share/')>-1 || window.location.pathname.indexOf('/research/course/')>-1){
                            currentActive = 6;
                        }else{
                            currentActive = 5;
                        }
                    }else if(window.location.href.indexOf('/edu/') > -1){
                        currentActive = 6;
                    }else if(window.location.href.indexOf('/about/') > -1){
                        currentActive = 7;
                    }

                    slideTo(currentActive);

                    $(".headwrap li").bind("mouseover",function(){
                        slideTo($(this).index());
                    }).bind("mouseleave",function(){
                        slideTo(currentActive);
                        $("#navline").hide();
                    });
                },200);
            }
        });

        //头部下拉菜单
        $("#header_holder").on("mouseover",".dropdown",function(){
            $(".header-submenu").css("height","0px");
            // $submenubox = $(this).find('.submenubox');
            var _height = 'auto';
            var _width = '1044px';
            var _left = '238px';
            if($(this).index() == 1){
                _height = '640px';
                _width = '1044px';
                _left = '238px';
            }else if($(this).index() == 2){
                _height = '358px';
                _width = '525px';
                _left = '238px';
            }else if($(this).index() == 3){
                _height = '290px';
                _width = '525px';
                _left = '347px';
            }else if($(this).index() == 4){
                _height = '390px';
                _width = '270px';
                _left = '590px'
            }
            $(this).find(".header-submenu").css({"height":_height}).find(".submenubox").css({"width": _width, "left": _left});
        });
        $("#header_holder").on("mouseout",".dropdown",function(){
            $(".header-submenu").css("height","0px");
        });

        //mobile:展开菜单
        $("#header_holder").on("click",".menu_button",function(){
            if($(this).attr("class").indexOf("open") <= -1){
                $(this).addClass("open");

                $("#header_menu").slideDown();
            }else{
                $(this).removeClass("open");
                $("#header_menu").slideUp();
            }
        });

        //mobile:展开下级菜单
        $("#header_holder").on("click",".menu",function(event){
            event.stopPropagation();

            var toggler = $(this).find(".toggler:first");
            if(toggler.length <= 0){
                return;
            }

            if(toggler.attr("class").indexOf("open") <= -1){
                toggler.addClass("open");
                $(this).find(".submenu:first").slideDown();
            }else{
                toggler.removeClass("open");
                $(this).find(".submenu:first").slideUp();
            }
        });
    }

    //底部
    if($("#footer_holder")){
        var adtag = $.cookie("adtag");
        if((adtag == 'media.partner.anmai.miniprog' || adtag == 'media.innerenter.anmai') && ismobile){
            var footer_file = 'footer_noqd.html';
        }else{
            var footer_file = 'footer.html';
        }
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: htmlprefix+'/'+footer_file,
            complete:function(){
                loadedDynamic++;
                loadedDynamic == dynamicCount ? domReady() : '';
            },
            success: function(ret){
                $("#footer_holder").html(ret);

                //thisyear
                var thisyear = (new Date()).getFullYear();
                $("#thisyear").html(thisyear);
            }
        });

        //mobile:展开下级菜单
        $("#footer_holder").on("click",".menu",function(event){
            event.stopPropagation();

            var toggler = $(this).find(".toggler:first");

            if(toggler.attr("class").indexOf("open") <= -1){
                toggler.addClass("open");
                $(this).find(".submenu:first").slideDown();
            }else{
                toggler.removeClass("open");
                $(this).find(".submenu:first").slideUp();
            }
        });
    }

    //其他通用
    if($("[data-src]").length > 0){
        $("[data-src]").each(function(){
            var _this = $(this),
                src = _this.attr("data-src");

            if(/[;<>'":]/.test(src)){
                //continue
                return true;
            }

            $.ajax({
                type: 'GET',
                dataType: 'html',
                url: src,
                complete:function(){
                    loadedDynamic++;
                    loadedDynamic == dynamicCount ? domReady() : '';
                },
                success: function(ret){
                    _this.html(ret);
                }
            });
        });
    }

    //首页banner
    if($("#home_slider").length > 0){
        //banner居中
        $("#home_slider").bxSlider({
            "mode": "fade",
            "infiniteLoop": true,
            "auto": document.domain !== 's.tencent.com', //首页现在不需要自动轮播
            "autoStart": true,
            "controls": false,
            "pause": 5000
        });
    }
    $(window).resize(function() {
        if(ismobile){
            return;
        }

        if($(".home_banner").length > 0){
            var banner_height = $(".home_banner").height();
            $(".banner-info").each(function(k,v){
                var myheight = typeof $(this).attr("data-height") != "undefined" ? $(this).attr("data-height") : $(this).height();
                var top = (banner_height - 66 - myheight)/2 + 66;
                if(top > 0){
                    $(this).css("top",top+"px");
                }
            });
        }

        if($(".research_banner").length > 0){
            var top = ($(".research_banner").height()/_dpi - 66 - 55- 126)/2 + 66;
            if(top > 0){
                $(".banner-info").css("top",top+"px");
            }
        }
        if($(".about_banner").length > 0){
            var top = ($(".about_banner").height()/_dpi - 66 - 55 - 126)/2 + 66;
            if(top > 0){
                $(".banner-info").css("top",top+"px");
            }
        }
    });
    $(".home_banner img").load(function(){
        $(window).trigger("resize");
    });
    $(".research_banner img").load(function(){
        $(window).trigger("resize");
    });
    $(".about_banner img").load(function(){
        $(window).trigger("resize");
    });
    $(window).trigger("resize");

    //event float布局
    if($(".makoddfrbox").length > 0){
        $(".makoddfrbox").each(function(){
            var ofkey = 0;

            $(this).find(".makoddfr").each(function(){
                if(ofkey%2 == 1){
                    $(this).addClass("odd");
                    $(this).after('<div class="clear"></div>');
                }
                ofkey++;
            });
        });
    }

    $(".ourproduct .prod-item").click(function(evt){
        var ele = evt.srcElement||evt.target;
        if($(ele).closest(".sub-prod-item").length > 0){
            return;
        }

        if($(this).attr("class").indexOf("open") <= -1){
            $(".ourproduct .prod-item.open").removeClass("open");
            $(".ourproduct .prod-item .sub-prod-item").slideUp();

            $(this).addClass("open");
            $(this).find(".sub-prod-item").slideDown();
        }else{
            $(this).removeClass("open");
            $(this).find(".sub-prod-item").slideUp();
        }
    });

    //咨询弹框
    $.ajax({
        url: '/contact-dialog.html',
        dataType: 'html',
        type: 'get',
        success: function(ret){
            $("body").append(ret);
            setTimeout(function(){
                $(".direction-select").trigger("c-change");
            },1000);
        }
    });

    //通用pop关闭按钮
    $(document).on("click",".close-contact",function(){
        $(this).closest(".popdialog").css("display","none");
    });

    //客服框打开咨询
    $(document).on("click",".open-contact",function(){
        $(".contactpop").css("display","block");
    });

    //按钮打开咨询
    $(".query-btn").attr("id", "qqqd_online_cpty");
    $.getScript("//wp.qiye.qq.com/qidian/2852058994/95a7911d071fe2da4ee13e8b39c36be6",function(){});
    // $(".query-btn").click(function(){
    // 	if(ismobile){
    // 		window.location.href="/about/contact_mobile.html";
    // 	}else{
    // 		$(".contactpop").css("display","block");
    // 	}
    // });

    //试用申请
    var checkInput = function(){
        var _this = $("#submit-trial");

        _this.closest("form").find("input").each(function(){
            if($(this).attr("type") != "text" && $(this).attr("type") != "checkbox"){
                return true;
            }

            var iptobj = $(this);
            var trial_valid = true;

            if(iptobj.attr("type") == "checkbox"){
                if(!iptobj.prop("checked")){
                    trial_valid = false;
                }
            }else if(iptobj.val() == "" || iptobj.val() == iptobj.attr("placeholder")){
                trial_valid = false;
            }else if(iptobj.attr("name") == 'email' && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(iptobj.val())){
                trial_valid = false;
            }else if(iptobj.attr("name") == 'phone' && !new RegExp("^1[0-9]{10}$").test(iptobj.val())){
                trial_valid = false;
            }

            if(!trial_valid){
                iptobj.addClass('error');

                if(iptobj.next('label.error').length <= 0 && typeof iptobj.attr("title") != "undefined"){
                    iptobj.after('<label class="error">'+iptobj.attr("title")+'</label>');
                }
            }else{
                iptobj.removeClass('error');
                iptobj.next('label.error').remove();
            }
        });
    }

    var checkBtn = function(){
        if($("#submit-trial").closest("form").find(".error").length > 0){
            $("#submit-trial").addClass('disabled');
        }else{
            $("#submit-trial").removeClass('disabled');
        }
    }

    $.ajax({
        url: '/freetrial-dialog.html',
        dataType: 'html',
        type: 'get',
        success: function(ret){
            $("body").append(ret);
            fixPlaceholder();

            $(".freetrialpop input").keyup(function(){
                $.cookie("trial_"+$(this).attr("name"),$(this).val(),{ path: '/',expires: 7 });
            });

            //临时页面
            if(window.location.pathname == "/apply-trial.html"){
                $(".freetrial-btn").click();
            }


            $("#submit-trial").closest("form").find("input").each(function(){
                if($(this).attr("type") != "text" && $(this).attr("type") != "checkbox"){
                    return true;
                }

                var _this = $(this);

                if($(this).attr("type") == "checkbox"){
                    $(this).change(function(){
                        checkInput();
                        checkBtn();
                    });
                }else{
                    $(this).blur(function(){
                        checkInput();
                        checkBtn();
                    });
                }
            });
        }
    });

    $(".freetrial-btn").click(function(){
        var showPop = function(){
            $(".freetrialpop input").each(function(){
                if($(this).attr("name") == 'smscode'){
                    return true;
                }
                if($.cookie("trial_"+$(this).attr("name"))){
                    $(this).val($.cookie("trial_"+$(this).attr("name")));
                }
            });

            $(".freetrialpop").css("display","block");
        }

        if(ismobile){
            window.location.href="/about/contact_mobile.html";
        }else{
            //判断是否已经获取过了，
            $.ajax({
                type:"GET",
                url: "/user/checktrial",
                dataType:"json",
                success:function(ret){
                    if(ret.trildone){
                        //已经获取过了
                        window.location.href="/user/trialsuc";
                    }else{
                        //未获取过
                        showPop();
                    }
                },
                error:function(ret){
                    showPop();
                }
            });
        }
    });

    //smscode
    var smsSent = false;
    $(document).on("click",".smscode button",function(event){
        event.preventDefault();

        var _this = $(this);
        var mobile_number = _this.closest("form").find('input[name="phone"]').val();

        if(!new RegExp("^1[0-9]{10}$").test(mobile_number)){
            alert("请输入有效的手机号（11位纯数字且以1开头）");
            return;
        }

        if(smsSent){
            //防止多次点击
            return;
        }

        smsSent = true;
        $.ajax({
            type: "POST",
            url: "/license/sendsms",
            dataType: "json",
            data:{mobile_number:mobile_number},
            complete:function(){
                smsSent = false;
            },
            success:function(ret){
                if(!ret.success){
                    alert(ret.rettip);
                    return;
                }

                var totalTime = 59,tmpInt = 0;
                _this.addClass("disabled");
                _this.html(totalTime+" s 后重新获取");
                tmpInt = setInterval(function(){
                    totalTime--;
                    _this.html(totalTime+" s 后重新获取");
                    if(totalTime == 0){
                        clearInterval(tmpInt);
                        _this.removeClass("disabled");
                        _this.html("获取验证码");
                    }
                },1000);
            }
        });
    });
    $(document).on("click","#submit-trial",function(event){
        event.preventDefault();

        var _this = $(this);

        checkInput();

        var data = _this.closest("form").serialize();
        if(_this.closest("form").find(".error").length <= 0){
            $.ajax({
                type:"POST",
                url: "/user/savetrial",
                data: data,
                dataType:"json",
                success:function(ret){
                    if(!ret.success){
                        alert(ret.rettip);
                        return false;
                    }

                    window.location.href="/user/trialsuc";
                },
                error:function(ret){
                    alert("网络错误，请稍后重试或联系客服");
                }
            });
        }
    });

    //威胁研究
    if($(".research-navi").length > 0){
        $(".research-navi a").each(function(){
            if(window.location.href.indexOf($(this).attr("href")) > -1){
                $(".research-navi a.active").removeClass("active");
                $(this).addClass("active");
            }
        });
    }

    //客服框
    if(!ismobile){
        $.ajax({
            url: '/kf-dialog.html',
            dataType: 'html',
            type: 'get',
            success: function(ret){
                $("body").append(ret);

                setTimeout(function(){
                    $("#kfbox").hover(function(){
                        $(this).find(".infobox").css("visibility","visible");

                        //adtag上报
                        try{
                            var adtag = GetQueryString('ADTAG');
                            if(adtag){
                                pgvSendClick({
                                    hottag: adtag.replace(/^media\./,'zxhover.'),
                                    virtualDomain:"stencent.qq.com"
                                });
                            }
                        }catch(e){}
                    },function(){
                        $(this).find(".infobox").css("visibility","hidden");
                    });
                },200);
            }
        });
    }

    var fixPlaceholder = function(){
        //placeholder
        if(!withPlaceholder()){

            $('[placeholder]').focus(function() {
                var input = $(this);

                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);

                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                })
            });
        }
    }
    fixPlaceholder();

    //产品服务解决方案标题mark调整
    if($(".prodsol_wrapper").length > 0){
        $(".prodsol_wrapper").find(".itemttl").each(function(){
            var wid = $(this).find("span:eq(0)").width()/_dpi;
            $(this).find("span:eq(1)").css("width",wid+"px");
        });
    }

    //关于我们
    $("#more_honor").click(function(){
        $(this).closest(".timeline").toggleClass("less");
        $(this).toggleClass("hide");

        //Edge bug
        if(window.navigator.userAgent.indexOf("Edge") > -1){
            var parent = $(this).closest(".honor_wrap");

            parent.find(".timeline").css('height', '2130px');
            parent.find(".markline").css('height', '2135px');
            parent.find(".year-2016").css('top', '200px');
            parent.find(".arrow-2016").css('top', '213px');
            parent.find(".year-2015").css('top', '1440px');
            parent.find(".arrow-2015").css('top', '1453px');
        }

    });

    //威胁研究导航栏左右滑动
    if($(".research-navi").length > 0){
        var slide_counter=0,max_slide=2,single_offset=(document.documentElement.clientWidth-70)/3;
        $(".research-navi .more").click(function(){
            if($(this).attr("class").indexOf("right") > -1){
                //slide to right
                slide_counter--;
            }else{
                //slide to left
                slide_counter++;
            }

            if(slide_counter == -2){
                $(".research-navi .more.right").css("display","none");
            }else if(slide_counter == 0){
                $(".research-navi .more.left").css("display","none");
            }else if(slide_counter<0){
                $(".research-navi .more.left").css("display","block");
                $(".research-navi .more.right").css("display","block");
            }

            var offset = single_offset * slide_counter;

            $(".research-navi .navi-wrap").css("left", offset+"px");
        });

        if(window.location.href.indexOf("/research/honor/") > -1 || window.location.href.indexOf("/research/bsafe/") > -1){
            slide_counter = -2;
            var off = single_offset * slide_counter;
            $(".research-navi .more.left").css("display","block");
            $(".research-navi .more.right").css("display","none");
            $(".research-navi .navi-wrap").css("left",off +"px");
        }
    }
});