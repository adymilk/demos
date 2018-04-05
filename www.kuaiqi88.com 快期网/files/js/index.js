/**
 * Created by yangxun on 2017/9/24.
 */
//首页js逻辑处理
(function(window, undefind){
    $(document).ready(function(){
        http.loadNotice();
        http.loadMsg();
    });


    var http = {
        loadNotice: function(){
            $.ajax({
                url: '/zcp-api/reference',
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
                    type: 2,
                    is_top: true,
                    index: 1,
                    size: 3
                },
                success: function(result){
                    if(result.status == 0){
                        tool.renderNotice(result.data);
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
        loadMsg: function(){
            $.ajax({
                url: '/zcp-api/recomm/home',
                method: 'get',
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
                        tool.renderMsg(result.data);
                    }
                    else{
                        console.log('获取资讯异常');
                    }
                },
                error: function(err){
                    console.log('获取公告异常');
                }
            })
        }
    }

    var tool = {
        renderNotice: function(res){
            if(res.list && res.list.length>0){
                var htmls = [];

                for(var i=0; i<res.list.length; i++){
                    //<p>11月02日权利游戏投资标的推荐（2017-11-2）</p>
                    htmls.push('<p><a href="/msg/gg/'+res.list[i].id+'">');
                    htmls.push(res.list[i].name);
                    htmls.push('</a></p>');
                }

                $('#noticeWrapper').html(htmls.join(''));
            }
        },
        renderMsg: function(res){
            if(!res) return;
            var htmls = [];

            //行业资讯
            for(var i=0; i<res.hyzx.length; i++){
                //<li><i class="icon">&#xe601;</i><a href="">我是标题我是标题我是标题我是标题</a></li>
                htmls.push('<li><i class="icon">&#xe601;</i><a href="/msg/hyzx/'+res.hyzx[i].id+'">');
                htmls.push(res.hyzx[i].name);
                htmls.push('</a></li>');
            }
            $('#hyzx').html(htmls.join(''));

            //股票资讯
            htmls = [];
            for(var i=0; i<res.gpzx.length; i++){
                //<li><i class="icon">&#xe601;</i><a href="">我是标题我是标题我是标题我是标题</a></li>
                htmls.push('<li><i class="icon">&#xe601;</i><a href="/msg/hyzx/'+res.gpzx[i].id+'">');
                htmls.push(res.gpzx[i].name);
                htmls.push('</a></li>');
            }
            $('#gpzx').html(htmls.join(''));

            //恒生指数
            htmls = [];
            for(var i=0; i<res.hszs.length; i++){
                //<li><i class="icon">&#xe601;</i><a href="">我是标题我是标题我是标题我是标题</a></li>
                htmls.push('<li><i class="icon">&#xe601;</i><a href="/msg/hyzx/'+res.hszs[i].id+'">');
                htmls.push(res.hszs[i].name);
                htmls.push('</a></li>');
            }
            $('#hszs').html(htmls.join(''));
        }
    }
})(window);