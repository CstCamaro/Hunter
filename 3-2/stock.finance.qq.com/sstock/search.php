   
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>搜索结果页_财经频道_腾讯网</title>
<link href="http://finance.qq.com/css/stock/search_v1.1.css" rel="stylesheet" type="text/css" />
</head>
<body>
<style>
#miniNav{height:22px;border-bottom:1px solid #e6e6e6;background:#f8f8f8;color:#a1a0a0;text-align:center;line-height:14px;}
#miniNav img{margin-bottom:4px;border:0;}
#miniNav div{width:894px;margin:0 auto;font-size:12px;padding-top:4px; font-family:"宋体","Arial Narrow";}
#miniNav span{display:block;float:right;}
#miniNav a{color:#a1a0a0;margin:0 3px;font-size:12px;text-decoration:none;padding:1px 3px 1px 3px;display:block;float:right;}
#miniNav a:hover{color:#fff;background:#929292;}
#miniNav .qq{font-family:Verdana;margin-top:-2px;}
	
body{margin:0;padding:0;font-size:12px;color:#333;font-family:"宋体";background-color:#fff;}
div,ul,li,form,dl,dt,dd,p,h1,h2,input,select{margin:0;padding:0}
ul,li{list-style:none;}
img{border:none;}
input,select{font-size:12px;font-family:"宋体";}
a{color:#333;text-decoration:none;}
a:hover{color:#C00;text-decoration:underline;}

.fc1,.fc1 a{color:#1044BA;}
.fc2,.fc2 a{color:#fe0002;}
.fc10,.fc10 a{color:#333;}
.fc1 a:hover,.fc2 a:hover,.fc10 a:hover{color:#B00;}
.fUL,.fUL a{text-decoration:underline;}
.wrap:after,.cnt:after{content:'';display:block;clear:both;height:0}.wrap,.cnt{zoom:1;overflow:auto}
.wrap{width:960px;margin:0 auto}
/* navigator */
#Nav .navWrap{width:960px;height:29px;overflow:hidden;background:url(http://mat1.gtimg.com/finance/stock_hq/mapnav.png) 0 -76px repeat-x;}
#Nav .navWrap ul,#Nav .navWrap li{display:inline}
#Nav .navWrap li{padding:11px 14px 5px 12px;padding:7px 14px 5px 12px;line-height:29px;background:url(http://mat1.gtimg.com/finance/stock_hq/hk_nav_line.gif) right center no-repeat}
#Nav .navWrap li.nobg{background:none}
#Nav .navWrap li a{padding:3px 4px 0px;color:#E3F0FF;line-height:17px;background:none}
#Nav .navWrap li a:hover{padding:3px 4px 0px;color:#1C3A6C;text-decoration:none;background:#A3C2E1}

#stock_box1{height:29px;line-height:29px;padding-left:9px;clear:both;width:auto;}
  #stock_box1 #arr_up,#stock_box1 #arr_do{float:left;width:16px;height:15px;line-height:15px;overflow:hidden; cursor:pointer;margin:6px 7px 0 0;background:url(http://mat1.gtimg.com/finance/stock_hq/mapnav.png) no-repeat;}
  #stock_box1 #arr_up{background-position:0 -105px;}
  #stock_box1 #arr_do{background-position:-17px -105px;}
  #stock_box1 #word{font-family:Tahoma;color:#BDCBE0;float:left;height:29px;line-height:29px;overflow:hidden;}
  #stock_box1 #word a{color:#1145BB;margin-left:2px;}
  #stock_box1 #word a:hover{color:#C00;}
  #stock_box1 #word span{margin-right:3px;}
  #stock_box1 #word p{color:#333;}

.icon_stock {background:url(http://mat1.gtimg.com/finance/stock_hq/mapnav.png) no-repeat;width:120px;height:25px;display:block;}

.alR{text-align:right;}
.table_index {border:1px solid #CED7E6;background:url(http://mat1.gtimg.com/finance//stock/quotpage/navSmartbox.png) 0 -29px repeat-x;}
.table_index td.title {font-size:14px;font-weight:bold;line-height:25px;height:25px;width:67px;}
#top-smartbox-ctn {padding-left:10px;height:25px;}
#top-smartbox-ctn form {float:left;z-index:1;}
.nav-smartbox-ctn {color:#363636;cursor:pointer;font-size:14px;height:25px;width:61px; border:none; background:url(http://mat1.gtimg.com/finance//stock/quotpage/navSmartbox.png) -172px 0 no-repeat;}
.nav-smartbox-value {float:left;height:25px;line-height:25px;text-align:center;width:46px;}
.nav-smartbox-icon {background:url(http://mat1.gtimg.com/finance/stock_hq/select.png) no-repeat scroll -13px 0 transparent;border-left:1px solid #FBFCFB;float:left;height:21px;width:13px; margin-top:2px;}
.nav-smartbox-list {float:left;position:absolute;left:0px;top:18px;display:none;width:60px;z-index:100;background-color:#FFF;}
.nav-smartbox-list div {border:1px solid #D0CECE;text-align:left;}
.nav-smartbox-list ul {list-style:none outside none;padding:0pt;margin:0pt;}
.nav-smartbox-list ul li {padding-left:8px;line-height:20px;height:20px;}
.nav-smartbox-query {line-height:25px;padding-left:4px;width:167px;height:25px;color:#B1B1B1;font-size:14px; background:url(http://mat1.gtimg.com/finance//stock/quotpage/navSmartbox.png) 0 0 no-repeat; border:none;}
.nav-smartbox-submit {cursor:pointer;border:none;width:66px;height:25px;background:url(http://mat1.gtimg.com/finance//stock/quotpage/navSmartbox.png) -234px 0 no-repeat transparent; font-size:14px;}

</style>
<script language="JavaScript">
var fFnAddFav=function(c,a,d){var b=navigator.userAgent;if(b.match(/Gecko/)){window.sidebar.addPanel(d,a,"")}else{if(b.match(/MSIE/)){window.external.AddFavorite(a,d)}else{if(b.match(/Opera/)){c.setAttribute("href",a);c.setAttribute("title",d);c.setAttribute("rel","sidebar");c.click()}else{alert("Please press Ctrl+D to add bookmark.")}}}},fFnAddHp=function(b){if(document.all){document.body.style.behavior="url(#default#homepage)";document.body.setHomePage(b)}else{if(window.sidebar){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(c){alert("this action was aviod by your browser\uff0cif you want to enable\uff0cplease enter about:config in your address line,and change the value of signed.applets.codebase_principal_support to true")}}var a=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);a.setCharPref("browser.startup.homepage",b)}}};
</script>
<div id="miniNav">
		<div><a target="_top" onclick="fFnAddHp(location.href)" href="javascript:void(0)">设为首页</a><span>·</span><a href="javascript:void(0)" onClick="fFnAddFav(this,location.href,document.title);">收藏本页</a><span>·</span><a target="_blank" href="http://www.qq.com/">腾讯网首页</a></div>
</div>
<table width="960" height="33" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="125" align="right"><a href="http://finance.qq.com/stock/" target="_blank"><span class="icon_stock"></span></a></td>
    <td width="20" align="right"></td>
    <td class="fc1" style="text-align:right;padding-right:40px;"><a target="_blank" href="http://finance.qq.com/stock/college/index.htm" class="fUL">股民学堂</a> ·<a href="http://stock.qzone.qq.com/" target="_blank" class="fUL">官方博客</a> ·<a target="_blank" href="http://support.qq.com/beta2/simple/write.html?fid=390" class="fUL">意见反馈</a></td>
    </td>
  </tr>
</table>
<div id="Nav" class="wrap">
<div class="navWrap cnt">
<ul>
  	<li><a target="_blank" href="http://finance.qq.com/stock/">证券</a></span></li>
  	<li><a target="_blank" href="http://finance.qq.com/">财经</a></li>
    <li><a target="_blank" href="http://stockhtm.finance.qq.com/hcenter/index.htm">行情</a></li>
    <li><a target="_blank" href="http://stockhtm.finance.qq.com/hcenter/index.htm?page=1001">领涨板块</a></li>    
    <li><a target="_blank" href="http://stockapp.finance.qq.com/pstock/">自选</a></li>
    <li><a target="_blank" href="http://finance.qq.com/hk/index.htm">港股</a></li>
    <li><a target="_blank" href="http://finance.qq.com/usstock/">美股</a></li>
    <li><a target="_blank" href="http://finance.qq.com/stock/xingu/index.htm">新股</a></li>
    <li><a target="_blank" href="http://finance.qq.com/stock/sother/gonggao.htm">公告</a></li>
    <li><a target="_blank" href="http://finance.qq.com/stock/shjjd/news.htm">数据</a></li>
    <li><a target="_blank" href="http://finance.qq.com/stock/dpfx/news.htm">大盘</a></li>
    <li><a target="_blank" href="http://finance.qq.com/stock/report/">研报</a></li>
    <li><a target="_blank" href="http://finance.qq.com/stock/live/index.htm">直播</a></li>
    <li class="nobg"><a target="_blank" href="http://bbs.finance.qq.com">论坛</a></li>
</ul>
</div>
</div>
<table width="960" height="36" border="0" align="center" cellpadding="0" cellspacing="0" class="table_index">
  <tr>
<td width="415" height="36" style="border-right:1px solid #CED7E6;">
          <div id="top-smartbox-ctn">
              <form method="post" target="_blank">
                  <table cellspacing="0" cellpadding="0" border="0" align="left">
                      <tr>
          <td width="175">
              <input type="text" onfocus="if(this.value=='代码/名称/拼音'){this.value='';this.style.color='#333';}" value="代码/名称/拼音" name='cl' class="nav-smartbox-query" autocomplete="off" maxlength="11"></td>
  <td width="65">
      <div class="nav-smartbox-ctn">
                                  <div style="height:25px;float:left;width: 61px;">
                                      <div class="nav-smartbox-value">全部</div>
                                      <div class="nav-smartbox-icon" onmouseover="this.style.backgroundPosition='0px 0px'" onmouseout="this.style.backgroundPosition='-13px 0px'"></div>
                                      <div style="visibility: hidden;"><input type="hidden" value="ALL" name="qc_type" class="nav-smartbox-input"></div>
                                  </div>
                                  <div class="nav-smartbox-list">
                                      <div>
                                          <ul>
                                              <li>全部</li>
                                              <li>沪深</li>
                                              <li>港股</li>
                                              <li>基金</li>
                                              <li>美股</li>
                                              <li>期货</li>
                                      </ul>
                              </div>
                      </div>
              </div>          </td>
          <td width="80"><input type="submit" class="nav-smartbox-submit" name='submitbtn' value="股票查询"></td>
          <td>
              <a class="fc1 fUL" style="font-size:14px;" target="_blank" href="http://stockapp.finance.qq.com/pstock/">我的自选股</a>          </td>
      </tr>
    </table>
  </form>
  </div>
  </td>
    <td>
<div id="stock_box1">
  <div id="arr_up" title="点击向上滚动"></div>
  <div id="arr_do" title="点击向下滚动"></div>
  <div id="word">
  <p><a href="http://stockhtm.finance.qq.com/hqing/zhishu/000001.htm" title="上证指数:(000001)" target="_blank">上证指数:</a><span id="topindex-sh000001"></span><span></span><span></span>|<a href="http://stockhtm.finance.qq.com/hqing/zhishu/399001.htm" title="深证成指:(399001)" target="_blank">深证成指:</a><span id="topindex-sz399001"></span><span></span><span></span></p>
  <p><a href="http://stockhtm.finance.qq.com/hk/ggcx/HSI.htm" title="恒生指数:(HSI)" target="_blank">恒生指数:</a><span id="topindex-r_hkHSI"></span><span></span><span></span>|<a href="http://stockhtm.finance.qq.com/astock/ggcx/DJI.htm" title="道琼斯:(DJI)" target="_blank">道琼斯:</a><span id="topindex-usDJI"></span><span></span><span></span></p>
  <p><a href="http://stockhtm.finance.qq.com/astock/ggcx/IXIC.htm" title="纳斯达克:(IXIC)" target="_blank">纳斯达克:</a><span id="topindex-usIXIC"></span><span></span><span></span>|法国CAC:<span id="topindex-gzFCHI"></span><span></span><span></span></p>
  <p>德国DAX:<span id="topindex-gzGDAXI"></span><span></span><span></span>|日经225:<span id="topindex-gzN225"></span><span></span><span></span></p>
  <p>海峡时报:<span id="topindex-gzFTSTI"></span><span></span><span></span>|台湾加权指数:<span id="topindex-gzTWII"></span><span></span><span></span></p>
  <p> 黄金:<span id="topindex-fqUS_GC_1"></span><span></span><span></span>| 石油:<span id="topindex-fqUS_CL_1"></span><span></span><span></span></p>
</div>
</div>
</td>
  </tr>
</table><div class="mar4"></div>
<div class="page">
 <style>
     td a {color:#333333}
     td a .fc1{color:#FD4200;}
     td.fc2 a {color:#0C3B8D;}
 </style>
  <div class="l40 fs16 fntB" style="padding-left:23px; background-color:#F2F4F9;">与“<span class="fc1 fntTahoma" style="color:#FD4200"></span>”相关的股票查询结果</div>
  <table width="958" height="50" border="0" cellpadding="0" cellspacing="0">
    <tr class="fntB fs14">
      <td width="68" align="center">全部</td>
      <td width="86" class="fc2 fUL"><a class="tagclick" href="#hushen">沪深(0)</a></td>
      <td width="80" class="fc2 fUL"><a class="tagclick" href="#ganggu">港股(0)</a></td>
      <td width="86" class="fc2 fUL"><a class="tagclick" href="#jijin">基金(0)</a></td>      
      <td width="80" class="fc2 fUL"><a class="tagclick" href="#meigu">美股(0)</a></td>
      <td width="80" class="fc2 fUL"><a class="tagclick" href="#qihuo">期货(0)</a></td>      
      <td width="124"><!--<input type="text" class="input2" value="请输入关键字" id="find-input"/>--></td>
      <td><!--<input type="button" class="btn2" value="查找"  id="find-button"/>--></td>
    </tr>
  </table>
  <div class="SaLC" style="width:936px;height:31px; background-color:#F5F5F5;border:1px solid #E0E6ED;">
    <div class="maket" style="background:url(http://mat1.gtimg.com/finance/stock_hq/maket1.png) no-repeat;">沪深</div>
    <a name="hushen">&nbsp;</a>
  </div>
  <div class="box">
  <div style="text-align:center;line-height:40px;height:40px;">未找到相关股票。</div>  </div>
  <div class="SaLC clr" style="width:936px;height:31px; background-color:#F5F5F5;border:1px solid #E0E6ED;">
    <div class="maket" style="background:url(http://mat1.gtimg.com/finance/stock_hq/maket1.png) no-repeat;">港股</div>
    <a name="ganggu">&nbsp;</a>
  </div>
  <div class="box">
     <div style="text-align:center;line-height:40px;height:40px;">未找到相关股票。</div>  </div>
  <div class="SaLC clr" style="width:936px;height:31px; background-color:#F5F5F5;border:1px solid #E0E6ED;">
    <div class="maket" style="background:url(http://mat1.gtimg.com/finance/stock_hq/maket1.png) no-repeat;">基金</div>
  <a name="jijin">&nbsp;</a>    
  </div>
  <div class="box">
      <div style="text-align:center;line-height:40px;height:40px;">未找到相关基金。</div>  </div>
<div class="SaLC clr" style="width:936px;height:31px; background-color:#F5F5F5;border:1px solid #E0E6ED;">
    <div class="maket" style="background:url(http://mat1.gtimg.com/finance/stock_hq/maket1.png) no-repeat;">美股</div>
    <a name="meigu">&nbsp;</a>
  </div>
  <div class="box">
      <div style="text-align:center;line-height:40px;height:40px;">未找到相关股票。</div>    </div>
<div class="SaLC clr" style="width:936px;height:31px; background-color:#F5F5F5;border:1px solid #E0E6ED;">
    <div class="maket" style="background:url(http://mat1.gtimg.com/finance/stock_hq/maket1.png) no-repeat;">期货</div>
    <a name="qihuo">&nbsp;</a>
  </div>
  <div class="box">
      <div style="text-align:center;line-height:40px;height:40px;">未找到相关期货。</div>  </div>
    
  </div>
</div>
<div class="hr10"></div>
<script src="http://data.gtimg.cn/js/fn-loader.js"></script> 
<script language="javascript">
__.load('fn-base fn-smartbox', function() {    
    //
(function(){var c=__,b="1.0.0",d="__.app.navSmartbox",a=(function(){var p=c.Event,r=c.Dom,g=c.config.win,j=c.config.doc,h=r.f(".nav-smartbox-list"),q=r.f(".nav-smartbox-value"),f=r.f(".nav-smartbox-input"),o=r.f(".nav-smartbox-query"),e=r.f(".nav-smartbox-submit"),m={ALL:"\u5168\u90e8",GP:"\u6caa\u6df1",HK:"\u6e2f\u80a1",JJ:"\u57fa\u91d1",AS:"\u7f8e\u80a1",FT:"\u671f\u8d27"},i,k=function(){var s=c.config.ua.ie?1:-2;var t=c.config.ua.ie?23:20;h.style.left=(r.getPosition(q,"offsetLeft")+s)+"px";h.style.top=(r.getPosition(q,"offsetTop")+t)+"px"},l=function(){p.on(".nav-smartbox-list ul li","mouseover",function(t){t=t||g.event;var s=t.target||t.srcElement;s.style.backgroundColor="#9DB1C6";s.style.color="#FFFFFF"});p.on(".nav-smartbox-list ul li","mouseout",function(t){t=t||g.event;var s=t.target||t.srcElement;s.style.backgroundColor="#FFF";s.style.color="#363636"});p.on(j,"click",function(u){u=u||g.event;var s=u.target||u.srcElement,t=s.innerHTML.replace(/(^\s+)|(\s+$)/ig,"");if(s.tagName=="LI"&&s.parentNode.parentNode.parentNode==h){q.innerHTML=t;for(n in m){if(m[n]==t){f.value=n;break}}}else{if(s.className=="nav-smartbox-icon"){k();h.style.display=h.style.display!="block"?"block":"none";return}else{if(s.className=="nav-smartbox-value"){k();h.style.display=h.style.display!="block"?"block":"none";return}}}h.style.display="none"});p.on(g,"resize",function(){k()});i=new c.widget.SmartBox("top-smartbox-ctn",{attach:{form:r.f("#top-smartbox-ctn form"),type:f,query:o,submit:e}})};return{init:l}}());c.set(d,a)}());
//    
(function(){var c=__,b="1.0.0",d="__.app.boss",a=(function(){var e=c.Lang,g=c.config.win,h=function(j){var i=["http://btrace.qq.com/collect?sIp=&iQQ="];if("iQQ" in j){i.push(j.iQQ)}else{if(typeof(trimUin)=="function"&&typeof(pgvGetCookieByName)=="function"){i.push(trimUin(pgvGetCookieByName("o_cookie=")))}}i.push("&sBiz=",("sBiz" in j)?j.sBiz:"","&sOp=",("sOp" in j)?j.sOp:"","&iSta=",("iSta" in j)?j.iSta:"","&iTy=",("iTy" in j)?j.iTy:"","&iFlow=",("iFlow" in j)?j.iFlow:"");for(var k in j){if("&sIp&iQQ&sBiz&sOp&iSta&iTy&iFlow".indexOf("&"+k)<0){i.push("&",k,"=",j[k])}}return i.join("")},f=function(i){var k=(new Date()).getTime();if(i._SENDING&&k-i._TIME<5000){setTimeout(function(){f(i)},5000);return}i._TIME=0;var j=i._LIST.pop();if(j){i._TIME=k;i._IMG.src=h(j);i._SENDING=true}};return __.Class.extend({_CFG:{},_LIST:[],_IMG:null,_TIME:0,_SENDING:false,send:function(i){var j=this;if(j._IMG===null){var l="g_BOSS_IMG_"+Math.floor((Math.random()*10000000000));if(g[l]){j.send(i);return}g[l]=new Image();j._IMG=g[l];j._IMG.onload=(j._IMG.onerror=function(){j._TIME=0;j._SENDING=false;f(j)})}var k=e.clone(j._CFG);if(typeof(i)=="object"){e.objExtend(k,i)}j._LIST.push(k);f(j)},init:function(i,j){if(typeof i=="object"){this._CFG=i}if(j===true){this.send()}}})}());c.set(d,a)}());
//
(function(){var a=__;a.set("__.app.topindex");a.app.topindex=(function(){var b=a.Dom,h=a.Event,c=a.Lang,f=a.log,e=a.config.win,d=a.Table,g=d.processors;return{loadcnt:0,_fcgreen:"fc3",_fcred:"fc2",init:function(j,l,q,i,o,n,p){if(j){this._CRON=j}else{this._CRON=new a.CronLoader()}try{this.Speed=10;this.Auto=o||false;this.Timeout=n||2500;this.stopscroll=false;this.isSmoothScroll=p||false;this.LineHeight=29;this.NextButton=b.f(i||"arr_do");this.PreviousButton=b.f(q||"arr_up");this.ScrollContent=b.f(l||"word");var m=[];c.e(b.$("p",this.ScrollContent),function(s){var r=[];c.e(b.$("span",s),function(t){if(t.id.substr(0,9)=="topindex-"){r.push(t.id.substr(9))}});m.push(r)});this.names=m;this.ScrollContent.innerHTML+=this.ScrollContent.innerHTML;if(this.PreviousButton){h.on(this.PreviousButton,"click",this.GetFunction(this,"Previous"));h.on(this.PreviousButton,"mouseover",this.GetFunction(this,"MouseOver"));h.on(this.PreviousButton,"mouseout",this.GetFunction(this,"MouseOut"))}if(this.NextButton){h.on(this.NextButton,"click",this.GetFunction(this,"Next"));h.on(this.NextButton,"mouseover",this.GetFunction(this,"MouseOver"));h.on(this.NextButton,"mouseout",this.GetFunction(this,"MouseOut"))}h.on(this.ScrollContent,"mouseover",this.GetFunction(this,"MouseOver"));h.on(this.ScrollContent,"mouseout",this.GetFunction(this,"MouseOut"));if(o){this.Start()}this.inithq();if(!j){this._CRON.start()}}catch(k){}},_CRON:null,step:2,inithq:function(){var n=this.names,j=true,o=this._CRON,m=this.ScrollContent,i=this.LineHeight,l=this.step,k=this;o.subscribe({name:"topscroll",judge:function(s){var r,p=0,q;if(s===0){q=[];c.e(n,function(t){q.push(t.join(","))});this.qtName=q.join(",");p=3}else{r=Math.round(m.scrollTop/i);r=r%n.length;j=r;q=n[r];if(this.qtName!=q.join(",")){p=3}else{this.qtName=q.join(",");if(this.qtName.indexOf("sh")!=-1){p=3}else{if(this.qtName.indexOf("hk")!=-1){if(s%8){p=3}else{p=0}}else{if(this.qtName.indexOf("us")!=-1){if(s%15){p=3}else{p=0}}else{if(s%20){p=3}else{p=0}}}}}}return p},interval:4,qtName:"",onOk:function(s){var q=b.f("word"),t=b.$("p",m),r;c.e(n,function(u,p){if(j===true||p===j){r=[];c.e(b.$("span",t[p]),function(v){if(v.parentNode==t[p]){r.push(v)}});c.e(u,function(y,x){var w=e["v_"+y];w=w&&w.split("~");if(w){if("sh,sz,r_,us".indexOf(y.substr(0,2))!=-1){r[x*3].innerHTML=d.process("L_PRICE",w);r[x*3+1].innerHTML=d.process("L_PERCENT",w)}else{if("gz".indexOf(y.substr(0,2))!=-1){r[x*3].innerHTML=d.process("S_PRICE",w);r[x*3+1].innerHTML=d.process("S_PERCENT",w)}else{r[x*3].innerHTML=d.process(function(v){return g.GET_COLOR(v[5],v[6])},w);r[x*3+1].innerHTML=d.process(function(v){var z=v[6]*100/(v[5]-v[6]);return g.GET_COLOR(z.toFixed(2)+"%",v[6])},w)}}if("sh,sz,r_".indexOf(y.substr(0,2))!=-1){r[x*3+2].innerHTML=(w["37"]/10000).toFixed(2)+(y.substr(0,4)=="r_hk"?"\u4ebf\u6e2f\u5143":"\u4ebf\u5143");r[x*3+2].className="fc10"}}})}});k.Refresh();f("top scroll updated")}})},Refresh:function(){var i=this.ScrollContent.innerHTML.split(/<\/p>/i),j=i.slice(0,i.length/2).join("</p>")+"</p>";this.ScrollContent.innerHTML=j+j},Previous:function(){clearTimeout(this.ScrollTimer);this.stopscroll=true;this.Scroll("up")},Next:function(){clearTimeout(this.ScrollTimer);this.stopscroll=true;this.Scroll("down")},Start:function(){if(this.isSmoothScroll){this.AutoScrollTimer=setInterval(this.GetFunction(this,"SmoothScroll"),this.Timeout)}else{this.AutoScrollTimer=setInterval(this.GetFunction(this,"AutoScroll"),this.Timeout)}},Stop:function(){clearTimeout(this.AutoScrollTimer);this.DelayTimerStop=0},MouseOver:function(){this.stopscroll=true},MouseOut:function(){this.stopscroll=false},AutoScroll:function(){if(this.stopscroll){return}this.ScrollContent.scrollTop++;if(parseInt(this.ScrollContent.scrollTop)%this.LineHeight!=0){this.ScrollTimer=setTimeout(this.GetFunction(this,"AutoScroll"),this.Speed)}else{if(parseInt(this.ScrollContent.scrollTop)>=parseInt(this.ScrollContent.scrollHeight)/2){this.ScrollContent.scrollTop=0}clearTimeout(this.ScrollTimer)}},SmoothScroll:function(){if(this.stopscroll){return}this.ScrollContent.scrollTop++;if(parseInt(this.ScrollContent.scrollTop)>=parseInt(this.ScrollContent.scrollHeight)/2){this.ScrollContent.scrollTop=0}},Scroll:function(k){var i=parseInt(this.ScrollContent.scrollTop),j=parseInt(this.ScrollContent.scrollHeight)/2;if(k=="up"){i--}else{i++}if(i>=j){i=i>j?1:0}else{if(i<=0){i=i<0?j-1:j}}this.ScrollContent.scrollTop=i;if(i%this.LineHeight!=0){if(this.ScrollTimer){clearTimeout(this.ScrollTimer)}this.ScrollTimer=setTimeout(this.GetFunction(this,"Scroll",k),this.Speed)}else{}},GetFunction:function(i,k,j){return function(){i[k](j)}}}}())}());
//
    var _SELF=__, _WIN = _SELF.config.win,_L = _SELF.Lang,_E=_SELF.Event,
    _search = location.search;
    //smartbox
    __.app.navSmartbox.init();
    //topindex
    __.app.topindex.init();
    //boss
    var _sIput = _search.match(_L.getReg('[?|&]q=([^&]*)')); 
    var _sMarket = _search.match(_L.getReg('[?|&]t=([^&]+)'));  
    _sIput = _sIput && _sIput[1] || '';
    _sMarket = _sMarket && _sMarket[1] || 'all';
    var boss1 = new __.app.boss({
        sBiz:'finance.stock.smartbox',
        sOp:'browse',
        iSta:0,
        iTy:180,
        iFlow:Math.floor(Math.random()*1e5),
        sIput:_sIput,
        sMarket:_sMarket
    },true);
    var boss2 = new __.app.boss({
        sBiz:'finance.stock.smartbox',
        sOp:'browse',
        iSta:0,
        iTy:181,
        iFlow:Math.floor(Math.random()*1e5),
        sIput:_sIput
    });
    var boss3 = new __.app.boss({
        sBiz:'finance.stock.smartbox',
        sOp:'browse',
        iSta:0,
        iTy:186,
        iFlow:Math.floor(Math.random()*1e5),
        sMarket:_sMarket,
        sIput:_sIput    
    });
    _E.on(_SELF.config.doc,'mousedown',function(e){
        var tar = e.srcElement || e.target,
        tag = tar.tagName,id = tar.id;
        if(tag == 'A' && id.split('~')[0] == 'a'){
            var a = id.split('~');
            boss2.send({sCode:a[1],sName:a[2]});
        }else if(tag == 'A' && tar.className == 'tagclick'){
            var pos = tar.href.lastIndexOf('#'),href='all';
            if(pos >= 0){
                switch(tar.href.substr(pos+1)){
                case 'hushen': href='cn';break;
                case 'ganggu': href='hk';break;
                case 'jijin': href='jj';break;
                case 'meigu': href='us';break;
                case 'qihuo': href='qh';break;
                }
            }
            boss3.send({sSelect:href});
        }
    });
  /*
  __.Event.on(__.Dom.f('find-input'),'focus',function(){
    var o=__.Dom.f('find-input');
    if(o.value=='请输入关键字') o.value='';
  });
  __.Event.on(__.Dom.f('find-input'),'blur',function(){
    var o=__.Dom.f('find-input');
    if(o.value=='') o.value='请输入关键字';
  });
  __.Event.on(__.Dom.f('find-button'),'click',function(){
   var v=__.Dom.f('find-input').value,f=true;
   if(v=='') return;
  __.Lang.e(__.Dom.$('.box td a'),function(o){
    var t=o.innerHTML.replace(/<span[^>]+yellow[^>]+>([^<]+)<\/span>/ig,'$1'),i,a=[],st;
    for(i=0;i<v.length;i++){
    a[i]=('00' + v.charCodeAt(i).toString(16)).slice(-4);
    }
    st=t.replace(new RegExp('((<span[^>]>)?\\u'+a.join('(<\/span>)?(<span[^>]>)?\\u')+'([.]*<\/span>)?)','g'),'<span style="background-color:yellow;">$&</span>');
    if(st!=t&&f) {f=false;}
    o.innerHTML=st;
  });
  });     
  */
    
});  
</script>
<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>
<script language="javascript">
if (typeof(pgvMain) == 'function') {
	/*
	沪深行情页面 pgv_caijing_ss
	沪深指数页面 pgv_caijing_ssindex
	港股行情页面 pgv_caijing_hk
	美股行情页面 pgv_caijing_us
	自选股  pgv_caijing_pstk
	*/
	var a=[
		[/\/sstock\/ggcx\/.*\.shtml/i,"pgv_caijing_ss;"],
		[/\/hqing\/zhishu\/.*\.htm/i,"pgv_caijing_ssindex;"],
		[/\/hk\/ggcx\/.*\.htm/i,"pgv_caijing_hk;"],
		[/\/astock\/ggcx\/.*\.htm/i,"pgv_caijing_us;"],
		[/\/cgi-bin\/pstock\/show_pstock_new/i,"pgv_caijing_pstk;"]],i;
	for(i=0;i<a.length;i++){
		if (a[i].length==2&&a[i][0].test(window.location.href)) {
			vsPgvCol = a[i][1];
			break;
		}
	}
	pgvMain();
}
</script>
<div id="QQFooter">
		<ul>
		    <li> 腾讯声明：频道所载文章、数据等内容纯属作者个人观点，仅供投资者参考，并不构成投资建议。投资者据此操作，风险自担。 </li>
			<li><a href="http://www.tencent.com/">关于腾讯</a> | <a href="http://www.tencent.com/index_e.shtml">About Tencent</a> | <a href="http://www.qq.com/contract.shtml">服务条款</a> | <a href="http://adver.qq.com/">广告服务</a> | <a href="http://hr.tencent.com/">腾讯招聘</a> | <a href="http://gongyi.qq.com/">腾讯公益</a> | <a href="http://service.qq.com/">客服中心</a> | <a href="http://www.qq.com/map/">网站导航</a></li>
			<li>Copyright &copy; 1998 - 2010 Tencent Inc. All Rights Reserved</li>
			<li>腾讯公司 版权所有</li>
		</ul>
</div>
<div style="display:none;">
<!-- START NNR Site Census V5.1 -->
<!-- COPYRIGHT 2004 Nielsen // Netratings -->
<script language="JavaScript" type="text/javascript">
<!--
	var _rsCI="cn-tencent";
	var _rsCG="0";
	var _rsDT=0;
	var _rsDU=0; 
	var _rsDO=0; 
	var _rsX6=0;  
	var _rsSI=escape(window.location);
	var _rsLP=location.protocol.indexOf('https')>-1?'https:':'http:';
	var _rsRP=escape(document.referrer);
	var _rsND=_rsLP+'//secure-cn.imrworldwide.com/';

	if (parseInt(navigator.appVersion)>=4)
	{
		var _rsRD=(new Date()).getTime();
		var _rsSE=1;	
		var _rsSV="";
		var _rsSM=0.01;
		_rsCL='<scr'+'ipt language="JavaScript" type="text/javascript" src="'+_rsND+'v51.js"><\/scr'+'ipt>';
	}
	else
	{
		_rsCL='<img src="'+_rsND+'cgi-bin/m?ci='+_rsCI+'&cg='+_rsCG+'&si='+_rsSI+'&rp='+_rsRP+'">';
	}
	document.write(_rsCL);
//-->
</script>
<noscript>
<img src="//secure-cn.imrworldwide.com/cgi-bin/m?ci=cn-tencent&amp;cg=0" alt="">
</noscript>
<!-- END NNR Site Census V5.1 -->
</div></body>
</html>