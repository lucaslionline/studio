// English and Chinese
function abc(){
	$(".eng").toggle("normal");
	$(".chn").toggle("normal");
}




// 自适应td高度等于宽度
function auto() {
	var w=$("td").width();
	$("td").attr('height',w);
	setTimeout(auto,10);
}


//弹出隐藏层
function ShowDiv(show_div,bg_div){
	document.getElementById(show_div).style.display='block';
	document.getElementById(bg_div).style.display='block' ;
};
//关闭弹出层
function CloseDiv(show_div,bg_div)
{
	document.getElementById(show_div).style.display='none';
	document.getElementById(bg_div).style.display='none';
};



function greetingEng(){
	now = new Date();
	hour = now.getHours();
	if (hour >= 4 && hour < 6) {
		document.write("Hello, you got up early today.")
	}
	else if (hour >= 6 && hour < 12) {
		document.write("Good morning! Have a wonderful day.")
	}
	else if (hour >= 12 && hour < 18) {
		document.write("Good afternoon! Have you had lunch, yet?")
	}
	else if (hour >= 18 && hour < 20) {
		document.write("Hello, wanna have dinner together?")
	}
	else if (hour >= 20 && hour < 22) {
		document.write("Good evening! Why not relax youself a bit?")
	}
	else {
		document.write("It's bed time. Don't stay up too late.")
	}
}

function greetingChn(){
	now = new Date();
	hour = now.getHours();
	if (hour >= 4 && hour < 6) {
		document.write("你好，早啊！")
	}
	else if (hour >= 6 && hour < 12) {
		document.write("早上好！今天要加油喔。")
	}
	else if (hour >= 12 && hour < 18) {
		document.write("下午好！吃過午飯了嗎？")
	}
	else if (hour >= 18 && hour < 20) {
		document.write("你好，一起吃晚飯嗎？")
	}
	else if (hour >= 20 && hour < 22) {
		document.write("晚上好，放鬆自己一下吧。")
	}
	else {
		document.write("該睡覺了，不要熬夜喔。")
	}
}




// form style
function onFocus(x){
	if (x.value == x.defaultValue){
		x.value = '';
		x.style.color = 'rgba(0, 0, 0, 0.8)';
	}
	else if (x.value != x.defaultValue){
		x.style.color = 'rgba(0, 0, 0, 0.8)';
	}
}
function onBlur(x){
	if (x.value == ''){
		x.value = x.defaultValue;
		x.style.color = 'rgba(0, 0, 0, 0.4)';
	}
	else if (x.value != ''){
		x.style.color = 'rgba(0, 0, 0, 0.4)';
	}
}



// Scroll to Top
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('#toTop').fadeIn("fast");
	} 
	else {
		$('#toTop').fadeOut("fast");
	}
});



// Hide and Show
function slideToggle(){
	$("div.launchpad").slideToggle("");
}
function hide(){
	$("#launchpad").hide("");
}

function coverSwitch(){
	$("#cover-menu").toggle("slow");
	$("#cover-widget").toggle("slow");
}

function favorites(){
	$(".favorites").animate({width: 'toggle'});
}



// Toggle
$(document).ready(function(){
	$(".toggle-btn1").click(function(){
		$(".start").slideToggle("normal");
	});
});

$(document).ready(function(){
	$(".toggle-img").click(function(){
		$(".subdate").slideToggle("normal");
		$(".subtitle").slideToggle("normal");
	});
});




// Log in 
function login() {
	var p = document.getElementById("password").value;
	if (p == "ll"){
		location.href = "texts.html";
	}
	else {
		window.alert("ID not recognized!")
	}
}


// Need a reply / Attach a file
function reply(x){
	if(x.checked){
		$("p#email-phone").show("");
	} else {
		$("p#email-phone").hide("");
	}
}
function attach(x){
	if(x.checked){
		$("p#attachment").show("");
	} else {
		$("p#attachment").hide("");
	}
}










