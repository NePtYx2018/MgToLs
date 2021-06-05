casa=$(echo $HOME)
bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Descargar Url"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
bash .banner
echo "Introduce el video a descargar:"
read enlace
bash .banner
echo "Vereficando enlace, porfavor espera..."
joder=$(youtube-dl -F $enlace)
bash .banner
echo "$joder"
echo ""
echo "Intoduce el codigo de el video:"
read code
bash .banner
echo "Descargando video presente en el enlace $enlace..."
ks=$(mkdir Descargas)
ks=$(cd Descargas)
joder=$(youtube-dl -f $code $enlace)
ks=$(cd ..)
ks=$(mv *.mp4 Descargas; mv *.mp3 Descargas; mv *.webm Descargas; mv *.m4a Descargas)
ks=$(mv Descargas $casa/MgToLs/)
bash .banner
echo "Video descargado y guardado en $casa/MgToLs/Descargas!!"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Mpdown.sh
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
fi

if [ "$num" = "3" ]; then
bash .banner
echo "Gracias por usar Mpdown!!"
echo ""
fi


