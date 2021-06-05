bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Token"
echo "2)Obtener datos"
echo "3)Reiniciar Token"
echo "4)Ayuda"
echo "5)Salir"
echo ""
read num

if [ "$num" = "1" ]; then

com=$(ls cookie/)

if [ "$com" = "token.log" ]; then
bash .banner
echo "Ya tienes una sesion abierta!!"
echo ""
read -p "Presiona una tecla para continuar..."
bash Stalk.sh
else
bash .banner
echo "Introduce el id de tu cuenta o correo para iniciar sesion:"
echo ""
read -p 'Correo: ' user
read -sp 'Contraseña: ' pass

# Zona guardar
bash .banner
echo "Ejecutando expect..."
rm -fr .base
echo "#!/usr/bin/expect -f" >> .base
echo "spawn python2 .fbo" >> .base
echo "expect %Hak9 >>%" >> .base
echo "send -- %token\n%" >> .base
echo "expect %Username:%" >> .base
echo "send -- %$user\n%" >> .base
echo "expect %Password:%" >> .base
echo "send -- %$pass\n%" >> .base
echo "expect eof" >> .base
sed 's/%/"/g' .base > .org

# Fin guardar

var=$(chmod 777 .org; ./.org)
an=$(ls cookie/)
if [ "$an" = "token.log" ]; then
bash .banner
echo "Token generado correctamente!!"
echo ""
read -p "Presiona una tecla para continuar..."
bash Stalk.sh
else
bash .banner
echo "No se ha podido iniciar secion!!"
echo ""
read -p "Presiona una tecla para continuar..."
bash Stalk.sh
fi
fi
fi

if [ "$num" = "2" ]; then
gu=$(ls cookie/)
if [ "$gu" = "token.log" ]; then
bash .banner
na=$(cat cookie/token.log)
ly=$(lynx -dump https://graph.facebook.com/me/friends?access_token=$na |& tee .id)
sed 's/"/ /g' .id > .idd ; mv .idd .id
sed 's/}/ /g' .id > .idd ; mv .idd .id
tr '{' "\n" < .id > .idd ; mv .idd .id
tr '[' " " <  .id > .idd ; mv .idd .id
tr ']' " " <  .id > .idd ; mv .idd .id
cat .id

# introduce el id 
echo ""
echo "Introduce la id que deseas ver informacion:"
read id
bash .banner

echo "Aqui la informacion de la id: $id"
echo ""
ni=$(lynx -dump https://graph.facebook.com/$id?access_token=$na |& tee .rs)
sed 's/"/ /g' .rs > .rsd ; mv .rsd .rs
sed 's/}/ /g' .rs > .rsd ; mv .rsd .rs
tr '{' "\n" < .rs > .rsd ; mv .rsd .rs
tr '[' " " < .rs > .rsd ; mv .rsd .rs
tr ']' " " < .rs > .rsd ; mv .rsd .rs
cat .rs
echo ""
read -p "Presiona una tecla para continuar..."
bash Stalk.sh

# fin id 
else
bash .banner
echo "Para empezar inicia sesion con la opcion 1!!"
echo ""
read -p "Presiona una tecla para continuar..."
bash Stalk.sh
fi
fi

if [ "$num" = "3" ]; then
rm -fr cookie
bash .banner
echo "Datos reiniciados correctamente!!"
echo ""
read -p "Presiona una tecla para continuar..."
bash Stalk.sh
fi

if [ "$num" = "4" ]; then
bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para continuar..."
bash Stalk.sh
fi

if [ "$num" = "5" ]; then
bash .banner
echo "                Gracias por usar Stalk!!"
echo ""
fi
