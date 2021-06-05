bash .banner
echo "Introduce la ruta de tu tarjeta de memoria:"
read rutea


# Zona de trabajo

l=$(echo "0" > .nm)
ls $rutea/Android/*/* > h
sed -i 's/://g' "h"
grep $rutea h > k
mv k h
b=$(cat h)
echo "$b" > k
mv k h
bash .vc
list=$(cat .list)
rm -fr $list

# Termino de Zona de Trabajo

bash .banner
echo "Se han eliminado el cache de todas estas apps:"
echo ""
echo "$list"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash DeepClean.sh
