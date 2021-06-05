clear
echo "Ping"
echo " "
echo "By NePtYx"
echo " "
echo "Introduce la ip o url que deseas leer:"
read input
echo " "
echo "Leyendo a $input"
ping $input
echo " "
echo "Error al capturar paquetes a $input fallido."
echo "Escribe la opcion que desees hacer:"
echo " "
echo "1)RouterDevice.sh"
echo "2)Salir ctrl+c"
read input2
./$input2
