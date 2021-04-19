<?php

$categorie = isset($_REQUEST['categorie']) ? $_REQUEST['categorie'] : '';
$firstname = isset($_REQUEST['firstname']) ? $_REQUEST['firstname'] : '';
$lastname = isset($_REQUEST['lastname']) ? $_REQUEST['lastname'] : '';
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';
$subject = isset($_REQUEST['subject']) ? $_REQUEST['subject'] : '';
$message = isset($_REQUEST['message']) ? $_REQUEST['message'] : '';

$retval = mail(
      "support@smashmc.eu", 
      "Bewerbungseingang - '" . $rank . "'", 
      "Diese Mail wurde mit dem Kontakt-Formular verschickt.
      \n\nBewerbungsrang: " . $rank . 
      "\nVorname: " . $name . 
      "\nMinecraft-Name: " . $mc_name . 
      "From: " . "Formular");
  
  if ($retval == true) {
    echo "Success";
  } else {
    echo "Failure";
  }

?>