bash .banner
echo "Introduce la opcion que deseas realizar:"
echo ""
echo "1)Obtener WPS Pin"
echo "2)Encontrar Patron"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
bash .banner
read -p "Introduce la SSID del AP: " nax
read -p "Introduce la BSSID del AP: " mac
bash .banner
echo "Espera unos momentos..."
ns=$(w3m -dump https://wpsfinder.com/wps-pin-generator/MAC:$mac > .a ; cat .a | grep "WPS Pin :" | sed 's/ //g')
ks=$(echo "$ns" | sed 's/:/ : /g')
la=$(echo "$ks" | sed 's/WPS/WPS /g')
bash .banner
echo "Informacion:"
echo ""
echo "SSID: $nax"
echo ""
echo "BSSID: $mac"
echo ""
echo "$la"
echo ""
read -p "Presiona una tecla para continuar..." pause
bash WPS-Gen.sh
fi

if [ "$num" = "2" ]; then
bash .banner
read -p "Introduce la SSID del AP: " naxi
read -p "Introduce los 3 primeros bloques de la MAC del AP: " maci
bash .banner 
echo "Espera unos momentos..."
djd=$(grep "$maci" .pin)
ls=$(echo "$djd" | sed "s/,//g")
los=$(echo "$ls" | sed "s/$maci//g")
bash .banner
echo "SSID: $naxi"
echo ""
echo "MAC: $maci"
echo ""
echo "Wps Pin:"
echo ""
echo "$los"
echo ""
read -p "Presiona una tecla para continuar..." pause
bash WPS-Gen.sh
fi

if [ "$num" = "3" ]; then
bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para continuar..." pause
bash WPS-Gen.sh
fi

if [ "$num" = "4" ]; then
bash .banner
echo "               Gracias por usar WPS-Get!!"
echo ""
fi
