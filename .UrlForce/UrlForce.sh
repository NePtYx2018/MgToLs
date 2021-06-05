bash .banner
echo "Introduce la url scam a escanear:"
read in

ls=$(w3m -dump $in/ip.txt)
ia=$(w3m -dump $in/pass.txt)
qk=$(w3m -dump $in/users.txt)
oad=$(w3m -dump $in/passwords.txt)
le=$(w3m -dump $in/username.txt)
lo=$(w3m -dump $in/usernames.txt)
lll=$(w3m -dump $in/Usernames.txt)
lz=$(w3m -dump $in/Username.txt)
lx=$(w3m -dump $in/Passwords.txt)
lc=$(w3m -dump $in/Pass.txt)
lv=$(w3m -dump $in/Ip.txt)
lb=$(w3m -dump $in/Users.txt)

bash .banner
echo "Posibles Usuarios:"
echo ""
echo "$qk"
echo ""
echo "$le"
echo ""
echo "$lo"
echo ""
echo "$lll"
echo ""
echo "$lz"
echo ""
echo "$lb"
echo ""
echo "Posibles Ip:"
echo ""
echo "$ls"
echo ""
echo "$lv"
echo ""
echo "Posibles Contraseñas:"
echo ""
echo "$ia"
echo ""
echo "$oad"
echo ""
echo "$lx"
echo ""
echo "$lc"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash UrlForce.sh
