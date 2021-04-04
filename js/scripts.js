(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


	// code for slider-oneb

			$('.oneb-slider').owlCarousel({
				loop: true,
				margin: 20,
				center: false,
				nav: false,
				dots: true,
				autoplay: true,
				autoplayTimeout: 5000,
				responsiveClass: true,
				responsiveRefreshRate: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					960: {
						items: 1
					},
					1200: {
						items: 1
					},
					1920: {
						items: 1
					}
				}
			});


			  $('.towb-slider').owlCarousel({
			  	loop: true,
			  	margin: 20,
			  	center: false,
			  	nav: false,
			  	dots: true,
			  	autoplay: false,
			  	autoplayTimeout: 5000,
			  	responsiveClass: true,
			  	responsiveRefreshRate: true,
			  	responsive: {
			  		0: {
			  			items: 1
			  		},
			  		768: {
			  			items: 1
			  		},
			  		960: {
			  			items: 1
			  		},
			  		1200: {
			  			items: 1
			  		},
			  		1920: {
			  			items: 1
			  		}
			  	}
			  });

			  $('.threeb-slider').owlCarousel({
				loop: true,
				margin: 20,
				center: false,
				nav: false,
				dots: true,
				autoplay: false,
				autoplayTimeout: 5000,
				responsiveClass: true,
				responsiveRefreshRate: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					960: {
						items: 1
					},
					1200: {
						items: 1
					},
					1920: {
						items: 1
					}
				}
			});


			//   code for mixitup

			$(".controls button").click(function (){
				$(".controls button").removeClass("activetab");
			})


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);