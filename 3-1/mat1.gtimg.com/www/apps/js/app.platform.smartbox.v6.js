var defaultResult="\u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u7ed3\u679c";if(typeof AppPlatform=="undefined"){var AppPlatform=new Object()}var AppPlatform=new Object();AppPlatform.Browser={ie:/msie/.test(window.navigator.userAgent.toLowerCase()),moz:/gecko/.test(window.navigator.userAgent.toLowerCase()),opera:/opera/.test(window.navigator.userAgent.toLowerCase())};AppPlatform.Event={add:function(A,C,B){if(A.addEventListener){A.addEventListener(C,B,false)}else{A.attachEvent("on"+C,B)}},remove:function(A,C,B){if(A.removeEventListener){A.removeEventListener(C,B,false)}else{A.detachEvent("on"+C,B)}},stop:function(A){if(A.preventDefault){A.preventDefault();A.stopPropagation()}else{A.cancelBubble=true;A.returnValue=false}}};AppPlatform.Hide={hideSb:function(){AppPlatform.SmartBox.resultDiv.style.visibility="hidden";AppPlatform.SmartBox.resultDiv.style.height="2px";AppPlatform.SmartBox.flag=false}};AppPlatform.SmartBox={type:-1,inputID:-1,maxListNum:10,_sOpenType:"",g_msg:[],words:[],resultDiv:null,flag:false,textDiv:null,index:-1,newValue:"",timer:null,oldValue:"",queryValue:"",JsLoader:{load:function(B){var A=document.createElement("script");A.setAttribute("type","text/javascript");A.setAttribute("src",B);document.getElementsByTagName("head")[0].appendChild(A)}},styleInit:function(){document.write("<style>.mouseover {background:#D8ECFF;width:100%;cursor:hand;}");document.write(".mouseout {color:#000000;width:100%;background-color:#ffffff;cursor:default;}</style>");document.write("<div id='apps_smartbox_div' style='visibility:hidden;position:absolute;overflow:hidden;border:#B2D0EA 1px solid;border-top:0;background:#fff;'></div>")},trimSpace:function(A){return A.replace(/^\s+/,"").replace(/\s+$/,"")},domouseover:function(A){A.tagName=="DIV"?A.className="mouseover":A.parentElement.className="mouseover"},domouseout:function(A){A.tagName=="DIV"?A.className="mouseout":A.parentElement.className="mouseout"},doclick:function(B,A){if(this.textDiv){if(undefined!=B){this.textDiv.value=B}if(""!=A&&undefined!=A){if("new"==this._sOpenType){window.open(A)}else{if("self"==this._sOpenType){window.location.href=A}else{top.location=A}}}this.flag=false}else{return }},unique:function(D){D=D||[];var A={};for(var C=0;C<D.length;C++){var B=D[C];if(typeof (A[B])=="undefined"){A[B]=1}}D.length=0;for(var C in A){D[D.length]=C}return D},append:function(msg){with(this){var div=document.createElement("div");div.style.lineHeight="160%";div.className="mouseout";if(AppPlatform.Browser.moz){div.style.lineHeight="160%"}else{div.style.lineHeight="150%"}var word=msg.substring(msg.indexOf("^")+1);var sUrl="";var sItemStr="";var iUrlPos=word.indexOf("|");if(iUrlPos>0){sUrl=word.substr(iUrlPos+1);word=word.substr(0,iUrlPos)}words.push(word);urls.push(sUrl);if(word!=""){msg="<li style='list-style:none;width:100%;height:16px;float:left;text-align:left;margin:0px;padding:2px 0 0 5px;color:#004BCA;'>"+word.replace(newValue,"<span style='color:#ff0000;'><strong>"+newValue+"</strong></span>")+"</li><br />";div.innerHTML=msg}div.style.fontFamily="verdana";div.onmouseover=function(){if(word!=defaultResult){domouseover(this)}};div.onmouseout=function(){if(word!=defaultResult){domouseout(this)}};div.onclick=function(){if(word!=defaultResult){doclick(word,sUrl)}};resultDiv.appendChild(div)}},display:function(){with(this){queryValue=oldValue=newValue=trimSpace(textDiv.value);index=-1;words=[];urls=[];resultDiv.innerHTML="";resultDiv.style.height="2px";if(g_msg.length<=1&&g_msg[0]==""){g_msg[0]=defaultResult;append(g_msg[0])}else{for(var i=0;i<g_msg.length;i++){if(g_msg[i]!=""){append(g_msg[i])}}}if(flag&&newValue!=""){var l=textDiv.offsetLeft;var t=textDiv.offsetTop+textDiv.offsetHeight;var tmp=textDiv;while(tmp=tmp.offsetParent){l+=tmp.offsetLeft;t+=tmp.offsetTop}if(AppPlatform.Browser.moz){resultDiv.style.height=(resultDiv.childNodes.length*22)-2+"px";resultDiv.style.width=textDiv.offsetWidth-2+"px"}else{resultDiv.style.height=(resultDiv.childNodes.length*22)+"px";resultDiv.style.width=textDiv.offsetWidth+"px"}if(resultDiv.innerHTML!=""){resultDiv.style.left=l+"px";resultDiv.style.top=t+"px";resultDiv.style.visibility="visible"}else{resultDiv.style.visibility="hidden"}}else{resultDiv.style.visibility="hidden"}}},_start:function(){with(this){var Params="num="+encodeURIComponent(maxListNum);Params+="&key=";Params+=encodeURIComponent(type+"|"+trimSpace(textDiv.value));var url="http://static.apps.qq.com/smartbox/smartword.php?"+Params;AppPlatform.SmartBox.JsLoader.load(url);flag=true}},_close:function(){this.index=-1;this.words=[];this.urls=[];this.g_msg=[];this.oldValue=this.newValue=this.queryValue="";this.resultDiv.style.visibility="hidden"},_detect:function(){with(this){if(timer!=null){clearTimeout(timer);timer=null}this.timer=setTimeout(function(){if(!flag||trimSpace(textDiv.value).length==0){_close()}else{if(oldValue!=textDiv.value){_start()}}},300)}},_handleKeyEvent:function(e){with(this){var len=resultDiv.childNodes.length-1;if(len==-1){return }if(e.keyCode==40){AppPlatform.Event.stop(e);if(index>=0){resultDiv.childNodes[index].className="mouseout"}index++;if(index==len+1){index=-1;oldValue=textDiv.value=queryValue}else{resultDiv.childNodes[index].className="mouseover";if(words[index]!=undefined&&words[index]!=defaultResult){oldValue=textDiv.value=words[index]}}}else{if(e.keyCode==38){AppPlatform.Event.stop(e);if(index>=0){resultDiv.childNodes[index].className="mouseout";index--}else{index=len}if(index==-1){oldValue=textDiv.value=queryValue}else{resultDiv.childNodes[index].className="mouseover";if(words[index]!=undefined&&words[index]!=defaultResult){oldValue=textDiv.value=words[index]}}}else{if(e.keyCode==13){AppPlatform.Event.stop(e);if(-1==index){index=0}if(index>=0&&index<=len){if(words[index]!=undefined&&words[index]!=defaultResult){textDiv.value=words[index]}}resultDiv.style.visibility="hidden";if(urls[index]!=""){doclick(words[index],urls[index])}flag=false}else{if(e.keyCode==27){flag=false;resultDiv.innerHTML="";resultDiv.style.height="2px";resultDiv.style.visibility="hidden"}}}}}},searchclick:function(){with(this){var len=resultDiv.childNodes.length-1;if(len==-1){return }if(-1==index){index=0}if(index>=0&&index<=len){if(words[index]!=undefined&&words[index]!=defaultResult){textDiv.value=words[index]}}resultDiv.style.visibility="hidden";if(urls[index]!=""){doclick(words[index],urls[index])}flag=false}},init:function(_type,_inputID,maxNum,OpenType){with(this){window.onerror=function(){return true};styleInit();type=_type;inputID=_inputID;maxListNum=maxNum;_sOpenType=OpenType;resultDiv=document.getElementById("apps_smartbox_div");if(!resultDiv){return }textDiv=document.getElementById(inputID);textDiv.type="text";textDiv.autocomplete="off";if(AppPlatform.Browser.ie){AppPlatform.Event.add(textDiv,"keydown",function(e){flag=true;_handleKeyEvent(e);if(e.keyCode!=27){_detect()}});AppPlatform.Event.add(textDiv,"paste",function(e){flag=true;_handleKeyEvent(e);if(e.keyCode!=27){_detect()}});AppPlatform.Event.add(textDiv,"keyup",function(e){if(e.keyCode!=27){_detect()}})}else{AppPlatform.Event.add(textDiv,"input",function(e){flag=true;_handleKeyEvent(e);if(e.keyCode!=27){_detect()}});AppPlatform.Event.add(textDiv,"keydown",function(e){_handleKeyEvent(e)})}AppPlatform.Event.add(textDiv,"blur",function(){flag=false;_detect()});AppPlatform.Event.add(document,"click",AppPlatform.Hide.hideSb)}},_callBack:function(ResStr){with(this){if(typeof (ResStr)!="undefined"){g_msg=ResStr.split("\t");if(0==g_msg.length){g_msg=[];return false}if(g_msg.length>maxListNum){g_msg.splice(maxListNum,g_msg.length-maxListNum)}display()}}}}
/*  |xGv00|a0f5d60643a36d29b126c46b15cda115 */