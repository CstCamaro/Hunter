/****
    功能：在.mouseoverEvt类上监听鼠标划过事件
    备注：时间关系，没有制作对应的插件
***/
$(document).on('mouseover', '.tabEvt', function() {
    var _this = $(this);
    if (_this.hasClass('tabCurrent')) { return; }
    var id = _this.attr('id'), ag = _this.attr('action-group');
    var cur = $('.tabEvt[action-group="' + ag + '"]').filter(".tabCurrent");
    var cid = cur.attr('id');
    $("#" + cid + 'Ctn').hide();
    $('#' + id + "Ctn").show();
    cur.removeClass('tabCurrent');
    _this.addClass('tabCurrent');
});
/****
    监听鼠标划过，突出划过对象，以方便用户确认当前查看的对象，
    考虑某些浏览器不兼容伪类，所以添加事件
****/ 
$(document).on('mouseover', '.overBorderEvt', function() {
    $(this).css('border-color', '#ccc');
}).on('mouseleave', '.overBorderEvt', function() {
    $(this).css('border-color', '#fff');
});
var slide = function(e, o) {
    var id = e.attr('id');
    this._E = e;
    this._EC = e.children();
    if (this._EC.length == 0) return;
    this._L = this._EC.length;
    this._N = 'current';
    var te = document.getElementById(id + 'Title');
    if (te){
        this._TE = $(te);
	var teh = this._TE.html();
        this._TE.html(teh + teh);
    }
    this._CE = $('#' + id + 'Ctn');
    var ceh = this._CE.html();
    this._CE.html(ceh + ceh);
    var prev = document.getElementById(id + 'Prev');
    var next = document.getElementById(id + 'Next');
    if (prev) {
        this._Prev = $(prev);
    }
    if (next)
        this._Next = $(next);
    this._O = o;
    this.moving = false;
    this.init();
}
slide.prototype = {
    init: function() {
        var _this = this;
        var cw = _this._CE.children().width();
        _this._W = cw;
        if (_this._TE) {
            _this._TW = _this._TE.children().width();
        }
        _this._I = 0;
        if (_this._Prev) {
            _this._Prev.live('click', function() {
	        if(_this.moving){return;}
                _this._I = _this._I - 1;
                if (_this._I == -1)
                    _this._I = _this._L - 1;
                _this.slide(_this);
            });
        }
        if (_this._Next) {
            _this._Next.live('click', function() {
	        if(_this.moving){return;}
                _this._I = _this._I + 1;
                if (_this._I == _this._L)
                    _this._I = 0;
                _this.slide(_this);
            });
        }
        if (_this._O.click) {
            $.each(_this._EC, function(i) {
                _this._EC.eq(i).on('mouseover', function() {
                    _this._I = $(this).index();
                    _this.slide(_this);
                });
            });
        }
        if (_this._O.mouseover) {
            $.each(_this._EC, function(i) {
                _this._EC.eq(i).on('mouseover', function() {
                    _this._I = $(this).index();
                    _this.slide(_this);
                });
            });
        }
        _this._HD = setTimeout(function() { _this._I = _this._I + 1; _this.slide(_this); }, 3000);
    },
    slide: function(e) {
        var _this = e
        if (_this._HD) { clearTimeout(_this._HD); }
        _this._CE.clearQueue(); _this._CE.stop();
        if (_this._TE) {
            _this._TE.clearQueue(); _this._TE.stop();
        }
        _this.moving = true;
        var left = _this._W * _this._I;
        var tl = _this._TW * _this._I;
        if (_this._TE)
            _this._TE.animate({ left: '-' + tl + 'px' }, 300);
        _this._CE.animate({ left: '-' + left + 'px' }, 300, function() {
            if (_this._I == _this._L) {
                _this._I = 0;
                _this._CE.css('left', '0px');
		if (_this._TE) {
                    _this._TE.css('left', '0px');
                }
            }
            _this._EC.filter('.' + _this._N).removeClass(_this._N);
            _this._EC.eq(_this._I).addClass(_this._N);
            _this.moving = false;
            _this._HD = setTimeout(function() { _this._I = _this._I + 1; _this.slide(_this); }, 3000);
        });
    }
}

$(document).ready(function() {
    var ms = new slide($('#tgrMs'), { click: true });
    var d2 = new slide($('#tgrD2'), { mouseover: true });
    $('#hoverFixEvt').mouseover(function() {
        if ($(this).hasClass('onmouseover')) return;
        $(this).addClass('onmouseover');
        $(this).find('.blLtfix').show();
    }).mouseleave(function() {
        $(this).removeClass('onmouseover');
        $(this).find('.blLtfix').hide();
    });

    var autoPopSlide = function(e) {
        var b = e.autoPopE.filter('.tabCurrent');
        var n = b.next();
        if (n.length == 0)
            n = e.autoPopE.eq(0);
        n.mouseover();
        setTimeout(function() { autoPopSlide(e); }, 3000);
    }
    $('.popTgr').each(function() {
        var _this = $(this);
        _this.autoPopE = _this.find('.tabEvt');
        setTimeout(function() { autoPopSlide(_this); }, 3000);
    });
	$(".ycitem").mouseover(function(){
            var ss= parseInt($(this).attr("id")-1);
			var idsContainer= $(".ycimg")
			var len =parseInt($(".ycimg").length);
			 for(var j=0; j<len; j++){
				if(j==ss)
				  {
					$(idsContainer[j]).fadeIn(500);
					}else{
					   $(idsContainer[j]).hide();
						}
				   }
			});
    $('.zxtjBox .tjitem').each(function(index) {
        $(this).mouseover(function(){
		 if($('.zxtjBox .tytit').eq(index).hasClass('tjcur')){ return ;}
		 $('.zxtjBox .tjitem').stop(true,true).animate({height:'50px'},500);
		 $(this).stop(true,true).animate({height:'155px'},500);
		 $('.zxtjBox .tytit').removeClass('tjcur');
		 $('.zxtjBox .tytit').eq(index).addClass('tjcur');
			})
    });
	
	$('.dzimgBox').mouseover(function(){
		$('.pnlink').show();
		}).mouseleave(function(){
			$('.pnlink').hide();
			});
	$('.hdcon').mouseover(function(){
		$(this).css('background','#f5f5f5');
		}).mouseleave(function(){
			$(this).css('background','#fff');
			})
		
   $(window).scroll(function() {
		if($(window).scrollTop()>110) {
			$('#backToTop').css({'position':'fixed','top':'150px'});
		}else {
			$('#backToTop').css({'position':'absolute','top':'260px'});
		}
	});
});

$(document).on('mouseover', '.hoverSlide', function() {
    if ($(this).hasClass('current')) return;
    var ag = $(this).attr('action-group');
    $('.hoverSlide').filter('[action-group="' + ag + '"]').filter('.current').removeClass('current');
    $(this).addClass('current');
});
/*  |xGv00|3011760f60e659d36bfbcdfe66e26a09 */