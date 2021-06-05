mkdir Creados
clear
bash .banner
echo "Introduce los caracteres con un punto,"
echo "Ejemplo: s.p.a.m.s.p.a.m.s.p.a.m"
read input
echo "$input" |& tee $input.$input.$input.$input.
mv $input.$input.$input.$input. .anz
bash .alz |& tee Lag.txt
clear
bash .banner
echo "Introduce un nombre para tu Lag:"
read input1
mv Lag.txt $input1.txt
mv $input1.txt Creados
clear
bash .banner
echo "Tu Lag $input1.txt ha sido creado exitosamente,"
echo "esta en la carpeta Creados."
echo ""
echo "Presiona una tecla para continuar..."
read input2
bash WhatsCrack.sh
