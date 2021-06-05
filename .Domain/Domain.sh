bash .banner
echo "Intrdouce la opcion que usaras:"
echo ""
echo "1)Buscar Dueño"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
bash .banner
read -p "Introduce el dominio a buscar: " dom
bs=$(w3m -dump https://$dom.siteindices.com)
bash .banner
echo "Resultados para el dominio $dom:"
echo ""
echo "$bs"
echo ""
read -sp "Presiona una tecla para continuar..." pause
bash Domain.sh
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
read -sp "Presiona una tecla para continuar..." pause
bash Domain.sh
fi

if [ "$num" = "3" ]; then
bash .banner
echo "           Gracias por usar Domain!!"
fi
