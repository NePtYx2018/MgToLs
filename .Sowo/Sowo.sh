bash .banner
echo "Introduce la opcion a utilizar:"
echo ""
echo "1)Crear word malicioso"
echo "2)Ayuda"
echo "3)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
bash .banner
read -p "Introduce el nombre del estudiante a suplantar: " nombre
read -p "Introduce el nombre del docente a engañar: " name
read -p "Introduce el enlace malicioso: " enlace
read -p "Introduce la fecha actual: " fecha
bash .banner
echo "Creando archico malicioso, porfavor espere..."
a=$(cat .html | sed "s/profe/$name/g")
b=$(echo "$a" | sed "s%urlmal%$enlace%g")
c=$(echo "$b" | sed "s%fecha%$fecha%g")
d=$(echo "$c" | sed "s/nombre/$nombre/g")
e=$(echo "$d" > .htmla)
f=$(python .uwu)
#c=$(echo "$b" > .htmla)
#d=$(python .uwu)
mkdir $HOME/MgToLs/Word
mv result.docx $HOME/MgToLs/Word/result.docx
bash .banner
echo "Archivo guardado en $HOME/MgToLs/Word/result.docx"
echo ""
read -sp "Presiona una tecla para continuar..."
bash ${0}
fi

if [ "$num" = "2" ]; then
bash .banner
cat Readme.txt
echo ""
read -sp "Presiona una tecla para continuar..."
bash ${0}
fi

if [ "$num" = "3" ]; then
bash .banner
echo "          Gracias poe usar ${0}!!"
echo ""
fi
