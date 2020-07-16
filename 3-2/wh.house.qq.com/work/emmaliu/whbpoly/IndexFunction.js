/*顶部通栏广告*/
var topBanner = '<a href="$LinkUrl$" target="_blank"><img src="$Image$" title="$Title$"></a>';  //red_top
/*顶部滚动广告（大）*/
var topBigScroll = '<li><a href="$LinkUrl$" target="_blank"><img src="$Image$"></a><span>$Title$</span></li>';  //TopBig
/*顶部滚动广告（小）*/
var topSmallScroll = '<li><i class="arr2"></i><img src="$Image$"></li>';  //TopSmall
/*中部通栏广告（FLASH）*/
//var middleBanner = '<a href="$LinkUrl$" target="_blank"><img src="$Image$" title="$Title$"></a>';  //MiddleAD
var middleBanner = '<a href="$LinkUrl$" target="_blank"><img src="$Image$" title="$Title$"></a>';  //MiddleAD

/*
<embed name="prize" src="/Images/logo.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" devicefont="false" bgcolor="#F4E7D4" name="index" menu="false" allowfullscreen="true" allowscriptaccess="sameDomain" salign="" type="application/x-shockwave-flash" align="middle" height="140" width="1000" /> 
          <noscript>
              <object id="prize" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="140" height="140" id="index" align="middle">
              <param name="allowScriptAccess" value="sameDomain" />
              <param name="allowFullScreen" value="false" />
              <param name="movie" value="/Images/logo.swf" />
              <param name="menu" value="false" />
              <param name="quality" value="high" />
              <param name="wmode" value="transparent" />
              <param name="bgcolor" value="#F4E7D4" />
              <embed src="/Images/980x60a.swf" width="140" type="application/x-shockwave-flash" height="140" menu="false" quality="high" bgcolor="#000000" name="index" align="middle" allowScriptAccess="sameDomain" wmode="transparent" allowFullScreen="false" pluginspage="http://www.macromedia.com/go/getflashplayer" />
              </object>
          </noscript>
*/

/*中部滚动广告（大）*/
var middleBigScroll = '<div class="content_list"><a href="$LinkUrl$" target="_blank"><img src="$Image$" title="$Title$"></a></div>';  //MiddleBig
/*中部滚动广告（小）*/
var middleSmallScroll = '<a class="m-page" href="javascript:;" rel="js_btn_list">$Num$</a>';  //MiddleSmall
/*底部通栏广告*/
var bottomBanner = '<a><img src="$Image$" title="$Title$"></a>';  //BottomAD

/*大banner滚动方法*/
function setBigScroll() {
    
}

/*小banner滚动方法*/
function setSmallScroll() {
    
}

/*根据类别获取Banner信息*/
function getBannerByClassName(className, showID) {
    var mainHtml = "";
    var subHtml = "";
    $.ajax({
        url: "/EBPlatform/SiteFunction.aspx?callback=?",
        type: "Post",
        data: { "Type": "getindexbanner", "ClassName": className },
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        cache: false,
        beforeSend: function () { querySend = 1; },
        success: function (statuback) {
            if (statuback.rows.length < 1) {
                return;
            }
            for (var i = 0; i < statuback.rows.length; i++) {
                if (className == "顶部通栏广告") {
                    mainHtml += topBanner;
                }
                else if (className == "顶部滚动广告") {
                    mainHtml += topBigScroll;
                    subHtml += topSmallScroll;
                    subHtml = subHtml.replace("$Image$", unescape(statuback.rows[i].Image));
                }
                else if (className == "中部通栏广告") {
                    htmlList += middleBanner;
                }
                else if (className == "中部滚动广告") {
                    mainHtml += middleBigScroll;
                    subHtml += middleSmallScroll;
                    subHtml = subHtml.replace("$Num$", (i + 1));
                }
                else if (className == "底部通栏广告") {
                    htmlList += bottomBanner;
                }
                mainHtml = mainHtml.replace("$LinkUrl$", unescape(statuback.rows[i].LinkUrl));
                mainHtml = mainHtml.replace("$Image$", unescape(statuback.rows[i].Image));
                mainHtml = mainHtml.replace("$Title$", unescape(statuback.rows[i].Title));
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(textStatus);
            errorThrown;
        }
    });
    $("#" + showID).html(mainHtml);
    if (className == "中部滚动广告") {
        $("#TopSmall").html(subHtml);
        $("#TopSmall li").eq(0).addClass("on");
    }
    else if (className == "底部通栏广告") {
        $("#MiddleSmall").html(subHtml);
        $("#MiddleSmall a").eq(0).addClass("focus");
    }
}

/*项目列表模板*/
var projectHtml = '<li><a href="javascript:void(0)" onfocus="this.blur()"><span>$ProjectName$</span></a></li>';

/*获取项目列表*/
function getProjectList(area) {
    var htmlList = "";
    $.ajax({
        url: "/EBPlatform/SiteFunction.aspx?callback=?",
        type: "Post",
        data: { "Type": "getindexproject", "BusinessDistrict": area },
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        cache: false,
        success: function (statuback) {
            if (statuback.rows.length < 1) {
                return;
            }
            for (var i = 0; i < statuback.rows.length; i++) {
                htmlList += projectHtml;
                htmlList = htmlList.replace("$ProjectName$", unescape(statuback.rows[i].ProjectName));
            }
            $("#ShowProjectList").html(htmlList);
        }
    });

    $("#ShowProjectList li a").click(function () {
        var pro = $(this).children("span").html();
        $("#ShowProject").html(pro);
        $("#ShowProjectList").fadeOut();
    });
}

/*搜索项目*/
function searchProject() {
    var area = $("#ShowArea").html();
    if (area == "" || area == "置业区域") {
        $("#ShowMsg").html("请选择置业区域");
        $.colorbox({ inline: true, href: "#inline_example03" });
        return;
    }
    var proName = $("#ShowProject").html();
    if (proName == "" || proName == "项目名称" || proName == "请选择置业区域") {
        $("#ShowMsg").html("请选择项目名称");
        $.colorbox({ inline: true, href: "#inline_example03" });
        return;
    }
    //window.location.href = "/Housecenter/project.shtml?ProjectName=" + escape(proName);
    //window.location.target = "_blank";
    window.open("/Housecenter/project.shtml?ProjectName=" + escape(proName), "_blank");
}

/*获取站点设置*/
function getSiteSet() {
    var siteSet = $.ajax({
        url: "/EBPlatform/SiteFunction.aspx",
        type: "Post",
        data: { "Type": "getset", "SiteName": "搜房网" },
        async: false,
        cache: false
    }).responseText;
    //alert(siteSet);
    setCountDown(siteSet.split('|')[1]);
}

/*倒计时*/
function setCountDown(intDiff) {
    window.setInterval(function () {
        var day = 0,
		hour = 0,
		minute = 0,
		second = 0; //时间默认值		
        if (intDiff > 0) {
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $('#day_show').html(day);
        $('#hour_show').html('<s id="h"></s>' + hour);
        $('#minute_show').html('<s></s>' + minute);
        $('#second_show').html('<s></s>' + second);
        intDiff--;
    }, 1000);
}

$(function () {
    getSiteSet();

//    getBannerByClassName("顶部通栏广告", "red_top");
//    getBannerByClassName("顶部滚动广告", "TopBig");
//    getBannerByClassName("中部通栏广告", "MiddleAD");
//    getBannerByClassName("中部滚动广告", "MiddleBig");
//    getBannerByClassName("底部通栏广告", "BottomAD");
});/*  |xGv00|dc4e04083e684f85e2fcf6eedfa8ac02 */