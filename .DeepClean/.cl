bash .banner
echo "Introduce la ruta de tu tarjeta de memoria:"
read rutea
bash .banner
echo "DeepClean esta trabajando porfavor espera unos segundos..."

# Area de trabajo

du -h $rutea > txt
grep 4.0K txt > txt.
mv txt. txt
sed -i 's/4.0K//g' "txt"
vr=$(cat txt)
rm -fr txt
rm -fr $vr
bash .banner
echo "Se han eliminado las siguientes carpetas:"
echo ""
echo "$vr"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash DeepClean.sh

# Fin de area de trabajo
