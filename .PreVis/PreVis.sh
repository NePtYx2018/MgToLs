bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Abrir Servidor"
echo "2)Configurar servidor"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
bash .open
fi

if [ "$num" = "2" ]; then
bash .srv
fi

if [ "$num" = "3" ]; then
bash .ay
fi

if [ "$num" = "4" ]; then
bash .banner
echo "                               Gracias por usar PreVis!"
echo ""
fi
