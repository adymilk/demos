this.preloadIm=function(){
	var b=new Array;
	$("a.preview").each(function(){
		$(this).attr("path");
	});
	return b
};
this.imagePreview=function(d,c){
	offX=25;
	offY=25;
	c=c==undefined?"a.preview":c;
	$(c).hover(function(e){
		$("body").append("<div id='preview' class='previewShowWindow'><img id='pi' src='images/loadingAnimation.gif' alt='Now Loading' /></div>");
		var m=$(this).attr("path");
		$("#pi").attr("src",m);
		var o=$("#preview").width();
		var p=$("#preview").height();
		var a=$(window).width()+$(window).scrollLeft();
		var l=$(window).height()+$(window).scrollTop();
		var n;
		var b;
		if((e.pageX+offX+o)>a){
			n=e.pageX-(o+offX)+"px"
		}else{
			n=e.pageX+offX+"px"
		}if((e.pageY+offY+p)>l){
			b=l-(p+offY)+"px"
		}else{
			b=e.pageY+offY+"px"
		}
			$("#preview").css("top",b).css("left",n).fadeIn("fast")
		},function(){
			$("#preview").remove()
	});

	$(c).mousemove(function(e){
		var m=$("#preview").width();
		var n=$("#preview").height();
		var a=$(window).width()+$(window).scrollLeft();
		var k=$(window).height()+$(window).scrollTop();
		var l;
		var b;
		if((e.pageX+offX+m)>a){
			l=e.pageX-(m+offX)+"px"
		}else{
			l=e.pageX+offX+"px"
		}if((e.pageY+offY+n)>k){
			b=k-(n+offY)+"px"
		}else{
			b=e.pageY+offY+"px"
		}
		$("#preview").css("top",b).css("left",l)
	})
	
};

$(function(){
    if($('a.preview').length){
        var img = preloadIm();
        imagePreview(img);
    }
})