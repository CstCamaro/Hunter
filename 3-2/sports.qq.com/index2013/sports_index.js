/**
 * sports 公共JS
 * author: jianminlu#tentcent.com
 * update: 2013-04-08 11:30
 */
function G(s) {
    return document.getElementById(s);
}
function trim(s) {
    s = s.replace(/(^\s+)|(\s+$)/g, "");
    s = s.replace(/\[_br_\]+/gm, "");
    s = s.replace(/(^　+)|(　+$)/g, "");
    return s
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
function getByClass(oParent, sClass) {
    var aTmp = [],
    aEle = oParent.getElementsByTagName('*');
    for (var i = 0, l = aEle.length; i < l; i++) {
        if (aEle[i].className.indexOf(sClass) != -1) {
            aTmp.push(aEle[i]);
        }
    }
    return aTmp;
}
function Animate(obj, json) {
    var iCur, iSpeed;
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function() {
        for (attr in json) {
            iCur = parseInt(getStyle(obj, attr));
            iCur = iCur ? iCur : 0;
            iSpeed = (json[attr] - iCur) / 5;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            obj.style[attr] = iCur + iSpeed + 'px';
            if (iCur == json[attr]) {
                clearInterval(obj.timer);
            }
        }
    }, 30);
}
function isMouseLeave(evt, element){
    if (evt.type != 'mouseout' && evt.type != 'mouseover') return false;
    var target = evt.relatedTarget ? evt.relatedTarget : evt.toElement;
    while (target && target != element){
        target = target.parentNode;
    }
    return (target != element);
}
function addEvent(node, type, listener) {
    if (node.addEventListener) {
        node.addEventListener(type, listener, false);
        return true;
    } else if (node.attachEvent) {
        node['e' + type + listener] = listener;
        node[type + listener] = function() {
            node['e' + type + listener](window.event);
        }
        node.attachEvent('on' + type, node[type + listener]);
        return true;
    }
    return false;
}
/* Cookie */
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "": "; expires=" + exdate.toGMTString());
}



/* mod_fixed */
function setFixed(obj){
    var mod_fixed = G(obj);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var ie6 = !window.XMLHttpRequest;
    if(scrollTop > 1000){
        mod_fixed.style.display = "block";
    }else{
        mod_fixed.style.display = "none";
    }
    if(ie6){
        mod_fixed.className = mod_fixed.className;
    }
}

/* main_nav */
function setMainNav(obj, objBg){
    var main_nav = G(obj);
    var sub_nav_bg = G(objBg);
    var li_item = main_nav.getElementsByTagName("li");
    for(var i = 0, l = li_item.length; i < l; i++){
        li_item[i].onmouseover = function(){
            li_item[0].className = "";
            this.className = "current";
        }
        li_item[i].onmouseout = function(){
            e = arguments[0] || window.event;
            if (isMouseLeave(e, this)) {
                this.className = "";
                li_item[0].className = "current";
            }
        }
    }
}

/* news item hover */
function newsItemHover(oParent,oItem){
    var obj = G(oParent);
    var item = getByClass(obj, oItem);
    for(var i = 0, l = item.length; i < l; i++){
        item[i].onmouseover = function(){
            this.className += " current";
        }
        item[i].onmouseout = function(){
            this.className = this.className.replace(" current", "");
        }
    }
}

/* pics scroll */
function buildPage(prevBtn, nextBtn, btnId, conId, conEle) {
    var con = G(conId);
    var cUl = getByClass(con, conEle);
    var len = cUl.length;
    var w = 1000;
    con.style.width = w * len + "px";
    var btn = G(btnId);
    var html = ""
    for (var i = 0; i < len; i++) {
        html += "<a href='javascript:void(0);'>" + i + "</a>"
    }
    btn.innerHTML = html;
    var prev = G(prevBtn);
    var next = G(nextBtn);
    var temp = 0;
    var bLi = btn.getElementsByTagName("a");
    function Change(temp) {
        if (!con.timer) {
            Animate(con, {
                left: -(temp * w)
            });
        } else {
            clearInterval(con.timer);
            Animate(con, {
                left: -(temp * w)
            });
        }
        for (var i = 0; i < len; i++) {
            bLi[i].className = "";
            if (temp == i) {
                bLi[i].className = "on";
            }
        }
    }
    Change(temp);
    prev.onclick = function() {
        temp--;
        temp = temp > -1 ? temp: len - 1;
        Change(temp);
    }
    next.onclick = function() {
        temp++;
        temp = temp < len ? temp: 0;
        Change(temp);
    }
    for (var i = 0; i < len; i++) {
        bLi[i].index = i;
        bLi[i].onclick = function() {
            temp = this.index;
            Change(temp);
        }
    }
}
/* imgLoad */
var imgLoad = function(url, callback) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
        callback();
    } else {
        img.onload = function() {
            callback();
            img.onload = null;
        };
    };
};

/* newsListMore */
function newsMore(sBtn, sCon){

    var ie6 = !window.XMLHttpRequest,
        moreBtn = G(sBtn),
        moreCon = G(sCon),
        emTxt = moreBtn.getElementsByTagName("em")[0];

    moreBtn.onclick = function(){
        if(emTxt.innerHTML == "点击查看更多"){

            if(trim(moreCon.innerHTML).length == 0){
                divTxt.innerHTML = "<p style='text-align:center;'>暂无数据...</p>";
                setTimeout(function(){
                    divTxt.innerHTML = "";
                }, 1000);
                return false;
            }

            moreCon.style.display = "block";
            emTxt.innerHTML = "收起";
        }else{
            emTxt.innerHTML = "点击查看更多";
            moreCon.style.display = "none";
        }
/*
        if(ie6){
            newsItemHover("site_main", "Q-tpList");
        }
*/
    }
}/*  |xGv00|8c1670d7382a6b5ad607eef7df38679a */