'use strict';

(function($){
	$(document).ready(function() {

		// Slick Slaider
		$('.slider').slick({
			dots: false,
			arrows: true,
			prevArrow: '<div class="slider__prev"><</div>',
			nextArrow: '<div class="slider__next">></div>',
			appendArrows: $('.slider__arrows'),
			slidesToShow: 3,
			slidesToScroll: 2,
			speed: 1500,
			swipe: false,
			responsive: [
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						dots: false,
						speed: 500,
						swipe: true
					}
				}
			]
			
		  });

	});
})(jQuery);
