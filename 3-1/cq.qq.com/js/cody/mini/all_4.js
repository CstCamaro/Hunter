function scrollTab(){}scrollTab.prototype={_a:{},_b:{},_c:"",_e:"",_f:"",_curclicked:0,_def:0,init:function(g,d,j,i,h){this._a=g||{};this._b=d||{};this._c=j;this._e=i;this._f=h;if(g.size()==d.size()){this._setAction()}},_setAction:function(){var e=this,b=null;var d=function(h){e._curclicked=h+1;if(e._curclicked==e._a.length){e._curclicked=0}};var c=function(h){e._a.removeClass(e._c);e._b.hide();e._b.eq(h).show();$(e._a).eq(h).addClass(e._c);d(h)};var g=function(){b=setInterval(function(){c(e._curclicked)},e._e)};var f=function(){clearInterval(b);g()};var a=function(){$(e._a).each(function(h){e._b.eq(h).hover(function(){timeout=window.setTimeout(function(){c(h)},200);clearInterval(b)},function(){window.clearTimeout(timeout);if(e._f==true){f()}});$(this).hover(function(){timeout=window.setTimeout(function(){c(h)},200);clearInterval(b)},function(){window.clearTimeout(timeout);if(e._f==true){f()}})})};a();c(e._def);if(e._f==true){g()}}};
(function(a){a.fn.extend({dyfocus:function(i){var i=a.extend({intervalTime:5000,moveSpeedTime:500,act:"act",auto:true},i||{});var h=this;var l=a(h).selector;var s=1;var d=a(l).find(".img_con a");var j=a(l).find(".text_con p");var t=a(l).find("ul li");var k=a(d).length;var u=a(j).length;var r=a(t).length;var m=null;var f=null;var e=null;function n(){a(d).eq(0).fadeIn("fast");a(j).eq(0).show();a(t).eq(0).addClass(i.act);if(k==u&&k==r){p();q()}}function b(o){s=s+1;if(s==k){s=0}}function g(o){a(d).hide();a(d).eq(o).fadeIn(i.moveSpeedTime);a(j).hide();a(j).eq(o).show();a(t).removeClass(i.act);a(t).eq(o).addClass(i.act);b(o)}function p(){m=setInterval(function(){g(s)},i.intervalTime)}function c(){clearInterval(m);p()}function q(){a(t).hover(function(){e=a(t).index(this);clearInterval(m);f=window.setTimeout(function(){g(e)},200);s=e},function(){window.clearTimeout(f);if(i.auto){c()}})}return n()}})})(jQuery);
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(g){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else{if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}}});var f=a.grep(d,function(h){return !h.loaded});d=a(f)})}this.each(function(){var e=this;e.loaded=false;a(e).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(e).hide().attr("src",a(e).data("original"))[c.effect](c.effectspeed);e.loaded=true}).attr("src",a(e).data("original"))}});if("scroll"!=c.event){a(e).bind(c.event,function(f){if(!e.loaded){a(e).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(c,d){if(d.container===undefined||d.container===window){var b=a(window).height()+a(window).scrollTop()}else{var b=a(d.container).offset().top+a(d.container).height()}return b<=a(c).offset().top-d.threshold};a.rightoffold=function(c,d){if(d.container===undefined||d.container===window){var b=a(window).width()+a(window).scrollLeft()}else{var b=a(d.container).offset().left+a(d.container).width()}return b<=a(c).offset().left-d.threshold};a.abovethetop=function(c,d){if(d.container===undefined||d.container===window){var b=a(window).scrollTop()}else{var b=a(d.container).offset().top}return b>=a(c).offset().top+d.threshold+a(c).height()};a.leftofbegin=function(c,d){if(d.container===undefined||d.container===window){var b=a(window).scrollLeft()}else{var b=a(d.container).offset().left}return b>=a(c).offset().left+d.threshold+a(c).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);
(function(b){var a=false;b.fn.extend({simplequeue:function(u,e,g,o,h,n){if(!a){var i=!!window.ActiveXObject;var l=i&&!window.XMLHttpRequest;var j=i&&!!document.documentMode;var k=i&&!l&&!j;if(l||k){b('<style type="text/css">ul.simplequeue {overflow:hidden;}ul.simplequeue_left,ul.simplequeue_right {padding:0;}.simplequeue_left li,.simplequeue_right li{float:left;clear:right;_display:inline;}</style>').appendTo("head")}else{b("head").append('<style type="text/css">ul.simplequeue {overflow:hidden;}ul.simplequeue_left,ul.simplequeue_right {white-space:nowrap;padding:0;}.simplequeue_left li,.simplequeue_right li{display:inline-block;}</style>')}a=true}var s=this;if(!s[0]){return s}if(!s.is("ul")){throw ("Object isnot UL,LI");return s}s.addClass("simplequeue simplequeue_"+u);g=isNaN(g)?2:parseInt(g);g=g<1?(u=="left"||u=="right"?s.width():s.height()):g;var o=isNaN(o)?100:parseInt(o);o=o<10?10:o;if(o<=500||g<12){h=false}var d={enabled:false,autorun:false,movePixel:g,animate:true,btn_prev:null,btn_next:null,forward:u,negative:"",direction:""};d=b.extend(d,n);d.forward=u;switch(u){case"left":d.negative="right";break;case"right":d.negative="left";break;case"down":d.negative="up";break;default:d.negative="down";break}if(d.movePixel<12){d.animate=false}var r=false;var q=1;var m=s.children().clone(true);s.empty().append(m);var t={w:s[0].scrollWidth,h:s[0].scrollHeight};while(!r){m.clone(true).attr("clones","true").appendTo(s);t.mw=s[0].scrollWidth;t.mh=s[0].scrollHeight;switch(u){case"left":case"right":if((t.mw>t.w)&&(t.mw/t.w>=2)){r=true}break;default:if((t.mh>t.h)&&(t.mh/t.h>=2)){r=true}break}if(++q>5){r=true}}t.rw=t.mw-s.width();t.rh=t.mh-s.height();switch(u){case"down":s.scrollTop(t.rh);break;case"left":s.scrollLeft(0);break;case"right":s.scrollLeft(t.rw);break;default:s.scrollTop(0);break}var f={};f.interval=null;f.isControlRoll=false;f.restart_method=function(){};f.rolling=function(){var v=h;var c=u;var p=g;if(f.isControlRoll){v=d.animate;c=d.direction;p=d.movePixel}switch(c){case"down":var w=s.scrollTop()-p;if(w<0){s.scrollTop(s.scrollTop()+t.h);w=s.scrollTop()-p}if(v){s.stop(true,true).animate({scrollTop:w},"normal","linear",function(){if(t.rh-w>=t.h){s.scrollTop(w+t.h)}f.restart_method()})}else{s.scrollTop(w);if(t.rh-w>=t.h){s.scrollTop(w+t.h)}f.restart_method()}break;case"left":var w=s.scrollLeft()+p;if(w+p>t.mw){s.scrollLeft(s.scrollLeft()-t.w);w=s.scrollLeft()+p}if(v){s.stop(true,true).animate({scrollLeft:w},"normal","linear",function(){if(w>=t.w){s.scrollLeft(w-t.w)}f.restart_method()})}else{s.scrollLeft(w);if(w>=t.w){s.scrollLeft(w-t.w)}f.restart_method()}break;case"right":var w=s.scrollLeft()-p;if(w<0){s.scrollLeft(s.scrollLeft()+t.w);w=s.scrollLeft()-p}if(v){s.stop(true,true).animate({scrollLeft:w},"normal","linear",function(){if(t.rw-w>=t.w){s.scrollTop(w+t.w)}f.restart_method()})}else{s.scrollLeft(w);if(w+t.w<=t.w){s.scrollLeft(w+t.w)}f.restart_method()}break;default:var w=s.scrollTop()+p;if(w+p>t.mh){s.scrollTop(s.scrollTop()-t.h);w=s.scrollTop()+p}if(v){s.stop(true,true).animate({scrollTop:w},"normal","linear",function(){if(w>=t.h){s.scrollTop(w-t.h)}f.restart_method()})}else{s.scrollTop(w);if(w>=t.h){s.scrollTop(w-t.h)}f.restart_method()}break}};f.stopRoll=function(){clearInterval(f.interval)};f.startRoll=function(){clearInterval(f.interval);f.isControlRoll=false;f.restart_method=function(){};f.interval=setInterval(f.rolling,o)};f.controlroll=function(c){d.direction=c;f.isControlRoll=true;f.stopRoll();if(d.autorun){f.restart_method=f.startRoll}else{f.restart_method=function(){f.isControlRoll=false}}f.rolling()};if(e){s.hover(function(){f.stopRoll()},function(){if(!d.enabled||(d.enabled&&d.autorun)){f.startRoll()}})}if(!d.enabled||(d.enabled&&d.autorun)){f.startRoll()}if(d.enabled){b(d.btn_next).click(function(){f.controlroll(d.forward)});b(d.btn_prev).click(function(){f.controlroll(d.negative)})}return s}})})(jQuery);/*  |xGv00|83a9bc43d57996629fc56dbe81ac2209 */