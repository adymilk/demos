/*
Jquery插件——获取外汇实时行情
使用方法
$("#tabQuotes").getQuotes();

url: 请求的数据地址
data: 货币对
type: 请求方式
dataType: 返回数据类型
cache: 是否使用缓存
singleRowClass: 奇数行tr的class
doubleRowClass: 偶数行tr的class
upImgClass:  涨跌幅为涨时显示包含图片的class
downImgClass: 涨跌幅为跌时显示包含图片的class
upWordClass: 涨跌幅为涨时显示不含图片的class
downWordClass: 涨跌幅为跌时显示不含图片的class
interval:获取数据的间隔时间
useLabel: 是否使用中文
dataLabel: 各种货币对对应中文
*/

(function ($) {
    $.fn.getQuotes = function (options) {
        var defaults = {
            url: "http://fxshare.66jr.com/Forex/GetQoutes?callback=?",
            data: { symblos: "XAUUSD,XAGUSD,EURUSD,AUDUSD,GBPUSD,USDJPY,USDCAD,USDCHF" },
            type: "GET",
            dataType: "jsonp",
            cache: false,
            singleRowClass: "lanse",
            doubleRowClass: "zhonglan",
            upImgClass: "i_up",
            downImgClass: "i_down",
            upWordClass: "",
            downWordClass: "",
            interval: 3000,
            useLabel: false,
            dataLabel: {
                "GOLD": "黄金", "AUDUSD": "澳元/美元", "EURUSD": "欧元/美元", "GBPUSD": "英磅/美元", "USDCAD": "美元/加元", "USDCHF": "美元/瑞朗", "USDJPY": "美元/日币", "AUDCAD": "澳元/加元", "AUDJPY": "澳元/日币", "SILVER": "白银"
            }
        }
        var options = $.extend(defaults, options);
        var thisTable = $(this);
        var arrRowClass = new Array(options.singleRowClass, options.doubleRowClass);
        var upDownImgClass = new Array(options.downImgClass, options.upImgClass);
        var upDownWordClass = new Array(options.downWordClass, options.upWordClass);

        var isFirstGet = true;
        var arrQuote;
        var getQuote = function () {
            $.ajax({
                url: options.url,
                data: options.data,
                type: options.type,
                dataType: options.dataType,
                cache: options.cache,
                success: function (result) {
                    if (result.State == 1) {
                        var retA = SortArray(result.Data);
                        for (var i = 0; i < retA.length; i++) {
                            if (isFirstGet) {
                                var strHtml = ' <table cellpadding="0" cellspacing="0" border="0" class="exc_table"><tr class="' + arrRowClass[i % 2] + '"><td>Trend</td><td>Symbol</td><td>Bid</td><td>Ask</td><td>Spread</td></tr> <tr class="huise"> <td><i class="' + upDownImgClass[retA[i].Trend] + '"></i></td><td>' + (!options.useLabel || options.dataLabel[retA[i].Symbol] == undefined ? retA[i].Symbol : options.dataLabel[retA[i].Symbol]) + '</td><td>' + retA[i].Bid + '</td><td>' + retA[i].Ask + '</td><td>' + retA[i].Spread + '</td></tr> </table>';
                                $(strHtml).appendTo(thisTable);
                            } else {
                                if (arrQuote != null) {
                                    if (arrQuote[i].Trend != retA[i].Trend || arrQuote[i].Symbol != retA[i].Symbol) {
                                        thisTable.find(".huise").eq(i).find("td").eq(0).html('<i class="' + upDownImgClass[retA[i].Trend] + '"></i>');
                                    }
                                    if (arrQuote[i].Trend != retA[i].Trend || arrQuote[i].Symbol != retA[i].Symbol) {
                                        thisTable.find(".huise").eq(i).find("td").eq(1).html('' + !options.useLabel || options.dataLabel[retA[i].Symbol] == undefined ? retA[i].Symbol : options.dataLabel[retA[i].Symbol]);
                                    }
                                    if (arrQuote[i].Trend != retA[i].Trend || arrQuote[i].Bid != retA[i].Bid) {
                                        thisTable.find(".huise").eq(i).find("td").eq(2).html('' + retA[i].Bid);
                                    }
                                    if (arrQuote[i].Trend != retA[i].Trend || arrQuote[i].Ask != retA[i].Ask) {
                                        thisTable.find(".huise").eq(i).find("td").eq(3).html('' + retA[i].Ask);
                                    }
                                    if (arrQuote[i].Spread != retA[i].Spread) {
                                        thisTable.find(".huise").eq(i).find("td").eq(4).html(retA[i].Spread);
                                    }
                                }
                            }
                        }
                        arrQuote = retA;
                        isFirstGet = false;
                        setTimeout(getQuote, options.interval);
                    } else {
                        alert(result.Msg);
                    }
                },
                error: function (result) {
                    alert("请求实时报价数据失败");
                }
            });
        }
        getQuote();
    };
    //"XAUUSD,XAGUSD,EURUSD,AUDUSD,GBPUSD,USDJPY,USDCAD,USDCHF"
    function SortArray(data) {
        var retA = new Array();
        var sort = [{ Symbol: "XAUUSD", Len: 2 },
            { Symbol: "XAGUSD", Len: 3 },
        { Symbol: "EURUSD", Len: 5 },
        { Symbol: "AUDUSD", Len: 5 },
        { Symbol: "GBPUSD", Len: 5 },
        { Symbol: "USDJPY", Len: 3 },
        { Symbol: "USDCAD", Len: 5 },
        { Symbol: "USDCHF", Len: 5 }, ];
        $(sort).each(function (i) {
            $.each(data, function (j) {
                if (this.Symbol == sort[i].Symbol) {
                    this.Ask = changeDecimal_f(this.Ask, sort[i].Len)
                    this.Bid = changeDecimal_f(this.Bid, sort[i].Len)
                    retA.push(this);
                    return false;
                }
            });
        });
        return retA;
    };
    function changeDecimal_f(x, l) {
        var f_x = parseFloat(x);
        if (isNaN(f_x)) {
            return false;
        }
        var f_x = Math.round(x * 100000) / 100000;
        var s_x = f_x.toString();
        var pos_decimal = s_x.indexOf('.');
        if (pos_decimal < 0) {
            pos_decimal = s_x.length;
            s_x += '.';
        }
        while (s_x.length <= pos_decimal + l) {
            s_x += '0';
        }
        return s_x;
    }
})(jQuery);
