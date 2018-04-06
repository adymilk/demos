


var QuoteInfo = {
    Data:{
        Symbol: "",
        CurentSymbol:"",
        SymbolArray: [{ "Code": "USDJPYx", "Name": "美元兑日元", "Type": 1, "Digits": 3 },
            { "Code": "USDCHFx", "Name": "美元兑瑞郎", "Type": 1, "Digits": 5 },
            { "Code": "USDCADx", "Name": "美元兑加元", "Type": 1, "Digits": 5 },
            { "Code": "SILVERx", "Name": "伦敦银", "Type": 0, "Digits": 3 },
            { "Code": "NZDUSDx", "Name": "纽元兑美元", "Type": 1, "Digits": 5 },
            { "Code": "GOLDx", "Name": "伦敦金", "Type": 0, "Digits": 2 },
            { "Code": "GBPUSDx", "Name": "英镑兑美元", "Type": 1, "Digits": 5 },
            { "Code": "EURUSDx", "Name": "欧元兑美元", "Type": 1, "Digits": 5 },
            { "Code": "AUDUSDx", "Name": "澳元兑美元", "Type": 1, "Digits": 5 },
            { "Code": "CN300", "Name": "中华300", "Type": 2, "Digits": 2 },
            { "Code": "ChinaA50", "Name": "中华A50", "Type": 2, "Digits": 1 },
            { "Code": "WTIx", "Name": "美国原油", "Type": 3, "Digits": 3 }
        ],
        sData: [],
        Digits: 4,
        Size:40,
        QuoteHistory: null,
        websocket:null
    }
,
    GetQuoteNow: function () {
      
        this.Data.websocket.onopen = function (evt) { onOpen(evt) };
        this.Data.websocket.onclose = function (evt) { onClose(evt) };
        this.Data.websocket.onmessage = function (evt) { onMessage(evt) };
        this.Data.websocket.onerror = function (evt) { onError(evt) };
        function onOpen(evt) {
            console.log("Connected to WebSocket server.");
        }
        function onClose(evt) {
            console.log("Disconnected");
        }
        function onMessage(evt) {
            //1502879820|XAUUSD, 1270.78,1270.78,1270.73,1270.75,18
            //console.log('Retrieved data from server: ' + evt.data);
            //转换
            var c = evt.data.split('|');
            var data = c[1].split(',')
            var r = {
                time: new Date(parseInt(c[0]) * 1000),
                name: data[0],
                open: data[1],
                high: data[2],
                low: data[3],
                close: data[4],
            }

            var HtmlStrCurrent = "";

            if (r.name == QuoteInfo.Data.Symbol) {
                $.each(QuoteInfo.Data.SymbolArray, function (j, itemSymbol) {
                    if (itemSymbol.Code == r.name) {
                        HtmlStrCurrent = "现价<span class='jo_quotenum jo_quotenum_1'>" + r.close + "<em></em></span>";
                        HtmlStrCurrent += "<span class='jo_quotemar'>开盘价<span>" + r.open + "</span></span>";
                        HtmlStrCurrent += "<span class='jo_quotemar'>最高价<span>" + r.high + "</span></span>";
                        QuoteInfo.Data.Digits = itemSymbol.Digits;
                    }
                })
            }
            $(".jo_quote_txt").html(HtmlStrCurrent);    ///当前产品报价

        }
        function onError(evt) {
            console.log('Error occured: ' + evt.data);
        }
    },
    GetQuoteHistory: function () {
       
        var Url = "http://13.75.47.68:8080/api/History/top/" + this.Data.Symbol + "/m15/" + this.Data.Size;
        $.ajax({
            url: Url,
            dataType: "json",
            method: "get",
            data: {  },
            success: function (data) {

                QuoteInfo.Data.QuoteHistory = data;
                $('#container').highcharts('StockChart', {
                    chart: {
                        marginLeft: '0',
                        marginRight: '50',
                        pinchType: "",
                        events: {
                            load: function () {
                                var series = this.series;
                                var volume = [];
                                for (var i = 0; i < QuoteInfo.Data.QuoteHistory.length; i++) {
                                    volume.push([
                                       Date.parse(new Date(QuoteInfo.Data.QuoteHistory[i].arrivedTime))+8 * 60 * 60 * 1000, // the date
                                         QuoteInfo.Data.QuoteHistory[i].open, // the Open
                                         QuoteInfo.Data.QuoteHistory[i].high, // the High
                                         QuoteInfo.Data.QuoteHistory[i].low, // the Low
                                         QuoteInfo.Data.QuoteHistory[i].close // the Close
                                    ]);
                                }
								
								var Items= volume.sort(
									function(a, b)
									{
										if(a[0] < b[0]) return -1;
										if(a[0] > b[0]) return 1;
										return 0;
									}
								);
								
                                series[0].setData(Items, true, true, false);
                            }
                        }
                    },
                    plotOptions: {
                        line: {
                            dataGrouping: {
                                enabled: false
                            },
                            cropThreshold: 300
                        }
                    },
                    title: {
                        text: ''
                    },
                    legend: {
                        enabled: false,
                    },
                    exporting: {
                        enabled: false,
                    },
                    credits: {
                        enabled: false
                    },
                    scrollbar: {
                        enabled: false
                    },
                    tooltip: {
                        xDateFormat: '%Y-%m-%d %H：%M',
                        dateTimeLabelFormats: {
                            hour: "%m-%e %H:%M",
                            day: "%m-%e",
                            month: "%Y-%m",
                            year: "%Y",
                        },
                        valuePrefix: '$',
                        valueDecimals: QuoteInfo.Data.Digits
                    },
                    xAxis: [{
                        gridLineColor: '#515151',
                        lineColor: '#f2f2f2',
                        crosshair: {
                            color: '#515151'
                        },
                        type: 'datetime',
                        title: {
                            text: "",
                        },
                        showEmpty: false,

                    }],
                    yAxis: [
                         {
                             lineColor: '#f2f2f2',
                             lineWidth: 1,
                             offset: 0,
                             allowDecimals: true,
                             opposite: true,
                             endOnTick: false,
                             title: {
                                 text: ''
                             },
                             labels: {
                                 x: 50,
                                 y: 0,
                                 formatter: function () {
                                     var digits = QuoteInfo.Data.Digits;
                                     var valueStr = this.value.toString();
                                     var valueStrLen = valueStr.length;
                                     var valueStrDotPostion = valueStr.indexOf('.');
                                     var zeroStr = '';
                                     if (valueStrDotPostion < 0) {
                                         for (var j = 1; j <= digits; j++) {
                                             zeroStr = zeroStr + '0';
                                         }
                                         return this.value + '.' + zeroStr;
                                     }
                                     else if (valueStrLen - valueStrDotPostion - 1 < digits) {
                                         var len = digits - (valueStrLen - valueStrDotPostion - 1);
                                         for (var j = 1; j <= len; j++) {
                                             zeroStr = zeroStr + '0';
                                         }
                                         return this.value + zeroStr;
                                     }
                                     else {
                                         return this.value;
                                     }
                                 }
                             }
                         }],
                    rangeSelector: {
                        enabled: false
                    },
                    scrollbar: { enabled: false },
                    navigator: { enabled: false }
                    ,
                    series: [{
                        name: "当前报价",
                        type: 'candlestick',
                        data: [],
                        color: '#fd5744',//'#53EA8E', //下降块颜色
                        lineColor: '#fd5744',// '#53EA8E', //下降块线条颜色
                        upColor: '#25b669', //上升块颜色
                        upLineColor: '#25b669', //上升块线条颜色*/

                    }]
                });

            }
        });
    },
    InitQuote: function (symbol) {
        if (symbol != this.Data.symbol) {
            if (this.Data.websocket != null)
            {
                this.Data.websocket.close();
            }
			           
            var wsServer = 'ws://13.75.47.68:8080/ws/quote/' + symbol + '/m1';
            this.Data.websocket = new WebSocket(wsServer);
            this.Data.Symbol = symbol;

            this.GetQuoteNow();
			 this.GetQuoteHistory();
        }
    }
}


