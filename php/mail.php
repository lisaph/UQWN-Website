<?php
print_r($_POST);

$DESTINATION = "admin@uqwomensnetwork.com";

$mailAddress = $_POST['email'];
$name = $_POST['first-name'] . " " . $_POST['last-name']; 
$subject = $name . " " . $_POST['subject'];
$txt = $_POST['message'];

echo($mailAddress);
echo($name);
echo($subject);
echo($txt);

$headers = "From: admin@uqwomensnetwork.com";

mail($mailAddress, $subject, $txt, $headers);
?>