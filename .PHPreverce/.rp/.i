<?php
//Directorio
$dir = getcwd();
$directorio = opendir($dir);

$archivos = array();
$carpetas = array();

//Carpetas y Archivos a excluir
$excluir = array('.', '..', 'index.php', 'favicon.ico','folder.png','file.png','.dropbox.cache','.dropbox');

while ($f = readdir($directorio)) {
    if (is_dir("$dir/$f") && !in_array($f, $excluir)) {
        $carpetas[] = $f;
    } else if (!in_array($f, $excluir)){
        //No es una carpeta, por ende lo mandamos a archivos
        $archivos[] = $f;
    }
}
closedir($directorio);

sort($carpetas,SORT_NATURAL | SORT_FLAG_CASE);
sort($archivos,SORT_NATURAL | SORT_FLAG_CASE);
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Localhost</title>

        <style>
            body {
                margin: 0;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 14px;
                line-height: 20px;
                color: #333333;
                background-color: #ffffff;
                display: block;
                overflow-y:scroll;
            }

            .fondo{
                border: 1px solid #ccc;
                border-radius: 5px;
                margin-left: -12px;
                padding: 5px;
                background:#FCFCFC;
                display: block;
            }

            .container {
                margin-right: auto;
                margin-left: auto;
                width: 940px;
                display: block;
            }

            .footer {
                margin-right: auto;
                margin-left: auto;
                width: 940px;
                display: block;
                text-align: right;
                font-size: 9px;
                margin-top: 10px;
            }

            h1 {
                font-size: 38px;
                margin: 30px 0 10px 0;
                font-weight: bold;
                line-height: 20px;
            }

            .row {
                margin-left: -20px;
                display: inline-block;;
            }

            .col {
                width: 300px;
                float: left;
                min-height: 1px;
                margin-left: 20px;
                display: block;
            }

            p {
                margin: 0 0 10px 0;
            }

            .carpeta{
                background: url(/Dropbox/folder.png) no-repeat 0;
                padding-left: 20px;
            }

            .archivo{
                background: url(/Dropbox/file.png) no-repeat 0;
                padding-left: 20px;
            }

            a {
                color: #336699;
                text-decoration: none;
                font-weight: bolder;
            }
		a:hover {
                color: #7094B8;
                text-decoration: none;
                font-weight: bolder;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Directorios</h1>
            <div class="fondo">
                <div class="row">
                    <div class="col">
                        <?php
                        //Mostrar Carpetas
                        $i = 1;
                        foreach ($carpetas as $c) {
                            echo '<p class="carpeta"><a href="' . $c . '">' . $c . '</a></p>';
                            if (($i % 6) == 0 && ($i % 18) != 0) {
                                echo '</div><div class="col">';
                            }
                            if (($i % 18) == 0) {
                                echo '</div></div><div class="row"><div class="col">';
                            }
                            $i++;
                        }
                        ?>
                    </div>
                </div>
            </div>
            <h1>Archivos</h1>
	
            <div class="fondo">
                <div class="row">
                    <div class="col">
                        <?php
                        //Mostrar Archivos
                        $i = 1;
                        foreach ($archivos as $a) {
                            echo '<p class="archivo"><a href="' . $a . '">' . $a . '</a></p>';
                            if (($i % 6) == 0 && ($i % 18) != 0) {
                                echo '</div><div class="col">';
                            }
                            if (($i % 18) == 0) {
                                echo '</div></div><div class="row"><div class="col">';
                            }
                            $i++;
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
