//户型展示
var huxingBtn=$(".huxing-btn")[0];
var huxingBtnS=huxingBtn.getElementsByTagName("li");
var huxingBox=$(".huxingBox")[0];
var huxingBoxS=huxingBox.children;
for(var i=0; i<huxingBtnS.length; i++){
	huxingBtnS[i].index=i;
	huxingBtnS[i].onclick=function(){
		for(var j=0; j<huxingBoxS.length; j++){
			huxingBoxS[j].style.display="none";
			huxingBtnS[j].style.color="#9d7304";
			huxingBtnS[j].style.borderColor="#9d7304";
		}
		this.style.color="#91181d";
		this.style.borderColor="#91181d";
		huxingBoxS[this.index].style.display="block";
	};
}
//导航
var nav=$("#nav")[0];
var aBtn=nav.getElementsByTagName("a");
for(var i=0; i<aBtn.length; i++){
	aBtn[i].onclick=function(){
		//alert(1);
		for(var j=0; j<aBtn.length; j++){

			aBtn[j].className="";
		}
		this.className="on";
	};
}
//侧导航位置
var clientW=document.documentElement.clientWidth;
	var clientH=document.documentElement.clientHeight;
	var maxWidth=(clientW-1400)/2;
	if(maxWidth>0){
		$(".nav").css({"left":maxWidth+"px"});
	}else{
		$(".nav").css({"left":"0"});
	}

//分享
var jiathis_config = {
    title:"鲁能·钓鱼台美高梅公馆：精致生活 专属精英的梦想家",   //分享的题目、话题
    summary:"鲁能•钓鱼台美高梅公馆以“提升区域活力、升级区域商业氛围”为主旨，以风靡世界的开放式街区商业，配备SPA主题会所、康体健身主题休闲会所、商务会所，融汇休闲、娱乐、餐饮、购物、养生等功能，打造24小时的时尚不夜城。并引入专业化运营管理，全面提升石榴庄区域的商业价值。",//分享的摘要
    pic:"http://s0.ifengimg.com/2016/03/29/ac8b5ac1100fb13c73f7c32551eafe58.jpg",//分享的楼盘图片
    url:"http://house.ifeng.com/column/fykf/fengyankanfang01",//分享的链接地址 项目地址
    ralateuid:{"tsina":"1890733600"},
    appkey:{"tsina":"2730178844"},
    shortUrl:false,
    hideMore:false
};
$(".house-share").on("mouseover", function(){
	
    $.getScript("http://v3.jiathis.com/code/jia.js");
});

//发送到手机
	$(".phone-book").on("click", function(e){
		var _this = this;
		phonePop($(_this));
	});
	function phonePop(element, housetype){
		var oPop;
		var verifyTag = false;//true验证码验证通过，false未通过
		var timeTag = true;//true允许提交，false不允许提交，1分钟后提交
		if($(".phone-pop").length <= 0){
			oPop = $('<div class="commonPop phone-pop">' +
					 '	<div class="commonPop-title">免费发送楼盘信息到手机</div>' +
					 '	<div class="commonPop-con">' +
					 '		<div class="commonPop-item">' +
					 '			<input type="text" name="phone" class="input_5 inputInit" id="phone_input" value="手机号码" defaultvalue="手机号码" />' +
					 '		</div>' +
					 '		<div class="commonPop-item">' +
					 '			<input type="text" name="code" class="input_5 marr-10 inputInit" id="captchas_input" value="验证码" defaultvalue="验证码" /><img class="captchas-img" style="cursor:pointer;" src="" alt="" />' +
					 '		</div>' +
					 '		<div class="commonPop-button">' +
					 '			<input type="submit" name="submit" class="button-submit" value="免费发送到手机" />' +
					 '		</div>' +
					 '		<div class="commonPop-msg"></div>' +
					 '	</div>' +
					 '	<a href="javascript:;" class="commonPop-close"></a>' +
					 '</div>');
			element.after(oPop);
		}else{
			oPop = $(".phone-pop");
			if(oPop.find(".commonPop-result").length > 0){
				oPop.find(".commonPop-result").detach();
			}
		}
		
		oPop.find(".captchas-img").attr("src", GBL.siteDomain + 'sale/api/getverifycode?s=' + Math.random());
		$(document).on("click", function(e){
			var tgt = $(e.target);
			if(tgt.parents(".phone-pop").length == 0 && !tgt.hasClass("phone-book")){
				oPop.detach();
	        }
		});
		oPop.find(".commonPop-close").on("click", function(){
			oPop.detach();
		});
		var inputs = oPop.find('input[type="text"]');
		inputs.on("focus", function(e){
			var targetInput = $(e.target);
			var inputValue = $.trim(targetInput.val());
			var inputDefault = targetInput.attr("defaultValue");
			if(inputValue == inputDefault){
				targetInput.val("");
				targetInput.removeClass("inputInit");
			}
			oPop.find(".commonPop-msg").html("");
		});
        inputs.on("blur", function(e){
			var targetInput = $(e.target);
			var inputValue = $.trim(targetInput.val());
			var inputDefault = targetInput.attr("defaultValue");
			if(inputValue == ""){
				targetInput.val(inputDefault);
				targetInput.addClass("inputInit");
			}
		});
        oPop.find(".captchas-img").on("click", function(){
			verifyTag = false;
			oPop.find(".captchas-img").attr("src", GBL.siteDomain + 'sale/api/getverifycode?s=' + Math.random());
		});
		//提交数据
		oPop.find(".button-submit").on('click', function(){
			var tel = $.trim($("#phone_input").val() == $("#phone_input").attr('defaultValue') ? '' : $("#phone_input").val());
			var captchas = $.trim($("#captchas_input").val() == $("#captchas_input").attr('defaultValue') ? '' : $("#captchas_input").val());
			var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
			if(!telReg){
				oPop.find(".commonPop-msg").html("*请输入有效手机号！");
				return;
			}
			if(captchas == ""){
				verifyTag = false;
				oPop.find(".commonPop-msg").html("*请输入验证码！");
			}else{
				$.ajax({
					type: "get",
					url: GBL.siteDomain + "sale/api/validverifycode",
					data: {
						"code": captchas
					},
					success: function(data){
						var json = eval('(' + data + ')');
						if(json.errno == 0){//验证码验证通过
							verifyTag = true;
							oPop.find(".commonPop-msg").html('');
							if(!timeTag){
								oPop.find(".commonPop-msg").html("*短信获取频率过高，请您1分钟后再试。");
							}else{
								//提交数据后清空
								var ajaxData,ajaxUrl;
								if(housetype && housetype == 2){
									//二手房
									ajaxUrl = GBL.siteDomain + "esf/apply/subscribe?signUpMobile";
									ajaxData = {
										"signUpMobile": tel,
										"house_id": oPop.prev().attr("house_id"),
										"city": oPop.prev().attr("city")
									};
								}else{
									//新房
									ajaxUrl = GBL.siteDomain + "sale/apply/subscribe?signUpMobile";
									ajaxData = {
										"signUpMobile": tel,
										"lp_id": oPop.prev().attr("lp_id")
									};
								}
								$.ajax({
									type: "get",
									url: ajaxUrl,
									data: ajaxData,
									success: function(data){
										var json = eval('(' + data + ')');
										if(json.errno == 0){//报名成功
											timeTag = false;
											var second = 60;
											var phoneTnterval = setInterval(function(){
												second --;
								                if(second <= 0){
								                	clearInterval(phoneTnterval);
					                                timeTag = true;
					                            }
					                        }, 1000);
											oPop.find("input[type=text]").val("");
											oPop.find(".commonPop-msg").html("");
											info = '<div class="commonPop-result"><div class="commonPop-result-a"><div class="commonPop-result-b"><i class="icon-success"></i>发送成功</div></div></div>';
											oPop.append(info);
											setTimeout(function(){//3秒后自动消失
												oPop.detach();
											},3000);
										}else{//报名失败
											oPop.find(".commonPop-msg").html("*" + json.msg);
											verifyTag = false;
											oPop.find(".captchas-img").attr("src", GBL.siteDomain + 'sale/api/getverifycode?s=' + Math.random());
										}
									}
								});
							}
						}else{//验证失败
							verifyTag = false;
							oPop.find(".captchas-img").attr("src", GBL.siteDomain + 'sale/api/getverifycode?s=' + Math.random());
							oPop.find(".commonPop-msg").html("*验证码有误，请仔细看哦！");
						}
					}
				});
			}
		});
	}

	//点赞
	var name=$(".zan")[0].getAttribute("data-name");
	var number=$(".zan")[0].getAttribute("data-num");
	$.ajax({
		url:"http://house.ifeng.com/sale/api/docount",
		data:{
			name:name,    		//要计数统计的专题名称或者专题地址
			count:0,    		//每次累加的数
			base_count:number   //初始值
		},
		async: false,
		crossDomain: true,
		type:"post",
		dataType:"jsonp",
		jsonp:"_cb",
		success:function(json){
			if(json.errno==0){
				$(".zan p").html(json.data.count);
				var num=$(".zan p").html();
				$(".zan").click(function(){
					$.ajax({
						url:"http://house.ifeng.com/sale/api/docount",
						data:{
							name:name,    		//要计数统计的专题名称或者专题地址
							count:1,    		//每次累加的数
							base_count:100  	//初始值
						},
						async: false,
						crossDomain: true,
						type:"post",
						dataType:"jsonp",
						jsonp:"_cb",
						success:function(){
							num++;
							$(".zan p").html(num);
							json.data.count=num;
						}
					});
				});
			}
		}
	});


	/*//往期回顾
	var prevC=$(".prevC")[0];
	var nextC=$(".nextC")[0];
	var reviewUl=$("#reviewUl")[0];
	var step=218;
	var iNow=0;
	reviewUl.style.width=reviewUl.children.length*step+"px";
	function prevNext(){
		iNow=iNow<0?0:iNow;
		iNow=iNow>(reviewUl.children.length-5)?(reviewUl.children.length-5):iNow;
		$("#reviewUl").stop().animate({"left":-iNow*step+"px"});

	}
	prevC.onclick=function(){
		iNow++;
		prevNext();
	};
	nextC.onclick=function(){
		iNow--;
		prevNext();
	};*/


