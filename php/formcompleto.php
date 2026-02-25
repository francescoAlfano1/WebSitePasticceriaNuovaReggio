<?php
$nome = $_POST['name'];
$email = $_POST['email'];
$commento = $_POST['comment'];
$f = fopen(" datiutenti.txt", "a");
$rigaDaInserire = "Nome: {$nome}
Email: {$email}
Feedback: {$commento}\n"  ;
fwrite($f, $rigaDaInserire);
fclose($f);
header("Refresh: 0; URL =grazie.html");
?>
