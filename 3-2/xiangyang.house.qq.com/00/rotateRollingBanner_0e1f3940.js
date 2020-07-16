(function($) {
    $.fn.rotateRollingBanner = function(options) {
        var defaults = {
            moveSpeed: 200,
            autoRollingTime: 5000
        };
        $.extend(defaults, options);
        return this.each(function() {
            var me = $(this);
            var ul = me.find(".d_img");
            var lis = ul.find(">li");
            var menu = me.find(".d_menu");
            var meter = me.find(".d_menu>span");
            var prev = me.find(".d_prev");
            var next = me.find(".d_next");
            var sumLi = me.find(".sumLi");
            var currentLi = me.find(".currentLi");
            var lisLength = lis.length;
            var part = 0;           //进度条的width
            var num = 3;            // 展示的li数量；
            var NorP = "next";     // 用来判断 上一张 下一张；
            var timer;              // 定时器；
            var visibleLi = [];     // 存贮显示li的css属性值；
            var allLi = [];         // 存贮所有的li；
            var isFinish = 1;       // 1 图片切换已经执行完  0 图片切换还没有执行完
            var clickIndex = 0;     // 下一个显示的  li按钮 索引
            var currentIndex = 0;   // 正显示的  li的索引
            init();      //存贮所有的li 并设置li的属性；初始化menu li按钮；
            bind();      //事件绑定
            rolling();   //定时任务
            function init() {
                part = parseInt(menu.width()/lisLength);
                var n = lisLength<10 && '0'+lisLength;
                sumLi.html(n);

                meter.css({'width':part});//设置进度条的width

                for (var i = 0; i < lisLength; i++) {
                    var liN = lis.eq(i);
                    if (i < num) {
                        visibleLi[i] = {
                            left: liN.position().left,
                            top: liN.position().top,
                            zIndex: liN.css("z-index"),
                            width: liN.width()
                        };
                        liN.css("left", visibleLi[i].left);
                    } else {
                        liN.css("left", visibleLi[num - 1].left);
                    }
                    allLi.push(liN);
                }
            }
            function bind() {
                me.bind("mouseover",
                    function() {
                        clearInterval(timer);
                    }).bind("mouseout",
                    function() {
                        rolling();
                    });
                next.bind("click",
                    function() {
                        if (isFinish) {
                            NorP = "next";
                            isFinish = 0;
                            if (clickIndex == lisLength - 1) {
                                clickIndex = 0;
                            } else {
                                clickIndex++;
                            }
                            $('.font>h3').hide().eq(clickIndex).show();
                            change();
                        }
                    });
                prev.bind("click",
                    function() {
                        if (isFinish) {
                            NorP = "prev";
                            isFinish = 0;
                            if (clickIndex == 0) {
                                clickIndex = lisLength - 1;
                            } else {
                                clickIndex--;
                            }
                            $('.font>h3').hide().eq(clickIndex).show();
                            change();
                        }
                    })
            }
            function change() {
                if (NorP == "next") {              // 下一张
                    for (i = 0; i < num; i++) {
                        var D = visibleLi[i - 1];
                        if (i == 0) {
                            allLi[i].fadeOut(defaults.moveSpeed);
                        } else {
                            allLi[i].css("z-index", D.zIndex).animate({
                                    left: D.left,
                                    top: D.top,
                                    width: D.width
                                },
                                defaults.moveSpeed);
                        }
                        if(i==1){
                            allLi[i].find('img').css({float:"right"});
                        }else{
                            allLi[i].find('img').css({float:"left"});
                        }

                        if(i == 2){                         //中间一张'opacity':'1' ；其他的'opacity':'0.5'
                            allLi[i].css({'opacity':'1'});
                        }else{
                            allLi[i].css({'opacity':'.5'});
                        }
                    }
                    var D = visibleLi[num - 1];
                    if (allLi.length != num) {
                        allLi[num].css({
                            'opacity':'.5',
                            left: D.left,
                            top: D.top,
                            width: D.width,
                            "z-index": D.zIndex
                        }).fadeIn(defaults.moveSpeed,
                            function() {
                                isFinish = 1;
                            });
                        allLi[num].find('img').css({float:"left"});
                    } else {
                        allLi[0].stop().css({
                            'opacity':'.5',
                            left: D.left,
                            top: D.top,
                            width: D.width,
                            "z-index": D.zIndex
                        }).fadeIn(defaults.moveSpeed,
                            function() {
                                isFinish = 1;
                            });
                        allLi[0].find('img').css({float:"left"});
                    }
                    allLi.push(allLi.shift());
                } else {                 // 上一张
                    for (i = 0; i < num; i++) {
                        var D = visibleLi[i + 1];
                        if (i == num - 1) {
                            allLi[i].css("z-index", 0).fadeOut(defaults.moveSpeed);
                        } else {
                            allLi[i].css("z-index", D.zIndex).animate({
                                    left: D.left,
                                    top: D.top,
                                    width: D.width
                                },
                                defaults.moveSpeed);
                            allLi[i].find('img').css({float:"left"});
                        }
                        if(i == num - 3){                       //中间一张'opacity':'1' ；其他的'opacity':'0.5'
                            allLi[i].css({'opacity':'1'});
                        }else{
                            allLi[i].css({'opacity':'.5'});
                        }
                    }
                    var D = visibleLi[0];
                    allLi[allLi.length - 1].stop().css({
                        'opacity':'.5',
                        left: D.left,
                        top: D.top,
                        width: D.width,
                        "z-index": D.zIndex
                    }).fadeIn(defaults.moveSpeed,
                        function() {
                            isFinish = 1;
                        });
                    allLi[allLi.length - 1].find('img').css({float:"right"});
                    allLi.unshift(allLi.pop());
                }
                var n=clickIndex+1;
                    n = n<10 && '0'+n;
                currentLi.html(n);

                meter.animate({                //进度条动画
                        left: clickIndex*part
                    },
                    defaults.moveSpeed);

                currentIndex = clickIndex;
            }
            function rolling() {
                timer = setInterval(rotate, defaults.autoRollingTime);
            }
            function rotate() {
                next.click();
            }
        })
    }
})(jQuery);