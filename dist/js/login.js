define(["jquery","jquery-cookie"],function($){
	var main = function(){
		$(function(){
			// alert("我是注册模块")
			$(".log1-btn").click(function(){
				$.ajax({
					method: "post",
					data: `username=${$("#log1-txt").val()}&password=${$("#log1-pw").val()}`,
					url: "../php/login.php",
					success: function(data){	
						if(data == 1){
							$(".log1-msg").html("登录成功！");
							location.href = "index.html";
						}else if(data == 2){
							 $(".log1-msg").html("密码输入错误！");
						}else if(data == 3){
							$(".log1-msg").html("用户名不存在！");
						}else{
							$(".log1-msg").html("输入有误")
						}
					},
					error: function(msg){
						alert(msg);
					}

				})
			})
			$("#log1-txt").click(function(){
				$(".log1-msg").html("");
			})

		})
	}
	return {
		main: main
	}
})