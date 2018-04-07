(function ($) {
	$(document).ready(function(){
		document.getElementById("dropbtn").onclick = function() {
			myF()
		};
		 
		function myF() {
			//console.clear();
		    document.getElementById("customDropdown").classList.toggle("show");
		    if ($('#customDropdown').hasClass('show')){
		    	$('.navactions ul').removeClass('show');
				$('.topheadernav').addClass('active');
				//$('.navactions ul').removeClass('show');
				$('.redline').addClass('active');
				//console.log("clicked 1");
			}
			else
				{
				$('.topheadernav').removeClass('active');
				$('.redline').removeClass('active');
			//	console.log("clicked 2");

				}
		}
		
		
		$('.navactions > a').click(function(e) {
				//console.clear();
   				//console.log("clicked 3");
   				//console.log("id : " +this.id);
   				if (this.id == "topnavbtn_references"){
   					//console.log("Remove notifications");
   					$('#notifDropdown').removeClass('show');
   				}
   				else{
   					//console.log("Remove action");
   					$('#actDropdown').removeClass('show');
   				}

				$(this).next('ul').toggleClass('show');
				
				 //
				 //$('.navactions ul').removeClass('show');
				 // $('.navactions ul').removeClass('show');
				 // $(this).closest('ul').toggleClass('show');	
				
				  
				if  ($('.navactions ul').hasClass('show')){
					$('.topheadernav').addClass('active');
					$('.redline').addClass('active');
					$('#customDropdown').removeClass('show')
					//console.log("clicked 4");
				}
				else
					{
					$('.topheadernav').removeClass('active');
					$('.redline').removeClass('active');
					//console.log("clicked 5");
					}
			
			});

		//Close the dropdown menu
		var close_menu = function(){
			var dropdowns = document.getElementsByClassName("dropdown-content");
		    var i;
		    for (i = 0; i < dropdowns.length; i++) {
		     // console.log(i +" : "+dropdowns[i].id);
		      var openDropdown = dropdowns[i];
		      if (openDropdown.classList.contains('show')) {
		      //	console.log("in");

		        $("#"+dropdowns[i].id).removeClass('show')
		        $('.navactions ul').removeClass('show');
		        $('.topheadernav').removeClass('active');
		      }
		    }
		}

		//Check if the user clicks on the other menu
		$('#block-menu-menu-client-portal-menu').bind('click', function(event) {
   		    close_menu();
 		});

 		//Check if the user clicks outside of it
		window.onclick = function(event) {
		  if (!event.target.matches('#navbar') && !$(event.target).closest('#navbar').length) {
			close_menu();
		  }
		}	
		
	});

	
})(jQuery);