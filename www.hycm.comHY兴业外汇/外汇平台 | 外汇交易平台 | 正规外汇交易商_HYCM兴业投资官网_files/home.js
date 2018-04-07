/*! Bootstrap Carousel Swipe jQuery plugin v1.1 | https://github.com/maaaaark/bcSwipe | MIT License */
!function(t){t.fn.bcSwipe=function(e){var n={threshold:50};return e&&t.extend(n,e),this.each(function(){function e(t){1==t.touches.length&&(u=t.touches[0].pageX,c=!0,this.addEventListener("touchmove",o,!1))}function o(e){if(c){var o=e.touches[0].pageX,i=u-o;Math.abs(i)>=n.threshold&&(h(),t(this).carousel(i>0?"next":"prev"))}}function h(){this.removeEventListener("touchmove",o),u=null,c=!1}var u,c=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",e,!1)}),this}}(jQuery);

(function ($) {
	app1.controller('tickerCtrl', function($scope, $timeout, $http, $interval) {
		
		var ordered_product_names = {
			normal: ['EURUSD', 'GBPUSD', 'USDJPY', 'USDCAD', 'AUDUSD', 'NZDUSD', 'USDCHF', 'SPT_DXY', 'SPT_GLD', 'SPT_SVR', 'USOIL_SPT'],
			with_month_year: ['US500', 'US100', 'US30', 'CN300', 'CNA50', 'HK50']
		};
		
		var products_size = ordered_product_names.normal.length + ordered_product_names.with_month_year.length;
		$scope.boxes = [];
		for (var i=0; i < products_size; i++)
		{
			$scope.boxes.push({});
		}

		var d = new Date();
		var month_num = d.getMonth();
		var curr_year = d.getFullYear().toString().substr(2);
		var months = [
			{value: '0',label: 'jan'},
			{value: '1',label: 'feb'},
			{value: '2',label: 'mar'},
			{value: '3',label: 'apr'},
			{value: '4',label: 'may'},
			{value: '5',label: 'jun'},
			{value: '6',label: 'jul'},
			{value: '7',label: 'aug'},
			{value: '8',label: 'sep'},
			{value: '9',label: 'oct'},
			{value: '10',label: 'nov'},
			{value: '11',label: 'dec'}
		];
		var current_month="";

		for (var i = 0; i <= 11; i++)
		{
			if (months[i].value == month_num)
			{
				current_month = months[i].label;
				break;
			}
		}

		var fetch_data_timeout = null;
		var is_carousel_inited = false;
		var initCarousel = function () {
			if (is_carousel_inited)
				return;
			
			$('.carousel').bcSwipe({ threshold: 50 });
			var speed = 5;
			var items;
			var scroller = $('#scroller');
			
			scroll();
			function scroll(){
				items = scroller.children();
				var scrollWidth = items.eq(0).outerWidth();
				scroller.animate({'left' : 0 - scrollWidth}, scrollWidth * 100 / speed, 'linear', changeFirst);
			}
			function changeFirst(){
				if (!fetch_data_timeout)
				{
					fetch_data_timeout = $timeout(function () {
						dataLoop();
						fetch_data_timeout = null;
					}, 60000);
				}
				
				scroller.append(items.eq(0).remove()).css('left', 0);
				scroll();
			}
			
			is_carousel_inited = true;
		};
		updateCarouselWidth = function () {
			var scroller = $('#scroller');
			var width = 0;
			scroller.children().each(function(){
				width += $(this).outerWidth(true);
			});
			scroller.css('width', width);
		};
		dataLoop();

		function dataLoop()
		{
			$http({
				method: 'Post',
				url: vars.api_uri_prefix + '/quotes/getCurrentQuote'
			})
			.success(function (data, status) {
				var display_data = {};
				var quotes = data.response.Quotes;
				
				var order = 0;
				$.each(ordered_product_names, function (type, product_names) {
					$.each(product_names, function (idx, a_product_name) {
						var filtered_quotes = $.grep(quotes, function (a_quote) {
							var tmp_product_name = a_product_name;
							if (type == 'with_month_year')
							{
								tmp_product_name = tmp_product_name + current_month + curr_year;
							}
							return a_quote.Quote.product == tmp_product_name;
						});
						if (filtered_quotes.length)
							display_data[order++] = filtered_quotes[0].Quote;
					});
				});

				$.each($scope.boxes, function (i) {
					if (display_data[i])
					{
						$scope.boxes[i].product = display_data[i].product;
						$scope.boxes[i].bid = display_data[i].bid;
						$scope.boxes[i].ask = display_data[i].ask;
						$scope.boxes[i].direction = display_data[i].direction;
					}
				});
				
				$timeout(function () {
					updateCarouselWidth();
					initCarousel();
				});
				
			})
			.error(function (data, status) {
				
			});
		}

		});

})(jQuery);


