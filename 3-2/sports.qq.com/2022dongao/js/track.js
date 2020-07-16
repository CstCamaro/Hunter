// 封装了以下方法
function clickObj() {
    var co = new Object;
    co._instance = null;
    co.clickButton = function(url) {
        if ("undefined" == typeof url || !url)
            return false;
        var im = new Image(1, 1);
        im.style.display = 'none';
        try {
            im.src = url;
        } catch (e) {
            try {
                im.dynSrc = url;
            } catch (ee) { /* 实在监测不了... */
                return false;
            }
        }
        try {
            document.getElementsByTagName('body')[0].appendChild(im);
        } catch (e) { /* 为保险加载im对象到body。加载不了也无所谓 */
            return true;
        }
        return true;
    }
    return co;
}
var co = clickObj();

var tracks = new Array();
tracks[0] = 'http://t.l.qq.com/ping?t=m&cpid=631007226&url=http%3A//app_minisite_click_monitor/button6310072260&ref'; // 点击按钮监测

function trackAction(actionId) {
	co.clickButton(tracks[actionId]);
}

// 给按钮加上onclick="trackAction(0)"
trackAction(0);/*  |xGv00|221e380e2e3341dd627d479b02202d49 */