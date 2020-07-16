/*
 * author: jasonshan && jianminlu
 * update: 2014-05-26 22:03
 * version: v2.0
 */
/* ua */
var UA = function() {
  var userAgent = navigator.userAgent.toLowerCase();
  return {
    ipad: /ipad/.test(userAgent),
    iphone: /iphone/.test(userAgent),
    android: /android/.test(userAgent),
    weixin: /micromessenger/.test(userAgent),
    isie:/ie/.test(userAgent),
    qqnews_version: userAgent.match(/qqnews/i) == "qqnews" ? userAgent.split('qqnews/')[1] : ''
  };


}

function compareVersions(v1, comparator, v2) {
  comparator = comparator == '=' ? '==' : comparator;
  var v1parts = v1.split('.'),
    v2parts = v2.split('.');
  var maxLen = Math.max(v1parts.length, v2parts.length);
  var part1, part2;
  var cmp = 0;
  for (var i = 0; i < maxLen && !cmp; i++) {
    part1 = parseInt(v1parts[i], 10) || 0;
    part2 = parseInt(v2parts[i], 10) || 0;
    if (part1 < part2)
      cmp = 1;
    if (part1 > part2)
      cmp = -1;
  }
  return eval('0' + comparator + cmp);
}



$(function() {
  // init
  
  render.init();
})

var render = {
  navindex: 0,
  showtips: true,
  ulanimatetime: 1000, // 设置首页浮动切换时间
  ulnum: 0,

  init: function() {
    var me = this;
    var _h = $(window).height(),
      _w = $(window).width();

    // 判断下方菜单高度

    $(".pagenav").css({
      bottom: _h / 20
    })

    var _tipsheight = _h - $('.navbar').height() - $(".pagenav").height() - _h / 20;

    $(".screen").height(_h);
    $(".layout_home .tips,.layout_home .container").css({
      height: _tipsheight,
      top: $('.navbar').height()
    });
    // $(".layout_home .container").css({height:_tipsheight,top:$('.navbar').height()});
    $(".navlist a:first").addClass('current');
    if (me.showtips) {
      $(".layout_home .tips").slideDown(400, function() {
        $(this).addClass('animate');
      });
      me.showtips = false;
      setTimeout(function() {
        $(".shutdown").click();
      }, 5000)
    }

    $(".layout:first").addClass('current');
    // 增加序列class兼容ie
    $(".pagenav .inner a").each(function(e) {
      $(this).addClass('meau_' + e);
    })
    $("#floatjson>ul li").each(function(e) {
      $(this).addClass('float_' + e);
    })
    me.navbar();
    me.tips();
    // me.swipe();
  },
  navbar: function() {
    var me = this;
    me.hover($(".navlist a"), true)
    me.hover($("#floatjson li"));
    $(".navlist a").on('click', function() {
      var _this = $(this);
      $(".navlist a").removeClass('current');
      _this.addClass('current');
      if (_this.attr('data-href')) {
        me.changepage(_this.attr('data-href'));
      }
    })
    $(".pagenav a").on('click', function() {
      var _this = $(this);
      if (_this.attr('data-href')) {
        me.changepage(_this.attr('data-href'));
      }
    })
    // 首页浮动内容
    // $("#floatjson").on('click','li', function() {
    //   window.location = $(this).find('a').attr("href"); // 为li添加跳转
    // })
  },
  changepage: function(data) {
    var me = this;
    $("li").off('mouseover');
    $(".layout").removeClass('current');
    $(".layout_" + data).addClass('current');
    me.hover($(".layout_" + data).find("li"))
    me.navindex = $(".navlist").find('.current').index();
    $('body').scrollTop(0);
    $(".navlist a").removeClass('current');
    $(".navlist a").each(function() {
      if ($(this).attr('data-href') == data) {
        $(this).addClass('current');
      }
    })
  },
  tips: function() {
    var me = this;
    $(".futurebutton").on('click', function() {
      $(".layout_home .tips").slideDown(400, function() {
        $(this).addClass('animate');
        me.ullist();
      });
    })
    $(".shutdown").on('click', function() {
      $(".layout_home .tips").slideUp(400).removeClass('animate');
      me.ullist();
    })
  },
  ullist: function() {
    var me = this;
    if (!$(".layout_home .tips").hasClass('animate')) {
      $("#floatjson").find('ul').eq(0).addClass('current');

    } else {
      $("#floatjson").find('ul').removeClass('current');
    }
  },
  hover: function(obj, type) {
    var me = this;
    var _navindex = '';
    var objli;

    // 判断是否原来有current，如果有记录
    if (type) {
      obj.each(function() {
        if ($(this).hasClass('current'))
          me.navindex = $(this).index();
      })
      objli = 'a';
    } else {
      objli = 'li';
    }
      // 事件委托
    obj.parent().on('mouseover', objli, function() {
      $(this).parent().find(objli).removeClass('current');
      $(this).addClass('current');
    }).on('mouseout', objli, function() {
      $(this).parent().find(objli).removeClass('current');
      if (type) {
        obj.parent().find('a').eq(me.navindex).addClass('current'); // 恢复
      }
    })
    // .on('click', 'li', function() {
    //   if ($(this).parent().parent().hasClass('container')) {
    //     $(this).find('a:first').click();
    //   }
    // })
  },
  // swipe: function() {
  //   var me = this;
  //   $(".swipeup").on('click', function() {
  //     var idx = $(this).parent('.layout').index();
  //     $(".layout").removeClass('current');
  //     if (idx == $(".layout").length) {
  //       idx = 0;
  //     }
  //     me.changepage($('.layout').eq(idx).attr('data-href'));

  //   })



  // },
  scrolltop: function() {
    if ($(window).scrollTop() > 200) {
      $(".returntop").fadeIn(400).on('click', function() {
        $('html,body').animate({
          scrollTop: '0px'
        }, 800, function() {
          $(".returntop").fadeOut(400);
        });
      })
    }
  }
}/*  |xGv00|a95df016658eb031cc8f6048aca08201 */