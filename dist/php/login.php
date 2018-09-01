<?php 
	header("content-type:text/html;charset=utf-8");
	$link = mysql_connect("localhost","root","root");
	if(!$link){
		echo "连接数据库失败";
		exit;
	};
	mysql_set_charset("utf-8");
	mysql_select_db("qd1803");
	$username = $_POST["username"];
	$password = $_POST["password"];
	// var_dump($_POST);
	$sql = "select * from mlsusers where username='$username'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_assoc($res);
	// var_dump($arr);
	if($username == $arr["username"]){
		if($password == $arr["password"]){
			echo 1;
		}else{
			echo 2;
		}
	}else{
			echo 3;
	}
 ?>