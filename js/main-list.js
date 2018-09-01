//配置模块
 // alert("我是主函数");
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"list": "list"
	},
	shim: {
		"jquery-cookie": ["jquery"]
	}
})
require(["list"],function(list){
	list.main();
})