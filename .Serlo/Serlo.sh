pkg install dnsutils
mkdir Ip
bash .banner
echo "Introduce el url que deseas sacar Ip:"
read input
bash .banner
nslookup $input |& tee $input.txt
mv $input.txt Ip
bash .banner
echo "Los datos se han guardado en el archivo '$input.txt'"
echo "deseas verlos?:"
read input1
cd Ip
cat $input.txt
cd ..
echo "==================="
echo "Preciona una tecla para continuar..."
read input2
bash Serlo.sh