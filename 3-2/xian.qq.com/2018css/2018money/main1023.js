$("#navIndex1").addClass("current");

function focusAuto(obj) {
    var $picShowBox = $(obj),
        $focusCont = $picShowBox.find(".focusCont"),
        $li = $picShowBox.find('li'),
        $toolBox = $picShowBox.find('.focusDot'),
        $btn = $picShowBox.find(".btn"),
        //$nextBtn = $picShowBox.find(".nextBtn"),
        len = $li.length,
        dot = '',
        speed = 5000,
        index = 0,
        timer = null;

    for (var i = 0; i < len; i++) {
        dot += '<span>' + (i + 1) + '</span>';
    }
    if (len > 1) {
        $($toolBox).show();
        $($btn).show();
    }
    $toolBox.html(dot);

    var $span = $toolBox.find('span');
    var focusWidth = $($li).width() * len;
    $focusCont.width(focusWidth);

    var setCurrent = function(i) {
        index = i;
        var left = $($li).width() * index;
        $focusCont.animate({
            left: -left
        });
        // $li.hide().eq(i).show();
        $span.removeClass('on').eq(i).addClass('on');
    }

    var auto = function() {
        timer = setInterval(function() {
            index = (index + 1) % len;
            setCurrent(index);
        }, speed)
    };
    setCurrent(0);
    auto();
    $picShowBox.hover(function() {
        clearInterval(timer);
    }, function() {
        auto();
    });

    $(obj).on('mouseover', '.focusDot span', function() {
        setCurrent($(this).index());
    })
    $(obj).on('click', '.prevBtn', function() {
        index -= 1;
        if (index < 0) {
            index = len - 1;
        } else {
            index = index;
        }
        setCurrent(index);
    })

    $(obj).on('click', '.nextBtn', function() {
        index += 1;
        if (index > len - 1) {
            index = 0;
        } else {
            index = index;
        }
        setCurrent(index);
    })
}
focusAuto("#focus");



(function($) {
    /**
     * @name    tabs        页卡函数
     * @param   {Object}    初始值
     * @type    {Object}    返回对象本身
     */
    $.fn.tabs = function(options) {
        var config = {
                index: 0,
                current: "current",
                type: "mouseover",
                hdItem: ".tab_hd_item",
                bdItem: ".tab_bd_item"
            },
            obj = $(this),
            opts = $.extend({}, config, options);

        $(opts.hdItem, obj).bind(opts.type, function() {
            if (opts.index != $(opts.hdItem, obj).index($(this))) {
                opts.index = $(opts.hdItem, obj).index($(this));
                setCurrent();
            }
        });

        function setCurrent() {
            $(opts.hdItem, obj).removeClass(opts.current).eq(opts.index).addClass(opts.current);
            $(opts.bdItem, obj).css({ "display": "none" }).eq(opts.index).css({ "display": "block" });
        }
        setCurrent();
        return obj;
    };
})(jQuery);

// tabs调用
$(function() {
    //tabs
    $("#tabs1").tabs({
        index: 0,
        type: "mouseover",
        current: "on",
        hdItem: ".tab_hd_item",
        bdItem: ".tab_bd_item"
    });
});

//滚动新闻
(function($) {
    /*
    direction: 方向 up left right down
    speed: 滚动速度
    gap: 间隔滚动时间 ms
    */
    $.fn.hScroll = function(options) {
        var _default = {
                direction: 'left',
                speed: 100,
                gap: 500
            },
            $this = $(this),
            li_width = [],
            ul_width = 0,
            timer = null;

        $.extend(_default, options);
        getData();

        function myrefresh() {
            window.location.reload();
        }
        setInterval(myrefresh, 300000); //指定5分刷新一次
        function getLocalTime(time) { //时间戳转化为时间
            return new Date(parseInt(time) * 1000).toTimeString().replace(/:\d{1,2}$/, ' ').substring(0, 5);
        }
        //滚动新闻
        function getData() {
            $.ajax({
                url: 'https://openapi.inews.qq.com/getQQNewsRoseContentOpen?article_id=FIN2017051203944300&refer=qqcom2',
                method: "get",
                dataType: "jsonp",
                jsonpCallback: "CallBack",
                success: function(res) {
                     var topObj = '',
                        newObj = '';
                    if (res.content.live_room.top[0]) {
                        topObj = res.content.live_room.top[0];
                        txtList += '<li><a href="https://view.inews.qq.com/a/FIN2017051203944300" target="_blank"><span class="time">' + getLocalTime(topObj[0].pub_time) + '</span><span class="txt">' + topObj[0].reply_content + '</span></a></li>';
                    }

                    if (res.content.live_room['new']) {
                        newObj = res.content.live_room['new'];
                    }
                    var txtList = "",
                        index = 10,
                        len = newObj.length;
                    if (index <= len) {
                        index = index;
                    } else {
                        index = len;
                    }

                    for (var i = 0, l = index; i < l; i++) {
                        txtList += '<li><a href="https://view.inews.qq.com/a/FIN2017051203944300" target="_blank"><span class="time">' + getLocalTime(newObj[i][0].pub_time) + '</span><span class="txt">' + newObj[i][0].reply_content + '</span></a></li>';

                    }
                    $('#scrollNews').html(txtList);
                    setTimeout(function() {
                        init();
                    }, 100)

                }
            });
        }



        function init() {
            var $ul = $this.children('ul'),
                $li = $ul.find('li'),
                width_s = 0;

            $li.each(function() {
                var w = $(this).outerWidth(true);
                width_s += w;
                li_width.push(w);
            });
            width_s += 2;
            $ul.css('width', width_s);
            ul_width = width_s;

            // 只有内容宽度超过显示的宽度时，才进行轮播
            if (ul_width > $this.width()) {
                $this.html('<div class="clearfix cons" style="width:' + (width_s * 2) + 'px">' + $ul[0].outerHTML + $ul[0].outerHTML + '</div>');
                start();
                addEvent();
            }
        }

        function scroll() {
            var $cons = $this.children('.cons');

            var left = parseInt($cons.css('left'));

            if (left <= 0 - ul_width) {
                $cons.css('left', 0);
            } else {
                left--;
                $cons.css('left', left + 'px');
            }
        }

        function start() {
            stop();
            timer = setInterval(scroll, 26);
        }

        function stop() {
            clearInterval(timer);
        }

        function addEvent() {
            $this.on('mouseenter', function() {
                stop();
            }).on('mouseleave', function() {
                start();
            })
        }
    }
})(jQuery);
$("#ewm-dy").on('click', '#btn-close', function() {
    $("#ewm-dy").hide();
})


tool.init();




function focusAd_dot() {
    var $focusAd = $("#focusAd"),
        len = $focusAd.find('.item').length,
        html = '';

    for (var i = 0; i < len; i++) {
        html += '<a href="javascript:void(0);"></a>';
    }
    $focusAd.find('.focus_dot').html(html);
    $focusAd.qqfocus({
        space: 4000,
        effect: 'fade',
        event: 'mouseover'
    });
}
focusAd_dot();/*  |xGv00|297fdcfa17b9ba1fd68dc39627a09485 */