!function t(e,i,a){function o(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(n)return n(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var c=i[r]={exports:{}};e[r][0].call(c.exports,function(t){var i=e[r][1][t];return o(i||t)},c,c.exports,t,e,i,a)}return i[r].exports}for(var n="function"==typeof require&&require,r=0;r<a.length;r++)o(a[r]);return o}({1:[function(t,e,i){"use strict";i.__esModule=!0,i.Fixed=function(t,e){var i=e.other,a=e.top,o=void 0===a?0:a,n=void 0,r=void 0,s=void 0;setTimeout(function(){var e=$(t).offset();void 0!==e&&(r=$(t).height(),s=e.top,$(window).bind("scroll",function(e){n=$("#footer").offset().top;var a=i&&$("#"+i).height()||0,l=$(this).scrollTop();(!i||i&&r<a)&&l>=s?n<=r+l?$(t).css({position:"absolute",top:n-r-s-o}):$(t).css({position:"fixed",top:o}):$(t).css({position:"relative",top:0})}))},300)}},{}],2:[function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};i.Page=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,t),this.curPage=1,this.total=1;var i={threshold:5,isLink:!1,linkTxt:"javascript:void(0);",pageBack:!1};this.opt=o({},i,e),this.bind()}return t.prototype.bind=function(){var t=this;$("#pageBox").delegate('[data-node="goPage"]',"click",function(e){var i=parseInt($(this).attr("data-data"));t.opt.pageBack&&t.opt.pageBack(i)}),$("#pageBox").delegate("#jumpPage","keydown",function(e){if(13==e.which){var i=parseInt($("#jumpPage").val());if(i==t.curPage||i>t.total)return;return t.opt.pageBack&&t.opt.pageBack(i),!1}})},t.prototype.getPage=function(t,e,i,a,o){var n;n=e==a?"<li><span>"+e+"</span></li>":'<li><a href="'+(o.isLink?o.linkTxt+"_"+e+".htm":o.linkTxt)+'" data-data="'+e+'" data-node="goPage">'+e+"</a></li>",t.push(n),e<i&&this.getPage(t,e+1,i,a,o)},t.prototype.buildPage=function(t,e){this.curPage=t,this.total=e;var i=this.opt,a=void 0,o=void 0,n=void 0,r=[],s=i.threshold;if(1==e)return"";if(1==t)a="<li><span>1</span></li>";else{var l=i.linkTxt,u=i.linkTxt;i.isLink&&(l=i.linkTxt+"_"+(t-1)+".htm",u=i.linkTxt+".htm"),a='<li><a class="prev" data-data="'+(t-1)+'" data-node="goPage" href="'+l+'">&lt;</a>\n                   </li><li><a data-data="1"  data-node="goPage" href="'+u+'">1</a></li>'}if(r.push(a),e>2){if((o=t<=s-2||t==s&&t==e?2:e>s&&e-t+1<s?e-s+1:t-Math.floor((s-1)/2))>2&&r.push('<li><a href="javascript:void(0);">...</a></li>'),t<=s-2)n=Math.min(s,e-1);else{var c=t+Math.floor(s/2);n=Math.min(c,e-1)}this.getPage(r,o,n,t,i),e-n>1&&r.push('<li><a href="javascript:void(0);">...</a></li>')}if(e>1){if(e<=t)a="<li><span>"+e+'</span></li>\n                      <li class="jump">跳到<input type="text" name="jumpPage" id="jumpPage" value="" />页</li>';else{var p=i.linkTxt,d=i.linkTxt;i.isLink&&(p=i.linkTxt+"_"+(t+1)+".htm",d=i.linkTxt+"_"+e+".htm"),a='<li><a href="'+d+'" data-data="'+e+'" data-node="goPage">'+e+'</a></li>\n                      <li class="jump">跳到<input type="text" name="jumpPage" id="jumpPage" value="" />页</li>\n                      <li><a class="next" data-data="'+(t+1)+'" data-node="goPage" href="'+p+'">&gt;</a></li>'}r.push(a)}return"<ul>"+r.join("")+"</ul>"},t}()},{}],3:[function(t,e,i){"use strict";i.__esModule=!0,i.setCommRank=function(t,e,i){$.ajax({url:"//coral.qq.com/article/"+e+"/datetop?format=json&source=1",dataType:"jsonp"}).then(function(e){if(e&&e.data){var a=e.data,o=void 0,n=void 0,r=[],s=a.length;if(s>0){for(var l=0;l<s;l++)o='<li><a target="_blank" href="'+(n=a[l]).url+'" title="'+n.title+'"><span class="'+(l<3?"top":"")+'">'+(l+1)+"</span>"+n.title+"</a></li>",r.push(o);$("ul",t).html(r.join("")),$(t).show()}i&&i(e.data)}})}},{}],4:[function(t,e,i){"use strict";!function(t,e,i){var a=document,o=a.getElementsByTagName("head")[0],n=a.createElement("script");i&&n.setAttribute("charset",i),n.setAttribute("src",t),o.appendChild(n),n.onload=function(){e&&e()}}("//mat1.gtimg.com/pingjs/ext2020/dc2017/dist/login/login.js",function(t){$("#login .quickArea").eq(0).hover(function(){},function(){})}),$(document).on("qqLogin",function(t,e){window.userInfo=e,"undefined"!=typeof registerCoralEvent&&registerCoralEvent.publicLogined(e.uin,e.nick,e.Face)}),$(document).on("qqLoginOut",function(){"undefined"!=typeof registerCoralEvent&&registerCoralEvent.publicLogout()})},{}],5:[function(t,e,i){"use strict";var a=t("../util/boss");t("../common/login/login");var o=t("./js/buildList"),n=(t("../common/Fixed"),t("../common/commRank/main"),function(){if(ARTICLE_LIST&&!(void 0===ARTICLE_LIST.listInfo||!ARTICLE_LIST.listInfo instanceof Array)){var t=ARTICLE_LIST.listInfo;$("#articleLiInHidden").remove();var e=void 0,i=void 0,a=void 0;void 0!==ARTICLE_INFO.pageCur&&void 0!==ARTICLE_INFO.pageTotal&&(e=ARTICLE_INFO.siteUrl+ARTICLE_INFO.linkDefault,i=parseInt(ARTICLE_INFO.pageCur),a=parseInt(ARTICLE_INFO.pageTotal));var n=(0,o.buildList)({list:t,linkTxt:e,curPage:i,total:a}),r=n.listHtml,s=n.pageHtml;$("#listInfo").html(r),$("#pageBox").html(s)}});!function(){(0,a.exposure)(1604,"zhti_list","qq.com");location.hostname.split(".")[0];$("#logo").parent("a").attr("href","http://"+location.hostname),$("#logo").attr("src","//mat1.gtimg.com/www/images/channel_logo/news_logo.png"),$("#logo").error(function(t){$(this).attr("src","//mat1.gtimg.com/www/images/qq2012/qqLogoFilter.png"),$(this).parent("a").attr("href","http://www.qq.com")});var t=new Date;if($("#today").text(t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日"),ARTICLE_INFO&&void 0!==ARTICLE_INFO.sortNav&&ARTICLE_INFO.sortNav instanceof Array){for(var e=ARTICLE_INFO.sortNav,i=e.length,o=[" 您的位置"],r=0;r<i;r++){var s=void 0;s=e[r].url&&r<i-1?'&nbsp;&gt;&nbsp;<a href="'+e[r].url+'" target="_blank">'+e[r].name+"</a>":r==i-1?"&nbsp;&gt;&nbsp;<strong>"+e[r].name+"</strong>":"&nbsp;&gt;&nbsp;<span>"+e[r].name+"</span>",o.push(s)}$("#location").html(o.join(""))}n()}()},{"../common/Fixed":1,"../common/commRank/main":3,"../common/login/login":4,"../util/boss":7,"./js/buildList":6}],6:[function(t,e,i){"use strict";i.__esModule=!0,i.buildList=function(t){var e=t.list,i=t.curPage,n=t.total,r=t.linkTxt,s=[],l={},u=void 0,c=void 0;for(var p in e){c=e[p];var d=o(c.pubtime),g=c.pubtime.substring(0,10),f="";0==d.day&&d.hour<=1?l.oneHour||(l.oneHour='<div class="qq_time oneHour">今日<br/><span>1小时内</span><em></em></div>',f=l.oneHour):0==d.day&&d.hour>1&&d.hour<=5?l.fiveHour||(l.fiveHour='<div class="qq_time fiveHour">5小时内<em></em></div>',f=l.fiveHour):(d.day>=1||0==d.day&&d.hour>5&&!l.oneHour&&!l.fiveHour)&&(l[g]||(l[g]='<div class="qq_time whichDay">'+d.month+"月<br/>"+d.date+"日<em></em></div>",f=l[g]));var h=c.imgurl||!1,m=h?'<a target="_blank" class="pic" href="'+c.url+'"><img src="'+c.imgurl.replace(/^(http|https):/,"")+'" alt="'+c.title+'"></a>':"";u='<li class="clearfix'+(h?"":" noPic")+'">\n                '+f+"\n                "+m+'\n                <div class="info">\n                    <h3><a target="_blank" href="'+c.url+'">'+c.title+"</a></h3>\n                    <p>"+c.pubtime+"</p>\n                </div>\n            </li>",s.push(u)}var v=s.join(""),x="";return i&&n&&(x=new a.Page({isLink:!0,linkTxt:r}).buildPage(i,n)),{listHtml:v,pageHtml:x}};var a=t("../../common/Page/main"),o=function(t){t=t.replace(new RegExp(/-/gm),"/");var e=new Date(t),i=(new Date).getTime()-e.getTime(),a=parseInt(i/864e5),o=parseInt((i-24*a*60*60*1e3)/36e5);return{year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate(),day:a,hour:o}}},{"../../common/Page/main":2}],7:[function(t,e,i){"use strict";i.__esModule=!0;var a=void 0,o=function(){void 0!==a&&a||(!(a={}).exposure&&(a.exposure={}),!a.registerZone&&(a.registerZone={})),this.initExposure(),this.initRegister()};o.prototype={constructor:o,initExposure:function(){var t=escape(location.href),e={BossId:1604,Pwd:0,sOp:"",iQQ:"",site:location.host,sBiz:"",sUrl:t};this.exposureData=$.extend(!0,e,a.exposure)},initRegister:function(){var t=location.href,e=t.substring(7,t.indexOf(".qq.com")),i={BossId:1408,Pwd:0,sOp:"",sBiz:"qq.com",iQQ:"",site:e=e.substr(e.lastIndexOf(".")+1),sUrl:"",sLocalUrl:escape(t)};this.registerData=$.extend(!0,i,a.registerZone)},operate:function(t){var e=[];for(var i in t){var a=i+"="+t[i];e.push(a)}var o="//btrace.qq.com/kvcollect?"+e.join("&")+"&ran="+Math.random();new Image(1,1).src=o},exposure:function(t,e){var i=document.cookie.match(new RegExp("(^|)o_cookie=([^;]*)(;|$)")),a=null==i?"":unescape(i[2]);this.exposureData.BossId=t,this.exposureData.sOp=e,this.exposureData.iQQ=a,this.exposureData.sBiz=arguments[2]||"",this.operate(this.exposureData)},registerZone:function(t,e){var i=4,a="",o="";if(void 0===e){for(var n=window.event||t,r=n.srcElement||n.target;r&&i-- >0&&"A"!=r.tagName&&"BODY"!=r.tagName;)r=r.parentNode;if(!r)return;if("A"!=r.tagName)return;a=r.href;for(var s=9,l=r;s>=0;s--,l=l.parentNode){if(l&&l.attributes.bosszone){o=l.attributes.bosszone.nodeValue;break}if("BODY"==l.tagName)return}if(!o)return}else t.bossId&&(this.registerData.BossId=t.bossId),o=t.bossZone,a=t.url||"";var u=document.cookie.match(new RegExp("(^|)o_cookie=([^;]*)(;|$)")),c=null==u?"":unescape(u[2]);this.registerData.sOp=o,this.registerData.iQQ=c,this.registerData.sUrl=escape(a),this.operate(this.registerData)}};var n=new o;window.BOSS2=n;var r=function(){n.registerZone()};document.addEventListener?document.addEventListener("click",r,!1):document.attachEvent?document.attachEvent("onclick",r):document.onclick=r;i.registerZone=function(t,e){n.registerZone.call(n,t,e)},i.exposure=function(t,e,i){n.exposure.call(n,t,e,i)}},{}]},{},[5]);

/*------------Modifier: < gogoluo-PC2 > 2018-6-22 16:25:59------------*/

/*  |xGv00|cada02a4b297d480abe7d67050c7eeea */