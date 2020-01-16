<?php
$DESTINATION = "admin@uqwomensnetwork.com";

$mailAddress = $_POST['email'];
$name = $_POST['first-name'] . " " . $_POST['last-name']; 
$subject = "New contact request from " . $name . " " . $mailAddress;
$txt = $_POST['subject'] . " " . $_POST['message'];

$headers = "From: admin@uqwomensnetwork.com";

if (mail($DESTINATION, $subject, $txt, $headers)) {
	echo("SUCCESS");
}	
?>

Thankyou for your message. We will endeavour to repond to you as fast as possible.

<a href="http://uqwomensnetwork.com"> HOME </a>
