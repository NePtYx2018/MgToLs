cp .carp -r $HOME/Download©
pkg install php
pkg install termux-api
pkg install openssh
bash .banner
echo "Antes de empezar porfavor introduce el archivo que deseas"
echo "subir a tu servidor a esta carpeta de tu home en linux: Download©"
echo "mueve el archivo ayi para que sea publico."
echo "=========================================="
echo ""
echo "¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤"
echo "Que deseas hacer:¤"
echo "¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤"
echo "1)Crear red local     ¤"
echo "2)Crear fuera de red  ¤"
echo "¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤"
read input
bash .$input
