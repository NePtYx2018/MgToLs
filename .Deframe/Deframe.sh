#habia que hacer un bucle con los comandos esos que no me recuerdo
#luego utilizar el bucle para leer las weas y compararlas para
#terminar el programa y listo.
rm -fr sprite*
bash .banner
echo "Introduce la opcion a usar:"
echo ""
echo "1)Video To ASCII"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ];then

bash .banner
read -p "Introduce la ruta del video: " rutas
mkdir sprite
bash .banner
echo "Por favor deja tu pantalla de Linux o Termux a maxima"
echo "resolucion para que asi el programa trabaje mejor!!"
echo ""
read -p "Presiona una tecla para continuar..."
bash .banner
echo "Deframe esta trabajando, por favor espera..."
echo ""
ffmpeg -i $rutas %d.jpg
base=$(echo "0")
lista=$(ls *.jpg > .lista)

CONTADOR=0
fin=$(echo "999999999")
while [  $CONTADOR -lt $fin ]; do

valor=p
leer=$(echo "$base")
suma=$(expr $leer + 1 )
line=$(sed -n $suma$valor .lista)
save=$(echo "$line")
base=$(echo "$suma")

if [ "$line" = "" ]; then
mv $rutas $rutas.mp3
echo "xdg-open $rutas.mp3" >> sprite.sh
bash .term
rm -fr *.jpg
bash .ux
exit
else
jp2a $save > sprite/$save
#--size=120x70
fi

done
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para continuar..."
bash Deframe.sh
fi

if [ "$num" = "3" ]; then
bash .banner
echo "                Gracias por usar Deframe!!"
echo ""
exit
fi
