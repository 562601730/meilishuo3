define(["jquery","jquery-cookie"],function($){
	var main = function(){
		$(function(){
			// alert("我是注册模块")
			$(".reg-btn").click(function(){
				if($("#reg-txt").val().length < 3 || $("#reg-txt").val().length > 11){
					$(".reg-msg").html("用户名要在3位到11位之间！");
				}else if($("#reg-pw").val().length < 6 || $("#reg-pw").val().length > 16){
					$(".reg-msg").html("密码要在6位到16位之间！");
				}
				else {
					$.ajax({
						method: "post",
						data: `username=${$("#reg-txt").val()}&password=${$("#reg-pw").val()}`,
						url: "../php/register.php",
						success: function(data){
							
							if(data == 1){
								$(".reg-msg").html("注册成功,请登录！");
								location.href = "login.html";
						 	}else if(data == 0){
							 	$(".reg-msg").html("用户名已存在！");
							}else{
								$(".reg-msg").html("用户名输入错误！");
							}
						},
						error: function(msg){
							alert(msg);
						}

					})
				}
			})
			$("#reg-txt").click(function(){
				$(".reg-msg").html("");
			})
			$(".reg-btn").click(function(){
				
			})

		})
	}
	return {
		main: main
	}
})