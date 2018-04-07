/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-26 11:15:21
 * @version $Id$
 */
jQuery(".slideBox").slide({
    mainCell: ".bd ul",
    effect: "leftLoop",
    autoPlay: true,
    interTime: 3500,
    pnLoop: false,
});
// 首页banner图轮播结束

$(function () {
    //3d
    $('#slide3d').slideCarsousel({
        slideType: '3d',
        indicatorEvent: 'mouseover',
        isAutoChange: false
    });
    //2d
    var sliderDescArr = [], i = 0, len = 10;
    for (; i < len; i++) {
        sliderDescArr.push(new Array(10).join('' + i));
    }
    $('#sliderDesc').text(sliderDescArr[0]);
    $('#slide2d').slideCarsousel({
        callbackFunc: function (index) {
            $('#sliderDesc1').text(sliderDescArr[index]);
        }
    });
});
// 首页新闻资讯轮播图结束


$(".logo1 img").mouseover(function () {
    $(this).attr("src", "/static/images/logo1active.png")
})
$(".logo2 img").mouseover(function () {
    $(this).attr("src", "/static/images/logo2active.png")
})
$(".logo3 img").mouseover(function () {
    $(this).attr("src", "/static/images/logo3active.png")
})
$(".logo4 img").mouseover(function () {
    $(this).attr("src", "/static/images/logo4active.png")
})
$(".logo5 img").mouseover(function () {
    $(this).attr("src", "/static/images/logo5active.png")
})

$(".logo1 img").mouseleave(function () {
    $(this).attr("src", "/static/images/logo1.png")
})
$(".logo2 img").mouseleave(function () {
    $(this).attr("src", "/static/images/logo2.png")
})
$(".logo3 img").mouseleave(function () {
    $(this).attr("src", "/static/images/logo3.png")
})
$(".logo4 img").mouseleave(function () {
    $(this).attr("src", "/static/images/logo4.png")
})
$(".logo5 img").mouseleave(function () {
    $(this).attr("src", "/static/images/logo5.png")
})