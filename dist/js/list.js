define(["jquery","jquery-cookie"],function($){
	var main = function(){
		$(function(){
			var oNav = document.getElementById("nav");
			var oCatalog = document.getElementById("catalog");
			navFixed(oNav,oCatalog);
			function navFixed(obj,target){
			 	window.onscroll =　function(){
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					var Top  = target.offsetTop;
					if(scrollTop >= Top){
						obj.className = "nav-fixed";
					}else{
						obj.className = "";
					}
				}
			 }
		})
	}
	return {
		main: main
	}
})
