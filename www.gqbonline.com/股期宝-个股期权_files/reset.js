// 导航栏切换部分
$(".navbar li,.tab_nav li").mouseover(function(){
    $(this).addClass("active").siblings().removeClass("active");
})
$(".navbar li,.tab_nav li").mouseleave(function(){
    $(this).removeClass("active");
})
$(".navbar").mouseenter(function(){
    $(".act").css("border-bottom","0px solid #e60011");
})
$(".navbar").mouseleave(function(){
    $(".act").css("border-bottom","8px solid #e60011");
})
$(".navbar li,.tab_nav li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})

$(".tab_nav").mouseenter(function(){
    
})


// 新闻资讯页面右边箭头变色部分
$(".im2 img").mouseover(function(){
  if(Number($(this).attr("addstr"))){
    $(this).attr("src","images/jiantou.png");
    $(this).attr("agree",0);
  }else{
    $(this).attr("src","images/jiantouactive.png");
    $(this).attr("agree",1);
  }
})
$(".im2 img").mouseleave(function(){
  if(Number($(this).attr("addstr"))){
    $(this).attr("src","images/jiantouactive.png");
    $(this).attr("agree",0);
  }else{
    $(this).attr("src","images/jiantou.png");
    $(this).attr("agree",1);
  }
})
// 新闻资讯页面右边箭头变色部分结束

// 期权知识-视频课堂-播放页面（optionKl_info.html）页面视频播放按钮
$(".anbtn img").click(function(){
    $(".shipin video").attr("autoplay");
    $(".shipin video")[0].play();
    $(this).hide();
})


// 注册登录开始页面
$(".zhuce").hide();
$(".ksdl").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".denglu").show();
     $(".spline").animate({marginLeft:"-0px"});
    $(".zhuce").hide();
})
$(".kszc,.nowzc").click(function(){
     $(".kszc").addClass("active").siblings().removeClass("active");
    $(".zhuce").show();
    $(".spline").animate({marginLeft:"202px"});
    $(".denglu").hide();
})
// 登录注册页面切换部分

// 忘记密码，进行密码重置页面显示
$(".sfwj").click(function(){
  $(".forgot,.bg").css("display","block");
  return false;
})

// 点击关闭按钮
$(".close,.fg1_dl").click(function(){
  $(".forgot,.bg").hide();
})

//验证

 var error = {
            "empty" : "不能为空",
            "type"  : "输入的格式不正确",
            "phone" : "手机号码已经被注册过了",
            "same"  : "两次输入的密码不一致",
            "password_less"  : "密码长度需为6-16位",
            "code"  : "验证码错误",
            "user_name"  : "用户名为2—5位中文名称"
        };


$(".telphone").blur(function(){
   var phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/;
//如果手机号码输入为空，则再输入框后插入错误信息
if($(".telphone").val()=='' || $(".telphone").val()==' '){
  $(this).after(errMsg("手机号码不能为空！"));
  return false;
}
//验证输入的电话号码是否是11位数字
if(!phoneReg.test($(".telphone").val())){
   $(this).after(errMsg("手机号码输入有误！"));
   return false;
}
})

// 注册
$("#user_name").blur(function(){
   var phoneReg = /^([\u4e00-\u9fa5]+(\.[\u4e00-\u9fa5]+)?){2,10}$/;
//如果输入姓名为空，则再输入框后插入错误信息
if($("#user_name").val()=='' || $("#tel").val()==' '){
  $(this).after(errMsg("用户名"+error.empty));
  return false;
}
//验证输入的姓名是否是2-5位中文
if(!phoneReg.test($("#user_name").val())){
   $(this).after(errMsg(error.user_name));
   return false;
}
})

$(".password").blur(function(){
  var phoneReg = /^\d{6,16}$/;
  if(!phoneReg.test($(".password").val())){
   $(this).after(errMsg(error.password_less));
   return false;
}
})
$(".pwd").blur(function(){
  if($(".pwd").val()!== $(".pwd1").val()){
    $(this).after(errMsg(error.same));
   return false;
  }

})

// 忘记密码页面













$(".ipt").focus(function(){
  $('.error').remove();
})
// 移除错误提示

// user_mima
function errMsg(html){
// 　　$('.error').remove();
　　var str='<div class="error">*'+html+'</div>';
  return str;
}


function fnLogin(){
//   alert("登录成功");
}