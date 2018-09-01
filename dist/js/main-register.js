//配置模块
// alert("我是主函数");
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"register": "register",
	},
	shim: {
		"jquery-cookie": ["jquery"]
	}
})
require(["register"],function(register){
	register.main();
})