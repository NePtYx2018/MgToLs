<?

    // Pon la ruta del directorio de donde listar los archivos desde el root
    $path = "/data/data/com.termux/files/home/Download©/";

    // Abrir la carpeta
    $dir_handle = @opendir($path) or die("Imposible localizar $path");

    // Leer los archivos
    while ($file = readdir($dir_handle)) {

    if($file == "." || $file == ".." || $file == "index.php" )

        continue;
        echo "<a href=\"$file\">$file</a><br />";

    }

    // Cerrar
    closedir($dir_handle);

?>
