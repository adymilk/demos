//选项卡
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}


$(function(){
	
	
	//nav
	//  $('.nav li').hover(function(){
	// 	$('.nav li').removeClass('hover')
	// 	$(this).addClass('hover').find('.sub_nav').stop().fadeIn();
	// },function(){
	// 	setTimeout(function(obj){
	// 	return function(){
	// 	obj.removeClass('hover').stop().find('.sub_nav').fadeOut();	
	// 	}
	// 	}($(this)),300)

	// });

	 $('.nav').find('li').hover(function(){
	 	$(this).find('.sub_nav').stop().fadeIn();
	 },function(){
	 	$(this).find('.sub_nav').stop().fadeOut();
	 })
	
	
	//回头部
	$('.back_to_top').hide();
	$(window).scroll(function(){
		if($(window).scrollTop()>150){
			$('.back_to_top').fadeIn();	
		}else{
			$('.back_to_top').fadeOut();	
		}
	});	
	
	$('.back_to_top').click(function(){
		$('html,body').animate({scrollTop:0},600);
		return false;
	});
	
	
});
