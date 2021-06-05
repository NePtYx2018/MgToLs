bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Token 2)Descargar Gmail 3)Buscar ip"
echo "4)Ayuda 5)Salir"
echo ""
read num

if [ "$num" = "1" ]; then

rm -fr $HOME/.mutt
mkdir -p $HOME/.mutt/cache/headers
mkdir $HOME/.mutt/cache/bodies
touch $HOME/.mutt/certificates
bash .banner
read -p 'Introduce tu nombre: ' name
read -p 'Introduce tu correo: ' correo
read -sp 'Introduce tu contraseña: ' password

echo 'set ssl_starttls=yes' > .muttconf
echo 'set ssl_force_tls=yes' >> .muttconf
echo "" >> .muttconf
echo "set imap_user = %$correo%" >> .muttconf
echo "set imap_pass = %$password%" >> .muttconf
echo "" >> .muttconf
echo "set from=%$correo%" >> .muttconf
echo "set realname=%$name%" >> .muttconf
echo "" >> .muttconf
echo "set folder = imaps://imap.gmail.com/" >> .muttconf
echo "set spoolfile = imaps://imap.gmail.com/INBOX" >> .muttconf
echo 'set postponed="imaps://imap.gmail.com/[Gmail]/Drafts"' >> .muttconf
echo "" >> .muttconf
echo 'set header_cache = "~/.mutt/cache/headers"' >> .muttconf
echo 'set message_cachedir = "~/.mutt/cache/bodies"' >> .muttconf
echo 'set certificate_file = "~/.mutt/certificates"' >> .muttconf
echo "" >> .muttconf
echo "set smtp_url = %smtps://$correo:$password@smtp.gmail.com:465/%" >> .muttconf
echo "" >> .muttconf
echo "set move = no" >> .muttconf
echo "set imap_keepalive = 900" >> .muttconf
a=$(cat .muttconf | sed 's/%/"/g' > .muttconff; mv .muttconff .muttconf)
b=$(mv .muttconf $HOME/.mutt/muttrc)
bash Emaip.sh

fi

if [ "$num" = "2" ]; then

bash .banner
mutt
bash Emaip.sh

fi

if [ "$num" = "3" ]; then

bash .banner
jsjs=$(pwd)
read -p "Introduce el gmail de la ip a buscar: " cats
gmail=$(echo $cats | tr A-Z a-z)
pos=$(echo "$gmail" > .gm)
a=$(cat $HOME/.mutt/cache/bodies/*/INBOX/* | grep "Received-SPF: pass (google.com: domain of $gmail designates")
ldns=$(cd $HOME/.mutt/cache/bodies/*/INBOX/)
bash .cos
relle=$(bash .los)
cd $jsjs/
bash .banner
echo "$relle"
echo ""
read -p "Introduce uno de los numeros que vez anteriormente: " int
ad=$(grep "$int" .result)
bash .banner
echo "Busqueda del correo $gmail exitosa:"
echo ""
echo "$a"
echo ""
echo "Busqueda por numero $int:"
echo ""
echo "$ad"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Emaip.sh

fi

if [ "$num" = "4" ]; then

bash .banner
cat Readme.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Emaip.sh

fi

if [ "$num" = "5" ]; then

bash .banner
echo " Gracias por usar Emaip por NePtYx!!"
echo ""

fi
