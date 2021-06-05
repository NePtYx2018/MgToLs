bash .banner
echo "Introduce la opcion que usaras:"
echo ""
echo "1)Fuerza Bruta"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read num

# Zona if

if [ "$num" = "1" ]; then
bash .flsx
fi

if [ "$num" = "2" ]; then
bash .ayuda
fi

if [ "$num" = "3" ]; then
bash .banner
echo "                              Gracias por usar FBrute!!"
echo ""
fi

# Fin zona if
