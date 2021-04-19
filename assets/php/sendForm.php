<?php

/* Arbeitsaufwand minimiert, da Fragen ersetzt werden können, BSP: i_can_1... */

$rank = isset($_POST['rank']) ? $_POST['rank'] : '';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$mc_name = isset($_POST['mc_name']) ? $_POST['mc_name'] : '';
$age = isset($_POST['age']) ? $_POST['age'] : '';
$heard_from = isset($_POST['heard_from']) ? $_POST['heard_from'] : '';
$strenghts = isset($_POST['strenghts']) ? $_POST['strenghts'] : '';
$weaknesses = isset($_POST['weaknesses']) ? $_POST['weaknesses'] : '';
$bio = isset($_POST['bio']) ? $_POST['bio'] : '';
$contact = isset($_POST['contact']) ? $_POST['contact'] : '';
$playtime = isset($_POST['playtime']) ? $_POST['playtime'] : '';
$time_to_play_week = isset($_POST['time_to_play_week']) ? $_POST['time_to_play_week'] : '';
$time_to_play_weekend = isset($_POST['time_to_play_weekend']) ? $_POST['time_to_play_weekend'] : '';
$i_can_1 = isset($_POST['i_can_1']) ? $_POST['i_can_1'] : '';
$i_can_2 = isset($_POST['i_can_2']) ? $_POST['i_can_2'] : '';
$i_can_3 = isset($_POST['i_can_3']) ? $_POST['i_can_3'] : '';
$i_can_4 = isset($_POST['i_can_4']) ? $_POST['i_can_4'] : '';
$to_do_1 = isset($_POST['to_do_1']) ? $_POST['to_do_1'] : '';
$to_do_2 = isset($_POST['to_do_2']) ? $_POST['to_do_2'] : '';
$to_do_3 = isset($_POST['to_do_3']) ? $_POST['to_do_3'] : '';
$lang_1 = isset($_POST['lang_1']) ? $_POST['lang_1'] : '';
$lang_2 = isset($_POST['lang_2']) ? $_POST['lang_2'] : '';
$lang_3 = isset($_POST['lang_3']) ? $_POST['lang_3'] : '';
$lang_field = isset($_POST['lang_field']) ? $_POST['lang_field'] : '';

$retval = mail("royblunk@gmail.com", "Bewerbungseingang - '" . $rank . "'", 
"Diese Mail wurde mit dem Bewerbungs-Formular verschickt.
\n\nRang: " . $rank . "
\nName: " . $name . "
\nMinecraft-Name: " . $mc_name . "
\nAlter: " . $age . "
\nVon SmashMC gehört durch: " . $heard_from . "
\nStärken: " . $strenghts . "
\nSchwächen: " . $weaknesses . "
\nÜber mich: " . $bio . "
\nKontaktmöglichkeit: " . $contact . "
\nSpielzeit: " . $playtime . "
\nMögliche aktive Zeit innerhalb der Woche: " . $time_to_play_weekend . "
\nMögliche aktive Zeit am Wochenende: " . $time_to_play_weekend . "
\nIch besitze ein funktionierendes Mikrofon: " . $i_can_1 . "
\nIch besitze TeamSpeak3 (oder kompatible Clients): " . $i_can_2 . "
\nIch bin in der Lage, Videos oder Screenshots aufzunehmen: " . $i_can_3 . "
\nIch besitze einen Minecraft Hack-Client: " . $i_can_4 . "
\nSpieler helfen: " . $to_do_1 . "
\nSpieler bestrafen: " . $to_do_2 . "
\nKonflikte lösen: " . $to_do_3 . "
\nDeutsch: " . $lang_1 . "
\nEnglisch: " . $lang_2 . "
\nSonstiges: " . $lang_3 . "
\nAuflistung Sonstiges: " . $lang_field . "
");
  
  if ($retval == true) {
    echo "Success";
  } else {
    echo "Failure";
  }

?>