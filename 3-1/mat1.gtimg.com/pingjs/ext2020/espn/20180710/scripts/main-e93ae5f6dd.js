!function(){!function(){function e(e,t){return(/string|function/.test(typeof t)?a:o)(e,t)}function t(e,n){return"string"!=typeof e&&(n=typeof e,"number"===n?e+="":e="function"===n?t(e.call(e)):""),e}function n(e){return g[e]}function r(e){return t(e).replace(/&(?![\w#]+;)|[<>"']/g,n)}function i(e,t){if(p(e))for(var n=0,r=e.length;n<r;n++)t.call(e,e[n],n,e);else for(n in e)t.call(e,e[n],n)}function u(e,t){var n=/(\/)[^\/]+\1\.\.\1/,r=("./"+e).replace(/[^\/]+$/,""),i=r+t;for(i=i.replace(/\/\.\//g,"/");i.match(n);)i=i.replace(n,"/");return i}function o(t,n){var r=e.get(t)||c({filename:t,name:"Render Error",message:"Template not found"});return n?r(n):r}function a(e,t){if("string"==typeof t){var n=t;t=function(){return new s(n)}}var r=l[e]=function(n){try{return new t(n,e)+""}catch(r){return c(r)()}};return r.prototype=t.prototype=h,r.toString=function(){return t+""},r}function c(e){var t="{Template Error}",n=e.stack||"";if(n)n=n.split("\n").slice(0,2).join("\n");else for(var r in e)n+="<"+r+">\n"+e[r]+"\n\n";return function(){return"object"==typeof console&&console.error(t+"\n\n"+n),t}}var l=e.cache={},s=this.String,g={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},p=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},h=e.utils={$helpers:{},$include:function(e,t,n){return e=u(n,e),o(e,t)},$string:t,$escape:r,$each:i},f=e.helpers=h.$helpers;e.get=function(e){return l[e.replace(/^\.\//,"")]},e.helper=function(e,t){f[e]=t},"function"==typeof define?define("templateModule",[],function(){return e}):"undefined"!=typeof exports?module.exports=e:this.template=e,e.helper("count",function(e){return e+="",e.length>4?e.slice(0,e.length-4)+"\u4e07":e}),e.helper("date",function(e){e=new Date(1e3*e);var t=e.getMonth()+1,n=e.getDate(),r=1===(e.getHours()+"").length?"0"+e.getHours():e.getHours(),i=1===(e.getMinutes()+"").length?"0"+e.getMinutes():e.getMinutes();return t+"\u6708"+n+"\u65e5  "+r+":"+i}),e.helper("date2",function(e){e=new Date(1e3*e);var t=e.getMonth()+1,n=e.getDate();1===(e.getHours()+"").length?"0"+e.getHours():e.getHours(),1===(e.getMinutes()+"").length?"0"+e.getMinutes():e.getMinutes();return t+"-"+n}),e.helper("date3",function(e){e=new Date(1e3*e);var t=(e.getMonth()+1,e.getDate(),1===(e.getHours()+"").length?"0"+e.getHours():e.getHours()),n=1===(e.getMinutes()+"").length?"0"+e.getMinutes():e.getMinutes();return t+":"+n}),e.helper("date4",function(e){e=new Date(1e3*e);var t=(e.getMonth()+1,e.getDate(),1===(e.getHours()+"").length?"0"+e.getHours():e.getHours(),1===(e.getMinutes()+"").length?"0"+e.getMinutes():e.getMinutes());return _second=1===(e.getSeconds()+"").length?"0"+e.getSeconds():e.getSeconds(),t+":"+_second}),e.helper("timer",function(e){var t=1===(Math.round(e%60)+"").length?"0"+Math.round(e%60):Math.round(e%60)+"",n=1===(Math.round(e/60%60)+"").length?"0"+Math.round(e/60%60):Math.round(e/60%60)+"",r=1===(Math.round(e/60/60)+"").length?"0"+Math.round(e/60/60):Math.round(e/60/60)+"";return r+":"+n+":"+t}),e.helper("upCase",function(e){for(var t=e.toString(),n=e.toString().length,r=[],i=["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"],u=0;u<n;u++)r.push(i[t.charAt(u)]);return r.join("")}),e.helper("livetype",function(e){var t=["","\u56fe\u6587\u76f4\u64ad","\u97f3\u9891\u76f4\u64ad","\u89c6\u9891\u76f4\u64ad","\u89c6\u9891\u96c6\u9526"];return t[e]}),e.helper("date",function(e){var t=e.substr(0,10);return t=t.split("-"),t[1]+"\u6708"+t[2]+"\u65e5"}),e.helper("time",function(e){return e.substr(11,5)}),e.helper("len1",function(e){return e>50?50:e}),e.helper("len2",function(e){return e>8?8:e}),e.helper("len3",function(e){var t={100000:8,CBA:8,8:4,21:3,23:4,22:4,24:3,208:3,5:2,605:2};return t[e]?t[e]:0}),e.helper("sliceTile",function(e){var t;return t=e.title.length>=27?e.title.slice(0,27)+"...":e.title}),e("match-team",'{{each match as value i}} <div class="txt"> <h4>\u961f\u540d\uff1a{{value.team1.name}}</h4> </div> {{/each}} '),e("match","{{each data as value i}} {{value.date}} {{include './match-team' value}} {{/each}}"),e("news-article-nunjucks",'<div class="txt"> <h4>\u666e\u901a\u6587\u7ae0\uff1a{{value.title}}</h4> </div>'),e("news-article",'<div class="txt"> <h4>\u666e\u901a\u6587\u7ae0\uff1a{{title}}</h4> </div>'),e("news-pic-nunjucks",'<div class="pic"> <h4>\u7ec4\u56fe\u6587\u7ae0\uff1a{{value.title}}</h4> </div>'),e("news-pic",'<div class="pic"> <h4>\u7ec4\u56fe\u6587\u7ae0\uff1a{{title}}</h4> </div>'),e("news","{{each data as value i}} {{if value.data_type == 1}} {{include './news-article' value}} {{else if value.data_type == 2}} {{include './news-pic' value}} {{else}} {{include './news-article' value}} {{/if}} {{/each}}")}(),define("app/app",["sportLogin"],function(){}),define("main",["require","templateModule","app/app"],function(e,t){}),require.config({baseUrl:"./scripts/",paths:{Tabs:"//mat1.gtimg.com/sports/qqfocus/tab",qqfocus:"//mat1.gtimg.com/sports/qqfocus/jquery.qqfocus.0.3",sportLogin:"//mat1.gtimg.com/pingjs/ext2020/dc2017/dist/sportInfo/sportLogin",txplayer:"//vm.gtimg.cn/tencentvideo/txp/js/txplayer",txvlive:"//vm.gtimg.cn/tencentvideo/txvlive/2017/txvlive",tvp:"//imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2_jq",qqscroll:"//mat1.gtimg.com/sports/qqfocus/qqscroll"}}),require(["main"]),define("config",function(){})}();
//# sourceMappingURL=main-e93ae5f6dd.js.map
/*  |xGv00|0c044f0a356a9363208080902e06e3d5 */