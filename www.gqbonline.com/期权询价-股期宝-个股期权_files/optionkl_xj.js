                var Gti = {};
                Gti.Common = {};
                Gti.Common.getTop = function (target, reference) {
                    reference = reference || window;
                    var top = target.offsetTop;
                    target = target.offsetParent;
                    while (target != null && target != reference) {
                        top += (target.offsetTop - target.scrollTop);
                        target = target.offsetParent;
                    }
                    return top;
                }

                Gti.Common.getLeft = function (target, reference) {
                    reference = reference || window;
                    var left = target.offsetLeft;
                    target = target.offsetParent;
                    while (target != null && target != reference) {
                        left += (target.offsetLeft - target.scrollLeft);
                        target = target.offsetParent;
                    }
                    return left;
                }

                Gti.Common.getRight = function (target) {
                    return Gti.Common.getLeft(target) + target.offsetWidth;
                }

                Gti.Common.getBottom = function (target) {
                    return Gti.Common.getTop(target) + target.offsetHeight;
                }

                Gti.Common.getHeight = function (C, A) {
                    var E = C.offsetHeight || 0;
                    if (A !== true) return E;
                    var D = Gti.Common.getBorderWidths(C),
                        B = Gti.Common.getPaddings(C);
                    return E - D[0] - D[2] - B[0] - B[2];
                }

                Gti.Common.getWidth = function (D, B) {
                    var A = D.offsetWidth || 0;
                    if (B !== true) return A;
                    var E = Gti.Common.getBorderWidths(D),
                        C = Gti.Common.getPaddings(D);
                    return A - E[1] - E[3] - C[1] - C[3];
                }

                Gti.Common.getBorderWidths = function (A) {
                    return [Gti.Common.parseInt(A.style.borderTopWidth),
                        Gti.Common.parseInt(A.style.borderRightWidth),
                        Gti.Common.parseInt(A.style.borderBottomWidth),
                        Gti.Common.parseInt(A.style.borderLeftWidth)
                    ];
                }

                Gti.Common.getPaddings = function (A) {
                    return [Gti.Common.parseInt(A.style.paddingTop),
                        Gti.Common.parseInt(A.style.paddingRight),
                        Gti.Common.parseInt(A.style.paddingBottom),
                        Gti.Common.parseInt(A.style.paddingLeft)
                    ];
                }

                Gti.Common.parseInt = function (A, C) {
                    var B = parseInt(A);
                    return isNaN(parseInt(A)) ? C || 0 : B;
                }

                Gti.Common.browser = {};
                Gti.Common.browser.IE6 = 0;
                Gti.Common.browser.IE7 = 1;
                Gti.Common.browser.Mozilla = 2;

                Gti.Common.browser.getBrowser = function () {
                    if (window.XMLHttpRequest) {
                        // Mozilla, Safari,...IE7
                        if (!window.ActiveXObject) {
                            // Mozilla, Safari,...
                            return Gti.Common.browser.Mozilla;
                        } else {
                            // IE7
                            return Gti.Common.browser.IE7;
                        }
                    } else {
                        return Gti.Common.browser.IE6;
                    }
                }

                $(function () {

                    //智能提示股票信息
                    AutoComplete.setup({
                        "inputElement": "keyword",
                        "dataSource": s,
                        "displayZoneWidth": 412,
                        "maxMatchedItemNumberAllowed": 4,
                        "trClickCallback": function (obj) {
                            //  alert(123);
                            // alert(obj.c);

                            $("#keyword").attr("code", obj.c);

                        }
                    });

    $("#btn").click(function () {

        //取得股票前收盘价格

        var code = $("#keyword").attr("code")
        // alert(code);

        var url = "https://qd.10jqka.com.cn/quote.php?cate=real&type=stock&return=json&callback=showStockData&code=" + code + "&callback=?";
        $.getJSON(url, function (result) {

            var yet = result['data']['' + code + '']['6'];
            //alert(yet);
            $("#price").val(yet);


            //到期日
            var date1 = new Date();
            var date2 = new Date(date1);
            date2.setDate(date1.getDate() + $('.select-list .selected').data('value') * 7 - 1);
            var times = date2.getFullYear() + "/" + (date2.getMonth() + 1) + "/" + date2.getDate();
            $('#date').val(times);

            var mybj = $("#mybj").val();

            if (isNaN(mybj) || mybj < 100 || mybj > 100000000) {
                alert("请输入100到一亿之间的数值！");
                return false;
            }

            var days = $('.select-list li.selected').data('value') * 5;
            //jsonp跨域

            //var url = "http://118.31.165.32/api/Handler.ashx?code=" + $("#keyword").attr("code") + "&days=" + days + "&callback=?";
            var url = "/school/apiprice?mid=M201712040026&code=" + $("#keyword").attr("code") + "&days=" + days;


            $.get(url, function (result) {

                var num1 = parseFloat(result.sPrice);
                var num2 = parseFloat(result.sCall);
                var str = ((num2 / num1) * 100).toFixed(2);

                $('#result1').html(str);
                $("#jg").html((mybj * (num2 / num1)).toFixed(0));

                //table盈利金计算
                var gj = 0; //目标股价
                var ss = mybj / yet; //购买手数=名义本金/股价

                var mybj_0 = parseInt(mybj) + parseInt((mybj * (num2 / num1)).toFixed(0)); //盈利0%时的名义本金
                gj = (mybj_0 / ss).toFixed(2)
                $("#gj_0").html(gj);
                $("#zf_0").html(
                    (
                        ((gj - yet) / yet) * 100
                    ).toFixed(1) + "%"
                );
                $("#ylje_20").html(((mybj * (num2 / num1)) * 1.2).toFixed(0) + "元");

                var mybj_20 = parseInt(mybj) + parseInt(((mybj * (num2 / num1)) * 1.2).toFixed(0)); //盈利20%时的名义本金
                gj = (mybj_20 / ss).toFixed(2)
                $("#gj_20").html(gj);
                $("#zf_20").html(
                    (
                        ((gj - yet) / yet) * 100
                    ).toFixed(1) + "%"
                );
                $("#ylje_0").html(((mybj * (num2 / num1)) * 1).toFixed(0) + "元");

                var mybj_50 = parseInt(mybj) + parseInt(((mybj * (num2 / num1)) * 1.5).toFixed(0)); //盈利50%时的名义本金
                gj = (mybj_50 / ss).toFixed(2)
                $("#gj_50").html(gj);
                $("#zf_50").html(
                    (
                        ((gj - yet) / yet) * 100
                    ).toFixed(1) + "%"
                );
                $("#ylje_50").html(((mybj * (num2 / num1)) * 1.5).toFixed(0) + "元");

                var mybj_100 = parseInt(mybj) + parseInt(((mybj * (num2 / num1)) * 2).toFixed(0)); //盈利100%时的名义本金
                gj = (mybj_100 / ss).toFixed(2)
                $("#gj_100").html(gj);
                $("#zf_100").html(
                    (
                        ((gj - yet) / yet) * 100
                    ).toFixed(1) + "%"
                );
                $("#ylje_100").html(((mybj * (num2 / num1)) * 2).toFixed(0) + "元");

                //

            });

        });
    });

                });