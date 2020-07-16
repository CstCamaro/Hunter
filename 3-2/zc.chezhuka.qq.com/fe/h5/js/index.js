$(function () {
    $(".countDownId").each(function () {
        var id = $(this).attr("id");
        var time = $(this).attr("data-time");
        var status = $(this).attr("data-status");
        countDown(time, id, status);
    })

    $('.J_Pull').on('touchstart', function () {
        if (!$('#pullUp').hasClass('J_Pull')) {
            return;
        }
        $('#pullUp').removeClass('J_Pull');
        $('#pullUp').find('.pullUpLabel').html('加载中');

        var start = $(".textSection").length;
        var size = 10;
        $.ajax({
            url: "/h5/act/index_data?start=" + start + "&size=" + size,
            type: "post",
            dataType: "JSON",
            success: function (json) {
                var obj = json.data.datalist;
                var count = obj.length;
                var str = "";
                $.each(obj, function (i, item) {
                    str += "<section class='textSection'><a href='/h5/act/detail?act_id=" + item.act_id + "'><div class='secPic'><img src=" + item.image_url + "/>"; //图片
                    switch (item.status) {
                        case 0:
                            str = str + "<div class='state'>即将开始</div><div class='stateBg open'></div></div>";
                            break;
                        case 1:
                            str = str + "<div class='state'>试用申请中</div><div class='stateBg appling'></div></div>";
                            break;
                        case 2:
                            str = str + "<div class='state'>体验中</div><div class='stateBg testing'></div></div>";
                            break;
                        case 3:
                            str = str + "<div class='state'>已结束</div><div class='stateBg end'></div></div>";
                            break;
                    }
                    str = str + "<p class='intro'><span>" + item.act_title + "</span></p><div class='clearfix grey'><p>数量：<span>" + item.stock_count + "</span></p><p>市场价：<span>¥" + item.original_price + "</span></p><p>报名人数：<span class='orange'>" + item.upper_number + "</span></p></div>"; //数量信息

                    var endTime = new Date(item.act_end_time); //截止时间
                    var startTime = new Date(item.act_start_time); //截止时间
                    var nowTime = new Date();
                    var t = endTime.getTime() - nowTime.getTime();
                    var t1 = startTime.getTime() - nowTime.getTime();
                    if (item.status == '0' && t1 > 0) {
                        str = str + "<p class='countDown' id=" + item.act_id + ">距申请开始<span></span>天<span></span>时<span></span>分<span></span>秒</p></section>"
                        countDown(item.act_start_time, item.act_id)
                    } else if (item.status == '1' && t >= 0) {
                        str = str + "<p class='countDown' id=" + item.act_id + ">剩余报名时间<span></span>天<span></span>时<span></span>分<span></span>秒</p></section>"
                        countDown(item.act_end_time, item.act_id)
                    } else if (item.status == '2') {
                        str = str + "<p class='countDown'>活动已结束 " + item.act_end_time + "</p></a></section>"
                    } else {
                        str = str + "</a></section>"
                    }
                })
                $("#main-content").append(str);
                if (count < size) {
                    $('#pullUp').find('.pullUpLabel').html('更多精彩，敬请期待！');
                } else {
                    $('#pullUp').find('.pullUpLabel').html('点击加载更多');
                    $('#pullUp').addClass('J_Pull');
                }

            },
            error: function () {
                console.log('error');
            }
        })

    })
})