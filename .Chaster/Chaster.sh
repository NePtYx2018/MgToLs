pkg install php
pkg install termux-api
pkg install openssh
bash .banner
echo "Para usar el enlace de serveo debes de agregarle esto"
echo "a sus enlaces: https://serveo.com/msg.html..."
echo "°°°°°°°°°°°°°°°°°°°°°°°°°°°°"
echo "1)Crear sala de chat local °"
echo "°°°°°°°°°°°°°°°°°°°°°°°°°°°°"
echo "2)Crear sala de chat online°"
echo "°°°°°°°°°°°°°°°°°°°°°°°°°°°°"
read input
bash .$input
