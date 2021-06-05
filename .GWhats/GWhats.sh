bash .banner
echo "Introduce la opcion a usar:"
echo ""
echo "1)Generador"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
bash .banner
echo "1)String (Recomendado)"
echo "2)String + Numbers"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
echo ".generate" > .cookie
fi

if [ "$num" = "2" ]; then
echo ".generate1" > .cookie
fi
bash .banner
bash .job
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para continuar..." caka
bash GWhats.sh
fi

if [ "$num" = "3" ]; then
bash .banner
echo "                  Gracias por usar GWhats!!"
echo ""
fi
