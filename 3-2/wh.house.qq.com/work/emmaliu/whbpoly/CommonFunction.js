/*整站搜索*/
function goSearch() {
    var condition = $("#tbSearch").val();
    if (condition == "") {
        return;
    }
    window.location.href = "result.shtml?Keyword=" + escape(condition);
}

var joinCount = 0;

/*获取站点设置*/
function getSiteSet() {
    $.ajax({
        url: "/EBPlatform/SiteFunction.aspx?callback=?",
        type: "Post",
        data: { "Type": "getset", "SiteName": "搜房网", "RandomCode": Math.random() * 100000 },
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        cache: false,
        beforeSend: function () { },
        success: function (statuback) {
            if (statuback == "") {
                return;
            }
            getKeyword(statuback.KeyWord);
            setCountDown(statuback.FlashSaleEndTime);
            setJoinCount(statuback.JoinCount);
            joinCount = statuback.JoinCount;

            $("#IndexBanner").attr("src", statuback.IndexBanner);
            $("#IndexUrl").attr("href", statuback.IndexUrl);

            $("#CommentBanner").attr("src", statuback.CommentBanner);
            $("#CommentUrl").attr("href", statuback.CommentUrl);

            $("#NewsBanner").attr("src", statuback.NewsBanner);
            $("#NewsUrl").attr("href", statuback.NewsUrl);

            $("#ActivityBanner").attr("src", statuback.ActivityBanner);
            $("#ActivityUrl").attr("href", statuback.ActivityUrl);

            $("#DiscountBanner").attr("src", statuback.DiscountBanner);
            $("#DiscountUrl").attr("href", statuback.DiscountUrl);

            $("#BuyingBanner").attr("src", statuback.BuyingBanner);
            $("#BuyingUrl").attr("href", statuback.BuyingUrl);
        },
        /*error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(textStatus);
            errorThrown;
        }*/
    });
}

/*快捷搜索*/
var keywordHtml = '<li><a href="result.shtml?Keyword=$KeyWord$">$KeyWord1$</a></li>';

/*获取关键字*/
function getKeyword(str) {
    var tHtml = "";
    var keyList = str.split('|');
    for (var i = 0; i < keyList.length; i++) {
        tHtml += keywordHtml;
        tHtml = tHtml.replace("$KeyWord$", escape(keyList[i]));
        tHtml = tHtml.replace("$KeyWord1$", keyList[i]);
        if (i < keyList.length - 1) {
            tHtml += '<li>|</li>';
        }
    }
    $("#ShowKeyword").html(tHtml);
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

/*参与人数*/
function setJoinCount(num) {
    var thousand, hundred, ten, single;
    thousand = Math.floor(num / 1000);
    hundred = Math.floor(num % 1000 / 100);
    ten = Math.floor(num % 100 / 10);
    single = num % 10;
    $('#thousand_show').html(thousand);
    $('#hundred_show').html(hundred);
    $('#ten_show').html(ten);
    $('#single_show').html(single);
}

/*弹出报名窗口*/
function goJoin(targetID) {
	$("#hidden_id").val(targetID);
    $("#AddInfo").attr("href", "javascript:addInfo(" + targetID + ")")
    $.colorbox({ inline: true, href: "#input" });
}

var myCheck = new Site_FC();

/*验证真实姓名*/
function checkName() {
	//alert(16);
    return myCheck.checkValue("tbName", "wName", myCheck.EmptyRegular, "请输入您的真实姓名") && myCheck.checkValue("tbName", "wName", myCheck.ChinaNameRegular, "请输入2-6位中文字符");
}

/*验证电话号码*/
function checkMobileNum() {
    return myCheck.checkValue("tbMobileNum", "wMobileNum", myCheck.EmptyRegular, "请输入11位手机号码") && myCheck.checkValue("tbMobileNum", "wMobileNum", myCheck.MobileRegular, "请输入11位手机号码");
}

/*提交前检查*/
function preCheck() {
    var err = 0;
    if (!checkName()) err++;
    if (!checkMobileNum()) err++;
    if (err > 0)
        return false;
    else
        return true;
}

var isJoin = 0;

/*提交报名*/
function addInfo(targetID) {
    if (isJoin != 0 || !preCheck()) {
        return;
    }

    var result = $.ajax({
        url: "/EBPlatform/SiteFunction.aspx",
        type: "Post",
        data: { "Type": "addinfo", "TargetID": targetID, "Name": $("#tbName").val(), "MobileNum": $("#tbMobileNum").val(), "RandomCode": Math.random() * 100000 },
        beforeSend: function () { isJoin = 1; },
        async: false,
        cache: false
    }).responseText;
    if (result.split('|')[0] == "1") {
        //成功
        if (result.split('|')[1] != "-1") {
            setJoinCount(joinCount + 1);
        }
        $("#GoJoin" + targetID).removeAttr("href");
        $.colorbox({ inline: true, href: "#seccess" });
        return;
    }
    else if (result == "2") {
        //已报名
        $("#GoJoin" + targetID).removeAttr("href");
        $("#wMobileNum").html("亲，您已经报过名了哦！");
        return;
    }
    else if (result == "3") {
        //活动结束
        $("#GoJoin" + targetID).removeAttr("href");
        $("#wMobileNum").html("很抱歉，该活动已结束！感谢您的关注！");
        return;
    }
    else {
        isJoin = 0;
        //其他错误
        $("#wMobileNum").html("对不起，系统忙，请稍后再试！");
        return;
    }
}

/*根据参数名称获取URL参数*/
function getParameterByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

$(function () {
    getSiteSet();
});/*  |xGv00|1bbee9797d1caa0cfd3f2352413f4624 */