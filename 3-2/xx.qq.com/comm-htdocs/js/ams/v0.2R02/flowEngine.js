(function(){
	var JS_FILE_LIST = {
                     'ajaxcdr': '/comm-htdocs/js/ams/v0.2R02/ajaxcdr.js',
                     'ameServiceDepart': location.protocol+'//apps.game.qq.com/comm-htdocs/js/ams/v0.2R02/ameServiceDepart.js',
                     'roleselectorv3': location.protocol+'//ossweb-img.qq.com/images/js/roleselector/roleselectorv3.js'
	};
	
	for(var i in JS_FILE_LIST)
	{
		if(!window[i]){
			window[i] = {};
			document.write('<script src="'+JS_FILE_LIST[i]+'" type="text/javascript"></script>');
		}
	}
})();

var amsFlow = function() { //本次提交
	this.objFlowData = ''; 
	this.objNeedAreaRoleFlow = ''; //本次提交中需要大区的Flow
}
amsFlow.prototype.submit = function amsFlowSubmit(FlowJsonData) {
	var flowClassStr = 'flowClass_'+FlowJsonData.iFlowId+'= new amsFlowClass()';
	var flowSubmitStr = 'flowClass_'+FlowJsonData.iFlowId+'.submit(FlowJsonData)';
	eval(flowClassStr);
	eval(flowSubmitStr);
}


var amsFlowArr = new Array(); //本次请求
var amsFlowClass = function(){}
amsFlowClass.prototype.submit = function (FlowJsonData) {
	sIsPeakName = FlowJsonData.iActivityId + '_ame_peak';
	sIsPeakValue = amsCookieGet(sIsPeakName);
	if (sIsPeakValue == 'isPeak') {
		alert('目前该活动访问人数很多！建议您请休息一段时间再来！谢谢！');
		return;
	}
    FlowJsonData.FlowEngineUrl = location.protocol+'//apps.game.qq.com/ams/ame/ame.php?ameVersion=0.2&sRdmdzs='+parseInt(3*Math.random())+'&mrd='+Math.random();
    
    if (typeof(ams_actdesc) == 'object' && ams_actdesc.iActivityId > 2044) {
    	FlowJsonData.FlowEngineUrl = location.protocol+'//apps.game.qq.com/ams/ame/ame.php?ameVersion=0.3&sRdmdzs='+parseInt(3*Math.random())+'&mrd='+Math.random();
    }
	
	if(ams_actdesc.sServiceDepartment == 'x6m5'){
		FlowJsonData.FlowEngineUrl = location.protocol+'//x6m5.ams.game.qq.com/ams/ame/ame.php?ameVersion=0.3&sServiceType=' + ams_actdesc.sServiceType + '&iActivityId=' + ams_actdesc.iActivityId + '&sServiceDepartment='+ ams_actdesc.sServiceDepartment + '&sRdmdzs='+parseInt(3*Math.random())+'&mrd='+Math.random();
	}
   
    FlowJsonData.sMethod = 'postByFlash';
    this.objFlowData = FlowJsonData;
    amsFlowArr.push(FlowJsonData);
    var self = this;
    if (typeof(ams_actdesc) == 'object') {
    	if (ams_actdesc.sServiceType != undefined) {
    		this.objFlowData.FlowEngineUrl = FlowJsonData.FlowEngineUrl + '&sServiceType=' + ams_actdesc.sServiceType + '&iActivityId=' + ams_actdesc.iActivityId;    		
    	    if (ams_actdesc.iActivityId == 1738) {
    	    	sRdN = parseInt(5*Math.random());
    	    	sIFlowId = FlowJsonData.iFlowId;
    	    	if (sRdN == 1) {
    	    		this.objFlowData.FlowEngineUrl = this.objFlowData.FlowEngineUrl + '&sServiceDepartment=gsm7';
    	    	}
    	    	if (sRdN == 3) {
    	    	    this.objFlowData.FlowEngineUrl = this.objFlowData.FlowEngineUrl + '&sServiceDepartment=lzm3';
    	    	}
    	    	if (sRdN == 4) {
    	    		this.objFlowData.FlowEngineUrl = this.objFlowData.FlowEngineUrl + '&sServiceDepartment=gsm7';
    	    		return;
    	    	}
    	    } else if (ams_actdesc.iActivityId >= 2658) {
	    	    this.objFlowData.FlowEngineUrl = this.objFlowData.FlowEngineUrl + '&sServiceDepartment=' + ams_actdesc.sServiceDepartment;
            } else {
    	    	this.objFlowData.FlowEngineUrl = this.objFlowData.FlowEngineUrl + getAmeServiceDepart(ams_actdesc.iActivityId, ams_actdesc.sServiceType);
    	    }
    	}
		
        if (this.objFlowData.iActivityId == 53) {
            self.amsAreaRole('noNeedAreaRole');
            return;       
        }
  
    	eval("objFlow=ams_actdesc.flows.f_"+FlowJsonData.iFlowId);
		
		var rIFlowId = FlowJsonData.iFlowId;
		if (rIFlowId == 5308 || rIFlowId == 5310 || rIFlowId == 5296 || rIFlowId == 5300) {
            LoginManager.checkLogin(function(){self.amsAreaRole('popAreaRole');}, function(){LoginManager.login();});	            	 
	        return; 
		}
		
    	if (objFlow != undefined) { 
	        if (objFlow.iNeedAreaRole != undefined) {   
	            if (objFlow.iNeedAreaRole == '1') {
	            	//amsFlowArr.push(FlowJsonData);
	            	Flow.objNeedAreaRoleFlow = FlowJsonData;
	                eval("objFlowSign=sign_"+ams_actdesc.iAreaRoleModId);   
	                objFlowSign.check_bind(function(){self.amsAreaRole('isBind');}, function(){self.amsAreaRole('notBind');});
	                return;
	             }   
	             if (objFlow.iNeedAreaRole == '2') {
                        LoginManager.checkLogin(function(){self.amsAreaRole('popAreaRole');},   function(){LoginManager.login();});	            	 
	            	     return;
	             }
	             if (objFlow.iNeedAreaRole == '0') {
	            	 self.amsAreaRole('noNeedAreaRole');
	            	 return;
	             }
                 else {
                     LoginManager.checkLogin(function(){self.amsAreaRole('popAreaRole');},   function(){LoginManager.login();});	            	 
	            	 return;                    
                   }
	        }
    	} else {
            self.amsAreaRole('noNeedAreaRole');
            return;	         
        } 
    }    
    self.amsAreaRole('noNeedAreaRole');
    return;	
}

var Flow = new amsFlow();


amsFlowClass.prototype.amsAreaRole = function (iSbm) {
	if (iSbm == 'notBind') {
		alert('请先绑定大区 然后再继续操作！');
		objFlowSign.bind_area();
	}
	else if (iSbm == 'isBind') {
		this.objFlowData = Flow.objNeedAreaRoleFlow;
		var self = this;
		self.amsSubmit();
	}	
	else if (iSbm == 'popAreaRole') {
		var self = this,
			_sServiceType = '';
             var roleIflowId = self.objFlowData.iFlowId;
             if (roleIflowId == 5308 || roleIflowId == 5310) {
                 ams_actdesc.sServiceType = 'xia';
             }
             if (roleIflowId == 5296 || roleIflowId == 5300) {
                 ams_actdesc.sServiceType = 'zl';
             }
		
		
		if(ams_actdesc.flows["f_" + roleIflowId].iNeedAreaRoleService && ams_actdesc.flows["f_" + roleIflowId].iNeedAreaRoleService != ''){
			_sServiceType = ams_actdesc.flows["f_" + roleIflowId].iNeedAreaRoleService
		}else{
			_sServiceType = ams_actdesc.sServiceType
		}
		
		roleSelector = RoleSelector.init({
		    'gameId' : _sServiceType, 
		    'isQueryRole' : true, 
		    'isShutdownSubmit' : false, 
		    'submitEvent' : function(roleObject){
			    self.objFlowData.sAreaRole = JsonObject.toJsonString(roleObject);			    
			    self.amsSubmit();
		    }
		});
		roleSelector.show();
	}
	else if (iSbm == 'noNeedAreaRole') {
		var self = this;
		self.amsSubmit();
	}
    return;
}



amsFlowClass.prototype.amsSubmit = function () {
	var self = this;
	var myDate = new Date();
	var theDay = myDate.getMonth()+1;
	var theDate = myDate.getFullYear()+''+theDay+''+myDate.getDate();
	var userLeftQual = theDate+'_QQ'+amsCookieGet('uin')+'_A'+this.objFlowData.iActivityId+'_F'+this.objFlowData.iFlowId;
	var userNotLoginQual = theDate+'_QQnull'+'_A'+this.objFlowData.iActivityId+'_F'+this.objFlowData.iFlowId;
	var userNoLeftQual = amsCookieGet(userLeftQual);
	if (userNoLeftQual == 'userNoLeftQual' && userLeftQual != userNotLoginQual) {
		var sCData = {"flowRet":{"iRet":"600"}};
		self.amsFlowBack(sCData);
		return false;
	}	
	actFlowRespon = 'responStatus'+'a'+this.objFlowData.iActivityId+'f'+this.objFlowData.iFlowId;	
    eval(actFlowRespon+"=''");
	eval("var AMSResponseStatu="+actFlowRespon);
	if (AMSResponseStatu == 'AMSRequesting') {
		return false;
	}		
	eval(actFlowRespon+"='AMSRequesting'");
	
	if (this.objFlowData.sNeedSubmitPopDiv == 'n') {
		
	}
	else {
		amsOpenRequesting();
	}
				
	if (typeof(this.objFlowData.fFlowSubmitPre) == 'function') {
		var preCheckRet = this.objFlowData.fFlowSubmitPre();
		if (preCheckRet == false) {
			return false;
		}
	}	
	sFormName = 'AMSForm'+'_a_'+this.objFlowData.iActivityId+'_f_'+this.objFlowData.iFlowId;
	if(document.getElementById(this.objFlowData.sFormName) && this.objFlowData.sFormName) {
	    sFormName = this.objFlowData.sFormName;
	}
	self.amsFrmReg(sFormName);
	var fFlowBack = 'flowClass_'+this.objFlowData.iFlowId+'.amsFlowBack';
	amsCookieSet('sAmeRefer','qq.com','0.035');
	amsCDR(this.objFlowData.FlowEngineUrl, 'POST', sFormName, fFlowBack, this.objFlowData.iFlowId);	
	//AjaxCrossDomainRequest(this.objFlowData.FlowEngineUrl, 'POST', sFormName, fFlowBack);	
}

amsFlowClass.prototype.amsFrmReg = function (frmName) {
	var self = this;
    if(document.getElementById(frmName)) {
    	self.amsFrmElement(frmName);
        return;
    }
    var form_reg = document.createElement("form");
    form_reg.action = "";
    form_reg.method = "POST";
    form_reg.id = frmName;
    form_reg.name = frmName;
    document.body.appendChild(form_reg); 
    self.amsFrmElement(frmName);	
}

amsFlowClass.prototype.amsFrmElement = function (frmName) {
    var amsForm = document.getElementById(frmName); 
    var ameActivityId = "iActivityId_"+this.objFlowData.iActivityId+"_f_"+this.objFlowData.iFlowId;
    var ameActivityName = "iActivityId";
    amsRemoveId(ameActivityId);
	var hid_actId = document.createElement("input");
	hid_actId.type="hidden";
	hid_actId.id=ameActivityId;
	hid_actId.name=ameActivityName;
	hid_actId.value= this.objFlowData.iActivityId;
	amsForm.appendChild(hid_actId);    
    var ameFlowId = "iFlowId_"+this.objFlowData.iFlowId;
    var ameFlowName = "iFlowId";
    amsRemoveId(ameFlowId);
    var hid_flowId = document.createElement("input");
    hid_flowId.type="hidden";
    hid_flowId.id=ameFlowId;
    hid_flowId.name=ameFlowName;
    hid_flowId.value= this.objFlowData.iFlowId;
    amsForm.appendChild(hid_flowId);  
    
    var ameTokenId = "sAMEToken_"+this.objFlowData.iFlowId;
    var ameTokenName = "g_tk";
    amsRemoveId(ameTokenId);
    var hid_ameTokenId = document.createElement("input");
    hid_ameTokenId.type="hidden";
    hid_ameTokenId.id=ameTokenId;
    hid_ameTokenId.name=ameTokenName;
    hid_ameTokenId.value= ameCSRFToken() || '1a2b3c';
    amsForm.appendChild(hid_ameTokenId);  
    
    if (this.objFlowData.sData) {
    	for(var inpName in this.objFlowData.sData) {
           //if (inpName != 'areaid' && inpName != 'areaname' && inpName != 'roleid' && inpName != 'iSex' && inpName != 'rolename') {
    		var inpValueStr = 'this.objFlowData.sData.'+inpName;
    		var inpValue = eval(inpValueStr);
    		var inpAmsId = 'ame'+inpName+'_a_'+this.objFlowData.iActivityId+'_f_'+this.objFlowData.iFlowId;
    		amsRemoveId(inpAmsId);
			var hid_inpId = document.createElement("input");
    	    hid_inpId.type="hidden";
    	    hid_inpId.id=inpAmsId;
    	    hid_inpId.name=inpName;
    	    if (inpValue != '' && inpValue != undefined) {
        	    hid_inpId.value= encodeURIComponent(inpValue); 
        	    amsForm.appendChild(hid_inpId);
    	    }
  	    //}
    	}
    }
 
    if (this.objFlowData.sAreaRole) {
    	var objAreaRole = eval('(' + this.objFlowData.sAreaRole + ')');
    	var sAreaSubmitData = objAreaRole.submitData;
    	for(var inpName in sAreaSubmitData) {
    		var inpValueStr = 'sAreaSubmitData.'+inpName;
    		var inpValue = eval(inpValueStr); 
    		amsRemoveId(inpName);
			var hid_inpId = document.createElement("input");
    	    hid_inpId.type="hidden";
    	    hid_inpId.id=inpName;
    	    hid_inpId.name='ams_'+inpName;
    	    if (inpValue != '' && inpValue != undefined) {
    	        hid_inpId.value= encodeURIComponent(inpValue); 
    	        amsForm.appendChild(hid_inpId);
    	    }
  	    
    	}
    }
    
}

amsFlowClass.prototype.amsFlowBack = function (sData) {    
	var self = this;
	eval(actFlowRespon+"='ok'");
	amsCloseRequesting();
	var objData = sData;	
    if (this.objFlowData.sMethod == 'postByFlash' && typeof(sData) != 'object') {
	    var objData = eval('('+sData+')');
	}
    sLogSerialNum = objData.flowRet.sLogSerialNum;    
    if (objData.flowRet.iRet < 0) {
	    amsConfirm(objData.flowRet.sMsg, sLogSerialNum);
		return false;
	}
    if (objData.flowRet.iRet > 0) {  	
		var sNum = objData.flowRet.iRet;
		if (sNum == '110') {
			sIsPeakName = this.objFlowData.iActivityId + '_ame_peak';
			amsCookieSet(sIsPeakName,'isPeak',60);
		}
		if (sNum == '101') {
                  LoginManager.login();
                  return;
             }
		var fFlowSubmitFailed = this.objFlowData.fFlowSubmitFailed;
		if (typeof(fFlowSubmitFailed) == 'function') {
			fFlowSubmitFailed(objData.flowRet);
			return false;
		}	
		if (typeof(this.objFlowData.objCustomFun) != "undefined") {
			var customFun = eval("this.objFlowData.objCustomFun["+sNum+"]");//取得模块自定义函数
			if (typeof(customFun) == 'function') {
				if (sNum == '700') {
					customFun(objData.flowRet.iCondNotMetId);
				} else {
				    customFun();
				}
				return false;
			}			
		}
		if (sNum == '601') { //当一次性资格耗尽
			sNum = 600;
			var objData = {"flowRet":{"iRet":"600"}};
		}
		if (sNum == '602') { //当周期性资格耗尽
			sNum = 600;
			var objData = {"flowRet":{"iRet":"600"}};
		}
		self.amsAlertMsg(objData);
	}
    if (objData.flowRet.iRet == 0) {
          
               if (objData.flowRet.sFlowRule == '5368_5594') {
                   if  (objData.modRet.iRet > 0) { 
                      alert('转发失败，请先确认您是否开通腾讯微博或者稍后再试！');
                      return;
                   }
               }          
          
	    this.objFlowData.fFlowSubmitEnd(objData.modRet);	    
	}   

}

amsFlowClass.prototype.amsAlertMsg = function (objData) {
	var sNum = objData.flowRet.iRet;
	sLogSerialNum = objData.flowRet.sLogSerialNum;
	if (typeof(this.objFlowData.objCustomMsg) != "undefined") {
				
		var customMsg = '';
		customMsg = eval("this.objFlowData.objCustomMsg["+sNum+"]");//取得模块自定义函数
	    if (customMsg != '' && typeof(customMsg) != "undefined") {
	    	amsConfirm(customMsg, sLogSerialNum);	    	
	    	return false;
	    }		
	}
	if (sNum == '700' && objData.flowRet.sCondNotMetTips != '') {
		amsConfirm(objData.flowRet.sCondNotMetTips, sLogSerialNum);	
		return;
	}
	amsConfirm(objData.flowRet.sMsg, sLogSerialNum);
	return false;

}

function amsConfirm(msg, sLogSerialNum) {
	alert(msg); //正式环境
    return;
	if (sLogSerialNum == '' || sLogSerialNum == null) {
	    alert(msg);
	}else if (sLogSerialNum != '' && sLogSerialNum != null){		
		sConfirmMsg = msg + "\n\n\n" + "[是否需要新开页面到日志现场呢？？]";	
	    if (window.confirm(sConfirmMsg)) { //153
	    	window.open(location.protocol+'//help.ied.com/v1.3/showInfo.html#log?p='+sLogSerialNum);
	    }		
	}
	
}


function amsCookieSet(name,value,minuts) {
	 var exp = new Date();
	 var domain = document.domain;
	 exp.setTime(exp.getTime() + minuts*1000*60);
	 document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=" + "/" + ";domain=" + domain;
}

function amsCookieGet(sName) {     
    var  aCookie   =   document.cookie.split("; "); 
    for(var i=0;i<aCookie.length;i++) {      
        var aCrumb = aCookie[i].split("="); 
        if(sName == aCrumb[0]) {
            return unescape(aCrumb[1]);
        }
    }       
    return null;  
}    

function amsCookieDel(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function amsRemoveId(id) {  
    var idObject = document.getElementById(id);  
    if (idObject != null) {  
        idObject.parentNode.removeChild(idObject); 
    }
}  

function amsOpenRequesting() {
    var amsLoadingBack = document.createElement("div");
    amsLoadingBack.id = 'amsLoadingBack';
    var bWidth=parseInt(document.documentElement.scrollWidth);  
    var bHeight=parseInt(document.documentElement.scrollHeight);  
    var isIe=(document.all)?true:false; 
 	var styleStr="top:0px;left:0px;position:absolute;background:rgb(230, 245, 255);width:"+bWidth+"px;height:"+bHeight+"px;z-index:10001;";  
 	styleStr+=(isIe)?"filter:alpha(opacity=50);":"opacity:0.5;";  
 	amsLoadingBack.style.cssText=styleStr;  	
    document.body.appendChild(amsLoadingBack);
    
    var amsLoadingTip = document.createElement("div");
    amsLoadingTip.id = 'amsLoadingTip';  
    document.body.appendChild(amsLoadingTip);
    document.getElementById('amsLoadingTip').innerHTML = '<div id="coverdiv_1" style="display: block; position: absolute; z-index: 10003; overflow-x: hidden; height: auto; overflow-y: auto; border: medium none; margin: 0px; left: 616.5px; top: 419px;"><div style="overflow:hidden;" class="floater_content"><div style="text-align:left; border:#39F 1px solid; background-color:#CFF; padding:10px 20px; white-space:nowrap; display:block; margin:0px;"><img style="width:16px; height:16px;" src="//ossweb-img.qq.com/images/comm/load.gif"><span style=" margin-left:5px; font-size:12px; display:inline-table; vertical-align:middle; color:#222222;">请稍等，正在加载中...</span></div></div></div>';	
}

function amsCloseRequesting() {
    var amsLoadingTip = document.getElementById('amsLoadingTip');
    if (amsLoadingTip) {
    	document.body.removeChild(amsLoadingTip);
    }
    var amsLoadingBack = document.getElementById('amsLoadingBack');
    if (amsLoadingBack) {
    	document.body.removeChild(amsLoadingBack);
    }    
}

function ameCSRFToken() {
    var sAMEStr = amsCookieGet('skey') || 'a1b2c3';
	    hash = 5381;
	for (var i = 0, len = sAMEStr.length; i < len; ++i) {
	    hash += (hash << 5) + sAMEStr.charAt(i).charCodeAt();
	}
	return hash & 0x7fffffff;
}
/*  |xGv00|c899416678a38bacac859dfe1e477350 */