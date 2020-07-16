//初始化
function $(a){
    return (typeof a == 'object') ? a : document.getElementById(a);
}

/*浏览器类型获取*/
function getOs(){
    var OsObject = "";
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        return "MSIE";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
        return "Firefox";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
        return "Safari";
    }
    if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
        return "Camino";
    }
    if (isMozilla = navigator.userAgent.indexOf("Gecko") > 0) {
        return "Gecko";
    }
    
}

function Marquee(){
    this.ID = document.getElementById(arguments[0]);
    if (!this.ID) {
        alert("您要设置的\"" + arguments[0] + "\"初始化错误\r\n请检查标签ID设置是否正确!");
        this.ID = -1;
        return;
    }
    this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.Correct = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
    this.Step = 1;
    this.Timer = 30;
    this.DirectionArray = {
        "top": 0,
        "bottom": 1,
        "left": 2,
        "right": 3
    };
    if (typeof arguments[1] == "number") 
        this.Direction = arguments[1];
    if (typeof arguments[2] == "number") 
        this.Step = arguments[2];
    if (typeof arguments[3] == "number") 
        this.Width = arguments[3];
    if (typeof arguments[4] == "number") 
        this.Height = arguments[4];
    if (typeof arguments[5] == "number") 
        this.Timer = arguments[5];
    if (typeof arguments[6] == "number") 
        this.DelayTime = arguments[6];
    if (typeof arguments[7] == "number") 
        this.WaitTime = arguments[7];
    if (typeof arguments[8] == "number") 
        this.ScrollStep = arguments[8]
    this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
    this.ID.noWrap = true;
    this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
    if (arguments.length >= 7) 
        this.Start();
}


Marquee.prototype.Start = function(){
    if (this.ID == -1) 
        return;
    if (this.WaitTime < 800) 
        this.WaitTime = 800;
    if (this.Timer < 20) 
        this.Timer = 20;
    if (this.Width == 0) 
        this.Width = parseInt(this.ID.style.width);
    if (this.Height == 0) 
        this.Height = parseInt(this.ID.style.height);
    if (typeof this.Direction == "string") 
        this.Direction = this.DirectionArray[this.Direction.toString().toLowerCase()];
    this.HalfWidth = Math.round(this.Width / 2);
    this.BakStep = this.Step;
    this.ID.style.width = this.Width;
    this.ID.style.height = this.Height;
    if (typeof this.ScrollStep != "number") 
        this.ScrollStep = this.Direction > 1 ? this.Width : this.Height;
    var msobj = this;
    var timer = this.Timer;
    var delaytime = this.DelayTime;
    var waittime = this.WaitTime;
    msobj.StartID = function(){
        msobj.Scroll()
    }
    msobj.Continue = function(){
        if (msobj.MouseOver == 1) {
            setTimeout(msobj.Continue, delaytime);
        }
        else {
            clearInterval(msobj.TimerID);
            msobj.CTL = msobj.Stop = 0;
            msobj.TimerID = setInterval(msobj.StartID, timer);
        }
    }
    
    msobj.Pause = function(){
        msobj.Stop = 1;
        clearInterval(msobj.TimerID);
        setTimeout(msobj.Continue, delaytime);
    }
    
    msobj.Begin = function(){
        msobj.ClientScroll = msobj.Direction > 1 ? msobj.ID.scrollWidth : msobj.ID.scrollHeight;
        if ((msobj.Direction <= 1 && msobj.ClientScroll < msobj.Height) || (msobj.Direction > 1 && msobj.ClientScroll < msobj.Width)) 
            return;
        msobj.ID.innerHTML += msobj.ID.innerHTML;
        msobj.TimerID = setInterval(msobj.StartID, timer);
        if (msobj.ScrollStep < 0) 
            return;
        msobj.ID.onmousemove = function(event){
            if (msobj.ScrollStep == 0 && msobj.Direction > 1) {
                var event = event || window.event;
                if (window.event) {
                    if (msobj.IsNotOpera) {
                        msobj.EventLeft = event.srcElement.id == msobj.ID.id ? event.offsetX - msobj.ID.scrollLeft : event.srcElement.offsetLeft - msobj.ID.scrollLeft + event.offsetX;
                    }
                    else {
                        msobj.ScrollStep = null;
                        return;
                    }
                }
                else {
                    msobj.EventLeft = event.layerX - msobj.ID.scrollLeft;
                }
                msobj.Direction = msobj.EventLeft > msobj.HalfWidth ? 3 : 2;
                msobj.AbsCenter = Math.abs(msobj.HalfWidth - msobj.EventLeft);
                msobj.Step = Math.round(msobj.AbsCenter * (msobj.BakStep * 2) / msobj.HalfWidth);
            }
        }
        msobj.ID.onmouseover = function(){
            if (msobj.ScrollStep == 0) 
                return;
            msobj.MouseOver = 1;
            clearInterval(msobj.TimerID);
        }
        msobj.ID.onmouseout = function(){
            if (msobj.ScrollStep == 0) {
                if (msobj.Step == 0) 
                    msobj.Step = 1;
                return;
            }
            msobj.MouseOver = 0;
            if (msobj.Stop == 0) {
                clearInterval(msobj.TimerID);
                msobj.TimerID = setInterval(msobj.StartID, timer);
            }
        }
    }
    setTimeout(msobj.Begin, waittime);
}

Marquee.prototype.Scroll = function(){
    switch (this.Direction) {
        case 0:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return;
            }
            else {
                if (this.ID.scrollTop >= this.ClientScroll) {
                    this.ID.scrollTop -= this.ClientScroll;
                }
                this.ID.scrollTop += this.Step;
            }
            break;
            
        case 1:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return;
            }
            else {
                if (this.ID.scrollTop <= 0) {
                    this.ID.scrollTop += this.ClientScroll;
                }
                this.ID.scrollTop -= this.Step;
            }
            break;
            
        case 2:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return;
            }
            else {
                if (this.ID.scrollLeft >= this.ClientScroll) {
                    this.ID.scrollLeft -= this.ClientScroll;
                }
                this.ID.scrollLeft += this.Step;
            }
            break;
            
        case 3:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return;
            }
            else {
                if (this.ID.scrollLeft <= 0) {
                    this.ID.scrollLeft += this.ClientScroll;
                }
                this.ID.scrollLeft -= this.Step;
            }
            break;
    }
}

//first screen start
//skin
var MiniSite = new Object();
//设置cookie
MiniSite.Cookie = {
    set: function(name, value, expires, path, domain){
        if (typeof expires == "undefined") {
            expires = new Date(new Date().getTime() + 24 * 3600 * 1000);
        }
        document.cookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "; path=/") + ((domain) ? ";domain=" + domain : "");
    },
    get: function(name){
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) {
            return unescape(arr[2]);
        }
        return null;
    },
    clear: function(name, path, domain){
        if (this.get(name)) {
            document.cookie = name + "=" + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
        }
    }
};
//获取失效时间
function getExpires(a){//a:day
    var expires = new Date(new Date().getTime() + (a ? a : 1) * 24 * 3600 * 1000);
    return expires;
}

function setdefSkin(){
    var expires = getExpires(90);
    var n = MiniSite.Cookie.get("wordcup_index_skin");// store the skin index
    if (n != null) {
    
        var m = MiniSite.Cookie.get("wordcup_index_skin_0");//wordcup_index_skin_def
        if (!m) {
            setSkin(0);//0
            MiniSite.Cookie.set("wordcup_index_skin_0", "true", expires);
        }
        else {
            setSkin(n);
        }
        
    }
    else {
        MiniSite.Cookie.set("wordcup_index_skin_0", "true", expires);//store the default
    }
}

var cssList = new Array("skin_0", "skin_1", "skin_2", "skin_3", "skin_4", "skin_5", "skin_6", "skin_7", "skin_8", "skin_9", "skin_10", "skin_11", "skin_12", "skin_13", "skin_14")
var moveTime = [];
function setSkin(n){
    var expires = getExpires(90);
    $('cssSkin').className = "wrapper " + cssList[n];
	//设置当前态
	var lis = $('SkinList').getElementsByTagName('a');
	for(var i = 0,l = lis.length; i < l; i++){
		lis[i].className = "";
	}
	lis[n].className = "on";
    MiniSite.Cookie.set("wordcup_index_skin", n, expires);
}

function formatSkin(){
    var p = $("SkinList").getElementsByTagName("li");
    var s = $("sar");
    for (i = 0; i < p.length; i++) {
        p[i].num = i;
        p[i].onclick = function(){
            setSkin(this.num);
			var s=new Image(1,1); s.src="http://btrace.qq.com/collect?sIp=&iQQ="+pgvGetCookieByName("o_cookie=")+"&sBiz=worldcup.skin&sOp=switch&iSta=0&iTy=102&iFlow=&sUrl="+escape(location.href)
        }
    }
    s.onclick = function(){
        openSkin("sar", "SkinList", 345, 138, 5, 0);
    };
}

/*
 function _openSkin(o1, o2, max, min, speed, n){
 return openSkin(o1, o2, max, min, speed, n);
 }
 function _closeSkin(o1, o2, max, min, speed, n){
 return closeSkin(o1, o2, max, min, speed, n);
 }
 */
//n=0 skin n=1 pro
function openSkin(o1, o2, max, min, speed, n){
    var a = $(o1);
    var s = $(o2);
    var w = s.offsetWidth;
    var move = function(){
        w += speed;
        if (w >= max) {
            w = max;
            s.style.width = w + "px";
            if (moveTime[n]) {
                window.clearInterval(moveTime[n]);
            }
            if (n) {
                $("pro_arrow").className = "al";
                $("pro_arrow").onclick = function(){
                    closeSkin(o1, o2, max, min, speed, n);
                }
            }
            else {
                a.innerHTML = "收起";
                a.onclick = function(){
                    closeSkin(o1, o2, max, min, speed, n);
                }
            }
        }
        else {
            s.style.width = w + "px";
            if (n) {
            }
            else {
                s.style.display = "block";
            };
                    }
    };
    moveTime[n] = window.setInterval(move, 5);
}

function closeSkin(o1, o2, max, min, speed, n){
    var a = $(o1);
    var s = $(o2);
    var w = s.offsetWidth;
    var move = function(){
        w -= speed;
        if (w <= min) {
            w = min;
            s.style.width = w + "px";
            if (n) {
                $("pro_arrow").className = "ar";
                $("pro_arrow").onclick = function(){
                    openSkin(o1, o2, max, min, speed, n);

                };
            }
            else {
                a.innerHTML = "更多";
                a.onclick = function(){
                    openSkin(o1, o2, max, min, speed, n);
                }
            };
            if (moveTime[n]) {
                window.clearInterval(moveTime[n]);
            }
        }
        else {
            s.style.display = "block";
            s.style.width = w + "px";
        };
            };
    moveTime[n] = window.setInterval(move, 5);
}

//kuaixun
function kuaixun(){
    var aspea = 30;
    var ama = document.getElementById("apica");
    var ama1 = document.getElementById('apica1');
    var ama2 = document.getElementById('apica2');
    ama2.innerHTML = ama1.innerHTML;
    function aMarqueea(){
        if (ama2.offsetWidth - ama.scrollLeft <= 0) {
            ama.scrollLeft -= ama1.offsetWidth;
        }
        else {
            ama.scrollLeft++;
        }
    }
    var aka1;
    function astartmarqueea(){
        aka1 = setInterval(aMarqueea, aspea)
    }
    window.setTimeout(astartmarqueea, 1000);
    ama.onmouseover = function(){
        clearInterval(aka1)
    }
    ama.onmouseout = function(){
        aka1 = setInterval(aMarqueea, aspea)
    }
}/*  |xGv00|c67d264ded2767d6121ceba54a3a85b9 */