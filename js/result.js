$(function(){
	$("#sea_back").on("touchstart",function(){
		document.location = "index.html";
	})
	$(".sxcz").on("touchstart",function(){
		$("#mark").attr("index","1");
		$("#mark").show();
		$(".station").css("display","block");
		$(".box").animate({bottom:'0'});
	})
	$(".fcsd").on("touchstart",function(){
		$("#mark").attr("index","1");
		$("#mark").show();
		$(".tmout").css("display","block");
		$(".box").animate({bottom:'0'});
	})
	$('.tmpx').on("touchstart",function(){
		$(".tmpx span").toggleClass("flag");
		if($(".tmpx span").hasClass("flag")){
			$(".tmpx span").html("从晚到早");
		}else{
			$(".tmpx span").html("从早到晚");
		}
	})
	$(".cancel").on("touchstart",function(evt){
		var e = evt || window.event;
		$("#mark").attr("index","0");
		$(".box").animate({bottom:'-14rem'},function(){
			$(".station").css("display","none");
			$(".tmout").css("display","none");
			$("#mark").hide();
		});
	})
	$(".deter").on("touchstart",function(evt){
		var e = evt || window.event;
		$("#mark").attr("index","0");
		$(".box").animate({bottom:'-14rem'},function(){
			$(".station").css("display","none");
			$(".tmout").css("display","none");
			$("#mark").hide();
		});
	})
	//日期插件引用
	
	
	
	//屏幕滚动效果
	var myScroll = new iScroll('#wrapper');
})
