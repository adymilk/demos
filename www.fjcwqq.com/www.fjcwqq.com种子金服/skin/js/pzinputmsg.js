$(function () {
    //设置 文本框 的属性  pzrel="search"
    var pzinput = $('input[pzrel="search"]');
    pzinput.addClass('onblur');

    pzinput.focus(function () {
        if (this.value == this.defaultValue)
        { this.value = ''; }
        $(this).removeClass('onblur').addClass('onfocus');
    });
    pzinput.blur(function () {
        if (this.value == '') {
            this.value = this.defaultValue;
            $(this).removeClass('onfocus').addClass('onblur');
        }
    });
});