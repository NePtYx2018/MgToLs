<?php
$fa = fopen("op.txt", "w+");
fwrite($fa,"");
fclose($fa);
$Fichero = "op.txt";
$ip = $_SERVER["REMOTE_ADDR"];
$fecha = date("Y-m-d;H:i:s");
$sistema = $_SERVER['HTTP_USER_AGENT'];
$conproxy = $_SERVER["HTTP_X_FORWARDED_FOR"];
$log = "Sesion $fecha: SISTEMA: $sistema IP: $ip IPPROXY: $conproxy \x0D\x0A";
$fp = fopen($Fichero, "a" );
fwrite($fp, $log);
fclose($fp);
?>
