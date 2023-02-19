<?php
// define variables and set to empty values
$name = $subject = $email = $message = "";

if (isset($_POST["submit"])){
       $to = "chhaya.mist@gmail.com"; 
       $name = test_input($_POST["name"]);
       $subject = test_input($_POST["subject"]);
       $email = test_input($_POST["email"]);
       $message = test_input($_POST["message"]);
       $message = "Name : ".$name."<br> Email ".$email."<br>".$message;
      
        if(mail($to, $subject,$message )){
            echo "Your message has been sent successfully.";
            echo "<br>";
            echo "I will get back to you shortly.";
        }
        else{
            echo "There is something error. Couldn't sent your message.";
        }
    }

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}