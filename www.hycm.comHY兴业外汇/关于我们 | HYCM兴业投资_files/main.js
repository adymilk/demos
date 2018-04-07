jQuery(document).ready(function($){
	//open/close mega-navigation
	$('.navbar-toggle').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//close meganavigation
	$('.navbar-toggle').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//on mobile - open submenu
	$('.has-children').children('a').on('click', function(event){
		//prevent default clicking on direct children of .has-children 
		event.preventDefault();
		var selected = $(this);
		$(this).next('div').find('.cbp-hrsub-inner div > ul').removeClass('is-hidden').end().parent('.has-children').parent('.cd-dropdown-content').addClass('move-out');
	});

/*	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'left' : 'right';
	$('.cd-dropdown-content').menuAim({
        activate: function(row) {
        	$(row).children().addClass('is-active').removeClass('fade-out');
        	if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
         deactivate: function(row) {
        	$(row).children().removeClass('is-active');
        	if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
        		$('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
        		$(row).children('ul').addClass('fade-out')
        	}
        },
        exitMenu: function() {
        	$('.cd-dropdown-content').find('.is-active').removeClass('is-active');
        	return true;
        },
        submenuDirection: submenuDirection,
    });*/

	//submenu items - go back link
	$('.go-back').on('click', function(){
		$(this).parent('ul').addClass('is-hidden').parent('div').parent('.cbp-hrsub-inner').parent('div').parent('.has-children').parent('.cd-dropdown-content').removeClass('move-out');
	}); 

	function toggleNav(){
		var navIsVisible = ( !$('.navbar-collapse').hasClass('dropdown-is-active') ) ? true : false;
		$('.navbar-collapse').toggleClass('dropdown-is-active', navIsVisible);
		$('.navbar-toggle').toggleClass('dropdown-is-active', navIsVisible);
		/*if( !navIsVisible ) {
			$('.navbar-collapse').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});	
		}*/
	}


});