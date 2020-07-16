$('.flexslider').flexslider({
        animation: "slide",
        before: function(slider){
            $CONFIG.count = slider.count - 0;
            $CONFIG.index = slider.animatingTo - 0;
            $CONFIG.direction = slider.direction;
            $CONFIG.flag = slider.atEnd;


            // 如果是最后一个
            if($CONFIG.index == 0 && $CONFIG.flag == true){
                $('.banner-wrap').animate({'left': -($CONFIG.count + 1)*$CONFIG.w + 'px'},
                    2000, 
                    function() {
                        $('.banner-wrap').css('left',-($CONFIG.index + 1)*$CONFIG.w + 'px');

                });
            // 如果是第一个
            }else if($CONFIG.index == $CONFIG.count-1 && $CONFIG.flag == true){
                $('.banner-wrap').animate({'left': '0px'},
                    2000, 
                function() {
                        $('.banner-wrap').css('left',-($CONFIG.count)*$CONFIG.w + 'px');
                });
                
            }else{
                $('.banner-wrap').animate({'left': -($CONFIG.index + 1)*$CONFIG.w + 'px'},
                    2000, 
                    function() {
                        

                });
            }
        },
        start: function (slider) {
            $('body').removeClass('loading');
        },
        after: function(){

        },
        slideshowSpeed: 3000,
        animationSpeed: 2000
    });



    $(".flexslider").hover(function () {
        $(".flex-direction-nav a").show();
        if(!$('.flex-prev').hasClass('icon')){
            $('.flex-prev').addClass('icon icon-prev');
        }
        if(!$('.flex-next').hasClass('icon')){
            $('.flex-next').addClass('icon icon-next');
        }
    }, function () {
        $(".flex-direction-nav a").hide();
    })

    //设置幻灯nav位置
    var w = $(window).width()
    w = w > 1000 ? w : 1000
    $(".flex-control-wrap").css("left", (w - $(".flex-control-wrap").width()) / 2)
    $(".list-1").add(".list-3").on("mouseover", "li", function () {
        $(this).addClass("hover")
    }).on('mouseout', "li", function () {
        $(this).removeClass("hover")
    })


    // 购物流程
    $("#J_shopFlowList .tip").each(function () {
        var _this = $(this);
        var oProcess = $('#J_shopFlow');
        var timer = timer2 = null;
        var flag = false;
        _this.hover(function () {
            clearTimeout(timer2);
            timer = setTimeout(function () {
                _this.addClass('cur').find('a').css({
                    width: "64px"
                }).animate({
                    'opacity': '1',
                    'width': "270px"
                }, function () {
                    flag = true;
                });
                _this.siblings('.tip').removeClass('cur').find('a').animate({
                    'opacity': '.4',
                    'width': "64px"
                });
                _this.siblings('li').animate({
                    'padding-right': "26px"
                });
                oProcess.find('.shopFlow-right').css('opacity', 0);
            }, 200)
        }, function () {
            clearTimeout(timer);
            flag && (timer2 = setTimeout(function () {
                oProcess.find('.shopFlow-right').css('opacity', 1);
                oProcess.find('li').removeClass('cur').animate({
                    'padding-right': "50px"
                });
                oProcess.find('.tip a').animate({
                    'opacity': '1',
                    'width': "64px"
                });
                flag = false;
            }, 200))
        })
    })

    /**
     * 倒计时
     * 开始时间需要写入 服务器当前时间
     * 
     */
    function countdown(config){
        this.default = {
            select: '.class',
            start: "2016-06-28 00:00:00",
            end: "2016-06-28 00:05:00",
            tpl: '<span class="num">{d}</span>天<span class="num">{h}</span>小时<span class="num">{m}</span>分<span class="num">{s}</span>秒'
        };
        $.extend(this.default,config)
        this.reday();
    }

    countdown.prototype.reday = function(){
        var self = this;
        var start =  new Date(this.default.start).getTime();
        var curTime = new Date(this.default.time).getTime();
        var end =  new Date(this.default.end).getTime();
        var time = null;
        // if(!self.now) {
        //     self.rivise();
        // }
        if($(self.default.select).attr('data-ing') == 1){
            return false;
        }
        // 活动未开始
        if(start > curTime){
            time = start - curTime;
            var timing = setInterval(function(){
                $(self.default.select).attr('data-ing',1);
                time  = time - 1000;
                if(time <= 0){
                    $(self.default.select).attr('data-ing',0);
                    // 纠正时间
                    clearInterval(timing);
                    $(self.default.select).html('<span class="text">马上开始···</span>');
                    countTime();
                    return false;
                }
                html = _formatTime(time);
                $(self.default.select).html('<span class="text">距离申请开始</span>'+self.render(html));
            },1000)
            
        }else if(end > curTime){
            time = end - curTime;
            var timing = setInterval(function(){
                $(self.default.select).attr('data-ing',1);
                time  = time - 1000;
                if(time <= 0){
                    $(self.default.select).attr('data-ing',0);
                    // 纠正时间
                    clearInterval(timing);
                    $(self.default.select).html('<span class="text">马上结束···</span>');
                    countTime();
                    return false;
                }
                html = _formatTime(time);
                $(self.default.select).html('<span class="text">剩余报名时间</span>'+self.render(html));
            },1000)
        }else{
            $(self.default.select).html('<span class="text">报名已结束</span>');
        }
        // 活动状态接口
        function rivise(){
            var xhr = new XMLHttpRequest();
                xhr.open('get', '/', true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 3) {
                        var now = xhr.getResponseHeader('Date');
                        now = (new Date(now)).valueOf();
                    }
                };
                xhr.send(null);
        }
        function _cover(num) {
            var n = parseInt(num, 10);
            return n < 10 ? '0' + n : n;
        }
        function _formatTime(ms) {
            var s = ms / 1000,
                m = s / 60;
            return {
                d: _cover(m / 60 / 24),
                h: _cover(m / 60 % 24),
                m: _cover(m % 60),
                s: _cover(s % 60)
            };
        }
    }

    countdown.prototype.render = function(html){
        var template = this.default.tpl;
        return template.replace(/{(\w*)}/g, function (m, key) {
            return html[key] ? html[key] : "";
        });
    }

    

    function countTime(){
        $('.J_MainCont .g-block-down').each(function(){
            var _this = $(this);
            var conf = {
                time: $CONFIG.time,
                start: _this.attr("data-start-time"),
                end: _this.attr("data-end-time"),
                select: _this
            }
            new countdown(conf);
        })
    }
    countTime();