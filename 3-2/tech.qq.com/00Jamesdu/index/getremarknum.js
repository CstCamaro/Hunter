/**
 * 根据新闻URL拉取评论数，成功后调用指定函数（用于更新页面等）
 * @param url: 新闻URL地址
 * @param callback: 拉取接口成功后的回调函数，假定该回调函数接收评论数作为其参数
 */
function updateCommentNumByUrl(url, callback) {
    if(typeof jQuery != 'undefined') {
        jQuery.ajax({
            url: 'http://tcomment.qq.com/wb/urlinfo/fetchAction?type=ref&url=' + url,
            dataType: 'jsonp',
            error: function() { 
                typeof callback == 'function' && callback(0);
            },
            success: function(data) {
                if(data.ret == 0) {
                    typeof callback == 'function' && callback(data.ref[url].total<50?data.ref[url].total:data.ref[url].full);
                } else {
                    typeof callback == 'function' && callback(0);
                }
            }
        });
    }
}
/*  |xGv00|af9fcba44541f8344a3309bc63e68a1b */