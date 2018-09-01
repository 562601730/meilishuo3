define(["jquery","jquery-cookie"],function($){
	var main = function(){	
		$(function(){
			$(".choose-num-value").blur(function(){
				var i = $(".choose-num-value").val();
				if(isNaN(Number(i)) || i < 1){
					 $(".choose-num-value").val("1");
				}
			})	
			$(".choose-num-add").click(function(){
				$(".choose-num-minus").css("opacity",1);
				var i =	$(".choose-num-value").val();
				i++;
				$(".choose-num-value").val(i);
			})
			$(".choose-num-minus").click(function(){
				var i =	$(".choose-num-value").val();
				i--;
				if(i >= 1){
					$(".choose-num-value").val(i);
					if(i == 1){
					$(".choose-num-minus").css("opacity",0.3);
					}
				}else{
					$(".choose-num-value").val(1)
				}			
			})

		})
		
	}
	return {
		main: main
	}
})
