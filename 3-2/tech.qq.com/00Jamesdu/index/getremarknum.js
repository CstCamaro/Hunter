/**
 * ��������URL��ȡ���������ɹ������ָ�����������ڸ���ҳ��ȣ�
 * @param url: ����URL��ַ
 * @param callback: ��ȡ�ӿڳɹ���Ļص��������ٶ��ûص�����������������Ϊ�����
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