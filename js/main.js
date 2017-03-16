$(function(){
	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;
	var flag5=false;
	$("#tel").blur(function(){

		var count=localStorage.count;
		for(var i=1;i<=count;i++){
			var telp=localStorage.getItem("tel"+i);
			if(telp==$("#tel").val()){
				console.log(123);
				$(this).css("border-color","#ff9000");
				$("#telimg").hide();
				$("#telInfo").show();
				$("#telInfo").click(function(){
					$("#tel").val("");
				});
				$("#telText").html("该号码已被注册");
				$("#telText").css("display","inline-block");
				flag1=false;
				return flag1;
			}
		}

		var reg=/^1\d{10}$/;
		if(reg.test($(this).val())){
			$(this).css("border-color","#ddd");
			$("#telInfo").hide();
			$("#telimg").show();
			$("#telText").css("display","none");
			flag1=true;
		}else{
			$(this).css("border-color","#ff9000");
			$("#telimg").hide();
			$("#telInfo").show();
			$("#telInfo").click(function(){
				$("#tel").val("");
			});
			$("#telText").css("display","inline-block");
			flag1=false;
		}
	});



	$("#pwd").blur(function(){
		var reg=/^[\da-z]{4,10}$/i;
		if(reg.test($(this).val())){
			$(this).css("border-color","#ddd");
			$("#pwdInfo").hide();
			$("#pwdimg").show();
			$("#pwdText").css("display","none");
			flag2=true;
		}else{
			$(this).css("border-color","#ff9000");
			$("#pwdimg").hide();
			$("#pwdInfo").show();
			$("#pwdInfo").click(function(){
				$("#pwd").val("");
			});
			$("#pwdText").css("display","inline-block");
			flag2=false;
		}
	});

	$("#repwd").blur(function(){
		if($(this).val()==$("#pwd").val()){
			$(this).css("border-color","#ddd");
			$("#repwdInfo").hide();
			$("#repwdimg").show();
			$("#repwdText").css("display","none");
			flag3=true;
		}else{
			$(this).css("border-color","#ff9000");
			$("#repwdimg").hide();
			$("#repwdInfo").show();
			$("#repwdInfo").click(function(){
				$("#repwd").val("");
			});
			$("#repwdText").css("display","inline-block");
			flag3=false;
		}
	});



	$("#email").blur(function(){
		var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
		if(reg.test($(this).val())){
			$(this).css("border-color","#ddd");
			$("#emailInfo").hide();
			$("#emailimg").show();
			$("#emailText").css("display","none");
			flag4=true;
		}else{
			$(this).css("border-color","#ff9000");
			$("#emailimg").hide();
			$("#emailInfo").show();
			$("#emailInfo").click(function(){
				$("#email").val("");
			});
			$("#emailText").css("display","inline-block");
			flag4=false;
		}
	});


	$("#inputCode").blur(function(){
		if(this.value.toLowerCase()=="nodick"){
			console.log(123);
			$(this).css("border-color","#ddd");
			$("#codeInfo").hide();
			$("#codeimg").show();
			$("#codeText").css("display","none");
			flag5=true;
		}else{
			$(this).css("border-color","#ff9000");
			$("#codeimg").hide();
			$("#codeInfo").show();
			$("#codeInfo").click(function(){
				$("#inputCode").val("");
			});
			$("#codeText").css("display","inline-block");
			flag5=false;
		}
	});

	$("#box").click(function(){
		if($("#box").prop("checked")){
			$(":button").prop("disabled",false);
			$(":button").css("background-color","#ff9000");
		}else {
			$(":button").prop("disabled",true);
			$(":button").css("background-color","#ccc");
		}	
	});
	// $(":button").prop("disabled","true");
	// console.log($(":button").prop("disabled"));
	

	$(":button").click(function(){
		if(flag1&&flag2&&flag3&&flag4&&flag5){

			var count=localStorage.count;
			if(!count){
				count=1;
			}else{
				count++;
			}
			
			localStorage.setItem("tel"+count,$("#tel").val());
			localStorage.setItem("pwd"+count,$("#pwd").val());
			localStorage.count=count;
			$(this).val("正在提交中...");
			setTimeout(function(){
				$("#myForm").submit();
			}, 1000);
			// alert(1111);
			// location.href="test.html";
		}//else {
		// 	alert("请按要求填写");
		// }


	});

	console.log(localStorage);
	// localStorage.clear();

});

	
