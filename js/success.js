$(function(){

	var phone=localStorage.getItem("tel"+localStorage.count);
	$(".text p span").html(phone);

	$(".enter ul li:first-child").addClass("on");

	$(".enter ul li").each(function(index){
		$(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".enter .pages div").hide().eq(index).show();
			console.log(1111);
		});
	});


	$("#doEnter").click(function(){
		$(".enter").show();
		$(".bgc").show();
	});

	$("#doenter").click(function(){
		$(".enter").show();
		$(".bgc").show();
	});

	$(".bgc").click(function(){
		$(".enter").hide();
		$(".bgc").hide();
	});




	$("#btn1").click(function(){
		var flag=1;
		var count=localStorage.count;
		for(var i=1;i<=count;i++){
			var tel=localStorage.getItem("tel"+i);
			var pwd=localStorage.getItem("pwd"+i);
			if(($("#tel1").val()==phone)&&($("#pwd1").val()==pwd)){
				$(".enter .pages .change1 .error").hide();
				flag=2;
				$("#btn1").val("正在提交中...");
				setTimeout(function(){
					$("#myForm").submit();
				}, 1000);
			}
		}
		if(flag==1){
			$(".enter .pages .change1 .error").show();
		}
		
	});
});