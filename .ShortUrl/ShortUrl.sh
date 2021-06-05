bash .banner
echo "Introduce la opcion que deseas utilizar:"
echo ""
echo "1)Camuflar Url"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
bash .banner
echo "Introduce tu url a camuflar (Recomendado acortada con bit.ly):"
read acort
bash .banner
echo "Introduce una url que tenga que ver con la url que acortaste:"
read url
bash .banner
echo "Acortando Url..." |pv -qL 8
bash .banner
echo "Aqui esta tu url camuflada:"
echo ""
echo "$url@$acort"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash ShortUrl.sh
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash ShortUrl.sh
fi

if [ "$num" = "3" ]; then
bash .banner
echo "               Gracias por usar ShortUrl!!"
echo ""
fi
