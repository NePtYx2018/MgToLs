bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Decifrar clave Wifi"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read num

# Zona if

if [ "$num" = "1" ]; then
bash .wifi
fi

if [ "$num" = "2" ]; then
bash .ay
fi

if [ "$num" = "3" ]; then
bash .banner
echo "                        Gracias por usar WifiCrack!"
echo ""
fi
