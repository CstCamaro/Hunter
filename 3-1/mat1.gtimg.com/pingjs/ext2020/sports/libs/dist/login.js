(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.SportsLogin=b()})(this,function(){'use strict';function a(a){$.ajax({url:"//matchweb.sports.qq.com/vip/status2?upgrade=1",dataType:"jsonp"}).done(function(b){a&&a(b)})}(function(a){if(a&&"undefined"!=typeof window){var b=document.createElement("style");return b.setAttribute("media","screen"),b.innerHTML=a,document.head.appendChild(b),a}})("@font-face {\n  font-family: icomoon;\n  src: url(//mat1.gtimg.com/sports/kbsweb4//assets/1pyn0qtr.eot);\n  src: url(//mat1.gtimg.com/sports/kbsweb4//assets/1pyn0qtr.eot#iefix) format(\"embedded-opentype\"), url(//mat1.gtimg.com/sports/kbsweb4//assets/QUpQfna9.ttf) format(\"truetype\"), url(//mat1.gtimg.com/sports/kbsweb4//assets/3Tq7_60M.woff) format(\"woff\"), url(//mat1.gtimg.com/sports/kbsweb4//assets/1MsEIotZ.svg#icomoon) format(\"svg\");\n  font-weight: 400;\n  font-style: normal;\n}\n#ct-login-sports {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  font: 14px \"Microsoft YaHei\", \"\u5FAE\u8F6F\u96C5\u9ED1\", \"SimSun\", \"\u5B8B\u4F53\";\n  z-index: 1000;\n}\n#ct-login-sports .ct-avatar {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n#ct-login-sports .ct-avatar .avatar {\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n#ct-login-sports .ct-avatar .icon {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#ct-login-sports .ct-avatar .icon-login-type {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background-color: #fff;\n}\n#ct-login-sports .ct-avatar .icon-qq {\n  background: url(//mat1.gtimg.com/sports/kbsweb2/statics/qq20_4c733b.png);\n}\n#ct-login-sports .ct-avatar .icon-wx {\n  background: url(//mat1.gtimg.com/pingjs/ext2020/dc2017/dist/sportInfo/wx1.png);\n}\n#ct-login-sports .ct-avatar .icon-vip {\n  background-color: #ff9800;\n  right: -4px;\n  bottom: 0px;\n  background-image: url(//mat1.gtimg.com/pingjs/ext2020/dc/dist/img/common/icon/sportvip.png);\n}\n#ct-login-sports .ct-avatar .icon-svip {\n  right: -4px;\n  bottom: 0px;\n  background-image: url(//mat1.gtimg.com/sports/kbsweb/statics/svip-icon-small.png);\n}\n#ct-login-sports .ct-info-panel {\n  display: none;\n  position: absolute;\n  width: 303px;\n  margin-top: 15px;\n  right: -25px;\n  padding: 0 15px;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(207, 207, 207, 0.5);\n  box-shadow: 0 2px 10px 0 rgba(207, 207, 207, 0.5);\n  background: #fff;\n  font-size: 14px;\n}\n#ct-login-sports .ct-info-panel .top-arrow {\n  display: inline-block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-top-width: 0;\n}\n#ct-login-sports .ct-info-panel .top-arrow.arrow-in {\n  top: -10px;\n  border-bottom-color: rgba(207, 207, 207, 0.1);\n}\n#ct-login-sports .ct-info-panel .top-arrow.arrow-out {\n  top: -8px;\n  border-bottom-color: #fff;\n}\n#ct-login-sports .ct-tourists {\n  color: #333333;\n  display: block;\n  font-family: PingFangSC-Regular, \"Microsoft YaHei\", Heiti, Arial, Helvetica, sans-serif;\n  height: 60px;\n  line-height: 60px;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  padding-left: 20px;\n  text-align: left;\n  width: auto;\n  -webkit-font-smoothing: antialiased;\n}\n#ct-login-sports .ct-tourists span {\n  display: inline-block;\n}\n#ct-login-sports .ct-tourists .btn-login {\n  background-color: #e0ad14;\n  border-radius: 15px;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  height: 32px;\n  line-height: 32px;\n  margin-left: 32px;\n  text-align: center;\n  width: 70px;\n}\n#ct-login-sports .ct-detail a {\n  text-decoration: none;\n  color: #313131;\n}\n#ct-login-sports .ct-detail .list-top {\n  overflow: hidden;\n  border-bottom: 1px solid #eef3f8;\n  font-family: PingFangSC-Regular, Microsoft YaHei, Heiti, Arial, Helvetica, \"sans-serif\";\n  font-size: 14px;\n}\n#ct-login-sports .ct-detail .list-top .nick {\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  margin-right: 3px;\n  cursor: default;\n  position: relative;\n  margin-right: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 180px;\n}\n#ct-login-sports .ct-detail .list-top .sys-msg {\n  margin-right: 16px;\n  position: relative;\n  top: 27px;\n}\n#ct-login-sports .ct-detail .list-top .sys-msg .icon-email:before {\n  font-family: icomoon;\n  content: \"\\E923\";\n}\n#ct-login-sports .ct-detail .list-top .sys-msg .unread-msg {\n  position: absolute;\n  top: -7px;\n  left: 12px;\n  font-size: 12px;\n  border-top: none;\n  border-radius: 10px;\n  line-height: 16px;\n  padding: 0 5px;\n  margin-bottom: 8px;\n  font-weight: 400;\n  background: #ff4340;\n  color: #fff;\n}\n#ct-login-sports .ct-detail .list-top .open-vip {\n  width: 138px;\n  height: 32px;\n  line-height: 32px;\n  margin-bottom: 15px;\n  text-align: center;\n  background: #e9c16a;\n  border-radius: 2px;\n  position: absolute;\n  top: 19px;\n  left: 105px;\n  color: #fff;\n}\n#ct-login-sports .ct-detail .list-mid {\n  overflow: hidden;\n  border-bottom: 1px solid #eef3f8;\n}\n#ct-login-sports .ct-detail .list-mid a {\n  width: 33%;\n  text-align: center;\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  margin-right: 1px;\n}\n#ct-login-sports .ct-detail .list-mid .icon {\n  text-align: center;\n}\n#ct-login-sports .ct-detail .list-mid .icon:before {\n  font-family: icomoon;\n}\n#ct-login-sports .ct-detail .list-mid .icon.icon-diamond:before {\n  content: \"\\E910\";\n  color: #51c4ff;\n}\n#ct-login-sports .ct-detail .list-mid .icon.icon-kb:before {\n  content: \"\\E90F\";\n  color: #f7bb23;\n}\n#ct-login-sports .ct-detail .list-mid .icon.icon-ticket:before {\n  content: \"\\E90E\";\n  color: #f65653;\n}\n#ct-login-sports .ct-detail .list-mid span {\n  vertical-align: middle;\n  margin-top: -3px;\n  display: inline-block;\n  max-width: 65px;\n  color: #333;\n  font-weight: 400;\n  line-height: 15px;\n  margin-left: -1px;\n  font-size: 16px;\n  text-align: center;\n}\n#ct-login-sports .ct-detail .list-bot {\n  overflow: hidden;\n  border-bottom: 1px solid #eef3f8;\n  font-size: 0px;\n}\n#ct-login-sports .ct-detail .list-bot a {\n  padding: 0;\n  display: inline-block;\n  font-weight: 400;\n  width: 25%;\n  line-height: 20px;\n  text-align: center;\n  margin: 25px 0;\n  position: relative;\n  font-size: 14px;\n}\n#ct-login-sports .ct-detail .list-bot span {\n  display: inline-block;\n  text-align: center;\n}\n#ct-login-sports .ct-detail .list-bot .t26,\n#ct-login-sports .ct-detail .list-bot .t28 {\n  font-family: icomoon!important;\n  color: #a2a2a2;\n  line-height: 28px;\n}\n#ct-login-sports .ct-detail .list-bot .t26:hover,\n#ct-login-sports .ct-detail .list-bot .t28:hover {\n  color: #3469ff;\n}\n#ct-login-sports .ct-detail .list-bot .t28 {\n  font-size: 28px;\n}\n#ct-login-sports .ct-detail .list-bot .t26 {\n  font-size: 26px;\n}\n#ct-login-sports .ct-detail .list-bot br {\n  line-height: 20px;\n}\n#ct-login-sports .ct-detail .list-bot .icon-vip-logo-gray:before {\n  content: \"\\E926\";\n}\n#ct-login-sports .ct-detail .list-bot .icon-shequ:before {\n  content: \"\\E925\";\n}\n#ct-login-sports .ct-detail .list-bot .icon-guess:before {\n  content: \"\\E924\";\n}\n#ct-login-sports .ct-detail .list-bot .icon-clock-panel:before {\n  content: \"\\E922\";\n}\n#ct-login-sports .ct-detail .list-bot .title {\n  color: #8e8e8e;\n  font-weight: 400;\n  font-size: 12px;\n  margin: 0;\n}\n#ct-login-sports .ct-detail .change-btn {\n  font-size: 0;\n  color: #313131;\n  font-family: PingFangSC-Regular, Microsoft YaHei, Heiti, Arial, Helvetica, \"sans-serif\";\n}\n#ct-login-sports .ct-detail .change-btn a {\n  line-height: 45px;\n  font-size: 14px;\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  font-weight: 400;\n}\n#ct-login-sports .fl {\n  float: left;\n}\n#ct-login-sports .fr {\n  float: right;\n}\n#ct-login-sports .clearfix:before,\n#ct-login-sports .clearfix:after {\n  content: '';\n  display: table;\n}\n#ct-login-sports .clearfix:after {\n  clear: both;\n}\n");var b=function(a){$("#ct-login-sports .ct-avatar").html("\n        <a href=\"http://sports.qq.com/kbsweb/mycenter.htm#myWallet\" target=\"_blank\">\n            <img src=\""+(a&&a.avatar?a.avatar:"//mat1.gtimg.com/sports/kbsweb4/statistic/default-icon.png")+"\" class=\"avatar\">\n        </a>\n        "+(a&&"qq"==a.mainLogin?"<span class=\"icon-qq icon-login-type icon\"></span>":"")+"\n        "+(a&&"wx"==a.mainLogin?"<span class=\"icon-wx icon-login-type icon\"></span>":"")+"\n        "+(a&&a.vipInfo&&1==c(a.vipInfo)?"<span class=\"icon-vip icon\"></span>":"")+"\n        "+(a&&a.vipInfo&&2==c(a.vipInfo)?"<span class=\"icon-svip icon\"></span>":"")+"\n    ")},c=function(a){return a&&a[1]?a[1].vip:0},d=function(){b(),$("#ct-login-sports .ct-main").html("\n        <div class=\"ct-tourists\">\n            <span >\u767B\u5F55\u540E\u53EF\u89C2\u770B\u66F4\u591A\u7CBE\u5F69\u6BD4\u8D5B</span> \n            <span class=\"btn-login\">\u767B\u5F55</span>\n        </div>\n    ")},e=function(a){b(a),$("#ct-login-sports .ct-main").html("\n        <div class=\"ct-detail\">\n            <div class=\"list-top clearfix\">\n                <a href=\"javascript:;\" class=\"nick fl\">\n                    <span title=\""+a.nick+"\">"+a.nick+"</span>\n                </a>\n                <a href=\"http://sports.qq.com/kbsweb/mycenter.htm#message\" target=\"_blank\" class=\"sys-msg fr\">\n                    <span class=\"icon-email t16\"></span> \n                    "+(0<a.message.sysCount?"<span class=\"unread-msg\">"+a.message.sysCount+"</span>":"")+"\n                </a> \n                "+(0==c(a.vipInfo)?"<a href=\"http://vip.sports.qq.com/\" target=\"_blank\" class=\"open-vip fl\">\u5F00\u901A\u817E\u8BAF\u4F53\u80B2\u4F1A\u5458</a>":"")+"\n            </div> \n            <div class=\"list-mid clearfix\">\n                <a href=\"http://sports.qq.com/kbsweb/mycenter.htm#myWallet\" target=\"_blank\" class=\"wallet-myDiamonds fl\">\n                    <span class=\"icon-diamond icon\"></span> \n                    <span class=\"wallet-num diamond-num\">"+a.wallet.diamond+"</span>\n                </a>\n                    <a href=\"http://sports.qq.com/kbsweb/mycenter.htm#myWallet\" target=\"_blank\" class=\"wallet-kb\">\n                    <span class=\"icon-kb icon\"></span> \n                    <span class=\"wallet-num kb-num\">"+a.wallet.kb+"</span>\n                </a>\n                    <a href=\"http://sports.qq.com/kbsweb/mycenter.htm#myWallet\" target=\"_blank\" class=\"wallet-ticket fr\">\n                    <span class=\"icon-ticket icon\"></span> \n                    <span class=\"wallet-num ticket-num\">"+a.wallet.ticket+"</span>\n                </a>\n            </div>\n            <div class=\"list-bot\">\n                <a href=\"http://vip.sports.qq.com/\" target=\"_blank\" class=\"vip-center\">\n                    <span class=\"icon-vip-logo-gray t28\"></span>\n                    <br/>\n                    <span class=\"title t12\">\u4F1A\u5458\u4E2D\u5FC3</span>\n                </a>\n                    <a href=\"http://sports.qq.com/kbsweb/mycenter.htm#community\" target=\"_blank\" class=\"community-center\">\n                    <span class=\"icon-shequ t28\"></span>\n                    <br/>\n                    <span class=\"title t12\">\u6211\u7684\u793E\u533A</span>\n                </a>\n                    <a href=\"http://sports.qq.com/kbsweb/mycenter.htm#myQuiz\" target=\"_blank\" class=\"guess-center\">\n                    <span class=\"icon-guess t26\"></span>\n                    <br/>\n                    <span class=\"title t12\">\u6211\u7684\u7ADE\u731C</span>\n                </a>\n                <a href=\"http://sports.qq.com/kbsweb/mycenter.htm#reminder\" target=\"_blank\" class=\"clock-panel-center\">\n                    <span class=\"icon-clock-panel t28\"></span>\n                    <br /> \n                    <span class=\"title t12\">\u8D5B\u4E8B\u63D0\u9192</span>\n                </a>\n            </div> \n            <div class=\"change-btn\">\n                <a href=\"javascript:void(0);\" class=\"btn-switch\"><span class=\"t14\">\u5207\u6362\u8D26\u53F7</span>\n                </a>\n                <a href=\"javascript:void(0);\" class=\"btn-logout quit\"><span class=\"t14\">\u9000\u51FA\u767B\u5F55</span></a>\n            </div>\n        </div>\n    ")},f=function(a){if(a){var b=$.ajax({url:"//matchweb.sports.qq.com/guess/tcBalance?type=1:2:3",dataType:"jsonp"}),c=$.ajax({url:"//shequweb.sports.qq.com/message/allCount",dataType:"jsonp"});$.when(b,c).done(function(b,c){a.message=c[0]&&c[0].data?c[0].data:{},a.wallet=b[0]&&b[0].data?b[0].data:{},e(a)})}else d()};window.console=window.console?console:{log:function(){}},"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(a){if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var b,c=Object(a),d=1;d<arguments.length;d++)if(b=arguments[d],null!=b)for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(c[e]=b[e]);return c},writable:!0,configurable:!0});var g,h,i,j=!0,k={},l=function(a){"undefined"==typeof jQuery?console.error("\u8BF7\u5148\u52A0\u8F7DjQuery"):(k=Object.assign(k,a),g=$("#"+a.root),m(),$.ajax({url:"//mat1.gtimg.com/sports/kbsweb2/sports-login-api-v2.js",dataType:"script",scriptCharset:"utf-8"}).done(function(){return window.sportsWebApi?void(s(function(a){p(a)}),n()):console.error("sportLogin:sportsWebApi not exist")}).fail(function(a,b,c){console.error(a,b,c)}))},m=function(){var a=g.width();g.html("\n        <div id=\"ct-login-sports\">\n            <div class=\"ct-avatar\"></div>\n            <div class=\"ct-info-panel\">\n                <span class=\"arrow-in top-arrow\"></span>\n                <span class=\"arrow-out top-arrow\"></span>\n                <div class=\"ct-main\"></div>\n            </div>\n        </div>\n    "),g.find(".top-arrow").css("right",a/2+17),h=g.find(".ct-info-panel")},n=function(){sportsWebApi.onLoginSuccess=function(a){p(a)},g.hover(function(){h.fadeIn(),clearTimeout(i)},function(){i=setTimeout(function(){h.fadeOut()},300)}),g.on("click",".avatar, .btn-login",function(){if(!o)return q(),!1}),g.on("click",".btn-logout",function(){r()}),g.on("click",".btn-switch",function(){r(),q()})};$(document).on("click","#closeLoginFrame",function(){j=!0,$(window).trigger("loginCancel")});var o=!1,p=function(b){o=b&&b.isLogin,o?a(function(a){var c=Object.assign(b,{vipInfo:a});f(c),$(window).trigger("login",{userInfo:c,autoLogin:j}),k.onLogin&&k.onLogin(c),j=!0}):f()},q=function(){j=!1,sportsWebApi&&sportsWebApi.userLogin()},r=function(){j=!0,sportsWebApi.userLogout(),o=!1,f(),k.onLogout&&k.onLogout()},s=function(a){sportsWebApi&&sportsWebApi.isLogin(a)};return{init:l,login:q,logout:r,isLogin:s,getUserInfo:function(a){sportsWebApi&&sportsWebApi.getUserInfo(a)},getLoginType:function(){return sportsWebApi.getLoginType()},getVipStatus:a}});
//# sourceMappingURL=login.js.map
/*  |xGv00|752ac3d6b5b9c7083d385525bf36366b */