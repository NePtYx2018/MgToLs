<?php
function listar_archivos($carpeta){
    if(is_dir($carpeta)){
        if($dir = opendir($carpeta)){
            while(($archivo = readdir($dir)) !== false){
                if($archivo != '.' && $archivo != '..' && $archivo != '.htaccess'){
                    echo '<li><a target="_blank" href="'.$carpeta.'/'.$archivo.'">'.$archivo.'</a></li>';
                }
            }
            closedir($dir);
        }
    }
}
echo listar_archivos('ft/');
?>