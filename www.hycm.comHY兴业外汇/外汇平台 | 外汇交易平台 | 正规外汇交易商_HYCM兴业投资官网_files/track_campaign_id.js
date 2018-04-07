(function ($, Cookies) {
	var api_uri_prefix = '/cn/api';
	
	var getCookieExpiryDate = function () {
		var now = new Date();
		var exp = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 360); // 6 hours
		
		return exp;
	};
	
	// var campaign_pages = ['/cn', '/cn/hylp/10-bonus', '/cn/hylp/cn300', '/cn/hylp/cn-future', '/cn/hylp/cn-gold', '/cn/hylp/forex-getting-started', '/cn/hylp/partnerships-ib'];
	var campaign_pages = ['/cn/hylp/', '/cn/mobile/hylp/'];
	
	var qs_parts = location.search.substring(1).split('&');
	var campaign_id_param = $.grep(qs_parts, function (a_param) {
		return a_param.indexOf('campaignid=') === 0;
	});
	var campaign_id = campaign_id_param.length ? campaign_id_param[0].split('=')[1] : '';
	
	var curr_path = window.location.pathname;
	var home_page_paths = ['/cn', '/cn/'];
	var is_valid_landing_page = !!(campaign_id && $.inArray(curr_path, home_page_paths) != -1);
	
	if (!is_valid_landing_page)
	{
		var is_valid_landing_page = false;
		$.each(campaign_pages, function (idx, a_path) {
			if (curr_path.indexOf(a_path) === 0)
			{
				is_valid_landing_page = true;
				return false;
			}
		});
	}
	
	if (is_valid_landing_page)
	{
		// record click count
		$.ajax({
			type: 'POST',
			url: api_uri_prefix + '/campaign/addClickCount',
			withCredentials: true,
			data: { campaign_id: campaign_id },
			success: function () {}
		});
		
		// -- save campaign_id to cookies
		// ------------------------------------------------------------------------
		Cookies.remove("CAMPAINIDINT", { path: '/' });
		var exp = getCookieExpiryDate();

		Cookies.set('CAMPAINIDINT', campaign_id, {
			expires: exp,
			path: "/"
		});
		// ------------------------------------------------------------------------
	}
	
})(jQuery, Cookies);
