//资质查询弹框
function qualificationFun()
{
	//创建html
	var htmlStr="<div class='QualificationAlert'>"+
	                "<div class='QualificationAlert_bg'></div>"+
					"<div class='QualificationAlert_box'>"+
					   "<span class='close'><img src='/Content/JOJOFX/Images/icon/close.png'></span>"+
					   "<div class='QualificationAlert_main'>"+
					     "<h2 class='QualificationAlert_txt'>请选择查询方式</h2>"+
						 "<div class='QualificationAlert_con'>"+
						   "<p><span class='Qualificationspnum'>1</span><a href='https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000003uFUNnAAO' target='_blank'>去FCA官网查询资质</a></p>"+
						   "<p><span class='Qualificationspnum'>2</span><span class='Qualificationb'>部分华人地区无法正常访问FCA官网，</span><a href='/Content/JOJOFX/Images/detail/fca.png'' target='_blank'>请点击查看FCA截图</a></p>"+
						 "</div>"+  
					   "</div>"+
					"</div>"+
	            "</div>";

   $('body').append(htmlStr);
   function loadCssCode(code) {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.rel = 'stylesheet';
            try {
                //for Chrome Firefox Opera Safari
                style.appendChild(document.createTextNode(code));
            } catch (ex) {
                //for IE
                style.styleSheet.cssText = code;
            }
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(style);
        }
	 loadCssCode('.QualificationAlert{position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999}.AccessAlert_bg{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.7;filter:Alpha(opacity=70);background-color:#000}.QualificationAlert_box{position:relative;top:0;left:0;margin:10% auto 0;width:560px;max-height: 400px;overflow-y: auto;background:#fff}.close{ width:22px; height:22px;position:absolute;top:19px;right:19px;cursor:pointer}.QualificationAlert_main{width:100%;}.QualificationAlert_txt{height:60px; line-height:60px; background:#f3f7f8;font-size:18px; color:#333;text-align:center;font-weight:normal;}.QualificationAlert_con{padding:20px 0 50px 80px;}.QualificationAlert_con p{ padding-left:33px; height:22px; line-height:22px; font-height:14px; color:#333;position:relative;margin-top:15px;}.Qualificationspnum{ width:22px; height:22px; display:block;position:absolute;left:0px;top:0px;background:#4dbed1; color:#fff; font-size:14px;text-align:center; line-height:22px;border-radius:50%; -moz-border-radius:50%;-webkit-border-radius:50%; }.Qualificationb{font-weight:bold;font-size:14px;}.QualificationAlert_con a{ font-size:14px; color:#032e4f;text-decoration: underline;}');
        // 关闭弹层	
		$(document).on('click', '.QualificationAlert .close', function() {
            $(this).parents('.QualificationAlert').hide().remove();
        });
		
		
}
