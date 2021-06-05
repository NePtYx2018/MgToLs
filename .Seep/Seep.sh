bash .banner
read -p "Introduce el nickname: " nick
bash .banner
echo "Buscando porfavor espere..."
sleep 5
b=$(sed "s/neptyx/$nick/g" .base)
kb=$(echo "www.google.com/search?q=%$nick%" > .url)
trans=$(sed 's/%/"/g' .url)
buff=$(lynx -nonumbers -dump $trans | grep https:// > .buff)
buffer=$(cat .buff)
bash .banner
echo "Resultados paea el nick: $nick"
echo ""
echo "$b"
echo ""
echo "$buffer"
echo ""
read -p "Presiona una tecla para continuar..."
mkdir -p $HOME/MgToLs/Seep/
ba=$(echo "$b $buffer" > $HOME/MgToLs/Seep/Seep-$RANDOM.txt)
bash Seep.sh
