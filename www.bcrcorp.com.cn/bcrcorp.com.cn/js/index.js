var wc_country= new Array('ny','sh','au');
var wc_zone= new Array('NAmerica','','Australia');
var wc_offset= new Array(-5,8,10);
jQuery(document).ready(function(e) {
	setInterval('updateClock()', 1000);
	//updateClock();
	//setInterval('load_price_feed()', 10000);
	pc_status();

	jQuery('button[data-toggle="collapse"]').on('click',function() {
		collapse_open();
		var objectID=jQuery(this).data('controls');
		if(jQuery(objectID).hasClass('in')) {
            jQuery(objectID).collapse('hide');
		} else {
           	jQuery(objectID).collapse('show');
		}
    });
});

function collapse_open() {
	jQuery('button[data-toggle="collapse"]').each(function() {
		var objectID=jQuery(this).data('controls');
		if(jQuery(objectID).hasClass('in')) {
        	jQuery(objectID).collapse('hide');
		}
	});
}

function load_price_feed() {
	//alert('start');
	return;
	jQuery.ajax({
		type: "POST",
		//data: "cate=1",
		url: "./tool/load_price_feed",
		datatype: "json",
		error:function(x){},
		success:parse_price_feed
	});
}

function parse_price_feed(res) {
	//alert(res);
	var json=$.parseJSON(res);
	$.each(json.feed,function(){
		var symbol=this.symbol;
		var bid=this.bid;
		var temp_bid=jQuery('#'+symbol+'_bid').text();
		
		jQuery('#'+symbol+'_bid').text(bid);
		jQuery('#'+symbol+'_ask').text(this.ask);
		jQuery('#'+symbol+'_high').text(this.high);
		jQuery('#'+symbol+'_low').text(this.low);

		//alert(temp_bid);
		if(temp_bid !='----') {
			if(temp_bid !='0.00') {
				if(bid > temp_bid) {
					jQuery('#'+symbol+'_diff').html('<span class="label label-danger"><i class="fa fa-arrow-down"></i></span>');
				} else if(bid < temp_bid) {
					jQuery('#'+symbol+'_diff').html('<span class="label label-success"><i class="fa fa-arrow-up"></i></span>');
				}
			}
		}
		//alert(symbol);
	});
	
}

function updateClock() {	
 	for(var i=0;i<wc_country.length;i++) {
 		var s=worldClock(wc_offset[i], wc_zone[i]);
 		var temp=s.split(':');
 		
 		jQuery('div.wc_item_'+wc_country[i]+' .wc_time span.wc_digit').text(s);
 		if(temp[0]>12) {
 			jQuery('div.wc_item_'+wc_country[i]+' .wc_time span.wc_ap').text('P.M.');
 		} else {
			jQuery('div.wc_item_'+wc_country[i]+' .wc_time span.wc_ap').text('A.M.');
 		}
 	}
}

function pc_status() {
	var product=['pc_forex','pc_pm','pc_comm','pc_indices','pc_stock'];
	var dst_flag=dst_on_off();
	var dst = 0;
	var time = new Date();
	var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000);
	var gmtTime = new Date(gmtMS);
	var day_of_week = gmtTime.getDay();
	var day = gmtTime.getDate();
	var month = gmtTime.getMonth();
	var year = gmtTime.getYear();
	var hr = gmtTime.getHours();
	var min = gmtTime.getMinutes();
	var sec = gmtTime.getSeconds();

	if(dst_flag) { // daylight saving ON
		// Forex
		if((day_of_week==5 &&  hr >= 20 && min>=1) ||(day_of_week==6) || (day_of_week==0 &&  hr >= 23 && min>=1)) {
			jQuery('div.pc_forex .market-status').addClass('closed').find('p').text('Closed');
		} else {
			jQuery('div.pc_forex .market-status').addClass('open').find('p').text('Open');
		}

		// Precious Metal
		if((day_of_week==5 &&  hr >= 20 && min>=1) ||(day_of_week==6) || (day_of_week==0 &&  hr >= 23 && min>=1)) {
			jQuery('div.pc_pm .market-status').addClass('closed').find('p').text('Closed');
		} else if( hr >=21 && (hr<=22 && min<1)) {
			jQuery('div.pc_pm .market-status').addClass('closed').find('p').text('Closed');
		} else {
			jQuery('div.pc_pm .market-status').addClass('open').find('p').text('Open');
		}

		// USOIL
		if((day_of_week==5 &&  hr >= 20 && min>=1) ||(day_of_week==6) || (day_of_week==0 &&  hr >= 23 && min>=1)) {
			jQuery('div.pc_oil .market-status').addClass('closed').find('p').text('Closed');
		} else if( hr >=21 && (hr<=22 && min<1)) {
			jQuery('div.pc_oil .market-status').addClass('closed').find('p').text('Closed');
		} else {
			jQuery('div.pc_oil .market-status').addClass('open').find('p').text('Open');
		}

		// index pc_indices
		if((day_of_week==5 &&  hr >= 20 ) ||(day_of_week==6) || (day_of_week==0 &&  hr >= 23 && min>=1)) {
			jQuery('div.pc_indices .market-status').addClass('closed').find('p').text('Closed');
		} else if( hr >=20 && (hr<=22 && min<1)) {
			jQuery('div.pc_indices .market-status').addClass('closed').find('p').text('Closed');
		} else {
			jQuery('div.pc_indices .market-status').addClass('open').find('p').text('Open');
		}

		// stock
		if(day_of_week>=1 && day_of_week<=5) {
			if(( hr >= 13 && min>=31) && ( hr <= 19 )) {
				jQuery('div.pc_forex .market-status').addClass('open').find('p').text('Open');
			} else {
				jQuery('div.pc_forex .market-status').addClass('closed').find('p').text('Closed');
			}
		} else {
			jQuery('div.pc_forex .market-status').addClass('closed').find('p').text('Closed');
		}
	} else { ////daylight saving OFF

		// Forex
		if((day_of_week==5 &&  hr >= 20 && min>=1) ||(day_of_week==6) || (day_of_week==0 &&  hr >= 23 && min>=1)) {
			jQuery('div.pc_forex .market-status').addClass('closed').find('p').text('Closed');
		} else {
			jQuery('div.pc_forex .market-status').addClass('open').find('p').text('Open');
		}

		// Precious Metal
		if((day_of_week==5 &&  hr >= 20 && min>=1) ||(day_of_week==6) || (day_of_week==0 &&  hr >= 23 && min>=1)) {
			jQuery('div.pc_pm .market-status').addClass('closed').find('p').text('Closed');
		} else if( hr >=22 && (hr<=23 && min<1)) {
			jQuery('div.pc_pm .market-status').addClass('closed').find('p').text('Closed');
		} else {
			jQuery('div.pc_pm .market-status').addClass('open').find('p').text('Open');
		}

		// USOIL
		if((day_of_week==5 &&  hr >= 20 && min>=1) ||(day_of_week==6) || (day_of_week==0 &&  hr >= 23 && min>=1)) {
			jQuery('div.pc_oil .market-status').addClass('closed').find('p').text('Closed');
		} else if( hr >=22 && (hr<=23 && min<1)) {
			jQuery('div.pc_oil .market-status').addClass('closed').find('p').text('Closed');
		} else {
			jQuery('div.pc_oil .market-status').addClass('open').find('p').text('Open');
		}

		// index pc_indices
		if((day_of_week==5 &&  hr >= 21 ) ||(day_of_week==6) || (day_of_week==0 &&  hr >= 23 && min>=1)) {
			jQuery('div.pc_indices .market-status').addClass('closed').find('p').text('Closed');
		} else if( hr >=21 && (hr<=23 && min<1)) {
			jQuery('div.pc_indices .market-status').addClass('closed').find('p').text('Closed');
		} else {
			jQuery('div.pc_indices .market-status').addClass('open').find('p').text('Open');
		}

		// stock
		if(day_of_week>=1 && day_of_week<=5) {
			if(( hr >= 14 && min>=1) && ( hr <= 20 )) {
				jQuery('div.pc_stock .market-status').addClass('open').find('p').text('Open');
			} else {
				jQuery('div.pc_stock .market-status').addClass('closed').find('p').text('Closed');
			}
		} else {
			jQuery('div.pc_stock .market-status').addClass('closed').find('p').text('Closed');
		}
	}
}

function dst_on_off() {
	var dst = 0;
	var time = new Date();
	var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000);
	var gmtTime = new Date(gmtMS);
	var day = gmtTime.getDate();
	var month = gmtTime.getMonth();
	var year = gmtTime.getYear();
	if(year < 1000){
		year += 1900;
	}

	var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", 
					"September", "October", "November", "December");
	var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
	if (year%4 == 0){
		monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
	}
	if(year%100 == 0 && year%400 != 0){
		monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
	}

	var hr = gmtTime.getHours()
	var min = gmtTime.getMinutes()
	var sec = gmtTime.getSeconds()

	if (hr >= 24)
	{
		hr = hr-24
		day -= -1
	}
	if (hr < 0)
	{
		hr -= -24
		day -= 1
	}
	if (hr < 10)
	{
		hr = " " + hr
	}
	if (min < 10)
	{
		min = "0" + min
	}
	if (sec < 10)
	{
		sec = "0" + sec
	}
	if (day <= 0)
	{
		if (month == 0)
		{
			month = 11
			year -= 1
		}else{
			month = month -1
		}
		day = monthDays[month]
	}

	if(day > monthDays[month])
	{
		day = 1
		if(month == 11){
		month = 0
		year -= -1
		}
		else{
		month -= -1
		}
	}

	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(3)
	startDST.setHours(2)
	startDST.setDate(1)
	var dayDST = startDST.getDay()
	if (dayDST != 0){
		startDST.setDate(8-dayDST)
	}
	else
	{
		startDST.setDate(1)
	}
	endDST.setMonth(9);
	endDST.setHours(1);
	endDST.setDate(31);
	dayDST = endDST.getDay();
	endDST.setDate(31-dayDST);
	var currentTime = new Date();
	currentTime.setMonth(month);
	currentTime.setYear(year);
	currentTime.setDate(day);
	currentTime.setHours(hr);
	
	if(currentTime >= startDST && currentTime < endDST)
	{
		return true;
	}
	return false;
		
}

function worldClock(zone, region){
	var dst = 0;
	var time = new Date();
	var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000);
	var gmtTime = new Date(gmtMS);
	var day = gmtTime.getDate();
	var month = gmtTime.getMonth();
	var year = gmtTime.getYear();
	if(year < 1000){
		year += 1900;
	}
	var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", 
					"September", "October", "November", "December");
	var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
	if (year%4 == 0){
		monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
	}
	if(year%100 == 0 && year%400 != 0){
		monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
	}

	var hr = gmtTime.getHours() + zone;
	var min = gmtTime.getMinutes();
	var sec = gmtTime.getSeconds();

	if (hr >= 24)
	{
		hr = hr-24;
		day -= -1;
	}
	if (hr < 0)
	{
		hr -= -24;
		day -= 1;
	}
	if (hr < 10)
	{
		hr = " " + hr;
	}
	if (min < 10)
	{
		min = "0" + min;
	}
	if (sec < 10)
	{
		sec = "0" + sec;
	}
	if (day <= 0)
	{
		if (month == 0)
		{
			month = 11;
			year -= 1;
		}else{
			month = month -1;
		}
		day = monthDays[month];
	}

	if(day > monthDays[month])
	{
		day = 1;
		if(month == 11){
		month = 0;
		year -= -1;
		}
		else{
		month -= -1;
		}
	}
		if (region == "NAmerica"){
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(3);
			startDST.setHours(2);
			startDST.setDate(1);
			var dayDST = startDST.getDay();
			if (dayDST != 0){
				startDST.setDate(8-dayDST);
			}
			else
			{
				startDST.setDate(1);
			}
			endDST.setMonth(9);
			endDST.setHours(1);
			endDST.setDate(31);
			dayDST = endDST.getDay();
			endDST.setDate(31-dayDST);
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
				
			if(currentTime >= startDST && currentTime < endDST){
				dst = 1;
				
			}
		}

		if (region == "Europe"){
			var startDST = new Date()
			var endDST = new Date()
			startDST.setMonth(2)
			startDST.setHours(1)
			startDST.setDate(31)
			var dayDST = startDST.getDay()
			startDST.setDate(31-dayDST)
			endDST.setMonth(9)
			endDST.setHours(0)
			endDST.setDate(31)
			dayDST = endDST.getDay()
			endDST.setDate(31-dayDST)
			var currentTime = new Date()
			currentTime.setMonth(month)
			currentTime.setYear(year)
			currentTime.setDate(day)
			currentTime.setHours(hr)
			if(currentTime >= startDST && currentTime < endDST){
				dst = 1
				}
		}

		if (region == "SAmerica"){
			var startDST = new Date()
			var endDST = new Date()
			startDST.setMonth(9)
			startDST.setHours(0)
			startDST.setDate(1)
			var dayDST = startDST.getDay()
			if (dayDST != 0){
				startDST.setDate(22-dayDST)
				}
				else{
				startDST.setDate(15)
				}
			endDST.setMonth(1)
			endDST.setHours(11)
			endDST.setDate(1)
			dayDST = endDST.getDay()
			if (dayDST != 0){
				endDST.setDate(21-dayDST)
				}
				else{
				endDST.setDate(14)
				}
			var currentTime = new Date()
			currentTime.setMonth(month)
			currentTime.setYear(year)
			currentTime.setDate(day)
			currentTime.setHours(hr)
			if(currentTime >= startDST || currentTime < endDST){
				dst = 1
				}
		}
		if (region == "Cairo"){
			var startDST = new Date()
			var endDST = new Date()
			startDST.setMonth(3)
			startDST.setHours(0)
			startDST.setDate(30)
			var dayDST = startDST.getDay()
			if (dayDST < 5){
				startDST.setDate(28-dayDST)
				}
				else {
				startDST.setDate(35-dayDST)
				}
			endDST.setMonth(8)
			endDST.setHours(11)
			endDST.setDate(30)
			dayDST = endDST.getDay()
			if (dayDST < 4){
				endDST.setDate(27-dayDST)
				}
				else{
				endDST.setDate(34-dayDST)
				}
			var currentTime = new Date()
			currentTime.setMonth(month)
			currentTime.setYear(year)
			currentTime.setDate(day)
			currentTime.setHours(hr)
			if(currentTime >= startDST && currentTime < endDST){
				dst = 1
				}
		}
		if (region == "Israel"){
			var startDST = new Date()
			var endDST = new Date()
			startDST.setMonth(3)
			startDST.setHours(2)
			startDST.setDate(1)
			endDST.setMonth(8)
			endDST.setHours(2)
			endDST.setDate(25)
			dayDST = endDST.getDay()
			if (dayDST != 0){
			endDST.setDate(32-dayDST)
			}
			else{
			endDST.setDate(1)
			endDST.setMonth(9)
			}
			var currentTime = new Date()
			currentTime.setMonth(month)
			currentTime.setYear(year)
			currentTime.setDate(day)
			currentTime.setHours(hr)
			if(currentTime >= startDST && currentTime < endDST){
				dst = 1
				}
		}
		if (region == "Beirut"){
			var startDST = new Date()
			var endDST = new Date()
			startDST.setMonth(2)
			startDST.setHours(0)
			startDST.setDate(31)
			var dayDST = startDST.getDay()
			startDST.setDate(31-dayDST)
			endDST.setMonth(9)
			endDST.setHours(11)
			endDST.setDate(31)
			dayDST = endDST.getDay()
			endDST.setDate(30-dayDST)
			var currentTime = new Date()
			currentTime.setMonth(month)
			currentTime.setYear(year)
			currentTime.setDate(day)
			currentTime.setHours(hr)
			if(currentTime >= startDST && currentTime < endDST){
				dst = 1
				}
		}
		if (region == "Baghdad"){
			var startDST = new Date()
			var endDST = new Date()
			startDST.setMonth(3)
			startDST.setHours(3)
			startDST.setDate(1)
			endDST.setMonth(9)
			endDST.setHours(3)
			endDST.setDate(1)
			dayDST = endDST.getDay()
				var currentTime = new Date()
			currentTime.setMonth(month)
			currentTime.setYear(year)
			currentTime.setDate(day)
			currentTime.setHours(hr)
			if(currentTime >= startDST && currentTime < endDST){
				dst = 1
				}
		}
		if (region == "Australia"){
			var startDST = new Date()
			var endDST = new Date()
			startDST.setMonth(9)
			startDST.setHours(2)
			startDST.setDate(31)
			var dayDST = startDST.getDay()
			startDST.setDate(31-dayDST)
			endDST.setMonth(2)
			endDST.setHours(2)
			endDST.setDate(31)
			dayDST = endDST.getDay()
			endDST.setDate(31-dayDST)
			var currentTime = new Date()
			currentTime.setMonth(month)
			currentTime.setYear(year)
			currentTime.setDate(day)
			currentTime.setHours(hr)
			if(currentTime >= startDST || currentTime < endDST)
			{
				dst = 1
			}
		}

		
		if (dst == 1)
		{
			hr -= -1
			if (hr >= 24)
			{
				hr = hr-24
				day -= -1
			}
			if (hr < 10)
			{
				hr = " " + hr
			}
			if(day > monthDays[month])
			{
				day = 1
				if(month == 11)
				{
					month = 0
					year -= -1
				}else
				{
					month -= -1
				}
			}
			//return monthArray[month] + " " + day + ", " + year + "<br>" + hr + ":" + min + ":" + sec + " DST"
			return hr+':'+min;
		}
		else
		{
			//return monthArray[month] + " " + day + ", " + year + "<br>" + hr + ":" + min + ":" + sec
			return hr+':'+min;
		}
}

function back_to_top() {
	jQuery('html,body').animate({
        scrollTop: '0px',
    }, 1000);
}