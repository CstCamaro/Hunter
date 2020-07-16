// add nav
$(function() {
	Changenav();
	prsizeUl();
})

function Changenav() {
	var Arr = [];
	$(".nav li ul").each(function(index) {
		var _this = $(this);
		_this.find('a').each(function(x) {
			var _that = $(this);
			Arr.push(_that.text())
		})
		Arr.sort()
		var gettxt = Arr[0];
		var Max1 = strlen(Arr[0])
		// console.log(Max1)
		_this.css({'width':Max1*11,'right':-Max1*12/2+_this.parent().width()/2})
		Arr = []

	})

	$(".nav li").hover(function() {
		var _this = $(this);
		if (_this.find('ul')) {
			_this.find('ul').slideDown();
		};
	}, function() {
		var _this = $(this);
		if (_this.find('ul')) {
			_this.find('ul').hide();
		};
	})
}
function prsizeUl(){
	$("#f_l a").each(function(index){

		var _this = $(this),
		    x = index;
		_this.on('mouseover',function(){
			$("#f_l a").removeClass('cur')
			_this.addClass('cur');
			$('#f_right li').removeClass('cur');
			$('#f_right li').eq(x).addClass('cur');
		})
	})
}
function strlen(str){
	// console.log('x')
    var len = 0;
    for (var i=0; i<str.length; i++) { 
     var c = str.charCodeAt(i); 
    //单字节加1 
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
       len++; 
     } 
     else { 
      len+=2; 
     } 
    } 
    return len;
}

/*  |xGv00|e733b45b6f2ee27d180bcb4c9ded111a */