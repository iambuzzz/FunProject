<?php
$connect=mysqli_connect('localhost','root');
if($connect){
    echo "Connection Successfull.";
}
else{
    echo "Connection Failed!";
}
mysqli_select_db($connect,'contactusdata');
$user=$_POST['name'];
$email=$_POST['email'];
$mobile=$_POST['mobile'];
$comment=$_POST['comment'];
$query="insert into userdatainfo (user, email, mobile, comment) values('$user','$email','$mobile','$comment')";
mysqli_query($connect,$query);
header('location:index.php');
?>