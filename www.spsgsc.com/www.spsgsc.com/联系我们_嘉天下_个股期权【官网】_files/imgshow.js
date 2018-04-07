/*产品多图展示*/
$(function(){ 
    $('.ad-gallery').adGallery({
		effect:'fade',
		loader_image:''
	}); 
}); 
/*产品大图查看器*/
$(document).ready(function() {
	
	$('#lightgallery').lightGallery({download: false});
	$(document).on('click',"#gallery .ad-image img",function(event){
		var i = $("#lightgallery a.ad-active").parent().index();
		$('#lightgallery').data('lightGallery').build(i);    
		$('#lightgallery').data('lightGallery').slide(i,false,false);    
	});
	
	$(".met_editor img").each(function(){
		if($(this).parent("a").length==0){
			$(this).wrap("<ul class='editorlightgallery'><li data-src='"+$(this).attr("src")+"'></li></ul>");
		}
	});
	$('.editorlightgallery').lightGallery({download: false,counter: false});
	
});