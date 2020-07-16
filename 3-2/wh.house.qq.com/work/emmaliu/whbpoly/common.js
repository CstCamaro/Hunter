// 轮播
(function ($) {
    $.scrollContent = function (obj) {
        var posList = [];
        var posNum = 0;
        var timer = 0;
        var direction = 0;
        var delay = 5000;
        var activeClass = "focus"
        if (obj.delay) {
            delay = obj.delay;
        }
        function showPos(num) {
            obj.content.animate({
                "left": "-" + posList[num] + "px"
            });
            if (obj.btn) {
                obj.btn.removeClass(activeClass);
                obj.btn.eq(num).addClass(activeClass);
            }
        }
        function viewNext() {
            posNum++;
            if (posNum >= posList.length) {
                posNum = 0;
            }
            showPos(posNum);
        }
        function viewPrev() {
            posNum--;
            if (posNum < 0) {
                posNum = posList.length - 1;
            }
            showPos(posNum);
        }
        function autoShow() {
            timer = setInterval(function () {
                if (direction && obj.direct) {
                    viewPrev();
                }
                else {
                    viewNext();
                }
            }, delay);
        }
        function resetScroll() {
            clearInterval(timer);
            autoShow();
        }
        obj.content.css("width", function () {
            var boxWidth = 0;
            var child = $(this).children();
            for (var i = 0; i < child.length; i++) {
                boxWidth += child.eq(i).outerWidth();
            }
            return boxWidth + "px";
        }).children().each(function (i) {
            posList[i] = $(this).position().left;
        }).bind("mouseover", function () {
            clearInterval(timer);
        }).bind("mouseout", function () {
            autoShow();
        });
        if (obj.btn) {
            obj.btn.each(function (i) {
                $(this).bind("mouseover", function () {
                    showPos(i);
                    posNum = i;
                    resetScroll();
                });
            });
        }
        if (obj.next) {
            obj.next.bind("mouseover", function () {
                direction = 0;
                viewNext();
                resetScroll();
            });
        }
        if (obj.prev) {
            obj.prev.bind("mouseover", function () {
                direction = 1;
                viewPrev();
                resetScroll();
            });
        }
        showPos(0);
        autoShow();
    }
})(jQuery);

(function ($) {
    $.fn.featureList = function (options) {
        var tabs = $(this);
        var output = $(options.output);

        new jQuery.featureList(tabs, output, options);

        return this;
    };
    $.featureList = function (tabs, output, options) {
        function slide(nr) {
            if (typeof nr == "undefined") {
                nr = visible_item + 1;
                nr = nr >= total_items ? 0 : nr;
            }

            tabs.removeClass('focus').filter(":eq(" + nr + ")").addClass('focus');

            output.stop(true, true).filter(":visible").fadeOut();
            output.filter(":eq(" + nr + ")").fadeIn(100, function () {
                visible_item = nr;
            });
        }
        var options = options || {};
        var total_items = tabs.length;
        var visible_item = options.start_item || 0;
        options.pause_on_hover = options.pause_on_hover || true;
        options.transition_interval = options.transition_interval || 5000;
        output.hide().eq(visible_item).show();
        tabs.eq(visible_item).addClass('focus');
        tabs.mouseover(function () {
            if ($(this).hasClass('focus')) {
                return false;
            }

            slide(tabs.index(this));
        });
        if (options.transition_interval > 0) {
            var timer = setInterval(function () {
                slide();
            }, options.transition_interval);

            if (options.pause_on_hover) {
                tabs.mouseenter(function () {
                    clearInterval(timer);

                }).mouseleave(function () {
                    clearInterval(timer);
                    timer = setInterval(function () {
                        slide();
                    }, options.transition_interval);
                });
            }
        }
    };
})(jQuery);

$(document).ready(function () {
    (function () {
        var timer1, timer2;
        var link_more = $("[rel=js_more_link]"), link_content = $("#js_more_link_content");
        link_more.bind("mouseover", function () {
            clearTimeout(timer2);
            timer1 = setTimeout(function () {
                link_content.fadeIn()
            }, 600);
        }).bind("mouseout", function () {
            clearTimeout(timer1);
            timer2 = setTimeout(function () {
                link_content.fadeOut()
            }, 900);
        });
    })();

    $(".col-sub ul li").first().addClass("first-child").end().last().addClass("last-child");
    $(".invest-box, .events-list").last().addClass("no-border");

    (function () {
        setInterval(function () {
            $("[rel=js_toggle_img]").children().toggle();
        }, 7000)
    })();

    $.scrollContent({

        content: $("[rel=scroll_box_content]"),
        btn: $("[rel=js_btn_list]"),
        prev: $("[rel=js_btn_prev]"),
        next: $("[rel=js_btn_next]"),
        delay: 7000,
        direct: true
    });

    $.featureList(
	$("[rel=feature_list_btn]"),
	$("[rel=feature_list]"), {
	    start_item: 0,
	    transition_interval: 6000
	}
	);
});

// banner
$(document).ready(function () {
    function G(s) {
        return document.getElementById(s);
    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }

    function Animate(obj, json) {
        if (obj.timer) {
            clearInterval(obj.timer);
        }
        obj.timer = setInterval(function () {
            for (var attr in json) {
                var iCur = parseInt(getStyle(obj, attr));
                iCur = iCur ? iCur : 0;
                var iSpeed = (json[attr] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                obj.style[attr] = iCur + iSpeed + 'px';
                if (iCur == json[attr]) {
                    clearInterval(obj.timer);
                }
            }
        }, 30);
    }

    var oPic = G("picBox");
    var oList = G("listBox");

    var oPrev = G("prev");
    var oNext = G("next");
    var oPrevTop = G("prevTop");
    var oNextTop = G("nextTop");

    var oPicLi = oPic.getElementsByTagName("li");
    var oListLi = oList.getElementsByTagName("li");
    var len1 = oPicLi.length;
    var len2 = oListLi.length;

    var oPicUl = oPic.getElementsByTagName("ul")[0];
    var oListUl = oList.getElementsByTagName("ul")[0];
    var w1 = oPicLi[0].offsetWidth;
    var w2 = oListLi[0].offsetWidth;

    oPicUl.style.width = w1 * len1 + "px";
    oListUl.style.width = w2 * len2 + "px";

    var index = 0;

    var num = 5;
    var num2 = Math.ceil(num / 2);

    function Change() {

        Animate(oPicUl, { left: -index * w1 });

        if (index < num2) {
            Animate(oListUl, { left: 0 });
        } else if (index + num2 <= len2) {
            Animate(oListUl, { left: -(index - num2 + 1) * w2 });
        } else {
            Animate(oListUl, { left: -(len2 - num) * w2 });
        }

        for (var i = 0; i < len2; i++) {
            oListLi[i].className = "";
            if (i == index) {
                oListLi[i].className = "on";
            }
        }
    }

    oNextTop.onclick = oNext.onclick = function () {

        index++;
        index = index == len2 ? 0 : index;
        Change();
    }

    oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function () {
        clearInterval(timer);
    }
    oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function () {
        timer = setInterval(autoPlay, 4000);
    }

    oPrevTop.onclick = oPrev.onclick = function () {

        index--;
        index = index == -1 ? len2 - 1 : index;
        Change();
    }

    var timer = null;
    timer = setInterval(autoPlay, 4000);
    function autoPlay() {
        index++;
        index = index == len2 ? 0 : index;
        Change();
    }

    for (var i = 0; i < len2; i++) {
        oListLi[i].index = i;
        oListLi[i].onclick = function () {
            index = this.index;
            Change();
        }
    }

});

//微信
$(function() {
	
	$(".attention").hover(function(){
		$(".img1 ").fadeIn();
		},function(){
		$(".img1 ").fadeOut();
		});
	
    
});
//function wx() {
//	
//    $(".img1 ").stop().delay(300).fadeIn(700).animate({ opacity: '1' }, 800, "easeOutCubic");
//    $(".img1").click(function () {
//        $(".img1").stop().delay().fadeOut(700);
//    });
//}
		
//底部鼠标经过加边框
/*$(function () {
    $(".last li").hover(function () {
        $(this).children(".borLine").show();
    }, function () {
        $(this).children(".borLine").hide();
    });
});*/

// 鼠标经过加边框
$(document).ready(function (e) {
    $(".sale .col").mouseover(function () {

        $(this).css({ border: "5px solid #ffcc00", width: "300px", height: "360px" }).show(1000);
        $('.coltop img').css({ width: "300px", height: "265px", position: "absolute", top: "5px", left: "15px" }).show(1000);
        $('.opacity').css({ width: "300px", height: "40px", position: "absolute", top: "230px", left: "15px" }).show(1000);
        $('.coldown').css({ width: "300px", height: "95px", position: "absolute", bottom: "5px", left: "15px" }).show(1000);
    })
    $(".sale .col").mouseout(function () {

        $(this).css({ border: "none", width: "310px", height: "370px" }).show(1000);
        $('.coltop img').css({ width: "310px", height: "275px", position: "absolute", top: "0", left: "10px" }).show(1000);
        $('.opacity').css({ width: "310px", height: "40px", position: "absolute", top: "235px", left: "10px" }).show(1000);
        $('.coldown').css({ width: "310px", height: "95px", position: "absolute", bottom: "0", left: "10px" }).show(1000);
    })

    $(".sale2 .col2").mouseover(function () {

        $(this).css({ border: "5px solid #ffcc00", width: "300px", height: "360px" }).show(1000);
        $('.coltop2 img').css({ width: "300px", height: "265px", position: "absolute", top: "5px", left: "15px" }).show(1000);
        $('.opacity2').css({ width: "300px", height: "40px", position: "absolute", top: "230px", left: "15px" }).show(1000);
        $('.coldown2').css({ width: "300px", height: "95px", position: "absolute", bottom: "5px", left: "15px" }).show(1000);
    })
    $(".sale2 .col2").mouseout(function () {

        $(this).css({ border: "none", width: "310px", height: "370px" }).show(1000);
        $('.coltop2 img').css({ width: "310px", height: "275px", position: "absolute", top: "0", left: "10px" }).show(1000);
        $('.opacity2').css({ width: "310px", height: "40px", position: "absolute", top: "235px", left: "10px" }).show(1000);
        $('.coldown2').css({ width: "310px", height: "95px", position: "absolute", bottom: "0", left: "10px" }).show(1000);
    })
});/*  |xGv00|cd3ef9c5cc3598d805b40c7ba1d13c78 */