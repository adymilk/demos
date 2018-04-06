$(".qipncn-form button[type='submit']").click(function(){
	var codeok = 1;
	$(".qipncn-form .required input,.qipncn-form .required textarea").each(function(){
		var prt = $(this).parent();
		if($(this).val()==''){
			prt.addClass('has-error');
			if(prt.find("span.help-block").length){
				prt.find("span.help-block").show();
			}else{
				prt.append("<span class=\"help-block\">请填写此字段</span>");
			}
			codeok = 0;
		}else{
			prt.removeClass('has-error');
			prt.find("span.help-block").hide();
		}
	});
	if($(".formcode").length&&codeok==1){
		$('.formcode').modal('show');
	}
	return false;
});


$(".formcode button[type='submit']").click(function(){
	var code = $(".formcode input[name='code']");
	var prt = code.parent();
	if(code.val()==''){
		prt.addClass('has-error');
		if(prt.find("span.help-block").length){
			prt.find("span.help-block").show();
		}else{
			prt.append("<span class=\"help-block\">请填写此字段</span>");
		}
	}else{
		prt.removeClass('has-error');
		prt.find("span.help-block").hide();
		var value = code.val();
			value = value.toUpperCase();
		$(".qipncn-form input[name='code']").val(value);
		$(".qipncn-form").submit();
	}
	return false;
});