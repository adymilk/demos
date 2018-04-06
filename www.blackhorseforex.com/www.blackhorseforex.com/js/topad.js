// JScript 文件
function TopAd()
{
    var strTopAd="";
	
	//定义小图片内容
    var topSmallBanner="<div><a href=\"/plus/list.php?tid=48\" target=_blank><img src=\"images/top_090901_s.gif\" /></a></div>";
	
	//判断在那些页面上显示大图变小图效果，非这些地址只显示小图（或FLASH）
    if (location == "http://sc.chinaz.com" || location == "http://sc.chinaz.com" || location == "http://sc.chinaz.com/" || true)
    {
		//定义大图内容
        strTopAd="<div id=adimage style=\"width:980px\margin: 0 auto\">"+
                    "<div id=adBig><a href=\"http://sc.chinaz.com/\" " + 
                    "target=_blank><img title=YUANXIN "+
                    "src=\"images/top_zzsc_b.jpg\" " +
                    "border=0></A></div>"+
                    "<div id=adSmall style=\"display: none\">";
        //strTopAd+=  topFlash;     
		strTopAd+=  topSmallBanner;  
        strTopAd+=  "</div></div>";
    }
    else
    {
        //strTopAd+=topFlash;
		strTopAd+=  topSmallBanner;  
    }
    strTopAd+="<div style=\"height:7px; clear:both;overflow:hidden\"></div>";
    return strTopAd;
}
document.write(TopAd());
$(function(){
	//过两秒显示 showImage(); 内容
    setTimeout("showImage();",2000);
    //alert(location);
});
function showImage()
{
    $("#adBig").slideUp(1000,function(){$("#adSmall").slideDown(1000);});
}

