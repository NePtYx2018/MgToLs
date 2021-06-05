clear
echo "Ddos"
echo " "
echo "By NePtYx"
echo " "
echo "Escribe la ip o url que deseas hacerle un Ddos:"
read input
echo "Atacando a $input..."
ping $input 80
echo " "
echo "Ataque fallido a $input,¿volver al menu?:"
echo " "
echo "1)RouterDevice.sh"
echo "2)Salir ctrl+c"
read input2
./$input2
