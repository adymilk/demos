/**
 * Created by yangxun on 2017/9/24.
 */
//首页js逻辑处理
(function(window, undefind){
    $(document).ready(function(){
        //事件绑定
        bindEvent();

        // http.loadNotice();
        // http.loadMsg();

        http.loadBullList();
        http.loadOptionalList();
        startTimer();
    });

    function startTimer(){
        setInterval(function () {
            http.loadBatchStockInfo();
        }, 5000);
    }

    //事件绑定
    function bindEvent(){
        //点击查询
        $('#searchBtn').click(function(){
            tool.tabFocus('tab-search');
            http.searchTarget();
        });
        //切换tab
        $('#tabs').delegate('.tab', 'click', function(e){
            var type = $(e.target).attr('data-type');
            tool.tabFocus(type);
            tool.page.target.index = 1;
            if(type === 'tab-bull'){
                http.loadBullList();
            }
            else if(type == 'tab-search'){
                http.searchTarget();
            }
        });
        //点击表格的操作按钮
        $('.table-target').delegate('.icon-btn', 'click', function(e){
            var type = $(e.target).attr('data-type'), id = $(e.target).attr('data-id');

            if(type == 'add'){
                view.addToOptional(id);
            }
            else if(type == 'cart'){
                view.addToCart(id);
            }
            else if(type == 'cal'){

            }
            else if(type == 'del'){
                http.delOptional(id);
            }
        });
        //点击查询股票标的分页
        $('#searchPage').delegate('li', 'click', function(e){
            var page = $(e.currentTarget).attr('data-page');
            if(!page || (page == 'prev' &&  tool.page.target.index == 1)){return;}
            if(page == 'prev' && tool.page.target.index>1){
                page = tool.page.target.index -1 ;
            }
            else if(page == 'next'){
                page = tool.page.target.index + 1;
            }
            tool.page.target.index = Number(page);

            var type = $('#tabs .tab.active').attr('data-type');
            if(type === 'tab-bull'){
                http.loadBullList();
            }
            else if(type == 'tab-search'){
                http.searchTarget();
            }
        });
        //点击规模
        $('#guimo ').delegate('.guimo-item', 'click', function(e){
            if(!view.target || !view.target.id){
                alert('请先选择股票标的');
                return;
            }

            var value = $(e.currentTarget).attr('data-value');
            $('#guimo .guimo-item').removeClass('active');
            $(e.currentTarget).addClass('active');

            view.target.selectValue = value;
            view.renderTarget();
        });



        //点击自定义规模
        $('#guimo ').delegate('.custom-guimo-item', 'click', function(e){
            if(!view.target || !view.target.id){
                alert('请先选择股票标的');
                return;
            }

            var value = $('#custom-guimo-item').val();
            if (value == '' || isNaN(value)) {
                alert('输入不合法');
            } else if (parseInt(value, 10) < 10) {
                alert('最小10万元起步');
            } else {
                $('#guimo .guimo-item').removeClass('active');
                //$(e.currentTarget).addClass('active');
                view.target.selectValue = value * 10000;
                view.renderTarget();   
            }
        });






        //点击申请
        $('#appllyBtn').click(function(){
            var checked = $('#xieyi').is(':checked');
            if(!view.target.selectValue){
                alert('请先选择市值规模');
                return;
            }
            if(!checked){
                alert('请先阅读并同意签署《投顾协议》');
                return;
            }

            http.applyTarget();
        });
        //切换建议买入价格
        $('#suggestPrice').change(function(e){
            var value = $(this).val();
            if(value == 1){
                $('#buyPrice').hide();
            }
            else{
                $('#buyPrice').show();
            }
        });

    }

    var view = {
        target: {},
        stockList: [],
        //添加至购物车
        addToCart: function(id){
            for(var i=0; i<tool.targetList.length; i++){
                if(tool.targetList[i].id == id){
                    view.target = tool.targetList[i] || {};
                }
            }

            view.showNotice();
            view.renderTarget();
            //加载单支股票行情
            http.loadStockInfo(view.target.stock_code);
        },
        addToOptional: function(id){
            http.addToOptional(id);
        },
        renderTarget: function(){
            if(!view.target || !view.target.id){
                return;
            }

            if(view.target.selectValue){
                view.target.cost = view.target.selectValue*view.target.manage_rate/100
            }

            view.target.market = view.target.market || {};
            $('#targetName').html('('+view.target.stock_code+')'+view.target.stock_name+' 上一日收盘价:'+Number(view.target.market.yestodayClosePrice||0).toFixed(2));
            $('#targetValue').html(Number(view.target.selectValue||0).toFixed(2)+'元');
            $('#targetTrend').html({1:'看涨', 2:'看跌'}[view.target.trend]);
            $('#targetCycle').html({1:'五天',2:'十天',3:'一个月',4:'三个月',5:'六个月',21:'十五天',22:'二个月'}[view.target.scheme_cycle]);
            $('#targetRate').html(Number(view.target.manage_rate||0).toFixed(2)+'%');
            $('#targetCost').html(Number(view.target.cost||0).toFixed(2)+'元(一次性收费)');
        },
        showNotice: function(){
            $('.handle-notice').show();
            setTimeout(function(){
                $('.handle-notice').hide();
            }, 2000);
        }
    };


    var http = {
        //获取单支股票行情
        loadStockInfo: function(stock){
            $.ajax({
                url: '/zcp-api/stock/info',
                method: 'get',
                type: 'json',
                dataType: 'json',
                headers: {
                    'role': 'user',
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                    "Accept": "application/json"
                },
                data: {
                    stock: stock
                },
                success: function(result){
                    if(result.status == 0){
                        view.target = view.target || {};
                        view.target.market = result.data;
                        view.renderTarget();
                    }
                    else{
                        //alert(result.reason);
                    }
                },
                error: function(err){
                    console.log('获取公告异常');
                }
            })
        },
        //获取批量股票行情
        loadBatchStockInfo: function (stocks) {
            var stocks = [];

            for(var i=0; i<view.stockList.length; i++){
                stocks.push(view.stockList[i].stock_code);
            }
            if(stocks.length == 0){
                return;
            }
            $.ajax({
                url: '/zcp-api/stock/batchInfo',
                method: 'get',
                type: 'json',
                dataType: 'json',
                headers: {
                    'role': 'user',
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                    "Accept": "application/json"
                },
                data: {
                    stocks: stocks.join(',')
                },
                success: function(result){
                    if(result.status == 0){
                        // http.loadOptionalList();
                        var list = result.data.list;

                        for(var i=0; i<view.stockList.length; i++){
                            for(var j=0; j<list.length; j++){
                                if(list[j].market+list[j].code == view.stockList[i].stock_code){
                                    view.stockList[i].detail = list[j];
                                    break;
                                }
                            }
                        }

                        // console.log(result.data);
                        tool.renderSearchTarget({list: view.stockList});
                    }
                    else{
                        alert(result.reason);
                    }
                },
                error: function(err){
                    console.log('获取公告异常');
                }
            })
        },

        addToOptional: function(id){
            $.ajax({
                url: '/zcp-api/optional',
                method: 'post',
                type: 'json',
                dataType: 'json',
                headers: {
                    'role': 'user',
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                    "Accept": "application/json"
                },
                data: {
                    target_id: id
                },
                success: function(result){
                    if(result.status == 0){
                        http.loadOptionalList();
                    }
                    else{
                        alert(result.reason);
                    }
                },
                error: function(err){
                    console.log('获取公告异常');
                }
            })
        },
        delOptional: function(id){
            $.ajax({
                url: '/zcp-api/optional/'+id,
                method: 'delete',
                type: 'json',
                dataType: 'json',
                headers: {
                    'role': 'user',
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                    "Accept": "application/json"
                },
                success: function(result){
                    if(result.status == 0){
                        http.loadOptionalList();
                    }
                    else{
                        alert(result.reason);
                    }
                },
                error: function(err){
                    console.log('获取公告异常');
                }
            })
        },
        loadOptionalList: function(){
            $.ajax({
                url: '/zcp-api/optional',
                method: 'get',
                type: 'json',
                dataType: 'json',
                headers: {
                    'role': 'user',
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                    "Accept": "application/json"
                },
                data: {
                    index: tool.page.optional.index,
                    size: tool.page.optional.size
                },
                success: function(result){
                    if(result.status == 0){
                        result.data.list = result.data.list || [];
                        let list = [];

                        for(let i=0; i<result.data.list.length; i++){
                            let target = result.data.list[i].target || {};

                            list.push(target);
                        }
                        result.data.list = list;
                        tool.renderOptionalTarget(result.data);
                    }
                    else{
                        console.log('获取公告异常');
                    }
                },
                error: function(err){
                    console.log('获取公告异常');
                }
            })
        },
        loadBullList: function(){
            var params = {
                index: tool.page.target.index,
                size: tool.page.target.size
            }
            $.ajax({
                url: '/zcp-api/bull',
                method: 'get',
                type: 'json',
                dataType: 'json',
                headers: {
                    'role': 'user',
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                    "Accept": "application/json"
                },
                data: params,
                success: function(result){
                    if(result.status == 0){
                        result.data.list = result.data.list || [];
                        let list = [];

                        for(let i=0; i<result.data.list.length; i++){
                            let target = result.data.list[i].target || {};

                            list.push(target);
                        }
                        result.data.list = list;
                        view.stockList = list;
                        tool.renderSearchTarget(result.data);
                    }
                    else{
                        console.log('获取公告异常');
                    }
                },
                error: function(err){
                    console.log('获取公告异常');
                }
            })
        },
        searchTarget: function(){
            var params = tool.getSearchParams();
            if(params.min_cost > params.max_cost ||
                (params.min_cost && !/^\d+(\.\d+)?$/.test(params.min_cost)) ||
                (params.max_cost && !/^\d+(\.\d+)?$/.test(params.max_cost))){
                alert('请准确输入管理费范围');
                return;
            }
            else if(params.min_cost && params.max_cost){
                params.manage_rate = params.min_cost+','+params.max_cost;
            }
            delete params.min_cost;
            delete params.max_cost;

            params.index = tool.page.target.index;
            params.size = tool.page.target.size;
            $.ajax({
                url: '/zcp-api/search/target',
                method: 'get',
                type: 'json',
                dataType: 'json',
                headers: {
                    'role': 'user',
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                    "Accept": "application/json"
                },
                data: params,
                success: function(result){
                    if(result.status == 0){
                        view.stockList = result.data.list || [];
                        tool.renderSearchTarget(result.data);
                    }
                    else{
                        console.log('获取公告异常');
                    }
                },
                error: function(err){
                    console.log('获取公告异常');
                }
            })
        },
        //申请
        applyTarget: function(){
            //type  1:非免费体验  2:免费体验
            var sp = $('#suggestPrice').val(), price = '';//建议买入价格  1:市场交易价  2:限价交易
            if(sp == 2){
                price = $('#buyPrice').val();

                if(view.target.market.yestodayClosePrice>price*1.1 || view.target.market.yestodayClosePrice<price*0.9){
                    alert('建议买入价格,请输入有效价格');
                    return;
                }
            }
            else{
                price = view.target.market.nowPrice||0;
            }
            scheme_cycle = view.scheme_cycle || view.target.scheme_cycle;
            manage_rate = view.target.manage_rate;

            window.location.href = '/qlyx/apply?id='+view.target.id+'&type=1&value='+view.target.selectValue+'&sp='+sp+'&price='+price+'&scheme_cycle='+scheme_cycle+'&manage_rate='+manage_rate;
        }
    }

    var tool = {
        targetList: [],
        optionalList: [],
        tabFocus: function(clazz){
            $('.tab').removeClass('active');
            $('.'+clazz).addClass('active');
        },
        page: {
            optional: {
                index: 1,
                size: 10
            },
            target: {
                index: 1,
                size: 10
            }
        },
        searchTarget: [
            // { title: '序号', dataIndex: 'index', key: 'index', width: '5%'},
            { title: '股票信息', dataIndex: 'amount', key: 'amount', width: '25%', render: function(item){
                var htmls = [
                    '<div>',
                        '<p>'+item.stock_code+'</p>',
                        '<p>'+item.stock_name+'</p>',
                    '</div>'
                ];
                return htmls.join('');
            }},
            { title: '类型', dataIndex: 'trend', key: 'trend', width: '10%', render: function(item){
                return {1:'看涨',2:'看跌'}[item.trend]
            }},
            { title: '周期', dataIndex: 'scheme_cycle', key: 'scheme_cycle', width: '10%', render: function(item){
                return {1:'五天',2:'十天',3:'一个月',4:'三个月',5:'六个月',21:'十五天',22:'二个月'}[item.scheme_cycle];
            }},
            { title: '现价', dataIndex: 'now_price', key: 'now_price', width: '10%', render: function(item){
                // return {1:'五天',2:'十天',3:'一个月',4:'三个月',5:'六个月'}[item.scheme_cycle];
                item.detail = item.detail || {};
                return Number(item.detail.nowPrice||0).toFixed(2);
            }},

            { title: '涨幅', dataIndex: 'rise', key: 'rise', width: '10%', render: function(item){
                item.detail = item.detail || {nowPrice: 0, yestodayClosePrice: 0};
                return Number(((item.detail.nowPrice||0)-(item.detail.yestodayClosePrice||0))/Number(item.detail.yestodayClosePrice||1)*100).toFixed(1)+'%';
            }},
            { title: '管理费率', dataIndex: 'manage_rate', key: 'manage_rate', width: '15%', render: function(item){return Number(item.manage_rate).toFixed(2)+'%'}},
            { title: '操作', dataIndex: 'amount', key: 'amount', width: '30%', render: function(item){
                return [
                    '<div class="handle">',
                        '<a href="#applyType"><i class="icon icon-btn" data-type="cart" data-id="'+item.id+'">&#xe603;</i></a>',
                        '<i class="icon icon-btn" data-type="add" data-id="'+item.id+'">&#xe60d;</i>',
                        '<i class="icon icon-btn" data-type="cal" data-id="'+item.id+'">&#xe60e;</i>',
                    '</div>'
                ].join('');
            }},
        ],
        optionalTarget: [
            { title: '序号', dataIndex: 'index', key: 'index', width: '5%'},
            { title: '股票信息', dataIndex: 'amount', key: 'amount', width: '25%', render: function(item){
                var htmls = [
                    '<div>',
                        '<p>'+item.stock_code+'</p>',
                        '<p>'+item.stock_name+'</p>',
                    '</div>'
                ];
                return htmls.join('');
            }},
            { title: '类型', dataIndex: 'trend', key: 'trend', width: '10%', render: function(item){
                return {1:'看涨',2:'看跌'}[item.trend]
            }},
            { title: '周期', dataIndex: 'scheme_cycle', key: 'scheme_cycle', width: '10%', render: function(item){
                return {1:'五天',2:'十天',3:'一个月',4:'三个月',5:'六个月',21:'十五天',22:'二个月'}[item.scheme_cycle];
            }},
            { title: '管理费率', dataIndex: 'manage_rate', key: 'manage_rate', width: '15%', render: function(item){return Number(item.manage_rate).toFixed(2)+'%'}},
            { title: '操作', dataIndex: 'amount', key: 'amount', width: '30%', render: function(item){
                return [
                    '<div class="handle">',
                        '<i class="icon icon-btn" data-type="cart" data-id="'+item.id+'">&#xe603;</i>',
                        '<i style="font-size: 18px;" class="icon icon-btn" data-type="del" data-id="'+item.id+'">&#xe692;</i>',
                    '</div>'
                ].join('');
            }},
        ],
        getSearchParams: function(){
            var values = {
                scheme_cycle: $("#scheme_cycle").val(),
                trend: $("#trend").val(),
                keyword: $("#keywords").val(),
                min_cost: $("#minCost").val(),
                max_cost: $("#maxCost").val()
            }, params = {};

            for(var key in values){
                if(values[key] !== ''){
                    params[key] = values[key];
                }
            }

            return params;
        },
        renderOptionalTarget: function(res){
            res.list = res.list || [];
            for(var i=0; i<res.list.length; i++){
                res.list[i].index = i+1;
            }
            tool.optionalList = res.list;
            tool.renderTableStr('optionalTarget', res.list);
            tool.renderPage('optionalPage', res.total, tool.page.target.index);
        },
        renderSearchTarget: function(res){
            res.list = res.list || [];
            for(var i=0; i<res.list.length; i++){
                res.list[i].index = i+1;
            }
            tool.targetList = res.list;
            tool.renderTableStr('searchTarget', res.list);
            tool.renderPage('searchPage', res.total, tool.page.target.index);
        },
        /**
         * 渲染表格
         * @param list
         */
        renderTableStr: function(table, list){
            var htmls = [];
            for(var i=0; i<list.length; i++){
                htmls.push('<tr>');
                for(var index=0; index<tool[table].length; index++){
                    var item = tool[table][index];
                    if(item){
                        if(item.render){
                            htmls.push('<td style="width:'+item.width+'">'+item.render(list[i])+'</td>');
                        }
                        else{
                            htmls.push('<td style="width:'+item.width+'">'+list[i][item.key]+'</td>');
                        }
                    }
                }
                htmls.push('</tr>');
            }


            $("#"+table).html(htmls.join(''));
        },
        renderPage: function(target, count, current){
            count = Math.ceil(count/tool.page.target.size);

            var pages = ['<li class="active">'+current+'</li>'], index = 1;

            while (pages.length<5 && pages.length<count){
                if(current-index>0){
                    pages.splice(0, 0, '<li data-page="'+(current-index)+'">'+(current-index)+'</li>');
                }
                if(current+index<=count){
                    pages.push('<li data-page="'+(current+index)+'">'+(current+index)+'</li>');
                }

                index++;
            }

            if(current-index>0){
                pages.splice(0,0, '<li>...</li>');
            }
            if(current-index>3){
                pages.splice(0, 0, '<li data-page="1">1</li>');
            }
            if(current<count-3){
                pages.push('<li>...</li>');
            }
            if(current<count-2){
                pages.push('<li data-page="'+count+'">'+count+'</li>');
            }

            pages.splice(0,0, '<li data-page="prev"><i class="icon">&#xe62f;</i></li>');
            pages.push('<li data-page="next"><i class="icon">&#xe62a;</i></li>');

            $('#'+target).html(pages.join(''));
        }
    }
})(window);