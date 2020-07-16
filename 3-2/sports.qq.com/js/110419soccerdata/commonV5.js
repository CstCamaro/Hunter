var undefined;
var timeData = null;
function $() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == 'string') {
            element = document.getElementById(element);
        }
        if (arguments.length == 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
};
function getElementsByClassName(className, tag, parent){
    parent = parent || document;
    if(!(parent = $(parent))) return false;
    var allTags = (tag == "*" && parent.all) ? parent.all : parent.getElementsByTagName(tag);
    var matchingElements = new Array();
    className = className.replace(/\-/g, "\\-");
    var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
    
    var element;
    for(var i=0; i<allTags.length; i++){
        element = allTags[i];
        if(regex.test(element.className)){
            matchingElements.push(element);
        }
    }
    return matchingElements;
};
function getClassNames(element) {
    if(!(element = $(element))) return false;
    // Replace multiple spaces with one space and then
    // split the classname on spaces
    return element.className.replace(/\s+/,' ').split(' ');
};
function hasClassName(element, className) {
    if(!(element = $(element))) return false;
    var classes = getClassNames(element);
    for (var i = 0; i < classes.length; i++) {
        // Check if the className matches and return true if it does
        if (classes[i] === className) { return true; }
    }
    return false;
};
function addClassName(element, className) {
    if(!(element = $(element))) return false;
    element.className += (element.className ? ' ' : '') + className;
    return true;
};
function removeClassName(element, className) { 
    if(!(element = $(element))) return false;
    var classes = getClassNames(element);
    var length = classes.length
    for (var i = length-1; i >= 0; i--) {
        if (classes[i] === className) { delete(classes[i]); }
    }
    element.className = classes.join(' ');
    return (length == classes.length ? false : true);
};

function navC(o){
	var parent = o.parentNode,n = parent.getElementsByTagName('a');
	for(var i = 0; i<n.length; i++){
		n[i].className = '';
	};
	o.className = 'hover';
}

function addEvent( node, type, listener ) { 
    if(!(node = $(node))) return false;
    if (node.addEventListener) {
        node.addEventListener( type, listener, false );
        return true;
    } else if(node.attachEvent) {
        /*node['e'+type+listener] = listener;
        node[type+listener] = function(){node['e'+type+listener]( window.event );}
        node.attachEvent( 'on'+type, node[type+listener]);*/
	 node.attachEvent( 'on'+type, listener);
        return true;
    }
    return false;
};

function time(){
	var timeCon = getElementsByClassName('live-date','div',$('header'));
	var weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	var time = new Date(),year = time.getFullYear(),month = time.getMonth() + 1,day = time.getDate(),hour = time.getHours()< 10 ? '0' + time.getHours() : time.getHours(),minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(),second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds(),week = weeks[time.getDay()];
	//今日  2011年3月6日 16：54：00 星期日
	str = '今日  ';
	str += year + '年' + month + '月' + day + '日  '; 
	str += hour + ':' + minutes + ':' + second + '  ' ;
	str += week;
	timeCon[0].innerHTML = str;
}
/*
function toggle(){ 
	var txt = $('intro-con-p'),txtH = txt.offsetHeight,status = 0,txt_Down = '<a href="#">…… 展开↓</a>',txt_Up = '<a href="#"> 收起↑</a>';
	if( txtH > 51) {
		txt.style.height = 42 + 'px';	
		txt.style.overflow = 'hidden';	
		$('toggleTool').innerHTML = txt_Down;
		var aBtn = $('toggleTool').getElementsByTagName('a')[0];
		aBtn.onclick = function(){ t(aBtn); }
		//addEvent(aBtn, 'click',t(this));
	}
	
	function t(o){
		if(status == 0 ){ 
				txt.style.height = 'auto';	
				txt.style.overflow = 'visible';	
				o.innerHTML = ' 收起↑';
				status = 1;
				//alert(1);
				//alert(this.innerHTML);
			} else { 
				//alert(2);
				txt.style.height = 42 + 'px';	
				txt.style.overflow = 'hidden';	
				o.innerHTML = '…… 展开↓';
				status = 0;
			}
	}
	
}
addEvent(window, 'load', toggle);
*/

addEvent(window, 'load', getUrl);
addEvent(window, 'load', function(){ setInterval(time,1000) });

/* 页卡 */
function nTabs(thisObj,Num){ 
	if(thisObj.className == "cur")return;
	var tabObj = thisObj.parentNode.id;
	var tabList = document.getElementById(tabObj).getElementsByTagName("li");
	for(i=0; i < tabList.length; i++)
	{
	  if (i == Num)
	  {
	   thisObj.className = "cur"; 
	   document.getElementById(tabObj+"_con_"+i).style.display = "block";
	  }else{
	   tabList[i].className = ""; 
	   document.getElementById(tabObj+"_con_"+i).style.display = "none";
	  }
	} 
}

function setLink(i,j){
	var i = i || 0, j = j || 0;
	var li = $('liveNav').getElementsByTagName('li');
	var Cons = getElementsByClassName('live-nav-con','div',$('header'));
	var linkCons = getElementsByClassName('live-link','p',$('header'));
	n = i-2 < 0 ? 0 : i-2;
	var links = linkCons[n].getElementsByTagName('a');
	for(var m = 0, len = li.length ;m < len; m++){
		li[m].className = '';	
		Cons[m].className = 'live-nav-con undis';
	}
	for(var n = 0, len = links.length ;n < len; n++){
		links[n].className = '';	
	}	
	if( i >= 2 ) { links[j].className = 'hover'; }
	li[i].className = 'cur';
	Cons[i].className = 'live-nav-con';
}


/* 效果未用  */
function scrollNav(){
	var Cons = getElementsByClassName('live-nav-con','div',$('header'));
	var linkCons = getElementsByClassName('live-link','p',$('header')); 
	for(var i = 0; i < linkCons.length; i++){
		(function(i){
			var links = linkCons[i].getElementsByTagName('a');
			for(var j = 0; j < links.length; j++){
				links[j].onmouseover = function(){
					for(var k = 0; k < links.length; k++){
						if(k == j){
							this.className = 'hover';		
						} else {
							links[k].className = '';
						}
					}
					
				}
			}	  
		})(i)
	}
}

	
/* 导航识别 */
function getUrl(){ 
	var now = 0;
	var url = document.location.href;
	var urlArr = url.split("/");
	var arr = [];
	
	var firstStr = urlArr[4].replace(/.htm/,''),secondStr = urlArr[5];
	arr['saicheng.htm'] = 0,arr['jifen.htm'] = 1,arr['sheshou.htm'] = 2,arr['qiuduipaihang.htm'] = 3,arr['qiuyuanpaihang.htm'] = 4;
	switch(firstStr){ 
			//首页
			case 'index':
			setLink(0);break;
			//直播
			case 'live':
			setLink(1);break;	
			//西甲
			case 'xijialiansai':
			setLink(2,arr[secondStr]);break;
			//英超
			case 'yingchaoliansai':
			setLink(3,arr[secondStr]);break;
			//意甲
			case 'yijialiansai':
			setLink(4,arr[secondStr]);break;
			//德甲
			case 'dejialiansai':
			setLink(5,arr[secondStr]);break;
			//法甲
			case 'fajialiansai':
			setLink(6,arr[secondStr]);break;
			//欧冠
			case 'ouguanliansai':
			setLink(7,arr[secondStr]);break;			
			default:
			setLink(0);break;
		}		
}/*  |xGv00|6753e143443bc7f163926d2adfe35776 */