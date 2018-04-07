

if($(".shipin video").attr("autoplay")){
	$(this).click(function(){
		$(this).pause();
		$(".anbtn img").show();
	})

}else{

      $(".anbtn img").click(function(){
      	$(".shipin video").attr("autoplay");
	    $(".shipin video")[0].play();
	    $(this).hide();
	})
}
//返回上页
$('.fhlist').click(function () {
	var referrer = document.referrer;
	var result = referrer.indexOf('article');
	if(result == -1){
		window.location.href = '/article'
	}else{
		history.go(-1);
	}
});










