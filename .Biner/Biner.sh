mkdir $HOME/MgToLs/Biner
a=$(echo "0" > .play)
bash .banner
echo "Introduce la opcion que deseas utilizar:"
echo ""
echo "1)Vereficar Bin"
echo "2)Buscar Bin"
echo "3)Generar Bin"
echo "4)Ayuda"
echo "5)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
bash .banner
echo "Inteoduce tu bin:"
read bin
bash .banner
echo "Informacion de la tarjeta:"
echo ""
a=$(w3m -dump https://ccbins.pro/?bins=$bin)
echo "$a" > .b
grep BIN: .b
grep Country: .b
grep Vendor: .b
grep Type: .b
grep Level: .b
grep Bank: .b
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Biner.sh
fi

if [ "$num" = "2" ]; then
bash .bucle
fi

if [ "$num" = "3" ]; then

bash .banner
echo "Introduce el bin de 6 dijitos:"
read numa
bash .banner
echo "Introduce cuantas tarjetas deseas generar:"

read input

bash .banner

echo "     Bin        | Fecha |Ccv"
CONTADOR=0
while [  $CONTADOR -lt $input ]; do

a=$(echo $((RANDOM%9)))
b=$(echo $((RANDOM%9)))
c=$(echo $((RANDOM%9)))
d=$(echo $((RANDOM%9)))
e=$(echo $((RANDOM%9)))
f=$(echo $((RANDOM%9)))
k=$(echo $((RANDOM%9)))
h=$(echo $((RANDOM%9)))
i=$(echo $((RANDOM%9)))
j=$(echo $((RANDOM%9)))
k=$(echo $((RANDOM%9)))
m=$(echo $((RANDOM%9)))
n=$(echo $((RANDOM%9)))
w=$(echo $((RANDOM%9)))
l=$(echo $((RANDOM%9)))
o=$(echo $((RANDOM%9)))

ano=$(echo $((RANDOM%9)))
cc=$(echo $((RANDOM%9)))
cca=$(echo $((RANDOM%9)))
ccb=$(echo $((RANDOM%9)))

echo "$numa$g$h$i$j$k$m$n$w$l$o|0$j|202$ano|$cc$cca$ccb"
ka=$(echo "$numa$g$h$i$j$k$m$n$w$l$o|0$j|202$ano|$cc$cca$ccb" >> na)

let CONTADOR=CONTADOR+1

done
echo ""
echo "Introduce un nombre para el archivo con las tarjetas:"
read name
mv na $HOME/MgToLs/Biner/$name.txt
bash .banner
echo "Datos guardados en $HOME/MgToLs/$name.txt exitosamente!"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Biner.sh

fi


if [ "$num" = "4" ]; then
bash .banner
cat Readme.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Biner.sh
fi

if [ "$num" = "5" ]; then
bash .banner
echo "                            Gracias por usar Biner!"
echo ""
fi
