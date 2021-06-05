bash .banner
echo "Introduce la opcion que usaras:"
echo ""
echo "1)Miarroba Ftp Crack"
echo "2)Ftp Crack Personalizado"
echo "3)Transformar Diccionario"
echo "4)Ayuda"
echo "5)Salir"
echo ""
read num

# Zona if

if [ "$num" = "1" ]; then
bash .flsx
fi

if [ "$num" = "2" ]; then
bash .perz
fi

if [ "$num" = "3" ]; then
bash .trans
fi

if [ "$num" = "4" ]; then
bash .ayuda
fi

if [ "$num" = "5" ]; then
bash .banner
echo "                              Gracias por usar FtpCrack!"
echo ""
fi

# Fin zona if
