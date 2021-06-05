bash .banner
echo "Introduce el numero de el destinatario:"
read num
ert=$(echo "$num" |& tee .num)
bash .banner
echo "Que opcion deseas realizar:"
echo ""
echo "1)Sms Personalizado"
echo "2)Sms Bomba"
echo "3)Credenciales"
echo "4)Ayuda"
echo "5)Salir"
echo ""
read num

# Inicio de if

if [[ "$num" < "1" ]]; then
echo "Eleccion no encontrada :c"
read pause
bash SmsBomber.sh
fi

if [ "$num" = "1" ]; then
bash .per
fi

if [ "$num" = "2" ]; then
bash .bomb
fi

if [ "$num" = "3" ]; then
bash .key
fi

if [ "$num" = "4" ]; then
bash .ay
fi

if [ "$num" = "5" ]; then
bash .banner
echo " Gracias por usar SmsBomber!!"
fi

if [[ "$num" > "5" ]]; then
echo "Eleccion no encontrada :c"
read pause
bash SmsBomber.sh
fi

# Fin de if
