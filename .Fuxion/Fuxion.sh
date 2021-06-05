clear
echo "FFFF"
echo "F             ii"
echo "FFF  u  u x x    ooo nnn"
echo "F    u  u  x  ii o o n  n"
echo "F     uuu x x ii ooo n  n"
echo "=========="
echo "by=NePtYx="
echo "=========="
echo "Introduce la ruta del primer archivo:"
read input
echo ""
echo "Introduce la ruta del segundo archivo:"
read input1
echo ""
echo "Introduce un nombre para la fucion:"
read input2
echo ""
cat $input $input1 > $input2
echo "$input2 Creado exitosamente..."
