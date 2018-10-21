<?php
	$conn = new mysqli("localhost:3306", "root", "", "5lux");

	$conn->query("set names 'utf8'");
	
	$user = $_GET["user"];
	$pass = $_GET["pass"];
	
	$sql = "select count(*) as num from userlist where username='$user' and password='$pass' ";
	
	$result = $conn->query($sql);
	
	$row = $result->fetch_assoc();
	
	echo $row["num"];
?>