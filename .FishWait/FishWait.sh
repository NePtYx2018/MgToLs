bash .banner
echo "Introduce la opcion que deseas realizar:"
echo ""
echo "1)Montar Servidor"
echo "2)Crear Apk"
echo "3)Ver resultados"
echo "4)Ayuda"
echo "5)Salir"
echo ""
read num

# Zona If

if [[ "$num" < "1" ]]; then
bash FishWait.sh
fi

if [[ "$num" > "5" ]]; then
bash FishWait.sh
fi

if [ "$num" = "1" ]; then
bash .srv
fi

if [ "$num" = "2" ]; then
bash .cr
fi

if [ "$num" = "3" ]; then
bash .res
fi

if [ "$num" = "4" ]; then
bash .ay
fi

if [ "$num" = "5" ]; then
bash .banner
echo "Gracias por usar FishWait!!"
fi
