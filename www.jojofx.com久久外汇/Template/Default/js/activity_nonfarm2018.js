$(function(){
	//头部固定导航	
	$(window).scroll(function () {
			if ($(window).scrollTop() >= 300) {
				$(".header").attr('id', "joheader_fixed");
			}
			else {
				$(".header").attr('id', "");
			}
		});
	 // 倒计时
    var count_downElment = $('#count_down');
    var dayElment = count_downElment.find('#day');
    var hourElment = count_downElment.find('#hour');
    var minuteElment = count_downElment.find('#minute');
    var secondElment = count_downElment.find('#second');
    var overaArr = ['2017-11-08 21:30:00', '2018-00-05 21:30:00', '2018-01-02 21:30:00', '2018-02-02 21:30:00', '2018-03-06 20:30:00', '2018-04-04 20:30:00', '2018-05-01 20:30:00', '2018-06-06 20:30:00', '2018-07-03 20:30:00', '2018-08-07 20:30:00', '2018-09-05 20:30:00', '2018-10-02 20:30:00','2018-11-07 21:30:00', '2018年非农结束',]
    var overa;
    var localNow = new Date();
    for(var i = 0; i < overaArr.length; i++){
        if(overaArr[i].length == 4){
            var nonFarmArr = overaArr[i].split('');
            dayElment.text(nonFarmArr[0]);
            hourElment.text(nonFarmArr[1]);
            minuteElment.text(nonFarmArr[2]);
            secondElment.text(nonFarmArr[3]);
            return
        }
        var arrTime = getDate(overaArr[i]).getTime();
        if(localNow.getTime() > arrTime){
            continue;
        }else{
            overa = getDate(overaArr[i]);
            break;
        }
    }    
    function clock() {
        var local = new Date();
        var inDiff = overa.getTime() - local.getTime();
        //已经结束
        /*
        if (inDiff <= 0) {
            alert('结束！');
            return false;
        }
        */
        var day = Math.floor(inDiff / (1000 * 60 * 60 * 24));
        var hour = Math.floor(inDiff / (1000 * 60 * 60) - (day * 24));
        var minute = Math.floor(inDiff / (1000 * 60)) - (day * 24 * 60) - (hour * 60);
        var second = Math.floor(inDiff / 1000) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        if (day <= 9) {
            day = '0' + day;
        }
        if (hour <= 9) {
            hour = '0' + hour;
        }
        if (minute <= 9) {
            minute = '0' + minute;
        }
        if (second <= 9) {
            second = '0' + second;
        }

        dayElment.text(day);
        hourElment.text(hour);
        minuteElment.text(minute);
        secondElment.text(second);

        setTimeout(function () { clock() }, 1000);
    }
    clock();


    //时间转换方法 字符串转数字
    function getDate(strDate) {
        var st = strDate;
        var a = st.split(" ");
        var b = a[0].split("-");
        var c = a[1].split(":");
        var date = new Date(b[0], b[1], b[2], c[0], c[1], c[2])
        return date;
    }
	});
	
