chnod 777 *
bash .banner
echo "Introduce tu gmail:"
read input |& tee .dk/gm.txt
bash .banner
echo "Introduce el nombre de tu Remoteduck (Solo una palabra):"
read input1
bash .banner
echo "Creando..."
echo ""
cp .dk -r $input1
mv $input1/program.exe $input1/$input1.exe
echo "Precione una tecla para continuar..."
read input3
bash .banner
echo "Su Remoteduck ha sido creado exitosamente"
echo "que desea hacer:"
echo ""
echo "==============="
echo "1)Comprimirlo ="
echo "2)Verlo       ="
echo "3)Agregar Key ="
echo "4)Agregar Url ="
echo "5)Salir       ="
echo "==============="
read input2
bash .$input2
