banner() {

clear
echo -e "\e[1;34m"
echo '
 _                _
| |    ___   __ _(_)_ __
| |   / _ \ / _  | |  _ \
| |__| (_) | (_| | | | | |
|_____\___/ \__  |_|_| |_|
            |___/
by NePtYx
'

}

base() {

echo '
1c0a6106d713409165898a75ce035747
c10a63e8ce99d7fa6f5064564a205249
new
new
new
new
new
new
new
new
new
new
new
new
new
new
new
new
'

}

banner
echo "
Introduce lo que deseas hacer:

01) Iniciar sesion
02) Crear usuario
"

read -p "Opcion: " num


# Comparador de opciones


if [ "$num" = "1" ]; then

banner
echo "=============="
echo "Inicia sesion:"
echo "=============="
echo ""
read -p "Usuario: " us
read -sp "Contraseña: " con

# Comparando

licuadora=$(echo "$us$con" | md5sum | sed 's%-%%g' | sed 's% %%g')
verefy=$(base | grep $licuadora)

banner

if [ "$licuadora" = "$verefy" ]; then
echo "Inicio de sesion exitoso $us!!"
echo ""
read -sp "Presiona una tecla para continuar..."
logk=$(echo "$us" > $HOME/MgToLs/.username)
bash .ejecute
# agrega comando aqui xd

else
echo -e "\e[38;5;198m"
echo "[-]fatal: Usuario o Contraseña incorrectos."
echo ""
fi

# Fin comparando

else

banner
echo "==============="
echo "Crea tu cuenta:"
echo "==============="
echo ""
read -p "Introduce tu usuario: " us
read -sp "Introduce tu contraseña: " con
read -sp "Introduce tu contraseña: " con

lic=$(echo "$us$con" | md5sum | sed 's%-%%g' | sed 's% %%g')

reg=$(cat ${0} -n | grep new | sed 's%new%%g' | sed 's% %%g' | sed -n 1p)
cat ${0} | sed "$reg s%new%$lic%g" > loging; mv loging ${0}
bash ${0}
fi
