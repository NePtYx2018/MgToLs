bash .banner
echo "    01) Usuario"
echo "    02) Numero"
echo "    03) Correo"
echo "    04) Ayuda"
echo "    05) Salir"
echo ""
read -p "Que deseas buscar: " num

if [ "$num" != "" ]; then
bash .banner
if [ "$num" = "1" ]; then
read -p "Introduce el usuario a buscar: " usuario
bash .banner
echo "${0} esta trabajando, porfavor espera..."
curl -s -X POST --form username="$usuario" --form send="Enviar" https://usersearch.org/results_normal.php https://usersearch.org/results_advanced.php https://usersearch.org/results_advanced1.php https://usersearch.org/results_advanced2.php https://usersearch.org/results_dating.php https://usersearch.org/results_crypto.php https://usersearch.org/results_forums.php > a.html
cat a.html | sed 's%Usersearch.org%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%About | Our Video | Blog | Terms | Privacy | Contact | New Alpha Version%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%Loading...%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%©%%g' > b.html ; mv b.html a.html
# w3m -dump a.html
bash .banner
echo "Servicios en los cuales esta registrado $usuario:"
echo ""
lynx -dump a.html | grep "/$usuario"
echo ""
read -sp "Presiona una tecla para continuar..." pause
fi

if [ "$num" = "2" ]; then
read -p "Introduce el numero a buscar: " numero
bash .banner
echo "${0} esta trabajando, porfavor espera..."
curl -s -X POST --form username="$numero" --form send="Enviar" https://usersearch.org/results_phones.php > a.html
cat a.html | sed 's%Usersearch.org%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%About | Our Video | Blog | Terms | Privacy | Contact | New Alpha Version%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%Loading...%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%©%%g' > b.html ; mv b.html a.html
bash .banner
w3m -dump a.html
lynx -dump a.html | grep "/$numero"
echo ""
read -sp "Presiona una tecla para continuar..." pause
fi

if [ "$num" = "3" ]; then
read -p "Introduce el email a buscar: " email
bash .banner
echo "${0} esta trabajando, porfavor espera..."
curl -s -X POST --form username="$email" --form send="Enviar" https://usersearch.org/results_email_basic.php https://usersearch.org/results_pwned.php > a.html
cat a.html | sed 's%Usersearch.org%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%About | Our Video | Blog | Terms | Privacy | Contact | New Alpha Version%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%Loading...%%g' > b.html ; mv b.html a.html
cat a.html | sed 's%©%%g' > b.html ; mv b.html a.html
bash .banner
w3m -dump a.html
lynx -dump a.html | grep "/$email"
echo ""
read -sp "Presiona una tecla para continuar..." pause
fi

if [ "$num" = "4" ]; then
bash .banner
cat Readme.txt
echo ""
read -sp "Presiona una tecla para continuar..."
fi

if [ "$num" = "5" ]; then
bash .banner
echo "       Gracias por usar ${0}!!"
exit
fi

rm -fr a.html

bash ${0}

else
bash ${0}
fi
