mkdir .cl
bash .banner
echo "Introduce el numero de telefono que deseas spammear:"
read input
echo "$input" |& tee .cl/Numb
bash .banner
echo "TerApi esta atacando porfavor deje de usar su celular"
echo "mientras esto ocurra para terminar solo preciona CTRL+C"
echo "o apaga el telefono..."
bash .atc
