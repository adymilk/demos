// 导航栏切换部分
$(function () {
    
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
  });

  function o(a,b) {
      for (var prop in b) {
          a[prop] = b[prop];
      }
      return a;
  }
  var queryObj = location.search.slice(1).split('&').map(function (v,k) {
                    var arr = v.split("="),
                        obj = {};
                    obj[arr[0]] = arr[1];
                    return obj;
                }).reduce(function (a,b) {
                    return o(a,b);
                }, {});
  if(queryObj['_f'] && queryObj['_f'] != undefined){
    $(".kszc").trigger('click');
  }
  // 登录注册页面切换部分

  // 忘记密码，进行密码重置页面显示
  $(".sfwj").click(function(){
    $(".forgot,.bg").css("display","block");
    return false;
  })

  // 点击关闭按钮
  $(".close,.fg1_dl").click(function(){
    $(".forgot,.bg").hide();
  });
  $(".close1").click(function(){
    $(".warn_info,.bg").hide();
  });
  $(".tx").click(function(){
     $(".warn_info,.bg").css("display","block");
  });








});