
//ҵ�����
$(function(){
    //���Ĺ������
    jQuery("#myGiftMainBtn_12572").click(function(){
        window['getGiftMain_2329'].submit(12572);
    });
    //�¾�ÿ���������
    jQuery("#myGiftMainBtn_12573").click(function(){
        window['getGiftMain_2329'].submit(12573);
    });
    //3Ѱ���¾����
    jQuery("#myGiftMainBtn_12574").click(function(){
        window['getGiftMain_2329'].submit(12574);
    });
    //6Ѱ���¾����
    jQuery("#myGiftMainBtn_12575").click(function(){
        window['getGiftMain_2329'].submit(12575);
    });
    //12Ѱ���¾����
    jQuery("#myGiftMainBtn_12576").click(function(){
        window['getGiftMain_2329'].submit(12576);
    });
    // ���˻񽱼�¼��ѯ
    jQuery('#myGiftListBtn').click(function(){
        window['myGiftList_2329'].show();
    });
});

// �齱��ȡ�����ܳ�ʼ��
LotteryManager.GetGiftMain.init({
	'iAMSActivityId' : '2475', // AMS���
	'activityId' : '2329', // ģ��ʵ����
	'isQueryRole' : false, //���̵Ĵ����ͽ�ɫ��Դ�뵽AMS������										
	'onBeginGetGiftEvent' : function(){return 0;}, // �齱ǰ�¼�������0��ʾ�ɹ�
	'onGetGiftFailureEvent' : function(callbackObj){alert(callbackObj.sMsg);},	// �齱ʧ���¼�
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		if(!callbackObj.sPackageName){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
		//2��cdkey
		if(callbackObj.iPackageType == 2){
				LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
				return;
		}
		//1��ʵ��
		var isRealGoods = false;
		if(callbackObj.iPackageType == 1){
			/*
			 * 0��������Ϸ��Ʒ
			 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
			 * 2��cdkey
			 */
			isRealGoods = true;
		}
		var str = "��ϲ������� " + callbackObj.sPackageName + " !";
		if(isRealGoods){
			str += "����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����";
			// �˴�����û���д������Ϣ�ĺ�������
			
		}else{
			str += "����ע����գ�";
		}
		LotteryManager.alert(str);
		return;
	}
});

//���˻񽱼�¼��ʼ��
LotteryManager.MyGiftList.init({
	'iAMSActivityId' : '2475', // AMS���
	'iLotteryFlowId' : '12964', //  ��ѯ���ֲ������̺�
	'activityId' : '2329' // ģ��ʵ����
});


//��¼
LoginManager.checkLogin(function(){
    $E("#login_qq_span").innerHTML = LoginManager.getUserUin();//��ȡqq����       
});

//����
function share(site) {
	  var _url = encodeURI(document.location);
	  var _title = encodeURI(document.title);
	  var _pic = encodeURI("");//�����磺var _pic='ͼƬurl1|ͼƬurl2|ͼƬurl3....��
	  var _appkey = encodeURI(""); //�����Ѷ��õ�appkey
	  var _summary = encodeURI("��Ѱ�ɣ���Ѱ�ɰ�����Ϯ ����ȫ�³ƺ� ������������ʱ�䣺2012.12.25-2013.12.31��"); //��Ҫת��������
	  if (site == "qqwb") {
		var _t = _summary + encodeURI("��ַ��");
		var _u = 'http://v.t.qq.com/share/share.php?title=' + _t + '&url=' + _url + '&appkey=' + _appkey + '&pic=' + _pic;
	  };
	  if (site == "qqzone") {
		var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + _url + '&title=' + _title + '&pics=' + _pic + '&summary=' + _summary;
	  };
	  window.open(_u, '', 'width=700,height=680,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,location=yes,resizable=no,status=no');
};/*  |xGv00|e96a31d60f4bbf41ca7e6da78ee15d88 */