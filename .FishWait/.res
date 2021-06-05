bash .banner
echo "Obteniendo resultados..."
vaw=$(cat .log)
vae=$(cat .ip)
var=$(w3m -dump $vaw)
vat=$(w3m -dump $vae)
bash .banner
echo "Resultados obtenidos!!"
echo ""
echo "Logins:"
echo ""
echo "$var"
echo ""
echo "Ip:"
echo ""
echo "$vat"
echo ""
read pause
bash .res
