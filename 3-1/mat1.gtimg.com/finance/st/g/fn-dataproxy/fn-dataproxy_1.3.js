/*
 * @author <a href="mailto:staurenliu@tencent.com">stauren</a>
 * @revision 7336
 * @version 1.3
 */
var _fdp_isJsReady=function(){return false},_fdp_getDataByUrl=function(){};__.register("fn-dataproxy","1.3",["fn-base"],function(){var j=false,c=false,b=0,e=__,a=e.config.win,k=e.Dom,i=e.Event,g=e.Lang,h=function(o){try{var l=_fdp_conf.swfId,p=o.fun||"sendData";l=k.f(l);l[p](o)}catch(m){}},d=a._fdp_conf||{},f=[false,false,false,false];d.base1=d.base1||"http://data.gtimg.cn/flashdata/hushen";d.base2=d.base2||"http://qt.gtimg.cn";d.ready=true;_fdp_isJsReady=function(){return j?d:{ready:false}};_fdp_getDataByUrl=function(o){var n=o.url,m="flash_data",l=false;if(!n){o.status=404;h(o)}if(o.name){m=o.name}else{if(d.code&&n.indexOf(d.base1)<0){m="v_"+(d.prefix?d.prefix:"")+d.code}}if(a[m]){if(o.needRefresh===true){a[m]=null}else{setTimeout(function(){o.status=200;o.data=m+'="'+a[m]+'";\n';h(o)},10);return}}n=n.replace(/\.txt\?/,".js?");e.load(n,function(){if(a[m]){o.data=m+'="'+a[m]+'";\n';o.status=200;a[m]=null}else{o.status=404}if(!l){h(o);l=true}},{charset:"gbk"});setTimeout(function(){if(!l){o.status=404;h(o)}},3000)};a._fdp_load=function(s){if(!j){return}s=parseInt(s);s=s>0&&s<5?s:1;var p=_fdp_conf.ctnPrefix,q=k.f,n,o,m,l,t="1",u={1:function(){_fdp_conf.type="daily"},2:function(){_fdp_conf.type="weekly"},3:function(){_fdp_conf.type="monthly"},4:function(){t="0"}};n=q(_fdp_conf.swfId);u[s]();try{n.refresh_swf(t);n.refresh_kline(t)}catch(r){}};a._fdp_init=function(l){if(!c){c=true;l=k.f(l);l.style.background="#fff";var m=_fdp_conf.loaderUri||"http://data.gtimg.cn/web/load.swf";l.innerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="" id="_fdp_swfobj" width=505 height=330><param name="wmode" value="transparent"><param name="movie" value="###swf###"><param name="allowScriptAccess" value="always"> <embed play="false" swliveconnect="true" allowscriptaccess="always" name="sample" id="_fdp_swfemb" src="###swf###" quality="high" bgcolor="#FFFFFF" width="505" height=330 type="application/x-shockwave-flash" allowScriptAccess="always" wmode="transparent" /></object>'.replace(/###swf###/g,m+"?maxage="+_fdp_conf.swf_load_maxage);a.setTimeout(function(){j=true},10)}}});/*  |xGv00|37969e036141b8dc762d9d9c39371f1f */