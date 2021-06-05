df=$(echo $RANDOM)
date=$(date +'%m-%d')
bash .banner
echo "Introduce la opcion que deseas realizar:"
echo ""
echo "1)Mostrar Docentes"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read los

if [ "$los" = "1" ]; then
bash .banner
echo "Inteoduce el nombre o iniciales del colegio:"
read nume
uwuf=$(echo "$nume" > .reecx)
num=$(sed 's/ /+/g' .reecx)
bash .banner
echo "Introduce la localidad:"
read mee
jejfje=$(echo "$mee" > .reecj)
me=$(sed 's/ /+/g' .reecj)
reg=$(echo "$num" > .n)
rega=$(echo "$me" > .m)
#bash .t > reg.txt
bash .t
bash .banner
ping -i 4 -c 4 localhost | echo "Cargando..."
echo "Listo!"
ping -i 4 -c 4 localhost | echo "Obteniendo nombres..."
bash .banner
savea=$(grep https://www.google.com/url?q=https://www.mime.mineduc.cl reg.txt > .url)
bash .banner
sexa=$(grep https://www.google.com/url?q=https://www.mime.mineduc.cl .url)
bash .banner
bash .o > .oh
bash .banner
grep https://www.mime.mineduc.cl .oh > .def
bash .ei > .dos
rm -fr reg.txt

bash .banner
echo "A continuacion veras los resultados los cuales quedaran guardados en"
echo "una carpeta llamada SDoxing en MgToLs/"
echo ""
echo "Presiona una tecla pars continuar..."
read pause
mkdir $HOME/MgToLs/SDoxing
bash .banner
echo "Mostrando resultados:"
echo ""
grep │ .dos > $HOME/MgToLs/SDoxing/$df.txt
cat $HOME/MgToLs/SDoxing/$df.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash SDox.sh
fi

if [ "$los" = "2" ]; then
bash .ayuda
fi

if [ "$los" = "3" ]; then
bash .banner
echo "Gracias a todos por usar SDox y por su apoyo!! Este programa fue testeado"
echo "por primera vez por Esteban Perez en 01-04-2020. Gracias y hasta la proxima."
echo ""
fi
