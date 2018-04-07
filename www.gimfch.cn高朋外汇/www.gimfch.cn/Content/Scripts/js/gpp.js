/******* 导航  *****/
$(function(){		   
	$("#top_nav > li").not(".navhome").hover(function(){
		$(this).addClass("navmoon")
	},function(){
		$(this).removeClass("navmoon")
	});	
}); 

/*TAB  onmouseover  /   onclick   */
/*function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("gpp_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}*/

/***** 侧导航 start   *****/
/*原来的js*/
/*
$(document).ready(function(){
	$(":range").rangeinput({progress: true});
	$("ul.subnav li > div.head").click(function()
	{
		var arrow = $(this).find("span.arrow");
		if(arrow.hasClass("up"))
		{
			arrow.removeClass("up");
			arrow.addClass("down");
		}
		else if(arrow.hasClass("down"))
		{
			arrow.removeClass("down");
			arrow.addClass("up");
		}

		$(this).parent().find("ul.menu").slideToggle();
	});
});
*/
/*修改后的js*/
$(document).ready(function(){
	$("ul.subnav li > div.head").click(function()
	{
		$(this).parent().find("ul.menu").slideToggle();
	});
});

//侧导航三级菜单
/*$(document).ready(function(){
	$("ul.subnav_thr li > div.head_thr").click(function()
	{
		$(this).parent().find("ul.menu_thr").slideToggle();
	});
});  */       
/***** 侧导航 end   *****/

/*******  返回顶部   ********/
$(function(){
	$(window).scroll(function () {
		var scrollHeight = $(document).height();
		var scrollTop = $(window).scrollTop();
		var $windowHeight = $(window).innerHeight();
		scrollTop > 50 ? $("#scrollUp").fadeIn(200).css("display","block") : $("#scrollUp").fadeOut(200);	
	});
	$('#scrollUp').click(function (e) {
		e.preventDefault();
		$('html,body').animate({ scrollTop:0});
	});
});

/*   导航隐藏显示    */
$(window).scroll(function(){
	var top = $(window).scrollTop();   //设置变量top,表示当前滚动条到顶部的值
	if (top > 30)                      //当滚动条到顶部的值大于70时，添加类".ce2"到".ce"中
	{
		$(".header").addClass("head_f");
		$(".top_assist").css('display','none');
		//$(".float_logo").css('display','block');
	}
	else                              //当滚动条到顶部的值小于等于70时，把".ce"中的类".ce2"删除
	{
		$(".header").removeClass("head_f");
		$(".top_assist").css('display','block');
		//$(".float_logo").css('display','none');
	}
})
/*pop_up  banner上的小弹窗js*/
//$(function(){
//	$("#slides").children("li").mouseover(function(){
//		$("#pop_up").show();	
//	}),	$("#slides").children("li").mouseout(function(){
//		$("#pop_up").hide();	
//	}),$("#pop_up ").mouseover(function(){
//		$(this).show();	
//	}),$("#pop_up").mouseout(function(){
//		$(this).hide();	
//	});
//});

//鼠标划过切换背景色 banner下方三个框
$(function(){
	$("#pop_up a.special_boxs").mouseover(function(){
		$(this).siblings().removeClass("on").end().addClass("on");
	});
});

/*pop_up  banner上都小弹窗鼠标划过背景色变色*/


/*检查是否为 IE 6-8低版本浏览器  start*/
		$(function(){
			if ((/msie [6|7|8|9]/i.test(navigator.userAgent))) {			
              $("#browser_ie").show();			
            };	
			
		$("#browser_close").click(function(){
				$("#browser_ie").hide();				
			});		
			
		setTimeout(function(){
				$("#browser_ie").hide();
				},10000);				  
		});           
		
/******检查是否为 IE 6-8低版本浏览器 end********/		