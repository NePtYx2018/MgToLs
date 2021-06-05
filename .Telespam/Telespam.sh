bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Spamear Codigos"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
bash .banner
read -p "Numero: " a
kcs=$(cat .org)
wjjd=$(sed "s/base/$a/g" .org)
caca=$(echo "$wjjd" > .org1)
chmod 777 .org1
bash .banner
echo "(Para terminar presiona CTRL + C)"
echo ""
leer=$(echo "0")
CONTADOR=0
fin=99999999999
while [  $CONTADOR -lt $fin ]; do
xd=$(expr $leer + 1)
echo "SPAM: $xd NUMERO: $a"
hddj=$(./.org1)
leer=$(echo "$xd")
done
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para continuar..." l
bash Telespam.sh
fi

if [ "$num" = "3" ];then
bash .banner
echo "                Gracias por usar Telespam!!"
echo ""
fi

