<?php
$email = $_POST['email'];
$f = fopen("mailutentiiscritti.txt", "a"); // f= file che tiene i dati
$rigaDaInserire = "Email: {$email}\n"  ;
fwrite($f, $rigaDaInserire); // scrivi,(in $f ossia il file che tiene i dati, rigadainserire ossia l'email)
fclose($f);
header("Refresh: 0; URL =grazie.html");
?>
