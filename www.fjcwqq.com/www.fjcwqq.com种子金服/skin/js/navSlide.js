$(function () {
    if ($(window).width() < 980) {
        var l1 = $('#navSlide .nli_1');
        l1.each(function () {
            if ($(this).find('li').length > 0) {
                $(this).find('.l1_a').attr('href', 'javascript:void(0)');
            }
        })
    }
    $('#navSlide .nli_1').click(function () {
        var sub = $(this).children('.sub');
        if ($(this).children('span').hasClass('on')) {
            $(this).children('span').removeClass('on');
            sub.slideUp();
        } else {
            $(this).children('span').addClass('on');
            sub.slideDown();
        }
    });
});