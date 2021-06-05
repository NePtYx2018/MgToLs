clear
echo "Obtener ip"
echo " "
echo "by NePtYx"
echo " "
echo "Escribe la url de la pagina que deseas desifrar su"
echo "ip:"
read input
nslookup $input
echo " "
echo "Decifrado exitosamente, que deseas hacer?:"
echo " "
echo "1)RouterDevice.sh"
echo "2)Salir ctrl+c"
read input2
./$input2
