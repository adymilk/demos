// Sticky Side Menu

jQuery(document).ready(function() {
	var s = jQuery("#sticker");
	var t = s.offset().top;
	//console.log(t);
		
	var pos = s.position(); 
	console.log(pos); 
	var stickermax = jQuery(document).outerHeight() - jQuery("footer").outerHeight() - s.outerHeight() - 96 -20;
	//console.log(stickermax);
	// console.log(jQuery(window).height() +'---'+jQuery(document).outerHeight() +'---'+jQuery("footer").outerHeight() +'----'+stickermax+"---"+ jQuery('body').css('padding-top'));

	jQuery(window).scroll(function() {
		// console.log(t+'--+--'+s.outerHeight());
				 
		var windowpos = jQuery(window).scrollTop();
		// console.log(windowpos +'---'+ pos.top+'----'+stickermax);

		if (windowpos >= t-140 && windowpos < stickermax) {
			s.attr("style", "");
			s.addClass("stick");
			 //console.log(1);
			// console.log(s.width());
		} else if (windowpos >= stickermax) {
			s.removeClass(); //un-stick
			s.css("width", "90%");
			s.css({position: "absolute", top: (stickermax - t  + 96)+ "px"});
			// console.log(2);
			// console.log(s.width());
		} else {
			s.removeClass(); 
		}
	});
});