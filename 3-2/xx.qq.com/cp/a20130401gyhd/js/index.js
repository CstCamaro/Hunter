
//业务入口
$(function(){
    //爱心公益礼包
    jQuery("#myGiftMainBtn_12572").click(function(){
        window['getGiftMain_2329'].submit(12572);
    });
    //月捐每月例行礼包
    jQuery("#myGiftMainBtn_12573").click(function(){
        window['getGiftMain_2329'].submit(12573);
    });
    //3寻仙月捐礼包
    jQuery("#myGiftMainBtn_12574").click(function(){
        window['getGiftMain_2329'].submit(12574);
    });
    //6寻仙月捐礼包
    jQuery("#myGiftMainBtn_12575").click(function(){
        window['getGiftMain_2329'].submit(12575);
    });
    //12寻仙月捐礼包
    jQuery("#myGiftMainBtn_12576").click(function(){
        window['getGiftMain_2329'].submit(12576);
    });
    // 个人获奖记录查询
    jQuery('#myGiftListBtn').click(function(){
        window['myGiftList_2329'].show();
    });
});

// 抽奖领取主功能初始化
LotteryManager.GetGiftMain.init({
	'iAMSActivityId' : '2475', // AMS活动号
	'activityId' : '2329', // 模块实例号
	'isQueryRole' : false, //流程的大区和角色来源请到AMS中配置										
	'onBeginGetGiftEvent' : function(){return 0;}, // 抽奖前事件，返回0表示成功
	'onGetGiftFailureEvent' : function(callbackObj){alert(callbackObj.sMsg);},	// 抽奖失败事件
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		if(!callbackObj.sPackageName){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
		//2：cdkey
		if(callbackObj.iPackageType == 2){
				LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'复制成功。\');">');
				return;
		}
		//1：实物
		var isRealGoods = false;
		if(callbackObj.iPackageType == 1){
			/*
			 * 0：虚拟游戏物品
			 * 1：实际物品，需要填写个人收货信息
			 * 2：cdkey
			 */
			isRealGoods = true;
		}
		var str = "恭喜您获得了 " + callbackObj.sPackageName + " !";
		if(isRealGoods){
			str += "请您准确填写个人信息，官方将有工作人员联系您。";
			// 此处添加用户填写个人信息的函数调用
			
		}else{
			str += "请您注意查收！";
		}
		LotteryManager.alert(str);
		return;
	}
});

//个人获奖记录初始化
LotteryManager.MyGiftList.init({
	'iAMSActivityId' : '2475', // AMS活动号
	'iLotteryFlowId' : '12964', //  查询获奖轮播的流程号
	'activityId' : '2329' // 模块实例号
});


//登录
LoginManager.checkLogin(function(){
    $E("#login_qq_span").innerHTML = LoginManager.getUserUin();//获取qq号码       
});

//分享
function share(site) {
	  var _url = encodeURI(document.location);
	  var _title = encodeURI(document.title);
	  var _pic = encodeURI("");//（例如：var _pic='图片url1|图片url2|图片url3....）
	  var _appkey = encodeURI(""); //你从腾讯获得的appkey
	  var _summary = encodeURI("新寻仙，新寻仙霸下来袭 畅想全新称号 礼包再升级，活动时间：2012.12.25-2013.12.31。"); //需要转播的内容
	  if (site == "qqwb") {
		var _t = _summary + encodeURI("地址：");
		var _u = 'http://v.t.qq.com/share/share.php?title=' + _t + '&url=' + _url + '&appkey=' + _appkey + '&pic=' + _pic;
	  };
	  if (site == "qqzone") {
		var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + _url + '&title=' + _title + '&pics=' + _pic + '&summary=' + _summary;
	  };
	  window.open(_u, '', 'width=700,height=680,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,location=yes,resizable=no,status=no');
};/*  |xGv00|e96a31d60f4bbf41ca7e6da78ee15d88 */