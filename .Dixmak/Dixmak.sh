bash .banner
echo "Introduce el nombre de tu diccionario:"
read input
bash .dx |& tee $input.txt