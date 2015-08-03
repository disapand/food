$(document).ready(function(){
	var currentPage=0;
	var musicOn=1;
	var startbtn=1;
//var audio = document.querySelector('audio');
var bgm = document.getElementById('bgmusic');
var audio = document.getElementById('voice');
var arr=["http://hjysjtu.oss-cn-hangzhou.aliyuncs.com/s1.m4a",
"http://hjysjtu.oss-cn-hangzhou.aliyuncs.com/s2.m4a",
"http://hjysjtu.oss-cn-hangzhou.aliyuncs.com/s3.m4a",
"http://hjysjtu.oss-cn-hangzhou.aliyuncs.com/s4.m4a",
"http://hjysjtu.oss-cn-hangzhou.aliyuncs.com/s5.m4a",
"http://hjysjtu.oss-cn-hangzhou.aliyuncs.com/s6.m4a",
"http://hjysjtu.oss-cn-hangzhou.aliyuncs.com/s7.m4a",
"http://hjysjtu.oss-cn-hangzhou.aliyuncs.com/s8.m4a"];


//var audio = document.getElementById('word1');

$("body").on("touchmove", function (e) {
	e.preventDefault();
});
$("#apppart2").click(function(){
	$("#apppart2").css("display","none");
});
$("#myshare").click(function(){
	$("#apppart2").css("display","block");
});

//封装动画
function animateOut(id, animation){
	$(id).removeClass(animation+' animated').addClass(animation+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass(animation+' animated');
			$(this).hide();
	});
}

function animateIn(id, animation){
	$(id).removeClass(animation+' animated').addClass(animation+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass(animation+' animated');
	});
}
function voice(number){
	audio.src=arr[number-1];
	if(musicOn)
	{
		audio.play();
		bgm.play();
	}
	else
	{
		audio.pause();
		bgm.pause();
	}
}

function pageOneOneIn(){
	voice(1);
	//$("#page1_1").css("background","url(img/01_1.png) no-repeat center");
	//$("#page1_1").css("background-size","cover");
	//$("#page1_2").css("background","url(img/01_2.png) no-repeat center");
	//$("#page1_2").css("background-size","cover");
	$("#page1_1,#page1_2").show();

	animateIn("#page1_1","fadeInDown");
	animateIn("#page1_2","fadeInUp");
	setTimeout(function(){	
		$("#txt1_1").show();
		animateIn("#txt1_1","fadeIn");
	},1500);	
}
function pageOneOneOut(){
	animateOut("#page1_1","fadeOutUp");
	animateOut("#page1_2","fadeOutDown");
	animateOut("#txt1_1","fadeOut");
}
function pageOneTwoIn(){
	//if(currentPage==1)
	voice(2);
	//$("#page1_3").css("background","url(img/01_3.png) no-repeat center");
	//$("#page1_3").css("background-size","cover");
	//$("#page1_4").css("background","url(img/01_4.png) no-repeat center");
	//$("#page1_4").css("background-size","cover");	
	$("#page1_3,#page1_4").show();
	animateIn("#page1_3","fadeInDown");
	animateIn("#page1_4","fadeInUp");
	setTimeout(function(){	
		$("#txt1_2").show();
		animateIn("#txt1_2","fadeIn");
	},1500);	
}
function pageOneTwoOut(){
	animateOut("#page1_3","fadeOutUp");
	animateOut("#page1_4","fadeOutDown");	
	animateOut("#txt1_2","fadeOut");	
}
function pageTwoOneIn(){
	voice(3);
	$("#page2").show();
	animateIn("#page2","fadeIn");	
	setTimeout(function(){	
		$("#txt2_1").show();
		animateIn("#txt2_1","fadeIn");
	},1500);
}
function pageTwoOneOut(){
	animateOut("#txt2_1","fadeOut");
	animateOut("#page2","fadeOut");
}
function pageThreeIn(){
	voice(4);
	$("#page3_1,#page3_2").show();

	animateIn("#page3_1","fadeInRight");
	animateIn("#page3_2","fadeInLeft");
	setTimeout(function(){	
		$("#txt3").show();
		animateIn("#txt3","fadeIn");
	},1500);
}
function pageThreeOut(){
	animateOut("#page3_1","fadeOutLeft");
	animateOut("#page3_2","fadeOutRight");
	animateOut("#txt3","fadeOut");
}
function pageFourOneIn(){
	voice(5);
	$("#page4_1").show();
	animateIn("#page4_1","fadeIn");
	setTimeout(function(){	
		$("#txt4").show();
		animateIn("#txt4","fadeIn");
	},1500);
}
function pageFourOneOut(){
	animateOut("#page4_1","fadeOut");
}
function pageFourTwoIn(){
	$("#page4_2").show();
	animateIn("#page4_2","fadeIn");
}	
function pageFourTwoOut(){
	animateOut("#page4_2","fadeOut");
	animateOut("#txt4","fadeOut");
}
function pageFiveOneIn(){	
	voice(6);
	$("#page5_1").show();
	animateIn("#page5_1","fadeInRight");
	$("#page5_2").show();
	animateIn("#page5_2","fadeInLeft");

	setTimeout(function(){	
		$("#txt5_1").show();
		animateIn("#txt5_1","fadeIn");
	},1500);
}
function pageFiveOneOut(){
	animateOut("#page5_1","fadeOutRight");
	animateOut("#page5_2","fadeOutLeft");
	animateOut("#txt5_1","fadeOut");
}
function pageFiveTwoIn(){
	//if(currentPage==4)
	voice(7);
	$("#page5_3").show();
	animateIn("#page5_3","fadeInRight");
	$("#page5_4").show();
	animateIn("#page5_4","fadeInLeft");
	setTimeout(function(){	
		$("#txt5_2").show();
		animateIn("#txt5_2","fadeIn");
	},1500);
}
function pageFiveTwoOut(){
	animateOut("#page5_3","fadeOutRight");
	animateOut("#page5_4","fadeOutLeft");
	animateOut("#txt5_2","fadeOut");
}
function pageSixOneIn(){
	voice(8);
	$("#page6_1").show();
	animateIn("#page6_1","fadeIn");
	setTimeout(function(){	
		$("#txt6").show();
		animateIn("#txt6","fadeIn");
	},1500);
}
function pageSixOneOut(){
	animateOut("#page6_1","fadeOut");
	$("#page6_2").show();
	animateIn("#page6_2","fadeIn");
}
function nextPage(){
	if(currentPage==0){

		pageOneOneOut();
		pageOneTwoIn();

	}	
	if(currentPage==1){

		pageOneTwoOut();
		pageTwoOneIn();

	}
	else if(currentPage==2){
		pageTwoOneOut();
		pageThreeIn();
	}
	else if(currentPage==3){
		pageThreeOut();
		pageFourOneIn();	

		setTimeout(function(){	
			pageFourOneOut();
			pageFourTwoIn();

		},5000);

	}
	else if(currentPage==4){
		pageFourTwoOut();

		pageFiveOneIn();

	}
	else if(currentPage==5){
		pageFiveOneOut();	

		pageFiveTwoIn();
	}
	else if(currentPage==6){


		pageFiveTwoOut();	

		pageSixOneIn();

		setTimeout(function(){	
			pageSixOneOut();

		},7000);
	}
	else if(currentPage>6){
		//window.location.href="http://weixin.nergy.cn/backend/index.html";
		$("#apppart1").show();
		audio.pause();
		bgm.pause();
		$("#arrow").remove();
		$("#logo").remove();
	}
	currentPage++;
	setTimeout(function(){	
		$(".right").show();
	},1000);
}
$("#start_btn").on('touchend',function(){
	$(this).fadeOut();
	$("#arrow").show();
	$("#logo").show();
	animateOut("#page0","fadeOut");	
	//animateOut("#txt0","fadeOut");
	pageOneOneIn();
	setTimeout(function(){
		startbtn=0;
	},200);
});

$(".right").on('touchend',function(){
	if(startbtn==0)
		nextPage();
	$(this).hide();
});
$(document).wipetouch(
{
	wipeDown: function(result) { 
		if(startbtn==0)
			nextPage(); 
	},
	wipeUp: function(result) { 
		if(startbtn==0)
			nextPage(); 
	}
});

function start(){
	
	setTimeout(function(){
		$("#txt0_1").fadeIn();	
		setTimeout(function(){
			bgm.play();

			$("#txt0_1").fadeOut();
	//$(".sound").css("display","block");

	setTimeout(function(){
		$("#txt0_2").fadeIn();

		setTimeout(function(){
			$("#txt0_2").fadeOut();
			$("#start_btn").fadeIn();
			$("#loading").fadeOut();
			$("#bubbles").fadeOut();
		},4000);
	},1000);
},6000);
	},1000);
}

window.onload = function(){
	//audio.play();
	//setTimeout('start()',2000);
	//setTimeout("alert('aaa')",3000);
	$("#arrow").hide();
	if(bgm.paused){
		start();

	}
	//audio.onloadstart=start();
	
	$("#splay").show();
	$("#sclose").hide();
	//var audio = document.querySelector('audio');

	audio.addEventListener('ended', function () {
		audio.src="";
		bgm.play(); 
		
	})
	
}

$("#splay").click(function(){
	musicOn=0;
	audio.pause();
	bgm.pause();
	$("#splay").hide();
	$("#sclose").show();
});

$("#sclose").click(function(){
	musicOn=1;

	audio.play();
	bgm.play();
	$("#splay").show();
	$("#sclose").hide();
});	

function saveUid()
{

	var searchStr = location.search;
	searchStr = searchStr.substr(1);
	var searches = searchStr.split("&");
	var ids = searches[0].split("=");
	var uid = ids[1];
	$.ajax({
		type: "GET",
		url: "savewxid.php",
		data: "wxid="+uid,
		success: function(msg)
		{
		//alert( "Uid Saved: " + msg );
	}
});
}	

var addEvent = function(elId,listener){
	document.getElementById(elId)
	.addEventListener('click',function(e){
		if(!window.WeixinApi || !window.WeixinJSBridge) {
			alert('请确认您是在微信内置浏览器中打开的，并且WeixinApi.js已正确引用');
			e.preventDefault();
			return false;
		}
		listener(this,e);
	},false);
};

WeixinApi.ready(function(Api) {
	var wxData = {
		"appId": "", // 服务号可以填写appId
		"imgUrl" : 'http://weixin.nergy.cn/backend/img/headimg3.jpg',
		"link" : window.location.href,
		"desc" : 'New Balance携手李宗盛致匠心。',
		"title" : "李宗盛首次执笔脚本，广告人唏嘘：幸好他写歌去了。"
	};
	var wxData2 = {
		"appId": "", // 服务号可以填写appId
		"imgUrl" : 'http://weixin.nergy.cn/backend/img/headimg3.jpg',
		"link" : window.location.href,
		"desc" : '李宗盛首次执笔脚本，广告人唏嘘：幸好他写歌去了。',
		"title" : ""
	};
	var wxCallbacks = {
		ready : function() {
		},
		cancel : function(resp) {
		},
		fail : function(resp) {
		},
		confirm : function(resp) {
			saveUid();
		},
		all : function(resp) {
		}
	};

	Api.shareToFriend(wxData, wxCallbacks);
	Api.shareToTimeline(wxData2, wxCallbacks);

	Api.shareToWeibo(wxData, wxCallbacks);

	WeixinApi.hideOptionMenu();
	WeixinApi.showOptionMenu();
	WeixinApi.hideToolbar();
	WeixinApi.showOptionMenu();
});
});