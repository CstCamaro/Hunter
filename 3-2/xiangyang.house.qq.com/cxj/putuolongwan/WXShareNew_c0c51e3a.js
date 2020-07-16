var shareWXData;
var peopleWXConfig;
shareWXData = function() {
	peopleWXConfig.debug = false; //关闭调试模式
	peopleWXConfig.jsApiList = [
		'checkJsApi',
		'onMenuShareTimeline',
		'onMenuShareAppMessage',
		'onMenuShareQQ',
		'onMenuShareWeibo'
	];
	wx.config(peopleWXConfig);
	wx.ready(function() {
		wx.onMenuShareTimeline({ //分享到朋友圈
			title: wxData.title, // 分享标题
			link: wxData.link, // 分享链接
			imgUrl: wxData.imgUrl, // 分享图标
			success: function() {
				// 用户确认分享后执行的回调函数
				//alert(wxData.link + "|" + wxData.imgUrl);
			},
			cancel: function() {
				// 用户取消分享后执行的回调函数
			},
			trigger: function() { // 用戶触发分享事件后的回调函数
				this.title = wxData.title;
			}
		});
		wx.onMenuShareAppMessage({ //分享给朋友
			title: wxData.title, // 分享标题
			link: wxData.link, // 分享链接
			imgUrl: wxData.imgUrl, // 分享图标
			desc: wxData.desc, // 分享描述
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function() {
				// 用户确认分享后执行的回调函数
				// alert(wxData.link + "|" + wxData.imgUrl);
			},
			cancel: function() {
				// 用户取消分享后执行的回调函数
			},
			trigger: function() { // 用戶触发分享事件后的回调函数
				this.title = wxData.title;
			}
		});
		wx.onMenuShareQQ({ //分享到QQ
			title: wxData.title, // 分享标题
			link: wxData.link, // 分享链接
			imgUrl: wxData.imgUrl, // 分享图标
			desc: wxData.desc, // 分享描述
			success: function() {
				// 用户确认分享后执行的回调函数
			},
			cancel: function() {
				// 用户取消分享后执行的回调函数
			},
			trigger: function() { // 用戶触发分享事件后的回调函数
				this.title = wxData.title;
			}
		});
		wx.onMenuShareWeibo({ //分享到腾讯微博
			title: wxData.title, // 分享标题
			link: wxData.link, // 分享链接
			imgUrl: wxData.imgUrl, // 分享图标
			desc: wxData.desc, // 分享描述
			success: function() {
				// 用户确认分享后执行的回调函数
			},
			cancel: function() {
				// 用户取消分享后执行的回调函数
			},
			trigger: function() { // 用戶触发分享事件后的回调函数
				this.title = wxData.title;
			}
		});
	});
	wx.error(function(res) {});
};

function importJs() {
	$.ajax({
		url: "http://opencity.house.ifeng.com/weixin/config/info",
		data: {
			id: shareID,
			_url: window.location.href
		},
		dataType: 'jsonp',
		jsonp: '_cb',
		success: function(json) {
			if (json.errno == 0) {
				peopleWXConfig = json.data;
				setTimeout(function() {
					shareWXData();
				}, 200)
			}
		}
	});
}
$(function() {
	importJs();
});