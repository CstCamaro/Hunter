function subS(str){
	str=str.replace("-","");
	str=str.substring(str.indexOf("转")+1,str.length);
	return str;
}
//console.log(subS("400-818-5005 转 12345"));

for(var i=0; i<freeTel.length; i++){
	(function(i){
		if(freeTel[i].correctlyHouseID){
			$.ajax({
				url:"http://house.ifeng.com/sale/api/houseinfo",
				type:"get",
				data:{
					"houseid":freeTel[i].houseid
				},
				async: false,
				crossDomain: true,
				dataType:"jsonp",
				jsonp:"_cb",
				success:function(json){
					//console.log(json.data.pic_effect);
					if(json.errno==0){
						//多个楼盘 标准Id
				
						if($(".callBackBox").length){
							$(".callBackBox").eq(i).find("h4 span").html(json.data.lp_name_abbr); //楼盘名
							$(".callBackBox").eq(i).find("h4 i").html(json.data.pro_type); //楼盘标签
							$(".callBackBox").eq(i).find(".popShadow p").html(json.data.priceArr.info +" : "+ json.data.priceArr.price); //楼盘价格
							$(".callBackBox").eq(i).find(".imgBox a").attr({"href":json.data.url}); //图片点击跳转地址
							$(".callBackBox").eq(i).find(".imgBox a img").attr({"src":json.data.pic_effect}); //图片点击跳转地址
							
							if(json.data.preferential!=""){   
								$(".callBackBox").eq(i).find(".c_1_YH i").html(json.data.preferential);//楼盘优惠语显示
							}else{
								$(".callBackBox").eq(i).find(".c_1_YH").css({"display":"none"});//楼盘优惠语不显示
							}
							if(json.data.sub400Number!=""){
								$(".callBackBox").eq(i).find(".hotline1 i").html("400-818-5005 转"+json.data.sub400Number);//楼盘电话有转接
								$(".callBackBox").eq(i).find("#tel400").val(json.data.sub400Number)//设置小号
							}else{
								$(".callBackBox").eq(i).find(".hotline1 i").html("400-818-5005");//无转接
							}
							
						//1个楼盘 标准Id
						}else if($(".callBackBoxTop2").length){
							$(".c_2_Title h4").html(json.data.lp_name_abbr); //楼盘名
							if(json.data.preferential==""){
								$(".c_2_Title p").css({"display":"none"});
							}else{
								$(".c_2_Title p").html(json.data.preferential);//楼盘优惠语显示
							}
							if(json.data.sub400Number!=""){
								$(".c_2_tel p").html("400-818-5005 转"+json.data.sub400Number);//楼盘电话有转接
								$(".c_2_tel  #tel400").val(json.data.sub400Number);//设置小号
							}else{
								$(".c_2_tel p").html("400-818-5005");//无转接
							}
						}
					}
				}
			});
		}else{
			//多个楼盘 非标准楼盘id 手输参数
			if($(".callBackBox").length){
				$(".callBackBox").eq(i).find("h4 span").html(freeTel[i].houseName); //楼盘名
				$(".callBackBox").eq(i).find("h4 i").html(freeTel[i].pro_type); //楼盘标签
				$(".callBackBox").eq(i).find(".popShadow p").html(freeTel[i].housePrice); //楼盘价格
				$(".callBackBox").eq(i).find(".imgBox a").attr({"href":freeTel[i].url}); //图片点击跳转地址
				$(".callBackBox").eq(i).find(".imgBox a img").attr({"src":freeTel[i].pic_effect}); //图片点击跳转地址
				if(freeTel[i].recommend==""){
					$(".callBackBox").eq(i).find(".c_1_YH i").css({"display":"none"});

				}else{
					$(".callBackBox").eq(i).find(".c_1_YH i").html(freeTel[i].recommend);//楼盘优惠语显示

				}
				
				$(".callBackBox").eq(i).find(".hotline1 i").html(freeTel[i].houseTel);//楼盘电话有转接	
				$(".callBackBox").eq(i).find("#tel400").val(subS(freeTel[i].houseTel));//设置小号
			//吸底 非标准楼盘id 手输参数
			}else if($(".callBackBoxTop2").length){
				
				$(".c_2_Title h4").html(freeTel[i].houseName); //楼盘名
				if(freeTel[i].recommend==""){
					$(".c_2_Title p").css({"display":"none"});
				}else{
					$(".c_2_Title p").html(freeTel[i].recommend);//楼盘优惠语显示
				}
				
				$(".c_2_tel p").html(freeTel[i].houseTel);//楼盘电话有转接	
				$(".c_2_tel #tel400").val(subS(freeTel[i].houseTel));//设置小号
			}
		}
	})(i);
}

//申请回拨
function applyForFreeCall(selecter) {
	this.data = {
		callback: '_cb'
	};
	this.code = null;
	this.container = $(selecter);
	this.timer = null;
	this.warning = this.container.find(".freeCall_tc_warning p");  //p
	this.warninginfo = this.warning.find("span");    //p span
	this.oneClick=false;
}
applyForFreeCall.prototype = {
	init: function() {
		this.bind();
	},
	bind: function() {
		var me = this;
		me.container.find(".tc_yzm").on("click", function() {
			var tel = $.trim(me.container.find("#freeCall_phone").attr('value'));
			if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(tel)) {
				me.data.signUpMobile = tel;
			} else {
				me.showWarn("请输入正确手机号");
				return;
			}
			if(!!me.oneClick){
				return;
			}
			me.oneClick=true;
			$.ajax({
				type: "POST",
				url: "http://house.ifeng.com/sale/api/sendidentifyingcode",
				dataType: 'jsonp',
				jsonp: "_cb",
				data: {
					"signUpMobile": me.data.signUpMobile,
					"callback": '_cb'
				},
				success: function(data) {

				}
			});
			
			var getBtn = $(this);
			getBtn.val("60s重新获取");
			var s = 60;
			me.timer = setInterval(function() {
				s--;
				getBtn.val(s + "s重新获取");
				if (s == 0) {
					clearInterval(me.timer);
					getBtn.val("获取验证码");
					me.oneClick=false;
				}
			}, 1000);
		});
		me.container.find(".freeCall_submit").on('click', function() { //报名提交
			if (!!me.check()) {
				$.ajax({
					type:"POST",
					url:"http://house.ifeng.com/sale/api/validateidentifyingcode",
					dataType:'jsonp',
					jsonp:"_cb",
					data: {
						signUpMobile: me.data.signUpMobile,
						xh:me.data.xh,
						//xh:44444,//测试小号
						code: me.code,
						callback: '_cb'
					},
					success: function(data) {

						if (data.errno == 0) {
							
							$.ajax({
								type:"POST",
								url:"http://house.ifeng.com/sale/api/mobilecallback",
												//http:house.ifeng.com/homedetail/telCallback",
								dataType:"jsonp",
								jsonp:"_cb",
								data: me.data,
								success: function(data) {

									//console.log(data)
									if (data.errno == 0) {
										me.showWarn("回拨成功");
										clearInterval(me.timer);
										me.container.find(".tc_yzm").val("获取验证码");
										me.oneClick=false;
										
										$('.freeCall_bd').hide();
										$('.freeCall_cd').show();
										$('.freeCall_cd>p>span').html('60');
										countDown();
										function countDown(){
											var freeCall_num=parseInt($('.freeCall_cd>p>span').html());
											if(freeCall_num<=0){
												$('.freeCall_bd').show();
												$('.freeCall_cd').hide();
												$('.freeCall_tc').hide();
											}else{
												freeCall_num--;
												$('.freeCall_cd>p>span').html(freeCall_num);
												setTimeout(countDown,1000);
											}
											
										}
										
									} else {
										me.showWarn(data.msg);
									}
								}
							});

						} else {
							me.showWarn(data.msg);
						}
					}
				});
			}
		});
		this.container.find("input").on("focus", function() {
			me.warning.hide();
		});
	},
	check: function() {
		var tel = $.trim(this.container.find("#freeCall_phone").attr('value'));
		var xh  = $.trim(this.container.find("#freeCall_xh").attr('value'));
		if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(tel)) {
			this.data.signUpMobile = tel;
		} else {
			this.showWarn("请输入正确手机号");
			return false;
		}
		if(xh!=''){
			
			this.data.xh = xh;
			//alert(this.data.xh);
		} else {
			this.showWarn("小号为空");
			return false;
		}
		var verify = $.trim(this.container.find("#freeCall_yzm").attr('value'));
		if (!!verify) {
			this.code = verify;
		} else {
			this.showWarn("验证码不能为空");
			return false;
		}
		//this.data.lp_id = $.trim(this.container.find(".getHouseId").val()) || null;
		//this.data.actUrl = window.location.href;
		return true;
		
	},
	showWarn: function(val) {
		this.warning.show();
		this.warninginfo.html(val);
	}

}

$(document).ready(function(){
	$('.hotCallBtn').on('click',function(){
		var tel400    = $(this).siblings("input[id='tel400']").val();
		var qrcodeimg = $(this).siblings("input[id='qrcode']").val();
		$('#freeCall_xh').val(tel400);
		$('#qrcodeimg').attr('src',qrcodeimg); 
		$('.freeCall_tc').show();
	});
	$('.freeCall_tc_close').on('click',function(){
		$('.freeCall_tc').hide();
	});
	var freeCall = new applyForFreeCall(".freeCall_tc_info");
		freeCall.init();
});
	
