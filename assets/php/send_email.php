<?php
header('Content-Type: text/html; charset=UTF-8');

$name = trim($_POST['n']);
$email = trim($_POST['e']);
$msg = trim($_POST['m']);
if($name != '' && $email != '' && msg != ''){
  // Destinatario
  $email_to = "gatto.francesco.90@gmail.com";
  // HEADERS
  $headers = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/plain; charset=UTF-8 \n";
  $headers .= "From: ".$email." <".$email."> \n";
  // Oggetto della mail
  $object = "Form WebCV - ".$name."";
  // Mittente (header corpo mesaggio)
  $body = "Inviata da ".$name." (".$email.") dal sito CV. \n\n";
  // Corpo messaggio
  $body .= $msg;
  // Controlli sul $body
  $body = htmlentities($body, ENT_COMPAT, 'UTF-8');
  $body = str_replace("&agrave;", "à", $body);
  $body = str_replace("&egrave;", "è", $body);
  $body = str_replace("&igrave;", "ì", $body);
  $body = str_replace("&ograve;", "ò", $body);
  $body = str_replace("&ugrave;", "ù", $body);
  $body = str_replace("&eacute;", "é", $body);
  $body = str_replace("&amp;", "&", $body);
  if(mail($email_to, $object, $body, $headers)){
  	echo true;
  }
  else{
  	echo false;
  }
}

?>