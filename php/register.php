<?php 
	header("content-type:text/html;charset=utf-8");
	//取出数据
	$username = $_POST["username"];
	$password = $_POST["password"];
	// echo($password);
	//1、链接数据库
	$link = mysql_connect("localhost","root","root");
	//2、判断链接是否可以执行
	if(!$link){
		echo   "数据库链接错误";
		exit;
	}
	//3、设置字符集
	mysql_set_charset("utf8");
	//4、选择数据库
	mysql_select_db("qd1803");
	//5、编写sql语句
	$sql1 = "select username from mlsusers where username = '{$username}'";
	//$sql1 = "select * from mlsusers";

	//6、发送sql语句
	$res = mysql_query($sql1);
	//7、处理结果集
	$result = mysql_fetch_assoc($res);
	$time = time();
	 if($result["username"] === $username){
	 	echo 0;
	 }else{
	 	$sql2 = "insert into mlsusers(username,password,create_time) values('{$username}','{$password}',{$time})";
		$res2 = mysql_query($sql2);
		if($res2){
			echo 1;
		};

	};
	//8、关闭数据库
	mysql_close();
 ?>