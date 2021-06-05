bash .banner
echo "Introduce la opcion que deseas realizar:"
echo ""
echo "1)Enviar numero a soporte"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
bash .mn
fi

if [ "$num" = "2" ]; then
bash .ay
fi

if [ "$num" = "3" ]; then
bash .banner
echo "                            Gracias por usar FireWhats!!"
fi

