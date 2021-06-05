sh .banner
ifconfig wlan0
echo "=========================="
echo "Introduce tu ip privada:"
read input
sh .banner
echo "Analizando ip..."
echo ""
echo "Visita esta web para entrar al enrutador wifi,"
echo "y ver la contraseña del router: https://192-168-1-1ip.mobi"
echo ""
echo "Presiona enter para continuar..."
read input1
sh .banner
echo "Algunas contraseñas posibles del router:"
cat .pwd
echo "Presiona enter para volver al menu principal..."
read input2
sh SetWifi.sh
