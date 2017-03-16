$(function(){
	var phone=localStorage.getItem("tel"+localStorage.count);
	$(".code p span").html(phone);
	console.log(localStorage);
});


$(function(){
	$("#randomCode").html(generateRandomCode());



	$("#btn").click(function(){
		if($("#telCode").val()!=$("#randomCode").html()){
			$("#randomCode").html(generateRandomCode());
			return;
		}else {
			$(this).val("正在提交中...");
			setTimeout(function(){
				$("#myForm").submit();
			}, 1000);
		}
		
	});


	$("#time").click(function(){
		var num=5;
		var timer=setInterval(countdown,1000);
		$("#randomCode").html(generateRandomCode());

		function countdown(){
			if(num>0){
				$("#time span").html(num+"秒");
				num--;
				$("#time").prop("disabled",true);
			}else{
				$("#time span").html("");
				$("#time").prop("disabled",false);
				clearInterval(timer);
			}

		}

	});




});

function generateRandomCode(){
	var str="";
	for(var i=1;i<=4;i++){
		var n=Math.floor(Math.random()*9);
		str+=n;
	}
	return str;
}


