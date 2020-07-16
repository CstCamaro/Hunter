

function _slidebanner2(){
    this.config = {
        type: "gold",
        time: 5000,
        slide: true,
        random: true,
        ads: [this[0] = {
            bSrc: "",
            sSrc: "",
            links: ""
        }, this[1] = {
            bSrc: "",
            sSrc: "",
            links: ""
        }, this[2] = {
            bSrc: "",
            sSrc: "",
            links: ""
        }, this[3] = {
            bSrc: "",
            sSrc: "",
            links: ""
		}, this[4] = {
            bSrc: "",
            sSrc: "",
            links: ""
        }],
        asset: {
            goldBannerBackground: "#0ea3da url(http://d1.sina.com.cn/shh/yyk/2011/auto/slidebanner_bg_04.png) no-repeat",
            silverBannerBackground: "url(http://d1.sina.com.cn/shh/yyk/2011/0427/slidebanner_bg_04.png) no-repeat"//,
			//box80x80Background: "url(http://d1.sina.com.cn/shh/yyk/2011/auto/slidebanner_bg_is4.png) no-repeat 1px 0",
			//box470x80Background: "url(http://d1.sina.com.cn/shh/yyk/2011/auto/slidebanner_bg_ib4.png) no-repeat 1px 0"
			//box80x80Background: "url(http://d1.sina.com.cn/shh/yyk/2011/0427/slidebanner_bg_is4.png) no-repeat 1px 0",
            //box470x80Background: "url(http://d1.sina.com.cn/shh/yyk/2011/0427/slidebanner_bg_ib4.png) no-repeat 1px 0"
        }
    }
};
_slidebanner2.prototype = {
    version: "1.0.0",
    author: "wangshuo",
    email: "nbagonet@gmail.com",
    initialization: function(h){
        var t = this;
        var j = function(){
            var a = "(.jpg|.JPG|.gif|.GIF|.png|.PNG)$";
            var b = new RegExp(a);
            var c = "(.swf|.SWF)$";
            var d = new RegExp(c);
            var e = "slidebanner_" + (new Date()).getTime();
            var f = "";
            f += '<style type="text/css">#' + e + ' .selected{display:none}</style>';
            f += '<div id="' + e + '" style="width:960px; height:90px; overflow:hidden;">';
            f += '	<div style="width:97px; height:90px; overflow:hidden; float:left;"></div>';
            f += '	<div style="width:850px; height:90px; overflow:hidden; float:right;padding-right:2px; _width:848px;">';
            for (var i = 0; i < t.config.ads.length; i++) {
                f += '<div id="' + e + '_btn' + i + '" style="width:86px; height:88px; overflow:hidden; float:left; background:' + t.config.asset.box80x80Background + ';padding:2px 0 0 3px; _padding:2px 0 0 2px;">';
                if (b.test(t.config.ads[i].sSrc)) {
                    f += '<a href="' + t.config.ads[i].links + '" target="_blank"><img src="' + t.config.ads[i].sSrc + '" width="86" height="86" style="margin:0" alt="" border="0" /></a>'
                }
                else 
                    if (d.test(t.config.ads[i].sSrc)) {
                        f += '<div style="padding:0;"><object width="86" height="86" type="application/x-shockwave-flash" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + e + 'btn' + i + '_swf">';
                        f += '<param value="' + t.config.ads[i].sSrc + '" name="movie"><param value="High" name="quality"><param value="opaque" name="wmode"><param value="always" name="allowscriptaccess">';
                        f += '<embed width="86" height="86" allowscriptaccess="always" wmode="opaque" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="High" src="' + t.config.ads[i].sSrc + '" id="' + e + 'btn' + i + '_swf">';
                        f += '</object></div>'
                    }
                f += '</div>';
                f += '<div id="' + e + '_con' + i + '" style="width:493px; height:90px; overflow:hidden; float:left; background:' + t.config.asset.box470x80Background + '; padding: 2px 0 0 0;">';
                if (b.test(t.config.ads[i].bSrc)) {
                    f += '<div style="padding-left:3px;"><a href="' + t.config.ads[i].links + '" target="_blank"><img src="' + t.config.ads[i].bSrc + '" width="490" height="86" style="margin:0;" alt="" border="0" /></a></div>'
                }
                else 
                    if (d.test(t.config.ads[i].bSrc)) {
                        f += '<div style="padding-left:3px;"><object width="490" height="86" type="application/x-shockwave-flash" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + e + 'btn' + i + '_swf">';
                        f += '<param value="' + t.config.ads[i].bSrc + '" name="movie"><param value="High" name="quality"><param value="opaque" name="wmode"><param value="always" name="allowscriptaccess">';
                        f += '<embed width="490" height="86" allowscriptaccess="always" wmode="opaque" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="High" src="' + t.config.ads[i].bSrc + '" id="' + e + 'btn' + i + '_swf">';
                        f += '</object></div>'
                    }
                f += '</div>'
            }
            f += '	</div>';
            f += '</div>';
            document.getElementById(h).innerHTML = f;
            if (t.config.type == "gold") {
                document.getElementById(e).style.background = t.config.asset.goldBannerBackground
            }
            else 
                if (t.config.type == "silver") {
                    document.getElementById(e).style.background = t.config.asset.silverBannerBackground
                }
            if (typeof(ads_SubShowClass) == "function") {
                var g = new ads_SubShowClass("none", "onmouseover");
                g.addLabel(e + '_btn0', e + '_con0', "", "document.getElementById('" + e + "_btn0').style.display='none'", "document.getElementById('" + e + "_btn0').style.display='block'");
                g.addLabel(e + '_btn1', e + '_con1', "", "document.getElementById('" + e + "_btn1').style.display='none'", "document.getElementById('" + e + "_btn1').style.display='block'");
                g.addLabel(e + '_btn2', e + '_con2', "", "document.getElementById('" + e + "_btn2').style.display='none'", "document.getElementById('" + e + "_btn2').style.display='block'");
                g.addLabel(e + '_btn3', e + '_con3', "", "document.getElementById('" + e + "_btn3').style.display='none'", "document.getElementById('" + e + "_btn3').style.display='block'");
				g.addLabel(e + '_btn4', e + '_con4', "", "document.getElementById('" + e + "_btn4').style.display='none'", "document.getElementById('" + e + "_btn4').style.display='block'");
               
                if (t.config.random == true) {
                    g.random(1, 1, 1, 1, 1)
                }
                if (t.config.slide == true) {
                    g.play(t.time)
                }
            }
        };
        j()
    }
};
function ads_SubShowClass(a, b, c, d, e){
    var t = this;
    this.parentObj = this.$(a);
    if (this.parentObj == null && a != "none") {
        throw new Error("ads_SubShowClass(ID)参数错误:ID 对像不存在!(value:" + a + ")")
    };
    this.lock = false;
    this.label = [];
    this.defaultID = c == null ? 0 : c;
    this.selectedIndex = this.defaultID;
    this.openClassName = d == null ? "selected" : d;
    this.closeClassName = e == null ? "" : e;
    this.mouseIn = false;
    var f = function(){
        t.mouseIn = true
    };
    var g = function(){
        t.mouseIn = false
    };
    if (a != "none" && a != "") {
        if (this.parentObj.attachEvent) {
            this.parentObj.attachEvent("onmouseover", f)
        }
        else {
            this.parentObj.addEventListener("mouseover", f, false)
        }
    };
    if (a != "none" && a != "") {
        if (this.parentObj.attachEvent) {
            this.parentObj.attachEvent("onmouseout", g)
        }
        else {
            this.parentObj.addEventListener("mouseout", g, false)
        }
    };
    if (typeof(b) != "string") {
        b = "onmousedown"
    };
    b = b.toLowerCase();
    switch (b) {
        case "onmouseover":
            this.eventType = "mouseover";
            break;
        case "onmouseout":
            this.eventType = "mouseout";
            break;
        case "onclick":
            this.eventType = "click";
            break;
        case "onmouseup":
            this.eventType = "mouseup";
            break;
        default:
            this.eventType = "mousedown"
    };
    this.autoPlay = false;
    this.autoPlayTimeObj = null;
    this.spaceTime = 5000
};
ads_SubShowClass.prototype = {
    version: "1.31",
    author: "mengjia",
    _setClassName: function(a, b){
        var c;
        c = a.className;
        if (c) {
            c = c.replace(this.openClassName, "");
            c = c.replace(this.closeClassName, "");
            c += " " + (b == "open" ? this.openClassName : this.closeClassName)
        }
        else {
            c = (b == "open" ? this.openClassName : this.closeClassName)
        };
        a.className = c
    },
    addLabel: function(a, b, c, d, e){
        var t = this;
        var f = this.$(a);
        var g = this.$(b);
        if (f == null && a != "none") {
            throw new Error("addLabel(labelID)参数错误:labelID 对像不存在!(value:" + a + ")")
        };
        var h = this.label.length;
        if (c == "") {
            c = null
        };
        this.label.push([a, b, c, d, e]);
        var i = function(){
            t.select(h)
        };
        if (a != "none") {
            if (f.attachEvent) {
                f.attachEvent("on" + this.eventType, i)
            }
            else {
                f.addEventListener(this.eventType, i, false)
            }
        };
        if (h == this.defaultID) {
            if (a != "none") {
                this._setClassName(f, "open")
            };
            if (this.$(b)) {
               // g.style.display = "";
				g.style.overflow = "hidden";
				g.style.width = "490px";
				g.style.height = "90px";
            };
            if (this.ID != "none") {
                if (c != null) {
                    this.parentObj.style.background = c
                }
            };
            if (d != null) {
                eval(d)
            }
        }
        else {
            if (a != "none") {
                this._setClassName(f, "close")
            };
            if (g) {
                //g.style.display = "none";
				g.style.overflow = "hidden";
				g.style.width = "0px";
				g.style.height = "0px";
            }
        };
        var j = function(){
            t.mouseIn = true
        };
        var k = function(){
            t.mouseIn = false
        };
        if (g) {
            if (g.attachEvent) {
                g.attachEvent("onmouseover", j)
            }
            else {
                g.addEventListener("mouseover", j, false)
            };
            if (g.attachEvent) {
                g.attachEvent("onmouseout", k)
            }
            else {
                g.addEventListener("mouseout", k, false)
            }
        }
    },
    select: function(a, b){
        if (typeof(a) != "number") {
            throw new Error("select(num)参数错误:num 不是 number 类型!(value:" + a + ")")
        };
        if (b != true && this.selectedIndex == a) {
            return
        };
        var i;
        for (i = 0; i < this.label.length; i++) {
            if (i == a) {
                if (this.label[i][0] != "none") {
                    this._setClassName(this.$(this.label[i][0]), "open")
                };
                if (this.$(this.label[i][1])) {
                    //this.$(this.label[i][1]).style.display = ""
					this.$(this.label[i][1]).style.width = "493px";
					this.$(this.label[i][1]).style.height = "90px";
                };
                if (this.ID != "none") {
                    if (this.label[i][2] != null) {
                        this.parentObj.style.background = this.label[i][2]
                    }
                };
                if (this.label[i][3] != null) {
                    eval(this.label[i][3])
                }
            }
            else 
                if (this.selectedIndex == i || b == true) {
                    if (this.label[i][0] != "none") {
                        this._setClassName(this.$(this.label[i][0]), "close")
                    };
                    if (this.$(this.label[i][1])) {
                        //this.$(this.label[i][1]).style.display = "none";
						this.$(this.label[i][1]).style.overflow = "hidden";
						this.$(this.label[i][1]).style.width = "0px";
						this.$(this.label[i][1]).style.height = "0px";
                    };
                    if (this.label[i][4] != null) {
                        eval(this.label[i][4])
                    }
                }
        };
        this.selectedIndex = a
    },
    random: function(){
        if (arguments.length != this.label.length) {
            throw new Error("random()参数错误:参数数量与标签数量不符!(length:" + arguments.length + ")")
        };
        var a = 0, i;
        for (i = 0; i < arguments.length; i++) {
            a += arguments[i]
        };
        var b = Math.random(), percent = 0;
        for (i = 0; i < arguments.length; i++) {
            percent += arguments[i] / a;
            if (b < percent) {
                this.select(i);
                break
            }
        }
    },
    order: function(){
        if (arguments.length != this.label.length) {
            throw new Error("order()参数错误:参数数量与标签数量不符!(length:" + arguments.length + ")")
        };
        if (!(/^\d+$/).test(ads_SubShowClass.sum)) {
            return
        };
        var a = 0, i;
        for (i = 0; i < arguments.length; i++) {
            a += arguments[i]
        };
        var b = ads_SubShowClass.sum % a;
        if (b == 0) {
            b = a
        };
        var c = 0;
        for (i = 0; i < arguments.length; i++) {
            c += arguments[i];
            if (c >= b) {
                this.select(i);
                break
            }
        }
    },
    play: function(a){
        var t = this;
        if (typeof(a) == "number") {
            this.spaceTime = a
        };
        clearInterval(this.autoPlayTimeObj);
        this.autoPlayTimeObj = setInterval(function(){
            t.autoPlayFunc()
        }, this.spaceTime);
        this.autoPlay = true
    },
    autoPlayFunc: function(){
        if (this.autoPlay == false || this.mouseIn == true) {
            return
        };
        this.nextLabel()
    },
    nextLabel: function(){
        var t = this;
        var a = this.selectedIndex;
        a++;
        if (a >= this.label.length) {
            a = 0
        };
        this.select(a);
        if (this.autoPlay == true) {
            clearInterval(this.autoPlayTimeObj);
            this.autoPlayTimeObj = setInterval(function(){
                t.autoPlayFunc()
            }, this.spaceTime)
        }
    },
    previousLabel: function(){
        var t = this;
        var a = this.selectedIndex;
        a--;
        if (a < 0) {
            a = this.label.length - 1
        };
        this.select(a);
        if (this.autoPlay == true) {
            clearInterval(this.autoPlayTimeObj);
            this.autoPlayTimeObj = setInterval(function(){
                t.autoPlayFunc()
            }, this.spaceTime)
        }
    },
    stop: function(){
        clearInterval(this.autoPlayTimeObj);
        this.autoPlay = false
    },
    $: function(a){
        if (document.getElementById) {
            return eval('document.getElementById("' + a + '")')
        }
        else {
            return eval('document.all.' + a)
        }
    }
};
ads_SubShowClass.readCookie = function(l){
    var i = "", I = l + "=";
    if (document.cookie.length > 0) {
        var a = document.cookie.indexOf(I);
        if (a != -1) {
            a += I.length;
            var b = document.cookie.indexOf(";", a);
            if (b == -1) 
                b = document.cookie.length;
            i = unescape(document.cookie.substring(a, b))
        }
    };
    return i
};
ads_SubShowClass.writeCookie = function(O, o, l, I){
    var i = "", c = "";
    if (l != null) {
        i = new Date((new Date).getTime() + l * 3600000);
        i = "; expires=" + i.toGMTString()
    };
    if (I != null) {
        c = ";domain=" + I
    };
    document.cookie = O + "=" + escape(o) + i + c
};
ads_SubShowClass.sum = ads_SubShowClass.readCookie("SSCSum");
if ((/^\d+$/).test(ads_SubShowClass.sum)) {
    ads_SubShowClass.sum++
}
else {
    ads_SubShowClass.sum = 1
};

ads_SubShowClass.writeCookie("SSCSum", ads_SubShowClass.sum, 12);/*  |xGv00|fe86f997baced3ef4d8e07fa466f7d2c */