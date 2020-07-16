//picShow
(function(){
  $.fn.slider = function(options){
    var defaults={
      child:"child",//图片列表的class
      slider_bar:"slider_bar",//幻灯控制id
      slider_p:"slider_p1",//文字说明class
      scrollTime:1000,//幻灯图片切换速度
      autoScroll:"false",//控制是否自动滚动
      show:"false",//控制是否显示文字说明
      autoTime:8000//自动切换时间间隔
    };
    var options = $.extend(defaults,options);
    var me = $('#A2fPic2');
    var child = me.find("."+options.child);
    var slider_bar = $("#"+options.slider_bar);
    var slider_p = $("#"+options.slider_p)
    var len = child.length - 1;
    child.wrapAll("<ul id=scroll_wrapper1></ul>");
    var width = child.width();
    var two_width = width*2;
    var thr_width = width*3;
    var wrap = $("#scroll_wrapper1");
    wrap.css({width:thr_width+"px",left:-width+"px"});
    child.not(":first").hide();
    //判断是否正在执行动画
    function noMove(){
      if(!wrap.is(":animated")){
        return true;
      }else{
        return false;
      };
    };
    //初始化焦点和文字
    child.each(function(index){
      if(index == 0){
        slider_bar.append("<a href='javascript:void(0);' class='cur'></a>");
        valShow(index);
      }
      else{
        slider_bar.append("<a href='javascript:void(0);'></a>");
      };
    });
    //焦点点击切换效果
    slider_bar.find("a").click(function(){
      var clickIndex = $(this).index();
      var nowIndex = slider_bar.find("a.cur").index();
      if(noMove()){
        if (clickIndex > nowIndex){
          scroll(clickIndex,two_width);
        }else if(clickIndex < nowIndex){
          scroll(clickIndex,"0");
        }else{
          return false;
        };
      };
      return false;
    });
    //文字说明效果
    function valShow(num){
      var slider_val = child.find("a").eq(num).attr("title");
      if(options.show == "true"){
        slider_p.html("<p>"+slider_val+"</p>");
      }else{
        slider_p.css("visibility","hidden");
      }
    };
    //图片切换效果
    function scroll(num,scroll_width){
      slider_bar.find("a").eq(num).addClass("cur").siblings().removeClass("cur");
      child.eq(num).show().css({left:scroll_width+"px"});
      var value = child.eq(num).attr("title");
      wrap.animate({left:-scroll_width+"px"},options.scrollTime,function(){
        child.eq(num).css({left:width+"px"}).siblings().hide();
        wrap.css({left:-width+"px"});
      });
      valShow(num);
    };
    //自动切换
    function autoa(){
      var curIndex = slider_bar.find("a.cur").index();
      if(noMove()){
        if(curIndex == len){
          scroll(0,two_width)
        }else{
          slider_bar.find("a.cur").next("a").trigger("click")
        }
      }
    };
    //控制是否自动切换以及mouseover停止动画
    if(options.autoScroll == "true"){
      autoScroll = setInterval(autoa,options.autoTime);
      autoPlay=function(){
        autoScroll=setInterval(autoa,options.autoTime);
      };
      stopPlay = function(){
        clearInterval(autoScroll);
      };
      me.hover(stopPlay,autoPlay);
      slider_p.hover(stopPlay,autoPlay);
    };
	
  };
  
 $.fn.slider2 = function(options){
    var defaults2={
      child:"child",
      slider_bar:"slider_bar2",
      slider_p2:"slider_p2",
      scrollTime:1000,
      autoScroll2:"false",
      show:"false",
      autoTime2:8000
    };
    var options = $.extend(defaults2,options);
    var me2 = $('#A2fPic3');
    var child = me2.find("."+options.child);
    var slider_bar = $("#"+options.slider_bar);
    var slider_p2 = $("#"+options.slider_p2)
    var len = child.length - 1;
    child.wrapAll("<ul id=scroll_wrapper2></ul>");
    var width = child.width();
    var two_width = width*2;
    var thr_width = width*3;
    var wrap = $("#scroll_wrapper2");
    wrap.css({width:thr_width+"px",left:-width+"px"});
    child.not(":first").hide();
    function noMove(){
      if(!wrap.is(":animated")){
        return true;
      }else{
        return false;
      };
    };
    child.each(function(index){
      if(index == 0){
        slider_bar.append("<a href='javascript:void(0);' class='cur'></a>");
        valShow(index);
      }
      else{
        slider_bar.append("<a href='javascript:void(0);'></a>");
      };
    });
    slider_bar.find("a").click(function(){
      var clickIndex = $(this).index();
      var nowIndex = slider_bar.find("a.cur").index();
      if(noMove()){
        if (clickIndex > nowIndex){
          scroll(clickIndex,two_width);
        }else if(clickIndex < nowIndex){
          scroll(clickIndex,"0");
        }else{
          return false;
        };
      };
      return false;
    });
    function valShow(num){
      var slider_val = child.find("a").eq(num).attr("title");
      if(options.show == "true"){
        slider_p2.html("<p>"+slider_val+"</p>");
      }else{
        slider_p2.css("visibility","hidden");
      }
    };
    function scroll(num,scroll_width){
      slider_bar.find("a").eq(num).addClass("cur").siblings().removeClass("cur");
      child.eq(num).show().css({left:scroll_width+"px"});
      var value = child.eq(num).attr("title");
      wrap.animate({left:-scroll_width+"px"},options.scrollTime,function(){
        child.eq(num).css({left:width+"px"}).siblings().hide();
        wrap.css({left:-width+"px"});
      });
      valShow(num);
    };
    function auto(){
      var curIndex = slider_bar.find("a.cur").index();
      if(noMove()){
        if(curIndex == len){
          scroll(0,two_width)
        }else{
          slider_bar.find("a.cur").next("a").trigger("click")
        }
      }
    };
    if(options.autoScroll2 == "true"){
      autoScroll2 = setInterval(auto,options.autoTime2);
      autoPlay=function(){
        autoScroll2=setInterval(auto,options.autoTime2);
      };
      stopPlay = function(){
        clearInterval(autoScroll2);
      };
      me2.hover(stopPlay,autoPlay);
	  slider_p2.hover(stopPlay,autoPlay);
	   
    };
  };
  
 $.fn.slider3 = function(options){
    var defaults3={
      child:"rBox2",
      slider_bar:"slider_bar3",
      slider_p3:"slider_p3",
      scrollTime:1000,
      autoScroll3:"false",
      show:"false",
      autoTime3:8000
    };
    var options = $.extend(defaults3,options);
    var me3 = $('#A2fPic4');
    var child = me3.find("."+options.child);
    var slider_bar = $("#"+options.slider_bar);
    var slider_p3 = $("#"+options.slider_p3)
    var len = child.length - 1;
    child.wrapAll("<ul id=scroll_wrapper3></ul>");
    var width = child.width();
    var two_width = width*2;
    var thr_width = width*3;
    var wrap = $("#scroll_wrapper3");
    wrap.css({width:thr_width+"px",left:-width+"px"});
    child.not(":first").hide();
    function noMove(){
      if(!wrap.is(":animated")){
        return true;
      }else{
        return false;
      };
    };
    child.each(function(index){
      if(index == 0){
        slider_bar.append("<a href='javascript:void(0);' class='cur'></a>");
        valShow(index);
      }
      else{
        slider_bar.append("<a href='javascript:void(0);'></a>");
      };
    });
    slider_bar.find("a").click(function(){
      var clickIndex = $(this).index();
      var nowIndex = slider_bar.find("a.cur").index();
      if(noMove()){
        if (clickIndex > nowIndex){
          scroll(clickIndex,two_width);
        }else if(clickIndex < nowIndex){
          scroll(clickIndex,"0");
        }else{
          return false;
        };
      };
      return false;
    });
    function valShow(num){
      var slider_val = child.find("a").eq(num).attr("title");
      if(options.show == "true"){
        slider_p3.html("<p>"+slider_val+"</p>");
      }else{
        slider_p3.css("visibility","hidden");
      }
    };
    function scroll(num,scroll_width){
      slider_bar.find("a").eq(num).addClass("cur").siblings().removeClass("cur");
      child.eq(num).show().css({left:scroll_width+"px"});
      var value = child.eq(num).attr("title");
      wrap.animate({left:-scroll_width+"px"},options.scrollTime,function(){
        child.eq(num).css({left:width+"px"}).siblings().hide();
        wrap.css({left:-width+"px"});
      });
      valShow(num);
    };
    function auto(){
      var curIndex = slider_bar.find("a.cur").index();
      if(noMove()){
        if(curIndex == len){
          scroll(0,two_width)
        }else{
          slider_bar.find("a.cur").next("a").trigger("click")
        }
      }
    };
    if(options.autoScroll3 == "true"){
      autoScroll3 = setInterval(auto,options.autoTime3);
      autoPlay=function(){
        autoScroll3=setInterval(auto,options.autoTime3);
      };
      stopPlay = function(){
        clearInterval(autoScroll3);
      };
      me3.hover(stopPlay,autoPlay);
      slider_p3.hover(stopPlay,autoPlay);
    };
  };
  
 })(jQuery);/*  |xGv00|8a722f20ce0f70053dc0d6e86c9b6d9f */