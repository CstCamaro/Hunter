(function(){var $=function(objName){if(document.getElementById){return document.getElementById(objName)}else{return document.all.objName}},isIE=navigator.appVersion.indexOf("MSIE")!=-1?true:false,ie6=navigator.appVersion.indexOf("MSIE 6.0")!=-1?true:false,B=function(){var a={},b=navigator.userAgent;a.win=b.indexOf("Windows")||b.indexOf("Win32");a.ie6=b.indexOf("MSIE 6")&&!b.indexOf("MSIE 7")&&!b.indexOf("MSIE 8");a.ie8=b.indexOf("MSIE 8");a.ie=b.indexOf("MSIE");a.opera=window.opera||b.indexOf("Opera");a.safari=b.indexOf("WebKit");a.chrome=b.indexOf("Chrome");a.ipad=b.indexOf("iPad");a.mac=b.indexOf("Mac");a.firefox=b.indexOf("Firefox");return a}(),E=function(a){a=window.event||a;return{clone:true,stop:function(){if(a&&a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}},prevent:function(){if(a&&a.preventDefault){a.preventDefault()}else{a.returnValue=false}},target:a.target||a.srcElement,x:a.clientX||a.pageX,y:a.clientY||a.pageY,button:a.button,key:a.keyCode,shift:a.shiftKey,alt:a.altKey,ctrl:a.ctrlKey,type:a.type,wheel:a.wheelDelta/120||-a.detail/3}},isParent=function(obj,parentObj){while(obj!=undefined&&obj!=null&&obj.nodeName.toLocaleUpperCase()!="BODY"){if(obj==parentObj){return true}obj=obj.parentNode}return false},pageHeight=function(){return document.body.scrollHeight||document.documentElement.scrollHeight},windowHeight=function(){var d=document.documentElement;return self.innerHeight||d&&d.clientHeight||document.body.clientHeight},scrollY=function(a){var d=document.documentElement;if(a){var c=a.parentNode,e=a.scrollTop||0;if(a==b){e=scrollY()}return c?e+scrollY(c):e}return self.pageYOffset||d&&d.scrollTop||document.body.scrollTop},getY=function(a){return a.offsetParent?a.offsetTop+getY(a.offsetParent):a.offsetTop},addEvent=function(obj,eventType,func){if(obj.addEventListener){obj.addEventListener(eventType,func,false)}else{obj.attachEvent("on"+eventType,func)}},delEvent=function(obj,eventType,func){if(obj.removeEventListener){obj.removeEventListener(eventType,func,false)}else{obj.detachEvent("on"+eventType,func)}},loadJs=function(file,callback){var _doc=document.getElementsByTagName("head")[0];var js=document.createElement("script");js.setAttribute("type","text/javascript");js.setAttribute("src",file);_doc.appendChild(js);if(!
/*@cc_on!@*/
0){js.onload=function(){callback()}}else{js.onreadystatechange=function(){if(js.readyState=="loaded"||js.readyState=="complete"){js.onreadystatechange=null;callback&&callback()}}}return false},cookie=function(name,value,expires,path,domain){if(arguments.length==1){var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr!=null){return decodeURIComponent(arr[2])}return null}else{if(!arguments[1]){document.cookie=name+"=11"+((path)?"; path="+path:"; path=/")+((domain)?"; domain="+domain:"")+"; expires=Fri, 02-Jan-1970 00:00:00 GMT"}else{e="";if(!expires){e=new Date;e.setTime(e.getTime()+24*60*60*1000);e="; expires="+e.toGMTString()}document.cookie=name+"="+value+((expires)?"; expires="+expires.toGMTString():e)+((path)?"; path="+path:"; path=/")+((domain)?";domain="+domain:"")}}},readStyle=function(obj,name){if(obj.style[name]){return obj.style[name]}else{if(obj.currentStyle){return obj.currentStyle[name]}else{if(document.defaultView&&document.defaultView.getComputedStyle){var d=document.defaultView.getComputedStyle(obj,null);return d.getPropertyValue(name)}else{return null}}}},style={setOpacity:function(obj,opacity){if(typeof(obj.style.opacity)!="undefined"){obj.style.opacity=opacity}else{obj.style.filter="Alpha(Opacity="+(opacity*100)+")"}}},extend={show:function(obj,time){if(readStyle(obj,"display")=="none"){obj.style.display="block"}style.setOpacity(obj,0);time=time||200;var opacity=0,step=time/20;clearTimeout(obj.showT);obj.showT=setTimeout(function(){if(opacity>=1){style.setOpacity(obj,1);return}opacity+=1/step;style.setOpacity(obj,opacity);obj.showT=setTimeout(arguments.callee,20)},20)},hide:function(obj,time){time=time||200;style.setOpacity(obj,1);var opacity=1,step=time/20;clearTimeout(obj.showT);obj.showT=setTimeout(function(){if(opacity<=0){obj.style.display="none";style.setOpacity(obj,0);return}opacity-=1/step;obj.showT=setTimeout(arguments.callee,20)},20)},actPX:function(obj,key,start,end,speed,endFn,u){if(typeof(u)=="undefined"){u="px"}clearTimeout(obj["_extend_actPX"+key.replace(/\-\.\=/,"_")+"_timeOut"]);if(start>end){speed=-Math.abs(speed)}else{speed=Math.abs(speed)}var now=start;var length=end-start;obj["_extend_actPX"+key.replace(/\-\.\=/,"_")+"_timeOut"]=setTimeout(function(){now+=speed;var space=end-now;if(start<end){if(space<length/3){speed=Math.ceil(space/3)}if(space<=0){obj[key]=end+u;if(endFn){endFn()}return}}else{if(space>length/3){speed=Math.floor(space/3)}if(space>=0){obj[key]=end+u;if(endFn){endFn()}return}}obj[key]=now+u;obj["_extend_actPX"+key.replace(/\-\.\=/,"_")+"_timeOut"]=setTimeout(arguments.callee,20)},20)}};var isClicked=false,isClosed=false,isOpened=false,isOneOpened=false,pH=pageHeight(),wH=windowHeight(),isAutoOpen=null,param={},isSub=false,isIn=false,referrer=document.referrer||"",date=new Date(),Day=date.getDate(),subDay=cookie("subDay_"+sub_id)||"",c_sub_id=cookie("c_sub_id"+sub_id)||"",sOp="";function TUBD_tips(){}TUBD_tips.prototype={init:function(a){var _this=this;_this.importCss();_this.createHTML()},showInfo:function(){if(isOpened){return}extend.hide($("subscription-btn"),50);extend.actPX($("subscription").style,"left",-288,0,20);isOpened=true;isClosed=false;isOneOpened=true},hideInfo:function(){clearTimeout(isAutoOpen);if(isClosed){return}setTimeout(function(){extend.show($("subscription-btn"),50)},250);extend.actPX($("subscription").style,"left",0,-288,20);isClosed=true;isOpened=false},createHTML:function(){var _div=document.createElement("div");_div.innerHTML='<div class="subscription" id="subscription"><div class="subscription-body" id="subscription-body"><a href="javascript:void(0)" class="subscription-btn" id="subscription-btn" bossTips="pageTipsOpen"></a><div class="subscription-info" id="subscription-info"><div class="subscription-hd"><h3 id="sub-title"></h3><a href="javascript:void(0)" class="subscription-close" id="subscription-close" bossTips="pageTipsClose">\u5173\u95ed</a></div><div class="subscription-bd" id="subscription-bd"><a class="subscription-btn1 r" href="javascript:void(0)" id="sub-btn"></a></div></div></div></div>';document.body.appendChild(_div)},importCss:function(){var style=document.createElement("style");var styles=".subscription { position:fixed; display:none;top:"+(wH/4+100)+'px; left:-288px;z-index:99999;background:#fff;_position:absolute; font-size:12px }.subscription ul { padding:0; margin:0; list-style: none }.subscription-body { float:left; position:relative }.subscription a{color:#fff !important;text-decoration:none !important }.subscription .l { float:left }.subscription .r { float:right}.subscription-btn, .subscription-btn1, .subscription-close { background:url(//mat1.gtimg.com/view/curls/images/s_subscription.png) no-repeat 0 0 } .subscription-btn { background-position:-18px -27px; width:12px; height:67px; cursor:pointer; text-align:center; color:#fff; padding-top:8px; font-size:12px; position:absolute; right:-28px; z-index:3;line-height:15px; padding:8px 8px 0 }.subscription-btn1 { background-position:0 0; background-repeat:repeat-x; padding:0 8px; height:21px; text-align:center;line-height:21px;color:#fff}.subscription-btn:link,.subscription-btn:hover{text-decoration:none;}.subscription-info { padding:18px 20px 15px; line-height:24px; width:246px; float:left; border-width:1px; border-style:solid; border-color:#d0d0d0; box-shadow:1px 2px 5px #dfdfdf;}.subscription-info h3 { font-size:14px; margin:0; color:#333; font-weight:normal }.subscription-hd { font-family:"\u5fae\u8f6f\u96c5\u9ed1" }.subscription-bd { overflow:hidden; *zoon:1; font-family:"\u5b8b\u4f53" }.subscription-bd img { border:1px solid #464646; float:left; margin-right:10px }.subscription-close { position:absolute; right:5px; top:5px; width:12px; height:12px; background-position:0 -31px; line-height:99em; overflow:hidden }.subscription li { line-height:28px }.subscription input { vertical-align:middle; margin:-2px 8px 1px 0}#subscription-submit { margin-left:22px; display:inline }.subscription-bd ul { margin:7px 0}.jieyu { *zoom:1 }';(document.getElementsByTagName("head")[0]||document.body).appendChild(style);if(style.styleSheet){style.styleSheet.cssText=styles}else{style.appendChild(document.createTextNode(styles))}}};var tubdTips=new TUBD_tips();tubdTips.init();addEvent($("subscription-close"),"click",function(){if($("subscription-submit")){var list=$("subscription-bd").getElementsByTagName("li"),arr=[];for(var i=0;i<list.length;i++){var _list=list[i].getElementsByTagName("input")[0];if(_list.checked||_list.checked=="checked"){arr.push(1)}else{arr.push(0)}}isOpened=false;isClosed=true;$("subscription").style.left="-288px";extend.show($("subscription-btn"),10);$("subscription-bd").innerHTML='<a class="subscription-btn1 r" href="javascript:void(0)" id="sub-btn">\u7acb\u5373\u8ba2\u9605</a>';SubscriptionHtml(1);SubscriptionBindFun(param);boss1("close_fb",arr.join(""));return false}else{tubdTips.hideInfo();sOp=isSub?"close_unsub":"close_sub";boss1(sOp);return false}});addEvent(document,"mouseover",function(e){param=isSub?{type1:"click",type2:"mouseover",time:2,action:1,sta:1}:{type1:"mouseover",type2:"click",time:false,action:0,sta:0};if($("subscription-submit")){param.time=3}var _e=E(e);var _is=isParent(_e.target,$("subscription-info"));if(_is){if(!isIn){isIn=true;clearTimeout(isAutoOpen)}else{return}}else{if(isIn){isIn=false;if(param.time){isAutoOpen=setTimeout(function(){if($("subscription-submit")){isOpened=false;isClosed=true;$("subscription").style.left="-288px";extend.show($("subscription-btn"),10);$("subscription-bd").innerHTML='<a class="subscription-btn1 r" href="javascript:void(0)" id="sub-btn">\u7acb\u5373\u8ba2\u9605</a>';SubscriptionHtml(1);SubscriptionBindFun(param)}else{tubdTips.hideInfo()}},param.time*1000)}}else{return}}});var SubscriptionHtml=function(s){var arr=[];arr.push('<ul><li><label for="subCheck1"><input type="checkbox" id="subCheck1" />\u5185\u5bb9\u4e0d\u518d\u5438\u5f15\u6211</label></li><li><label for="subCheck2"><input type="checkbox" id="subCheck2" />\u6211\u4e60\u60ef\u81ea\u5df1\u4e3b\u52a8\u5230\u7f51\u7ad9\u4e0a\u770b</label></li><li><label for="subCheck3"><input type="checkbox" id="subCheck3" />\u8ba2\u9605\u63a8\u9001\u592a\u9891\u7e41\uff0c\u5f88\u6253\u6270\u6211</label></li><li><label for="subCheck4"><input type="checkbox" id="subCheck4"/>\u4e0d\u559c\u6b22QQ \u6d88\u606f\u8fd9\u79cd\u63a8\u9001\u5f62\u5f0f</label></li><li><label for="subCheck5"><input type="checkbox" id="subCheck5"/>\u8ba2\u9605\u63a8\u9001\u7684\u65f6\u95f4\u4e0d\u5408\u9002</label></li></ul><a class="subscription-btn1 l" id="subscription-submit" href="javascript:void(0)">\u63d0\u4ea4</a>');return(function(s){switch(s){case 0:$("subscription-btn").innerHTML="\u53d6\u6d88\u8ba2\u9605";$("sub-title").innerHTML="\u60a8\u5df2\u8ba2\u9605\u300a"+sub_tit+"\u300b\uff0c\u5982\u679c\u4e0d\u60f3\u518d\u63a5\u53d7QQ\u6d88\u606f\u63d0\u9192\uff0c\u8bf7\u53d6\u6d88\u8ba2\u9605\u3002";$("sub-btn").innerHTML="\u53d6\u6d88\u8ba2\u9605";break;case 1:$("subscription-btn").innerHTML="\u7acb\u5373\u8ba2\u9605";$("sub-title").innerHTML="\u60a8\u53ef\u4ee5\u8ba2\u9605\u300a"+sub_tit+"\u300b\uff0c\u60a8\u4f1a\u901a\u8fc7QQ\u6d88\u606f\u6536\u5230\u680f\u76ee\u6700\u65b0\u5185\u5bb9\u3002";$("sub-btn").innerHTML="\u7acb\u5373\u8ba2\u9605";break;case 2:$("sub-title").innerHTML="\u60a8\u5df2\u53d6\u6d88\u8ba2\u9605\u3002\u8bf7\u95ee\u60a8\u4e3a\u4ec0\u4e48\u8981\u53d6\u6d88\u8ba2\u9605\u300a"+sub_tit+"\u300b\u5462\uff1f";$("subscription-bd").innerHTML=arr.join("");addEvent($("subscription-submit"),"click",function(){var list=$("subscription-bd").getElementsByTagName("li"),arr=[];for(var i=0;i<list.length;i++){var _list=list[i].getElementsByTagName("input")[0];if(_list.checked||_list.checked=="checked"){arr.push(1)}else{arr.push(0)}}isOpened=false;isClosed=true;$("subscription").style.left="-288px";extend.show($("subscription-btn"),10);$("subscription-bd").innerHTML='<a class="subscription-btn1 r" href="javascript:void(0)" id="sub-btn">\u7acb\u5373\u8ba2\u9605</a>';SubscriptionHtml(1);SubscriptionBindFun(param);boss1("submit_fb",arr.join(""))});break}})(s)};var SubscriptionBindFun1=function(isSub){var s1=(isSub?"click":"mouseover"),s2=(isSub?"mouseover":"click");$("subscription-btn")["on"+s1]=function(){tubdTips.showInfo();sOp=isSub?"open_unsub":"open_sub";boss1(sOp);return false};$("subscription-btn")["on"+s2]=function(){return false}};var clickFun=function(param){loadJs("http://i.match.qq.com/subscribe/setsub?id="+sub_id+"&action="+param.action+"&referrer="+escape(referrer)+"&ran="+Math.random(),function(){if(g_tcbd_subscribe&&g_tcbd_subscribe.code==0){if(g_tcbd_subscribe.data.length==0){if(isSub){SubscriptionHtml(2);param.time=3*1000;boss1("unsub")}else{SubscriptionHtml(param.sta);boss1("sub")}isSub=!isSub;SubscriptionBindFun1(isSub);return}}else{if(g_tcbd_subscribe.code==-1){alert("\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}}})};var SubscriptionBindFun=function(param){addEvent($("sub-btn"),"click",function(){param=isSub?{type1:"click",type2:"mouseover",time:2,action:1,sta:1}:{type1:"mouseover",type2:"click",time:false,action:0,sta:0};var a=MI.Login.getUin(),b=MI.S("account_mbid_"+a);if(!a||!b){MI.Login.setCallback("dy",function(){clickFun(param)});MI.AccountInfo.setCallback("dy",function(){});MI.Login.popup.src=a?"http://mini.t.qq.com/invite/quick.php?pref="+b:"http://mini.t.qq.com/mblogin_quick.htm?pref="+b;MI.Login.showPopup("dy",this)}else{clickFun(param)}})};addEvent(window,"load",function(){if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){return}loadJs("http://i.match.qq.com/subscribe/getsub?id="+sub_id+"&ran="+Math.random(),function(){if(g_tcbd_subscribe&&g_tcbd_subscribe.code==0){if(g_tcbd_subscribe.data.length>0){SubscriptionHtml(0);isSub=true}else{SubscriptionHtml(1);isSub=false}}else{SubscriptionHtml(1);isSub=false}$("subscription").style.display="block";param=isSub?{type1:"click",type2:"mouseover",time:2,action:1,sta:1}:{type1:"mouseover",type2:"click",time:false,action:0,sta:0};SubscriptionBindFun1(isSub);SubscriptionBindFun(param);date.setTime(date.getTime()+24*60*60*1000);cookie("c_sub_id"+sub_id,sub_id,date,"","qq.com")})});addEvent(window,"scroll",function(){if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){return}if(isAutoOpen||((subDay==Day)&&(c_sub_id==sub_id))||isSub||isOneOpened){return}var sH=scrollY(),pos=0;if(window.targetPos){pos=getY($(targetPos))-3*wH/4}else{pos=pH/3-1*wH/4}if(sH>pos){tubdTips.showInfo();boss1("show_sub");date.setTime(date.getTime()+24*60*60*1000);cookie("subDay_"+sub_id,Day,date,"","qq.com")}});function topFixed(){$("subscription").style.top=document.documentElement.clientHeight+document.documentElement.scrollTop-$("subscription").clientHeight-5+"px"}if(ie6){window.onscroll=topFixed}var purl=location.href,userQQ=cookie("o_cookie");function boss1(sOp){var str="",iTy=1679,referrer=document.referrer||"";if(arguments.length>1){str="&reason="+arguments[1];iTy=1678}var iurl="http://btrace.qq.com/collect?sIp=&iQQ="+userQQ+"&sBiz=subscribe&sOp="+sOp+"&iSta=&iTy="+iTy+"&iFlow=&sub_id="+sub_id+"&url="+escape(purl)+"&referer="+escape(referrer)+str+"&ran="+Math.random();rwImage_v=new Image(1,1);rwImage_v.src=iurl}})();/*  |xGv00|e2fe44883f583610b7308aad0e3488e1 */