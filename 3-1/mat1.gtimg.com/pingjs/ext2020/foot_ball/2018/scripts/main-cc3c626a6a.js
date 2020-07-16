!function(){!function(){function t(t,e){return(/string|function/.test(typeof e)?o:s)(t,e)}function e(t,a){return"string"!=typeof t&&(a=typeof t,"number"===a?t+="":t="function"===a?e(t.call(t)):""),t}function a(t){return h[t]}function i(t){return e(t).replace(/&(?![\w#]+;)|[<>"']/g,a)}function n(t,e){if(u(t))for(var a=0,i=t.length;a<i;a++)e.call(t,t[a],a,t);else for(a in t)e.call(t,t[a],a)}function r(t,e){var a=/(\/)[^\/]+\1\.\.\1/,i=("./"+t).replace(/[^\/]+$/,""),n=i+e;for(n=n.replace(/\/\.\//g,"/");n.match(a);)n=n.replace(a,"/");return n}function s(e,a){var i=t.get(e)||c({filename:e,name:"Render Error",message:"Template not found"});return a?i(a):i}function o(t,e){if("string"==typeof e){var a=e;e=function(){return new l(a)}}var i=d[t]=function(a){try{return new e(a,t)+""}catch(i){return c(i)()}};return i.prototype=e.prototype=f,i.toString=function(){return e+""},i}function c(t){var e="{Template Error}",a=t.stack||"";if(a)a=a.split("\n").slice(0,2).join("\n");else for(var i in t)a+="<"+i+">\n"+t[i]+"\n\n";return function(){return"object"==typeof console&&console.error(e+"\n\n"+a),e}}var d=t.cache={},l=this.String,h={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},u=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},f=t.utils={$helpers:{},$include:function(t,e,a){return t=r(a,t),s(t,e)},$string:e,$escape:i,$each:n},p=t.helpers=f.$helpers;t.get=function(t){return d[t.replace(/^\.\//,"")]},t.helper=function(t,e){p[t]=e},"function"==typeof define?define("templateModule",[],function(){return t}):"undefined"!=typeof exports?module.exports=t:this.template=t;var m;t.helper("isSameDate",function(t){var e=/([0-9\-]+) ([0-9]{2}\:)([0-9]{2})\:[0-9]+/;if("undefined"==typeof m)return m=t.replace(e,"$1"),!0;var a=t.replace(e,"$1");return a===m||(m=a,!1)}),t.helper("transfer",function(t){var e=/([0-9\-]+) ([0-9]{2}\:)([0-9]{2})\:[0-9]+/;return t.replace(e,"$2$3")}),t.helper("getCondition",function(t){var e=/([0-9\-]+) ([0-9]{2}\:)([0-9]{2})\:[0-9]+/;switch(t.period){case"PreMatch":return t.startTime.replace(e,"$2$3");case"Abandoned":return"\u5df2\u53d6\u6d88";case"Postponed":return"\u5df2\u5ef6\u671f";default:return"\u76f4\u64ad\u4e2d"}}),t.helper("getDay",function(t){var e=new Date(1e3*t),a=e.getDay(),i=e.getMonth()+1;i=i<10?"0"+i:i.toString();var n=e.getDate(),r=["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"];return r[a]+" "+i+" / "+n}),t.helper("dateFormat",function(t){var e=new Date(1e3*t),a=function(t){return parseInt(t)<10?"0"+t:t},i="";i+=e.getMonth()+1+"\u6708"+e.getDate()+"\u65e5 ";var n=["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"];return i+=n[e.getDay()]+" ",i+=a(e.getHours())+":"+a(e.getMinutes())}),t.helper("isState",function(t){return 0==t||3==t||4==t?"order":1==t?"direct":void 0}),t.helper("isStates",function(t){return 0==t.matchPeriod?t.startTime.substring(5,10):1==t.matchPeriod?"\u8fdb\u884c\u4e2d":2==t.matchPeriod?"\u5df2\u7ed3\u675f":t.startTime.substring(5,10)}),t.helper("isStates2",function(t){return 0==t.matchPeriod?t.startTime.substring(11,16):1==t.matchPeriod?t.quarter:2==t.matchPeriod?t.startTime.substring(5,10):t.startTime.substring(11,16)}),t.helper("isStateData",function(t){return t.substring(11,16)}),t.helper("getnlData",function(t){var e=t.substring(0,10).replace(/"-"/g,"/");today=new Date(e),calendar=new Date,month=calendar.getMonth();var a=new Array(100),i=new Array(12);a=new Array(2635,333387,1701,1748,267701,694,2391,133423,1175,396438,3402,3749,331177,1453,694,201326,2350,465197,3221,3402,400202,2901,1386,267611,605,2349,137515,2709,464533,1738,2901,330421,1242,2651,199255,1323,529706,3733,1706,398762,2741,1206,267438,2647,1318,204070,3477,461653,1386,2413,330077,1197,2637,268877,3365,531109,2900,2922,398042,2395,1179,267415,2635,661067,1701,1748,398772,2742,2391,330031,1175,1611,200010,3749,527717,1452,2742,332397,2350,3222,268949,3402,3493,133973,1386,464219,605,2349,334123,2709,2890,267946,2773,592565,1210,2651,395863,1323,2707,265877),i[0]=0,i[1]=31,i[2]=59,i[3]=90,i[4]=120,i[5]=151,i[6]=181,i[7]=212,i[8]=243,i[9]=273,i[10]=304,i[11]=334;var n=new Date,r=n.getFullYear();n.getMonth()+1,n.getDate(),n.getDay(),parseInt(n.getTime()/1e3);return r<100&&(r="19"+r),showCal={homescore:today.getDate()+"\u65e5 "}}),t.helper("transformDuration",function(t){var e=parseInt(t),a=0,i=0;e>60&&(a=parseInt(e/60),e=parseInt(e%60),a>60&&(i=parseInt(a/60),a=parseInt(a%60))),e<10&&(e="0"+e);var n=""+e;return a>0?(a<10&&(a="0"+a),n=""+a+":"+n):n="00:"+n,i>0&&(i<10&&(i="0"+i),n=""+i+":"+n),n}),t.helper("tenK",function(t){return parseInt(t)>1e4?(1e-4*parseInt(t,10)).toFixed(1)+"\u4e07":t}),t.helper("idtimesc",function(t){var e=t.substring(2,4),a=t.substring(5,7),i=t.substring(8,10);return e+"/"+a+"/"+i}),t.helper("timeData",function(t){var e=t.substring(2,4),a=t.substring(5,7),i=t.substring(8,10),n=t.substring(11,16);return e+"/"+a+"/"+i+" "+n}),t("integral",function(t,e){"use strict";var a=this,i=(a.$helpers,t.i),n=t.dataarrs,r=a.$escape,s="";s+=' <thead> <tr> <th width="20%">\u540d\u6b21</th> <th width="35%">\u7403\u961f</th> <th width="30%">\u80dc/\u5e73/\u8d1f</th> <th width="15%">\u79ef\u5206</th> </tr> </thead> <tbody> ';for(var i=0;i<n.length;i++)s+=' <tr class="top',s+=r(0==i?"":"1"),s+='"> <td> <i class="red',s+=r(0==i||1==i||2==i?"":2),s+='">',s+=r(i+1),s+="</i> </td> ",s+=0==i?' <td class="pic"> ':" <td> ",s+=' <a target="_blank" href="',s+=r(n[i].detailUrl),s+='"> ',0==i&&(s+=' <img class="rank" width="45" height="45" src="',s+=r(n[i].badge),s+='"> '),s+=" <p>",s+=r(n[i].name),s+="</p> </a> </td> <td>",s+=r(n[i].winMatchCount),s+="/",s+=r(n[i].planishMatchCount),s+="/",s+=r(n[i].lostMatchCount),s+="</td> <td>",s+=r(n[i].score),s+="</td> </tr> ";return s+=" </tbody> ",new l(s)}),t("integral2",function(t,e){"use strict";var a=this,i=(a.$helpers,t.i),n=t.groups,r=a.$escape,s=t.k,o=t.dataarrs,c="";c+='<table class="top-team top-team3"> <thead> <tr class="bstr" id="bstrid"> ';for(var i in n)c+=" ",0==i?(c+=' <th width="12%" class="cur2">',c+=r(n[i]),c+="</th> "):(c+=' <th width="12%">',c+=r(n[i]),c+="</th> "),c+=" ";c+=' </tr> </thead> </table> <table class="top-team top-team2"> <thead> <tr> <th width="25%">\u540d\u6b21</th> <th width="25%">\u7403\u961f</th> <th width="25%">\u80dc/\u5e73/\u8d1f</th> <th width="25%">\u79ef\u5206</th> </tr> </thead> ';for(var s in o){c+=" ",c+="A"==s?' <tbody class="tbodyfd tbodyfd4 block"> ':' <tbody class="tbodyfd tbodyfd4"> ',c+=" ";for(var i=0;i<4;i++)c+=' <tr class="top"> <td> <i class="red',c+=r(0==i||1==i?" ":2),c+='">',c+=r(i+1),c+="</i> </td> ",c+=0==i?' <td class="pic"> ':" <td> ",c+=' <a target="_blank" href="',c+=r(o[s][i].detailUrl),c+='"> ',0==i&&(c+=' <img class="rank" width="45" height="45" src="',c+=r(o[s][i].badge),c+='"> '),c+=" <p> ",c+=r(o[s][i].name),c+=" </p> </a> </td> <td> ",c+=r(o[s][i].winMatchCount),c+="/ ",c+=r(o[s][i].planishMatchCount),c+="/ ",c+=r(o[s][i].lostMatchCount),c+=" </td> <td> ",c+=r(o[s][i].score),c+=" </td> </tr> ";c+=" </tbody> "}return c+=" </table>",new l(c)}),t("integral2_sch",function(t,e){"use strict";var a=this,i=(a.$helpers,t.i),n=t.groups,r=a.$escape,s=t.k,o=t.dataarrs,c="";c+='<table class="top-team top-team3"> <thead> <tr class="bstr" id="bstrid"> ';for(var i in n)c+=" ",0==i?(c+=' <th width="12%" class="cur2">',c+=r(n[i]),c+="</th> "):(c+=' <th width="12%">',c+=r(n[i]),c+="</th> "),c+=" ";c+=' </tr> </thead> </table> <table class="top-team top-team2"> <thead> <tr> <th width="25%">\u540d\u6b21</th> <th width="25%">\u7403\u961f</th> <th width="25%">\u80dc/\u5e73/\u8d1f</th> <th width="25%">\u79ef\u5206</th> </tr> </thead> ';for(var s in o){c+=' <tbody class="tbodyfd tbodyfd4 ',c+=r("A"==s?"block":""),c+='"> ';for(var i=0;i<o[s].length;i++)c+=" ",i<=4&&(c+=' <tr class="top"> <td> <i class="red ',c+=r(0==i||1==i?" ":2),c+='">',c+=r(i+1),c+='</i> </td> <td class="',c+=r(0==i?"pic":""),c+='"> <a target="_blank" href="',c+=r(o[s][i].detailUrl),c+='"> ',0==i&&(c+=' <img class="rank" width="45" height="45" src="',c+=r(o[s][i].badge),c+='"> '),c+=" <p> ",c+=r(o[s][i].name),c+=" </p> </a> </td> <td> ",c+=r(o[s][i].winMatchCount),c+="/ ",c+=r(o[s][i].planishMatchCount),c+="/ ",c+=r(o[s][i].lostMatchCount),c+=" </td> <td> ",c+=r(o[s][i].score),c+=" </td> </tr> "),c+=" ";c+=" </tbody> "}return c+=" </table>",new l(c)}),t("integral_sch",function(t,e){"use strict";var a=this,i=(a.$helpers,t.i),n=t.dataarrs,r=a.$escape,s="";s+='<table class="top-team"> <thead> <tr> <th width="20%">\u540d\u6b21</th> <th width="35%">\u7403\u961f</th> <th width="30%">\u80dc/\u5e73/\u8d1f</th> <th width="15%">\u79ef\u5206</th> </tr> </thead> <tbody> ';for(var i=0;i<n.length;i++)s+=' <tr class="top"> <td> <i class="red',s+=r(0==i||1==i||2==i?"":2),s+='">',s+=r(i+1),s+="</i> </td> ",s+=0==i?' <td class="pic"> ':" <td> ",s+=' <a target="_blank" href="',s+=r(n[i].detailUrl),s+='"> ',0==i&&(s+=' <img class="rank" width="45" height="45" src="',s+=r(n[i].badge),s+='"> '),s+=" <p>",s+=r(n[i].name),s+="</p> </a> </td> <td>",s+=r(n[i].winMatchCount),s+="/",s+=r(n[i].planishMatchCount),s+="/",s+=r(n[i].lostMatchCount),s+="</td> <td>",s+=r(n[i].score),s+="</td> </tr> ";return s+='  </tbody> <tfoot> <tr class="nobg"> <td colspan="4"></td> </tr> <tr> <td colspan="4"> <a href="http://soccer.stats.qq.com/table.htm?type=dejia" target="_blank">\u67e5\u770b\u5168\u90e8 <i></i> </a> </td> </tr> </tfoot> </table>',new l(s)}),t("lbcont",function(t,e){"use strict";var a=this,i=(a.$helpers,t.i),n=t.datas,r=a.$escape,s="";for(var i in n)s+=' <li class="slide-item"> <a target="_blank" href="',s+=r(n[i].link),s+='"> <img src="',s+=r(n[i].lbimg),s+='"> <p>',s+=r(n[i].p),s+="</p> </a> </li> ";return new l(s)}),t("match-team",'{{each match as value i}} <div class="txt"> <h4>\u961f\u540d\uff1a{{value.team1.name}}</h4> </div> {{/each}} '),t("match","{{each data as value i}} {{value.date}} {{include './match-team' value}} {{/each}}"),t("news-article-nunjucks",'<div class="txt"> <h4>\u666e\u901a\u6587\u7ae0\uff1a{{value.title}}</h4> </div>'),t("news-article",""),t("news-pic-nunjucks",'<div class="pic"> <h4>\u7ec4\u56fe\u6587\u7ae0\uff1a{{value.title}}</h4> </div>'),t("news-pic",'<div class="pic"> <h4>\u7ec4\u56fe\u6587\u7ae0\uff1a{{title}}</h4> </div>'),t("news","{{each data as value i}} {{if value.data_type == 1}} {{include './news-article' value}} {{else if value.data_type == 2}} {{include './news-pic' value}} {{else}} {{include './news-article' value}} {{/if}} {{/each}}"),t("newTab",function(t,e){"use strict";for(var a=this,i=(a.$helpers,t.i),n=t.data,r=a.$escape,s="",i=0;i<n.length;i++)s+=' <li> <a target="_blank" class="pic" href="',s+=r(n[i].vurl),s+='"> <img src="',s+=r(n[i].img),s+='"> </a> <div class="news_txt"> <h4><a target="_blank" href="',s+=r(n[i].vurl),s+='">',s+=r(n[i].title),s+="</a></h4> <p>",s+=r(n[i].intro),s+='</p> </div> <div class="news_bar"> <spna class="time">',s+=r(n[i].publish_time),s+="</spna> </div> </li> ";return new l(s)}),t("schedule",function(t,e){"use strict";var a=this,i=a.$helpers,n=t.i,r=t.footballMatchList,s=a.$escape,o=i.isState,c=i.isStates,d=i.isStates2,h="";h+='<ul class="schenUl"> ';for(var n=0;n<r.length;n++)h+=' <li class="data ',h+=s(o(r[n].matchStatus)),h+='"> <div class="dataLeft"> <div class="match"> <span class="item ',h+=s(2!=r[n].matchPeriod?"red":"red1"),h+='">',h+=s(c(r[n])),h+='</span> <span class="state ',h+=s(2!=r[n].matchPeriod?"red":"red1"),h+='">',h+=s(d(r[n])),h+='</span> </div> <div class="match"> <span class="home-team">',h+=s(r[n].leftName),h+='</span> <span class="home-score">',h+=s(0==r[n].matchPeriod?"-":r[n].leftGoal),h+='</span> </div> <div class="match"> <span class="away-team">',h+=s(r[n].rightName),h+='</span> <span class="away-score">',h+=s(0==r[n].matchPeriod?"-":r[n].rightGoal),h+='</span> </div> </div> <div class="dataRigt"> ',2==r[n].matchPeriod?(h+=' <a href="//kbs.sports.qq.com/kbsweb/game.htm?mid=',h+=s(r[n].mid),h+='" target="_blank" >\u89c6\u9891</a> '):(h+=' <a href="//kbs.sports.qq.com/kbsweb/game.htm?mid=',h+=s(r[n].mid),h+='" target="_blank" >\u56fe\u6587\u76f4\u64ad</a> '),h+=" </div> </li> ";return h+=" </ul> ",new l(h)}),t("shooter",function(t,e){"use strict";var a=this,i=(a.$helpers,t.i),n=t.dataarrs2,r=a.$escape,s="";s+=' <thead> <tr> <th width="20%">\u540d\u6b21</th> <th width="35%">\u7403\u5458</th> <th width="30%">\u7403\u961f</th> <th width="15%">\u8fdb\u7403</th> </tr> </thead> <tbody> ';for(var i=0;i<n.length;i++)s+=' <tr class="top',s+=r(0==i?"":"1"),s+='"> <td> <i class="red',s+=r(0==i||1==i||2==i?"":2),s+='">',s+=r(i+1),s+="</i> </td> ",s+=0==i?' <td class="pic"> ':" <td> ",s+=' <a target="_blank" href="',s+=r(n[i].detailUrl),s+='"> ',0==i&&(s+=' <img class="rank" width="45" height="45" src="',s+=r(n[i].icon),s+='"> '),s+=" <p>",s+=r(n[i].name),s+="</p> </a> </td> ",s+=0==i?' <td class="pic"> ':" <td> ",s+=' <a target="_blank" href="',s+=r(n[i].detailUrl),s+='"> ',0==i&&(s+=' <img class="rank" width="45" height="45" src="',s+=r(n[i].teamLogo),s+='"> '),s+=" <p>",s+=r(n[i].teamName),s+="</p> </a> </td> <td>",s+=r(n[i].value),s+="</td> </tr> ";return s+=" </tbody> ",new l(s)}),t("shooter2",function(t,e){"use strict";var a=this,i=a.$helpers,n=t.i,r=t.dataarrs3,s=a.$escape,o=t.k,c=i.idtimesc,d=i.isStateData,h="";h+='<table class="top-team top-team3"> <thead> <tr class="bstr" id="bstrid"> ';for(var n in r)h+=" ","A"==n?(h+=' <th width="12%" class="cur2"> ',h+=s(n),h+=" </th> "):(h+=' <th width="12%%"> ',h+=s(n),h+=" </th> "),h+=" ";h+=' </tr> </thead> </table> <table class="top-team top-team2"> <thead> <tr> <th width="20%">\u6bd4\u8d5b\u65e5\u671f</th> <th width="11%">\u65f6\u95f4</th> <th width="35%">\u5bf9\u9635</th> </tr> </thead> ';for(var o in r){h+=" ",h+="A"==o?' <tbody class="tbodyfd3 block"> ':' <tbody class="tbodyfd3"> ',h+=" ";for(var n=0;n<r[o].length;n++)h+=' <tr class="top tr2"> <td class="td1"> ',h+=s(c(r[o][n].startTime)),h+=' </td> <td class="td2"> ',h+=s(d(r[o][n].startTime)),h+=' </td> <td class="td3"> <a href="//kbs.sports.qq.com/kbsweb/game.htm?mid=',h+=s(r[o][n].mid),h+='" target="_blank"> ',h+=s(r[o][n].leftName),h+=" ",h+=s(0==r[o][n].matchPeriod?"":r[o][n].leftGoal),h+=" - ",h+=s(0==r[o][n].matchPeriod?"":r[o][n].rightGoal),h+=" ",h+=s(r[o][n].rightName),h+=" </a> </td> </tr> ";h+=" </tbody> "}return h+=" </table>",new l(h)}),t("shooter2_sch",function(t,e){"use strict";var a=this,i=a.$helpers,n=t.i,r=t.dataarrs3,s=a.$escape,o=t.k,c=i.timeData,d="";d+='<table class="top-team top-team3"> <thead> <tr class="bstr" id="bstrid"> ';for(var n in r)d+=" ","A"==n?(d+=' <th width="12%" class="cur2"> ',d+=s(n),d+=" </th> "):(d+=' <th width="12%"> ',d+=s(n),d+=" </th> "),d+=" ";d+=' </tr> </thead> </table> <table class="top-team top-team2"> <thead> <tr> <th width="16%">\u6bd4\u8d5b\u65f6\u95f4</th> <th width="35%">\u5bf9\u9635</th> </tr> </thead> ';for(var o in r){d+=" ",d+="A"==o?' <tbody class="tbodyfd3 block"> ':' <tbody class="tbodyfd3"> ',d+=" ";for(var n=0;n<r[o].length;n++)d+=' <tr class="top tr2"> <td class="td1"> ',d+=s(c(r[o][n].startTime)),d+=' </td> <td class="td3"> <a href="//kbs.sports.qq.com/kbsweb/game.htm?mid=',d+=s(r[o][n].mid),d+='" target="_blank"> ',d+=s(r[o][n].leftName),d+=" ",d+=s(0==r[o][n].matchPeriod?"":r[o][n].leftGoal),d+="-",d+=s(0==r[o][n].matchPeriod?"":r[o][n].rightGoal),d+=" ",d+=s(r[o][n].rightName),d+=" </a> </td> </tr> ";d+=" </tbody> "}return d+=" </table> ",new l(d)}),t("shooter_sch",function(t,e){"use strict";var a=this,i=(a.$helpers,t.i),n=t.dataarrs2,r=a.$escape,s="";s+='<table class="top-team"> <thead> <tr> <th width="20%">\u540d\u6b21</th> <th width="35%">\u7403\u5458</th> <th width="30%">\u7403\u961f</th> <th width="15%">\u8fdb\u7403</th> </tr> </thead> <tbody> ';for(var i=0;i<n.length;i++)s+=' <tr class="top"> <td> <i class="red',s+=r(0==i||1==i||2==i?"":2),s+='">',s+=r(i+1),s+="</i> </td> ",s+=0==i?' <td class="pic"> ':" <td> ",s+=' <a target="_blank" href="',s+=r(n[i].detailUrl),s+='"> ',0==i&&(s+=' <img class="rank" width="45" height="45" src="',s+=r(n[i].icon),s+='"> '),s+=" <p>",s+=r(n[i].name),s+="</p> </a> </td> ",s+=0==i?' <td class="pic"> ':" <td> ",s+=' <a target="_blank" href="',s+=r(n[i].detailUrl),s+='"> ',0==i&&(s+=' <img class="rank" width="45" height="45" src="',s+=r(n[i].teamLogo),s+='"> '),s+=" <p>",s+=r(n[i].teamName),s+="</p> </a> </td> <td>",s+=r(n[i].value),s+="</td> </tr> ";return s+="  </tbody> </table> ",new l(s)}),t("subnav",function(t,e){"use strict";var a=this,i=(a.$helpers,t.i),n=t.datas,r=a.$escape,s="";for(var i in n)s+=' <li><a href="',s+=r(n[i].link),s+='" target="_blank">',s+=r(n[i].text),s+="</a></li> ";return s+=" ",new l(s)})}(),define("lib/libfocus",[],function(){function t(t){function a(t,e){if(o!==t){var a="-"+s.width,i="+"+s.width;"prev"===e?($(s.focusContents).eq(t-1).css({left:a}),$(s.focusContents).eq(o-1).stop(!0,!1).animate({left:i},400)):"next"===e?($(s.focusContents).eq(t-1).css({left:i}),$(s.focusContents).eq(o-1).stop(!0,!1).animate({left:a},400)):($(s.focusContents).eq(t-1).css({left:t>o?i:a}),$(s.focusContents).eq(o-1).stop(!1,!0).animate({left:t>o?a:i},400)),$(s.focusContents).eq(t-1).stop(!0,!1).animate({left:"0px"},400),$(s.tabContents).filter("."+s.currentClass).removeClass(s.currentClass).end().eq(t-1).addClass(s.currentClass),o=t}}function i(){r=window.setTimeout(function(){var t=o===c?1:o+1;a(t,"next"),o=t,i()},s.shiftTime)}function n(){window.clearTimeout(r),r=null}var r,s=$.extend({},e,t),o=1,c=s.focusContents.length;a(1),i(),$(s.tabContents).bind("mouseenter",function(){n();var t=$(this).index()+1;a(t)}),$(s.tabContents.toArray().concat(s.focusContents.toArray())).bind("mouseleave",function(){i()}),$(s.focusContents).bind("mouseenter",function(){n()}),$(s.prev).click(function(){n();var t=1===o?c:o-1;a(t,"prev"),i()}),$(s.next).click(function(){n();var t=o===c?1:o+1;a(t,"next"),i()})}var e={shiftTime:5e3,focusContents:[],tabContents:[],currentClass:"cur",prev:[],next:[],width:"800px"};return t}),define("app/getssi",["templateModule"],function(t){}),define("app/head",["dl","tvp"],function(t,e){}),define("app/Load",[],function(){function t(t){var e=$(".areaItem").eq(t),a=e.find("li").length,i=6,n=1100;a>i?e.find(".addMore").show():e.find(".addMore").hide();var r=function(t){for(var i=0;i<t;i++)e.find("li").eq(i).addClass("hover");t>=a&&e.find(".addMore").hide()};r(i),e.find(".addMore").on("click",function(){return i+=6,i<a?void r(i):void r(a)}),$(window).scroll(function(){if($(window).scrollTop()>=n){if($(window).scrollTop()<$(e).height()-300)return;e.find(".addMore").trigger("click"),n+=990}})}return t}),define("lib/animate",[],function(){var t=function(t,a,i){t.timer=setInterval(function(){var n;for(var r in a){var s=0;s="opacity"==r?Math.round(100*parseFloat(e(t,r))):parseInt(e(t,r));var o=(a[r]-s)/24;o=o>0?Math.ceil(o):Math.floor(o),s==a[r]?n=!0:(s==a[r]&&(n=!1),"opacity"==r?(t.style.opacity=(s+o)/100,t.style.filter="alpha(opacity:"+(s+o)+")"):t.style[r]=s+o+"px")}n&&(clearInterval(t.timer),i&&i())},5)},e=function(t,e){return t.currentStyle?t.currentStyle[e]:getComputedStyle(t,!1)[e]};return{animate:t}}),define("lib/Slider",["lib/animate"],function(t){var e=function(t,e){this.main=$(t).find(e.main||".ct-slider"),this.btnPrev=$(t).find(e.btnPrev||".btn-prev"),this.btnNext=$(t).find(e.btnNext||".btn-next"),this.partSize=e.partSize,this.ctWidth=0,this.curPos=-e.offsetLeft||0,this.curIndex=0,this.offsetLeft=e.offsetLeft||0,this.offsetRight=e.offsetRight||0,this.callback=e.callback,this.basicItem=e.basicItem,this._init()};return e.prototype._init=function(){this._initPrototype(),this._initEvent()},e.prototype._initPrototype=function(){var t=this;if("undefined"!=typeof this.basicItem){var e=$(this.basicItem);this.ctWidth=e.eq(1).outerWidth(!0)*e.length}else $.each(this.main.children(),function(e,a){t.ctWidth+=$(a).outerWidth(!0)});this.main.width(this.ctWidth),this.range=[-this.ctWidth+this.partSize+this.offsetRight-this.offsetLeft,0-this.offsetLeft],this._resetBtn()},e.prototype._initEvent=function(){var e=this;this.btnPrev.unbind("click").click(function(a){if(!$(this).hasClass("off")){e._lockBtn();var i=e.curPos+e.partSize+e.offsetRight;e.curPos!==e.range[1]&&e.curIndex--,e.curPos=i>=e.range[1]?e.range[1]:i,e.callback&&e.callback(e.curIndex),t.animate(e.main[0],{marginLeft:e.curPos+""},function(){e._resetBtn()})}}),this.btnNext.unbind("click").click(function(a){if(!$(this).hasClass("off")){e._lockBtn();var i=e.curPos-e.partSize-e.offsetRight;e.curPos!==e.range[0]&&e.curIndex++,e.curPos=i>=e.range[0]?i:e.range[0],e.callback&&e.callback(e.curIndex),t.animate(e.main[0],{marginLeft:e.curPos+""},function(){e._resetBtn()})}})},e.prototype._lockBtn=function(){this.btnPrev.addClass("off"),this.btnNext.addClass("off")},e.prototype._resetBtn=function(){this.curPos>=this.range[1]?this.btnPrev.addClass("off"):this.btnPrev.removeClass("off"),this.curPos<=this.range[0]?this.btnNext.addClass("off"):this.btnNext.removeClass("off")},e.prototype.refresh=function(){this.ctWidth=0,this._initPrototype(),this.curPos=this.range[1],this.curIndex=0,this.main.css("marginLeft",this.range[1]),this._resetBtn()},e.prototype.to=function(e){var a=this;e<a.range[0]?a.curPos=a.range[0]:e>a.range[1]?a.curPos=a.range[1]:a.curPos=e,a._lockBtn(),t.animate(a.main[0],{marginLeft:a.curPos+""},function(){a._resetBtn()})},e}),define("app/cont_sch",["templateModule","app/Load","lib/Slider"],function(t,e,a){var i=($(".newsTab_ul li"),$(".newsCont .newsul"),"integral2_sch"),n="shooter2_sch",r=[],s=$(".s-mod-hd h4"),o=$(".s-mod-bd");s.eq(0).addClass("cur"),o.eq(0).addClass("block"),s.each(function(t){$(this).on("mouseenter",function(){$(this).addClass("cur").siblings().removeClass("cur"),o.eq(t).addClass("block").siblings().removeClass("block")})}),$.ajax({type:"get",url:window.scbsjfb,dataType:"jsonp",success:function(e){var a=e.data.list,n=[];for(var r in a)n.push(r);$("#scoreRank2").prepend(t(i,{dataarrs:a,groups:n})),$("#scoreRank2 .top-team3 th").on("mouseenter",function(){var t=$(this).index();$(this).addClass("cur2").siblings().removeClass("cur2"),$(".tbodyfd4").eq(t).addClass("block").siblings().removeClass("block")})}}),$.getScript(window.Schedule_id+"&callback=recommendlistb",{}),window.recommendlistb=function(e){var a=e.data;for(var i in a)$.merge(r,a[i]);var s={A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[]};for(var i in r)"A"==r[i].groupName?s.A.push(r[i]):"B"==r[i].groupName?s.B.push(r[i]):"C"==r[i].groupName?s.C.push(r[i]):"D"==r[i].groupName?s.D.push(r[i]):"E"==r[i].groupName?s.E.push(r[i]):"F"==r[i].groupName?s.F.push(r[i]):"G"==r[i].groupName?s.G.push(r[i]):"H"==r[i].groupName?s.H.push(r[i]):"I"==r[i].groupName?s.G.push(r[i]):"J"==r[i].groupName&&s.H.push(r[i]);for(var i in s)0==s[i].length&&delete s[i];$("#saicRank2").prepend(t(n,{dataarrs3:s})),$("#saicRank2 .top-team3 th").on("mouseenter",function(){var t=$(this).index();$(this).addClass("cur2").siblings().removeClass("cur2"),$(".tbodyfd3").eq(t).addClass("block").siblings().removeClass("block")})}}),define("app/schedule",["templateModule","lib/Slider"],function(t,e){function a(t,e,a){var i=/^\d{4}-([0-1]?[0-9])-([0-3]?[0-9])$/;t&&"string"==typeof t&&i.test(t)||(t=new Date),e=isNaN(parseInt(e))?0:parseInt(e),a=a&&"string"==typeof a?a:"";var n=new Date(t).getTime();n+=864e5*e;var r=new Date(n),s=r.getFullYear(),o=r.getMonth()+1,c=r.getDate();o=o<10?"0"+o:o,c=c<10?"0"+c:c;var d=s+a+o+a+c;return d}var i,n=$("#schendule"),r=n.find(".main"),s="schedule",o=0,c=[],d=window.Schedule_id.match(/\d{4}.\d{1,2}.\d{1,2}/gm).toString();d=d.split(",");var l=d[0],h=d[1],u="",f="",p=a("",0,"-");p<=h?(u=a(p,-10,"-"),f=a(p,14,"-")):(u=a(h,-60,"-"),f=h);var m=window.Schedule_id.replace(l,u);m=m.replace(h,f),$.ajax({type:"get",url:window.Schedule_id,async:!0,dataType:"jsonp",success:function(t){function e(t){return t<10?"0"+t:t}var a=t.data;for(var n in a)$.merge(c,a[n]);i=c;var r,s,d,l=c,h=new Date,u=h.getFullYear()+"/"+e(h.getMonth()+1)+"/"+e(h.getDate()),f=e(h.getHours())+":"+e(h.getMinutes())+":"+e(h.getSeconds()),p=u+" "+f;d=p.replace(/[^0-9]+/g,""),mytimen2=l[0].startTime.replace(/[^0-9]+/g,"");for(var n=0;n<l.length;n++){if(s=l[n].startTime.replace(/[^0-9]+/g,""),d<mytimen2)return;if(n==l.length-1&&d>=s)return void(o=n);if(r=l[n+1].startTime.replace(/[^0-9]+/g,""),s<=d&&r>d){if(0==n||n<=2)return;return void(o=n-2)}}}}).done(function(){r.html(t(s,{footballMatchList:i})),slider=new e(n,{main:".schenUl",btnPrev:".btn-prev",btnNext:".btn-next",basicItem:".data",partSize:1140}),slider.to(o*-114),$(".schenUl .data").on("mouseenter",function(){$(this).stop(!0),$(this).animate({top:"-78px"},200,function(){$(".dataRigt").css("border-top-color","#0c30a7")})}),$(".schenUl .data").on("mouseleave",function(){$(this).stop(!0),$(".dataRigt").css("border-top-color","#c4c4c4"),$(this).animate({top:"0"},200)})}),window.winterOlyCallback=function(t){}}),define("lib/baseUtils",[],function(){var t={setItem:function(t,e,a,i){var n=t+"="+e;if(a){var r=new Date;r.setTime(r.getTime()+6e4*a),n+="; expires="+r.toUTCString()}n+="; path=/",i&&(n+="; domain="+i),document.cookie=n},getItem:function(t){if(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));if(null!=e)return unescape(e[2])}},removeItem:function(t,e){this.setItem(t,"",-1,e)}},e=function(t,e,a){function i(t){var e=2*parseInt(t.length);return e-=t.match(/\d/g)?t.match(/\d/g).length:0}var n=i(t),r=a?i(a):0;if(n+r<=2*e)return t;for(var s,o=2*e-r,c=[],d=0,l=0;l<o&&(s=t.charAt(l),d++,s.match(/\d/g)||d++,!(d>o));l++)c.push(s);return c.join("")+(a?a:"")};return{cookie:t,cutStr:e}}),define("lib/reportBoss",[],function(){$(document).ready(function(){function t(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!=e?unescape(e[2]):null}function e(t){t=t||window.event;for(var e=t.srcElement||t.target,n=10;n-- >0&&"A"!==e.tagName&&"BODY"!==e.tagName;)e=e.parentNode;if(n=10,"A"===e.tagName){for(var r="",s=n-1,o=e;s>=0&&(o.getAttribute("bossZone")&&(r=o.getAttribute("bossZone")),!r&&"body"!=o.nodeName.toLowerCase());s--,o=o.parentNode);var c="http://btrace.qq.com/kvcollect?sIp=&iQQ="+a+"&sBiz=bundesliga&sOp=click&iTy=3343&Pwd=611370963&name="+r+"&sUrl="+e.href+"&rnd="+Math.floor(1e5*Math.random());i=new Image(1,1),i.src=c}}var a=t("uin")||t("luin")||t("pt2qquin")||t("o_cookie")||"";a=String(Number(a.replace("o","")));var i,n="http://btrace.qq.com/kvcollect?sIp=&iQQ="+a+"&sBiz=bundesliga&sOp=DJ_all&iTy=3357&Pwd=1777655157&name=exposure&rnd="+Math.floor(1e5*Math.random());i=new Image(1,1),i.src=n,$(document.body).delegate("a","click",e),window.reportBoss=function(t){var e="http://btrace.qq.com/kvcollect?sIp=&iQQ="+a+"&sBiz=bundesliga&sOp=click&iTy=3343&Pwd=611370963&name="+t+"&sUrl=&rnd="+Math.floor(1e5*Math.random());i=new Image(1,1),i.src=e}})}),define("lib/dianbotaiM",["lib/baseUtils","tvp","lib/reportBoss"],function(t,e){function a(){this.curPos=0,this.pureData=[],this.beaus={},this.curScreen=0,this.count=4,this.perNum=3,this.init(),this.knb=!0}var i=t.cookie;window.dbStationBack=function(t){if(0===t.errorno){var e=t.results[0].fields.videos;e&&e.length>=4?dianbotai.operate(e.slice(0,12)):$("#dianbotai").hide()}},a.prototype={constructor:a,init:function(){var t=document.getElementById("dianbotai");if(t){var e="//data.video.qq.com/fcgi-bin/data";$.ajax({url:e,data:{tid:367,idlist:window.video_id,appid:"10001009",appkey:"c5a3e1529a7ba805",otype:"json"},dataType:"jsonp",callback:dbStationBack,jsonpCallback:"dbStationBack"})}},operate:function(t){var e=t.length,a=this.buildHtml(t,e);$("ul","#dianbotai").html(a),this.buildBeaus(),"1"==i.getItem("dj_db_closeAuto")&&$('[node-type="autoPlay"]',"#dianbotai").addClass("close"),$(this.beaus.slide[0]).hide(),t.length<=this.perNum&&$(this.beaus.slide[1]).hide(),this.buildPlayer(),this.bind()},stringToJson:function(t){if(t){for(var e=t.split("&"),a={},i=0;i<e.length;i++){var n=e[i].split("=");a[n[0]]=n[1]}return a}},buildHtml:function(t,e){this.count=Math.ceil(t.length/this.perNum);for(var a,i="",n=0;n<e;n++)a=t[n].allnumc,parseInt(a)>=1e4&&(a=parseFloat(parseInt(a)/1e4).toFixed(1)+"\u4e07"),i+='<li><div class="dbbox"><div class="txt">'+t[n].c_title+'</div><div class="tool"><em><i></i></em>'+a+"</div></div></li>",this.pureData.push({pos:n,id:t[n].c_vid,url:t[n].c_play_url});return i},buildBeaus:function(){this.beaus.list=$('[data-node="list"]',"#dianbotai"),this.beaus.item=$("li","#dianbotai"),this.beaus.slide=$('[data-node="slide"]',"#dianbotai"),this.beaus.autoPlay=$('[node-type="autoPlay"]',"#dianbotai")},updataLive:function(t,e){var a=this;sportTxplayer({containerId:"db_mod_player",vid:this.pureData[t].id,width:"100%",autoplay:e,height:"100%",showBullet:!1},function(t){window.player2=t,t.on("ready",function(){t.mute()}),t.on("playStateChange",function(e){if(e&&0==e.state){if(a.curPos>=a.pureData.length-1||"1"==i.getItem("dj_db_closeAuto"))return;a.curPos++,t.play(a.pureData[a.curPos].id),a.curPos+1>(a.curScreen+1)*a.perNum&&a.beaus.slide.eq(1).click(),a.beaus.item.removeClass("cur"),$(a.beaus.item[a.curPos]).addClass("cur")}})}),this.beaus.item.removeClass("cur"),$(this.beaus.item[t]).addClass("cur")},buildPlayer:function(){var t=i.getItem("dj_db_closeAuto");this.updataLive(this.curPos,!t)},bind:function(){var t=this;this.beaus.item.bind("click",function(){if(!$(this).hasClass("cur")){var e=parseInt($(this).index());window.player2.play(t.pureData[e].id),t.beaus.item.removeClass("cur"),$(t.beaus.item[e]).addClass("cur"),t.curPos=e,reportBoss("DJ_db_list")}}),this.beaus.slide.bind("click",function(){var e=t.stringToJson($(this).attr("data-data")),a=parseInt(e.idx),i=this;(a>0&&t.curScreen>0||a<0&&t.curScreen<t.count-1)&&(t.curScreen-=a,t.beaus.list.animate({marginTop:"+="+56*a*t.perNum+"px"},1e3),t.beaus.slide.show(),(t.curScreen<=0||t.curScreen>=t.count-1)&&$(i).hide())}),this.beaus.autoPlay.bind("click",function(){"1"==i.getItem("dj_db_closeAuto")?($(this).removeClass("close"),i.removeItem("dj_db_closeAuto")):($(this).addClass("close"),i.setItem("dj_db_closeAuto","1",43200)),reportBoss("DJ_db_autoplay")})}},window.dianbotai=new a(6,{node:"news-tab"})}),define("app/load",[],function(){function t(t){var e=$(".areaItem").eq(t),a=e.find("li").length,i=6,n=1100;a>i?e.find(".addMore").show():e.find(".addMore").hide();var r=function(t){for(var i=0;i<t;i++)e.find("li").eq(i).addClass("hover");t>=a&&e.find(".addMore").hide()};r(i),e.find(".addMore").on("click",function(){return i+=6,i<a?void r(i):void r(a)}),$(window).scroll(function(){if($(window).scrollTop()>=n){if($(window).scrollTop()<$(e).height()-300)return;e.find(".addMore").trigger("click"),n+=990}})}return t}),define("lib/newTab",["templateModule","app/load","promise"],function(t,e,a){for(var i,n=$(".newsTab_ul"),r=n.find("li"),s=(r.length,$(".areaItem")),o=[],c=[],d=1400,l="//pacaio.match.qq.com/tags/tag2articles?",h="",u=[],f=$(".head .name").html(),p=0;p<window.temp_name.length;p++)f.indexOf(window.temp_name[p])!=-1&&(f=temp_name[p]);var m=window.delArticle;0!=m.length?$.each(m,function(t,e){e.name==f&&""!=e.disc&&(u=e.disc.split(","))}):h="";var b=r.length;b>=7&&(b=6),r.width(788/b);for(var p=0;p<r.length;p++)o.push({name:r.eq(p).attr("data_name"),num:r.eq(p).attr("data_num")});Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var a,i;if(null==this)throw new TypeError("this is null or not defined");var n=Object(this),r=n.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(a=e),i=0;i<r;){var s;i in n&&(s=n[i],t.call(a,s,i,n)),i++}});var g=function(t){var e=new a(function(e,a){$.ajax({url:t,type:"GET",dataType:"jsonp",success:function(t){e(t)},error:function(){e()}})});return e};o.forEach(function(t){var e=l+"name="+encodeURIComponent(t.name)+"&num="+t.num;c.push(g(e))}),a.all(c).then(function(a){for(var i=0;i<a.length;i++){for(var n=a[i].data.length-1;n>=0;n--)0==v(a[i].data[n])&&a[i].data.splice(n,1);$(".newsCont .arealist").eq(i).html(t("newTab",{data:a[i].data
})),$(".newsTab_ul li").eq(0).addClass("cur"),e(0)}});var v=function(t){var e=!1;if(u.length>0){for(var a=0;a<u.length;a++)if(t.category2_chn.indexOf(u[a])!==-1){e=!0;break}}else"sports"==t.category&&"\u4f53\u80b2"==t.category_chn&&""!=t.img&&(e=!0);return e};r.on("mouseenter",function(t){d=1400,i=$(this).index(),$(this).addClass("cur").siblings().removeClass("cur"),s.removeClass("active"),s.eq(i).addClass("active"),e(i)})}),define("app/imgload",[],function(){var t=$(".block .nvideo_ul"),e=t.children("li").length-1,a=4;a>=e&&t.find(".refresh").hide();var i=function(a){for(var i=0;i<a;i++)$(t.children("li")[i]).removeClass("none2");a==e&&t.find(".refresh").hide()};i(a),t.find(".refresh").on("click",function(){return a+=4,a<e?void i(a):void i(e)})}),define("main",["templateModule","lib/libfocus","app/getssi","app/head","app/cont_sch","app/schedule","lib/dianbotaiM","lib/newTab","app/Load","app/imgload"],function(t,e){for(var a=$(".newsTab_ul"),i=a.find("li"),n=parseInt(i.length),r=0;r<n;r++)n>6?i.eq(r).width(790/6):i.eq(r).width(790/n);for(var s=$("#focus"),o=s.find(".cont").children().length,c="",r=1;r<=o;r++)c+="<li"+(1===r?' class="cur"':"")+"></li>";s.find(".cont").children().eq(0).css("left","0px"),s.find(".tab").html(c),new e({shiftTime:3e3,focusContents:s.find(".cont li"),tabContents:s.find(".tab li"),currentClass:"cur",prev:s.find(".prev"),next:s.find(".next"),width:"800px"})}),require.config({baseUrl:"./scripts/",paths:{promise:"//mat1.gtimg.com/statsnba/libs/bluebird.min",dl:"//mat1.gtimg.com/pingjs/ext2020/dc2017/dist/sportInfo/sportLogin",tvp:"//vm.gtimg.cn/tencentvideo/txp/js/txplayer",Tabs:"//mat1.gtimg.com/sports/qqfocus/tab",qqfocus:"//mat1.gtimg.com/sports/qqfocus/jquery.qqfocus.0.3",qqscroll:"//mat1.gtimg.com/sports/qqfocus/qqscroll"}}),define("fill",["promise"],function(t){window.Promise=t}),"undefined"==typeof window.Promise?require(["fill","main"]):require(["main"]),define("config",function(){})}();
//# sourceMappingURL=main-cc3c626a6a.js.map
