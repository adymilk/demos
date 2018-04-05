/**
 * Created by yangxun on 17/4/5.
 */

(function(window, undefined){
    $(document).ready(function(){
        //关闭登录面板
        $('.icon-close').click(function(){
            closeLoginPane();
        });

        $('.find-pwd').bind('click', function(e){
            $('#lgcode').css({'display': 'none'});
            $('#fpwd').css({'display': 'block'});
            $('.find-word-img').prop('src', '/zcp-api/code?timestamp='+new Date().getTime());
        });
        $('.go-login').bind('click', function(e){
            if(browser && browser() == 'pc'){
                $('#fpwd').css({'display': 'none'});
                $('#lgcode').css({'display': 'block'});
                $('.login-word-img').prop('src', '/zcp-api/code?timestamp='+new Date().getTime());
            }
            else{
                window.location.href = '/mlogin.html?type=1';
            }
        });
        $('.regist-tab').bind('click', function(){
            if(browser && browser() == 'pc'){
                changePane('msg', 'lgcode');
            }
            else{
                window.location.href = '/mlogin.html?type=2';    
            }
        });
        $('.nav>.login-tab').bind('click', function(e){
            if(browser && browser() == 'pc'){
                changePane('lgcode', 'msg');
            }
            else{
                window.location.href = '/mlogin.html?type=1';
            }
        });

        //刷新验证码
        $(".word-img").bind('click', function(e){
            $(e.target).prop('src', '/zcp-api/code?timestamp='+new Date().getTime());
        });
        //登录
        $("#loginBtn").bind('click', submitLogin);
        $("#fsubmit").bind('click', findPwd);
        $("#rsubmit").bind('click', rigistUser);



        if(window.location.search.indexOf('type=2') > -1){
            // changePane('msg', 'lgcode');
            openLoginPane(2, true);
        }
    });

    /*面板控制*/
    var changePane = window.changePane = function(show){
        $('.login-container .pane').hide();
        $('#'+show).show();
        if(show == 'lgcode'){
            $('.login-word-img').prop('src', '/zcp-api/code?timestamp='+new Date().getTime());
        }
        else if(show == 'msg'){
            $('.msg-word-img').prop('src', '/zcp-api/code?timestamp='+new Date().getTime());
        }
        else{
            $('.find-word-img').prop('src', '/zcp-api/code?timestamp='+new Date().getTime());
        }
    };

    //发送短信验证码
    window.sendMsgCode = function(id){
        if(time >0){
            return;
        }
        var regist = $("#msg").is(":visible"), data;
        if(regist == true){
            data = {
                mobile: $('#rmobile').val(),
                wcode: $('#rwcode').val()
            };
        }
        else{
            data = {
                mobile: $('#fmobile').val(),
                wcode: $('#fwcode').val()
            };
        }

        if(!/^(13|14|15|17|18)[0-9]{9}$/.test(data.mobile)){
            alert('请输入正确的手机号');
            return;
        }
        else if(!data.wcode || data.wcode.length != 4){
            alert('请正确输入图形验证码');
            return;
        }

        $.ajax({
            url: '/zcp-api/captcha/code',
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
                from: 0,    //0供应版  1门店版
                wcode: data.wcode,   //图形验证码
                mobile: data.mobile,
                type: regist==true?0:2    // 类型 0：注册验证码 1：重置密码验证码 2：通用验证码 3：设备id验证码
            },
            success: function(result){
                if(result.status == 0){
                    startTimer(id);
                }
                else{
                    alert(result.reason || '发送失败');
                }
            },
            error: function(err){
                alert('发送失败');
            }
        })
    };
    //关闭登录面板
    var closeLoginPane = window.closeLoginPane = function(){
        $("#loginModal").hide();
    }
    //打开登录面板
    var openLoginPane = window.openLoginPane = function(type, showtjm = false){
        $('.login-container .nav li').hide();
        //登录
        if(type == 1){
            changePane('lgcode');
            $('.login-container .login-tab').show();
        }
        //注册
        else if(type == 2){
            $('.login-container .regist-tab').show();
			
			if (showtjm) {
				$('#rtjminputdiv').hide();
			} else {
				$('#rtjminputdiv').show();
			}
			
            changePane('msg');
        }
        //找回密码
        else if(type == 3){
            $('.login-container .login-tab').show();
            changePane('fpwd');
        }
        $("#loginModal").css({'display': 'table'});
    }

    //发起登录
    var submitLogin = window.submitLogin = function(e){
        var data = {
            mobile: $('#loginMobile').val(),
            password: $('#loginPassword').val(),
            code: $('#loginCode').val()
        };
        if(!/^(13|14|15|17|18)[0-9]{9}$/.test(data.mobile)){
            alert('请输入正确的手机号');
            return;
        }
        if(!data.code || data.code == ''){
            alert('请输入验证码');
            return;
        }
        if(!data.password || data.password == ''){
            alert('请输入密码');
            return;
        }
        $.ajax({
            url: '/zcp-api/code/login',
            method: 'post',
            type: 'json',
            headers: {
                'role': 'user',
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "Accept": "application/json"
            },
            data: {
                mobile: data.mobile,
                password: data.password,
                code: data.code   //短信验证码
            },
            success: function(result){
                if(result.status == 0){
                    //window.location.href = result.data.redirect;
                    // $('.section-login').hide();
                    // $('.logined-nav').show();
                    // closeLoginPane();
                    window.location.reload();
                }
                else{
                    alert(result.reason || '登录失败');
                }
            },
            error: function(err){
                alert('登录失败');
            }
        });
    };
    //找回密码
    var findPwd = function(e){
        var data = {
            mobile: $('#fmobile').val(),
            password: $('#fpassword').val(),
            code: $('#fmsgcode').val()
        };
        if(!/^(13|14|15|17|18)[0-9]{9}$/.test(data.mobile)){
            alert('请输入正确的手机号');
            return;
        }
        if(!data.code || data.code == ''){
            alert('请输入验证码');
            return;
        }
        if(!data.password || data.password == ''){
            alert('请输入密码');
            return;
        }
        $.ajax({
            url: '/zcp-api/user/update',
            method: 'put',
            type: 'json',
            dataType: 'json',
            headers: {
                'role': 'user',
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "Accept": "application/json"
            },
            data: data,
            success: function(result){
                if(result.status == 0){
                    $('#lgcode').css({'display': 'block'});
                    $('#fpwd').css({'display': 'none'});
                    alert('修改成功');
                }
                else{
                    alert(result.reason || '修改失败');
                }
            },
            error: function(err){
                alert('修改失败');
            }
        });
    };
    //注册
    var rigistUser = function(e){
		
		
		var hasTjm = !$('#rtjminputdiv').is(":hidden");
		
		
        var data = {
            mobile: $('#rmobile').val(),
            code: $('#rmsgcode').val(),
            username: $('#rusername').val(),
            password: $('#rpassword').val(),
            password2: $('#rpassword2').val(),
			tjmcode: $('#rtjmcode').val()
        };
        let parent_id = window.location.href.match(/value=[\w]+[^&]/);
        parent_id = parent_id?parent_id[0]:null;
        parent_id = parent_id?parent_id.replace(/^value=/,''):'';

		
		if (hasTjm && (data.tjmcode.length !== 8 && data.tjmcode.length !== 0)) {
			alert('推荐码不合法');
            return;
		}
        if(!data.password || data.password == ''){
            alert('请输入密码');
            return;
        }
        if(data.password !== data.password2){
            alert('两次输入的密码不一致');
            return;
        }
        if(!/^(13|14|15|17|18)[0-9]{9}$/.test(data.mobile)){
            alert('请输入正确的手机号');
            return;
        }
        if(!data.username || data.username == ''){
            alert('请输入用户名');
            return;
        }
        if(!data.code || data.code == ''){
            alert('请输入短信验证码');
            return;
        }

				

        $.ajax({
            url: '/zcp-api/captcha/regist',
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
                type: 0,
                mobile: data.mobile,
                code: data.code,   //短信验证码
                username: data.username,
                password: data.password,
                parent_id: parent_id,
				tjmcode:data.tjmcode
            },
            success: function(result){
                if(result.status == 0){
                    $('#lgcode').css({'display': 'block'});
                    $('#fpwd').css({'display': 'none'});
                    $('#msg').css({'display': 'none'});
                    alert('注册成功');
                }
                else{
                    alert(result.reason || '注册失败');
                }
            },
            error: function(err){
                alert('注册失败');
            }
        });
    }

    //开启定时器
    var time = 0, timer;
    function startTimer(id){
        var timerDom = document.getElementById(id);
        timerDom.style.color = '#999';
        timer = setInterval(function(){
            if(time == 0){
                clearInterval(timer);
                time = 0;
                timerDom.innerHTML = '发送验证码';
                return;
            }
            timerDom.innerHTML = time+'s 后重发';
            time--;
        }, 1000);
        time = 60;
    }
})(window, undefined);