carp=$(cat .selec)
bash .banner 
echo "Esperando respuestas..."
echo ""
echo "Informacion adicional:"
echo ""
echo ""
cat .st/$carp/php/info.txt
echo ""
echo ""
echo "Geolocalizacion:"
echo ""
echo ""
cat .st/$carp/php/result.txt
echo ""
echo ""
echo "Esperando 10 segundos mas..."
echo ""
sleep 10
bash .cats
