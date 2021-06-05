bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Buscar"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
bash .funx
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Dogle.sh
fi

if [ "$num" = "3" ]; then
bash .banner
echo "            Gracias por usar Dogle!!"
echo ""
fi
