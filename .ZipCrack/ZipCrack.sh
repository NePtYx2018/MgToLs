bash .banner
echo "Introduce la opcion que usaras:"
echo ""
echo "1)Zip Force"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read num

# Zona if

if [ "$num" = "1" ]; then
bash .flsx
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
echo "Preciona una tecla para continuar..."
read pause
bash ZipCrack.sh
fi

if [ "$num" = "3" ]; then
bash .banner
echo "                    Gracias por usar ZipCrack!"
echo ""
fi

# Fin zona if
