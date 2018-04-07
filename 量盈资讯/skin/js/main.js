$(function() {
	var h1=$(window).height();
	var w1=$(window).width();
	var h2=$(".team_xq").height();
	var w2=$(".team_xq").width();
	$(".team_xq").css({top:(h1-h2)/2>0?(h1-h2)/2:0,left:(w1-w2)/2>0?(w1-w2)/2:0});
	var team_ul_li_index=0;
	var team_ul_li_size=$(".team_ul li").size();
	$(".team_ul li").click(function(){
        team_ul_li_index=$(this).index()
        $(".team_xq").css({"z-index":99,"opacity":1})
        $(".team_xq").stop().animate({"opacity":1},600);
        $(".team_xq .tx_left img").attr('src',$(this).find('.ljimg').attr('src'))
        $(".team_xq .tr_dt").html($(this).find('.name').html());
        $(".team_xq .tr_dd").html($(this).find('.cont').html());
        if($(".team_xq .tr_dd").height()>200){
            $(".team_xq .tr_dd").css({height:'200px',overflow:'hidden','overflow-y':'scroll'})
        }else{
            $(".team_xq .tr_dd").css({height:'auto',overflow:'hidden'})
        }
	});
	$(".tcl").click(function(){
		$(".team_xq").stop().animate({"opacity":0,"z-index":-1},600);
	});
	$(".team_xq .tx_btn span").eq(0).click(function(){
        team_ul_li_index--;
        if(team_ul_li_index<0)team_ul_li_index=team_ul_li_size-1;
        $(".team_ul li").eq(team_ul_li_index).click();
	})
	$(".team_xq .tx_btn span").eq(1).click(function(){
        team_ul_li_index++;
        if(team_ul_li_index>=team_ul_li_size)team_ul_li_index=0;
        $(".team_ul li").eq(team_ul_li_index).click();
	})
	var h3=$(".honor_pos").height();
	var w3=$(".honor_pos").width();
	$(".honor_pos").css({top:(h1-h3)/2>0?(h1-h3)/2:0,left:(w1-w3)/2>0?(w1-w3)/2:0});
	$(".honor_ul li").click(function(){
        
        $(".honor_pos").css({"z-index":99,"opacity":1,'display':'none'}).find('img').eq(0).attr('src',$(this).find('img').attr('src'));
        $(".honor_pos").stop().fadeIn(600)//animate({"opacity":1},600);
	});
	$(".hcl").click(function(){
		$(".honor_pos").stop().animate({"opacity":0,"z-index":-1},600);
	});
	
	var h4=$(".zp_pos").height();
	var w4=$(".zp_pos").width();
	$(".zp_pos").css({top:(h1-h4)/2>0?(h1-h4)/2:0,left:(w1-w4)/2>0?(w1-w4)/2:0});
	$(".zp_con .zp_dl").click(function(){
		$(".zp_pos").css({"z-index":99});
		$(".zp_pos").stop().animate({"opacity":1},600);
		$(".zp_pos input[name='pid']").val($(this).attr('data-id'));
	});
	$(".zcl,.zb2").click(function(){
		$(".zp_pos").stop().animate({"opacity":0,"z-index":-1},600);
	});
	$("#sub").submit(function(){
        if(!$("input[name='name']").val()){alert("请填写姓名");return false;}
        if(!$("input[name='tel']").val() && !$("input[name='email']").val()){alert("请填写至少填写一种联系方式");return false;}
        if(!$("textarea[name='cont']").val()){alert("请填写留言消息");return false;}
        $(this).append('<input type="hidden" name="action" value="mes">');
        return true;
	})
});



$(function() {
	var sWidth = $(".index2_ul").width(); //获取焦点图的宽度（显示面积）
	var len = $(".index_pos li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div>";
	$(".index2_ul").append(btn);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$(".index2_ul .btn span").mouseenter(function() {
		index = $(".index2_ul .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

//	//上一页按钮
//	$("#focus .pre").click(function() {
//		index -= 1;
//		if(index == -1) {index = len - 1;}
//		showPics(index);
//	});

	//下一页按钮
	$(".iq_add").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$(".index2_ul").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
		
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		$(".iq_span").text("0"+(index+1));
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$(".index_pos li").stop(true,false).animate({"opacity":0,"z-index":-1},500).eq(index).animate({"opacity":1,"z-index":1},500); //通过animate()调整ul元素滚动到计算出的position
		$(".index2_ul .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
	}
});




