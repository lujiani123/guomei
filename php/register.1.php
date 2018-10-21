    <?php
    header("Content-Type:text/html;charset=utf-8;");
#1.从前端拿来数据;
            $username=@$_POST["username"];
            $password=@$_POST["password"];
#2.把数据放入到数据库之中
//1如何连接数据库;
            $con=mysql_connect("localhost","root","123456");
            if(!$con){
        die("数据库连接失败");
            }
            mysql_select_db("userlist",$con);

            //判断是否存在相同的用户名

            $result=mysql_query(
                    "
                    SELECT username FROM 
                detaillist WHERE username='$username'
                    "
            );
            $count=0;
            while($row=mysql_fetch_array($result)){
                $count++;
            }
            //用户名重名
            if($count!=0){
                die("用户名重名");
            }

            //加密密码

            $password=md5($password);

            mysql_query("INSERT INTO detaillist(password,username)
            VALUES ('$password','$username')");
        if(mysql_error()){
            die("数据库错误");
        }
        echo "注册成功";
?>