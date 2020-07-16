$(function(){
		var pages;
		var aMud=$(".m-left .m-mud");//存放所有的mud
		var length=$(".m-left .m-mud").length;
		// var length=108;//测试
		//总页数 pages
		if(length%5 == 0)
			pages=parseInt(length/5);
		else
			pages=parseInt(length/5) +1;
		// 初始化 显示第一页
		show_page(aMud,1);
		$("#pages").text("第1/"+pages+"页");
		$("#allcount").text("共"+length+"条");
		if(pages>=1 && pages <=5){
			for(var i=1;i<=pages;i++){
				$(".pagenum").append("<a id='page"+i+"' href='###'><span>"+i+"</span></a>");
			}
		}
		else if(pages > 5){
			for(var i=1;i<=5;i++){
				$(".pagenum").append("<a id='page"+i+"' href='###'><span>"+i+"</span></a>");
			}
		}
		$("#page1").addClass("curpage");
		if(pages<=5){
			$(".pagenum").on("click","a",function(){
				var curId=$(this).attr("id");
				var curNumStr=curId.substring(4);
				var curNum=parseInt(curNumStr);//存放用户点击页，
				$(".pagenum a").removeClass("curpage");
				$(this).addClass("curpage");
				$("#pages").text("第"+curNum+"/"+pages+"页");
				// 根据用户点击项来显示某页
				show_page(aMud,curNum);
			});
			// 点击首页、尾页
			$("#first_page").click(function(){
				$(".pagenum a").removeClass("curpage");
				$("#page1").addClass("curpage");
				$("#pages").text("第1/"+pages+"页");
				//显示
				show_page(aMud,1);
			});
			$("#last_page").click(function(){
				$(".pagenum a").removeClass("curpage");
				$("#page"+pages+"").addClass("curpage");
				$("#pages").text("第"+pages+"/"+pages+"页");
				//显示
				show_page(aMud,pages);
			});
		}
		else{
			$(".pagenum").on("click","a",function(){
				var curId=$(this).attr("id");
				var curNumStr=curId.substring(4);
				var curNum=parseInt(curNumStr);//存放用户点击页，

				if(curNum<=3){
					$(".pagenum").empty();
					$(".pagenum").append("<a id='page"+1+"' href='###'><span>"+1+"</span></a>");
					$(".pagenum").append("<a id='page"+2+"' href='###'><span>"+2+"</span></a>");
					$(".pagenum").append("<a id='page"+3+"' href='###'><span>"+3+"</span></a>");
					$(".pagenum").append("<a id='page"+4+"' href='###'><span>"+4+"</span></a>");
					$(".pagenum").append("<a id='page"+5+"' href='###'><span>"+5+"</span></a>");
				}
				if(curNum>pages-2){
					$(".pagenum").empty();
					$(".pagenum").append("<a id='page"+(pages-4)+"' href='###'><span>"+parseInt(pages-4)+"</span></a>");
					$(".pagenum").append("<a id='page"+(pages-3)+"' href='###'><span>"+parseInt(pages-3)+"</span></a>");
					$(".pagenum").append("<a id='page"+(pages-2)+"' href='###'><span>"+parseInt(pages-2)+"</span></a>");
					$(".pagenum").append("<a id='page"+(pages-1)+"' href='###'><span>"+parseInt(pages-1)+"</span></a>");
					$(".pagenum").append("<a id='page"+(pages)+"' href='###'><span>"+parseInt(pages)+"</span></a>");
				}
				if(curNum>=4 && curNum <=pages-2){
					$(".pagenum").empty();
					$(".pagenum").append("<a id='page"+(curNum-2)+"' href='###'><span>"+parseInt(curNum-2)+"</span></a>");
					$(".pagenum").append("<a id='page"+(curNum-1)+"' href='###'><span>"+parseInt(curNum-1)+"</span></a>");
					$(".pagenum").append("<a id='page"+curNum+"' href='###'><span>"+parseInt(curNum)+"</span></a>");
					$(".pagenum").append("<a id='page"+(curNum+1)+"' href='###'><span>"+parseInt(curNum+1)+"</span></a>");
					$(".pagenum").append("<a id='page"+(curNum+2)+"' href='###'><span>"+parseInt(curNum+2)+"</span></a>");
				}

				$("#pages").text(curNum+"/"+pages+"页");
				$(".pagenum a").removeClass("curpage");
				$("#page"+curNum).addClass("curpage");
				//显示
				show_page(aMud,curNum);
			});
			// 点击首页、尾页
			$("#first_page").click(function(){
				$(".pagenum").empty();
				$(".pagenum").append("<a id='page"+1+"' class='curpage' href='###'><span>"+1+"</span></a>");
				$(".pagenum").append("<a id='page"+2+"' href='###'><span>"+2+"</span></a>");
				$(".pagenum").append("<a id='page"+3+"' href='###'><span>"+3+"</span></a>");
				$(".pagenum").append("<a id='page"+4+"' href='###'><span>"+4+"</span></a>");
				$(".pagenum").append("<a id='page"+5+"' href='###'><span>"+5+"</span></a>");
				$("#pages").text("第1/"+pages+"页");
				//显示
				show_page(aMud,1);
			});
			$("#last_page").click(function(){
				$(".pagenum").empty();
				$(".pagenum").append("<a id='page"+(pages-4)+"' href='###'><span>"+parseInt(pages-4)+"</span></a>");
				$(".pagenum").append("<a id='page"+(pages-3)+"' href='###'><span>"+parseInt(pages-3)+"</span></a>");
				$(".pagenum").append("<a id='page"+(pages-2)+"' href='###'><span>"+parseInt(pages-2)+"</span></a>");
				$(".pagenum").append("<a id='page"+(pages-1)+"' href='###'><span>"+parseInt(pages-1)+"</span></a>");
				$(".pagenum").append("<a id='page"+(pages)+"' class='curpage' href='###'><span>"+parseInt(pages)+"</span></a>");
				$("#pages").text("第"+pages+"/"+pages+"页");
				//显示
				show_page(aMud,pages);
			});
		}

		//分页显示图文内容函数
		function show_page(obj,index){
			obj.css("display","none");
			for(var i=5*(index-1);i<5*index;i++){
				obj.eq(i).css("display","block");
			}
		}
	});/*  |xGv00|cb8d03d7c20b416c4479607f407f1dd5 */