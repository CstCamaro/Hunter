var ie6 = false;
if(navigator.appVersion.match(/6./i)=="6.") ie6 = true;

if(typeof FloatAdNoMoveSet == 'undefined') var FloatAdNoMoveSet = {};

function FloatAdNoMove() {
	this.ad_id = "ad_block_float"; //广告ID
	this.flash_width = FloatAdNoMoveSet.flash_width ? FloatAdNoMoveSet.flash_width :700; //浮动Flash广告宽度
	this.flash_height = FloatAdNoMoveSet.flash_height ? FloatAdNoMoveSet.flash_height :500; //浮动Flash广告高度
	this.flash_url = floatadnomove_flash_url; //浮动Flash广告地址
	this.bigimg_url = ad_big_img_url; //浮动跳转链接
	//this.top = 180; //(document.documentElement.clientHeight - this.flash_height)/2 + 80 //浮动Flash广告定位top
	this.left = (window.screen.width - this.flash_width)/2;
	this.flash_s_width = FloatAdNoMoveSet.flash_s_width ? FloatAdNoMoveSet.flash_s_width : 100; //回收Flash广告宽度
	this.flash_s_height = FloatAdNoMoveSet.flash_s_height ? FloatAdNoMoveSet.flash_s_height : 100; //回收Flash广告高度
	this.flash_s_url = floatadnomove_flash_s_url; //回收Flash广告地址
	//this.small_img_url = ad_small_img_url; //回收跳转链接
	this.bottom=FloatAdNoMoveSet.big_bottom ? FloatAdNoMoveSet.big_bottom : 0;
	this.s_pos = "left:"+(FloatAdNoMoveSet.small_left ? FloatAdNoMoveSet.small_left+"px;" : "auto;");
	this.s_pos += "right:"+(FloatAdNoMoveSet.small_right ? FloatAdNoMoveSet.small_right+"px;" : "auto;");
	this.s_pos += "top:"+(FloatAdNoMoveSet.small_top ? FloatAdNoMoveSet.small_top+"px;" : "auto;");
	this.s_pos += "bottom:"+(FloatAdNoMoveSet.small_bottom ? FloatAdNoMoveSet.small_bottom+"px;" : "auto;");
	this.samll_flash_show = FloatAdNoMoveSet.samll_flash_show;

	this.flash_s_close = true; //重播时回收Flash是否关闭 true|是 false|否
	this.output = null;
	this.lastScrollY = 0;
	this.times = 8000;
	this.wait_time = FloatAdNoMoveSet.wait_time ? FloatAdNoMoveSet.wait_time : 12000;
}

FloatAdNoMove.prototype = {
	init_ad:function() {
		var div = '<div id="' + this.ad_id +'" style="position:absolute;display:none;z-index:10000;left:' + this.left + 'px;bottom:' + this.bottom + 'px;width:'+this.flash_width+'px;height:'+this.flash_height+'px;"></div>';
		//var output = '<div><object width="' + this.flash_width + '" height="' + this.flash_height + '">';
		var output = '<div><a href="' + this.bigimg_url + '" target="_blank">';
		//output += '<param name="movie" value="' + this.flash_url + '"></param>';
		output += '<img src="' + this.flash_url + '"   width="' + this.flash_width + 'px" height="' + this.flash_height + 'px">';
		output += '</a><div style="width:59px;height:21px;right:0;top:0;position:absolute;z-index:10002;background:url(http://mat1.gtimg.com/cd/images/icon/float_ad_close.gif) no-repeat;cursor:pointer" onclick="close_adno()"></div></div>';
		this.output = output;
		this.addHTML(document.body, div);
		var s_output = '<div id="' + this.ad_id + '_small" style="display:none;position:absolute;z-index:10000;'+this.s_pos+'border:1px solid #EEE; background:#FFF;width:'+this.flash_s_width+'">';
		//s_output += '<object width="' + this.flash_s_width + 'px" height="' + this.flash_s_height + 'px">';
		s_output += '<a href="' + this.bigimg_url + '" target="_blank">';
		s_output += '<img src="' + this.flash_s_url + '" width="' + this.flash_s_width + 'px" height="' + this.flash_s_height + 'px">';
		s_output += '</a>';
		s_output += '<div style="width:'+this.flash_s_width+';"><div onclick="javascript:replay_adno()" style="display:block;float:left;width:25px;"><img src="http://mat1.gtimg.com/cd/images/icon/float_ad_replay.gif" border="0" /></div><div onclick="javascript:close_adno_s()" style="display:block;float:right;width:25px;"><img src="http://mat1.gtimg.com/cd/images/icon/float_ad_close.jpg" border="0" /></div></div></div>'; 
		this.addHTML(document.body, s_output);
	},
	show_ad:function() {
		document.getElementById(this.ad_id).innerHTML = this.output;
		document.getElementById(this.ad_id).style.display = "block";
		setTimeout("this.close_adno()", this.times);
	},
	replay_ad:function() {
		document.getElementById(this.ad_id).innerHTML = this.output;
		document.getElementById(this.ad_id).style.display = "block";
		if (this.flash_s_close) {
			document.getElementById(this.ad_id + "_small").style.display = "none";
		}
		setTimeout("this.close_adno()", this.times);
	},
	close_ad:function() {
		document.getElementById(this.ad_id).innerHTML = "";
		document.getElementById(this.ad_id).style.display = "none";
		if(this.samll_flash_show){
			document.getElementById(this.ad_id + "_small").style.display = "block";
		}
	},
	close_ad_s:function() {
		document.getElementById(this.ad_id + "_small").style.display = "none";
	},
	moveMain:function() {
		
		var diffY = document.body.scrollTop + document.documentElement.scrollTop; 

		var percent = 0.1 * (diffY - this.lastScrollY); 
		if (percent > 0) {
			percent = Math.ceil(percent);
		} else {
			percent = Math.floor(percent); 
		}

		if(document.getElementById(this.ad_id + "_small").style.top == 'auto') {
			var top_s = document.documentElement.clientHeight - FloatAdNoMoveSet.small_bottom - this.flash_s_height - 48;
		} else {
			var top_s = document.getElementById(this.ad_id + "_small").style.top.replace("px", "");
		}
		
		document.getElementById(this.ad_id + "_small").style.top = (parseInt(top_s) + parseInt(percent)) + "px";
		this.lastScrollY = this.lastScrollY + percent;
		
	},
	addHTML:function(oParentNode, sHTML) {
		if (window.addEventListener) {// for MOZ
			var oRange = oParentNode.ownerDocument.createRange();
			oRange.setStartBefore(oParentNode);
			var oFrag = oRange.createContextualFragment(sHTML);
			oParentNode.appendChild(oFrag);
		} else {// for IE5+
			oParentNode.insertAdjacentHTML("afterBegin", sHTML);
		}
	}
};




/*
FloatAdNoMove.prototype = {
	init_ad:function() {
		var div = '<div id="' + this.ad_id +'" style="position:absolute;display:none;z-index:10000;left:' + this.left + 'px;bottom:' + this.bottom + 'px;width:'+this.flash_width+'px;height:'+this.flash_height+'px;"></div>';
		var output = '<div><object width="' + this.flash_width + '" height="' + this.flash_height + '">';
		output += '<param name="movie" value="' + this.flash_url + '"></param>';
		output += '<param name="wmode" value="transparent"></param>';
		output += '<param name="quality" value="high"></param>';
		output += '<param name="allowFullScreen" value="true"></param>';
		output += '<embed src="' + this.flash_url + '" type="application/x-shockwave-flash" AllowScriptAccess="always" swLiveConnect="true" wmode="transparent" quality="high" allowfullscreen="true" width="' + this.flash_width + 'px" height="' + this.flash_height + 'px"></embed>';
		output += '</object><div style="width:59px;height:21px;right:0;top:0;position:absolute;z-index:10002;background:url(http://mat1.gtimg.com/cd/images/icon/float_ad_close.gif) no-repeat;cursor:pointer" onclick="close_adno()"></div></div>';
		this.output = output;
		this.addHTML(document.body, div);
		var s_output = '<div id="' + this.ad_id + '_small" style="display:none;position:absolute;z-index:10000;'+this.s_pos+'border:1px solid #EEE; background:#FFF;width:'+this.flash_s_width+'">';
		s_output += '<object width="' + this.flash_s_width + 'px" height="' + this.flash_s_height + 'px">';
		s_output += '<param name="movie" value="' + this.flash_s_url + '"></param>';
		s_output += '<param name="allowFullScreen" value="true"></param>';
		s_output += '<embed src="' + this.flash_s_url + '" type="application/x-shockwave-flash" AllowScriptAccess="always" swLiveConnect="true" wmode="transparent" allowfullscreen="true" width="' + this.flash_s_width + 'px" height="' + this.flash_s_height + 'px"></embed>';
		s_output += '</object>';
		s_output += '<div style="width:'+this.flash_s_width+';"><div onclick="javascript:replay_adno()" style="display:block;float:left;width:25px;"><img src="http://mat1.gtimg.com/cd/images/icon/float_ad_replay.gif" border="0" /></div><div onclick="javascript:close_adno_s()" style="display:block;float:right;width:25px;"><img src="http://mat1.gtimg.com/cd/images/icon/float_ad_close.jpg" border="0" /></div></div></div>'; 
		this.addHTML(document.body, s_output);
	},
	show_ad:function() {
		document.getElementById(this.ad_id).innerHTML = this.output;
		document.getElementById(this.ad_id).style.display = "block";
		setTimeout("this.close_adno()", this.times);
	},
	replay_ad:function() {
		document.getElementById(this.ad_id).innerHTML = this.output;
		document.getElementById(this.ad_id).style.display = "block";
		if (this.flash_s_close) {
			document.getElementById(this.ad_id + "_small").style.display = "none";
		}
		setTimeout("this.close_adno()", this.times);
	},
	close_ad:function() {
		document.getElementById(this.ad_id).innerHTML = "";
		document.getElementById(this.ad_id).style.display = "none";
		if(this.samll_flash_show){
			document.getElementById(this.ad_id + "_small").style.display = "block";
		}
	},
	close_ad_s:function() {
		document.getElementById(this.ad_id + "_small").style.display = "none";
	},
	moveMain:function() {
		
		var diffY = document.body.scrollTop + document.documentElement.scrollTop; 

		var percent = 0.1 * (diffY - this.lastScrollY); 
		if (percent > 0) {
			percent = Math.ceil(percent);
		} else {
			percent = Math.floor(percent); 
		}

		if(document.getElementById(this.ad_id + "_small").style.top == 'auto') {
			var top_s = document.documentElement.clientHeight - FloatAdNoMoveSet.small_bottom - this.flash_s_height - 48;
		} else {
			var top_s = document.getElementById(this.ad_id + "_small").style.top.replace("px", "");
		}
		
		document.getElementById(this.ad_id + "_small").style.top = (parseInt(top_s) + parseInt(percent)) + "px";
		this.lastScrollY = this.lastScrollY + percent;
		
	},
	addHTML:function(oParentNode, sHTML) {
		if (window.addEventListener) {// for MOZ
			var oRange = oParentNode.ownerDocument.createRange();
			oRange.setStartBefore(oParentNode);
			var oFrag = oRange.createContextualFragment(sHTML);
			oParentNode.appendChild(oFrag);
		} else {// for IE5+
			oParentNode.insertAdjacentHTML("afterBegin", sHTML);
		}
	}
};
*/
var floatadnomove = new FloatAdNoMove();
floatadnomove.init_ad();
setTimeout("floatadnomove.show_ad()", floatadnomove.wait_time);
if(ie6) {
	setInterval("floatadnomove.moveMain()", 1);
} else {
	document.getElementById(floatadnomove.ad_id + "_small").style.position = 'fixed';
}
function replay_adno() {
	floatadnomove.replay_ad();
}
function close_adno() {
	floatadnomove.close_ad();
}
function close_adno_s() {
	floatadnomove.close_ad_s();
}/*  |xGv00|e4f3a53728201c576654f5cee250c816 */