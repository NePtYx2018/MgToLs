# MD5Force created by NePtYx 2021

banner() {

clear
echo -e "\e[38;5;76m"
echo '

 __   __  ______   _______  _______  _______  ______    _______  _______
|  |_|  ||      | |       ||       ||       ||    _ |  |       ||       |
|       ||  _    ||   ____||    ___||   _   ||   | ||  |       ||    ___|
|       || | |   ||  |____ |   |___ |  | |  ||   |_||_ |       ||   |___
|       || |_|   ||_____  ||    ___||  |_|  ||    __  ||      _||    ___|
| ||_|| ||       | _____| ||   |    |       ||   |  | ||     |_ |   |___
|_|   |_||______| |_______||___|    |_______||___|  |_||_______||_______|
                 \                                     /
                  \  Created by NePtYx in 20/06/2021  /
                   \,_______________________________./

'

}


echo "0" > .nm
banner
echo "Introduce la opcion a utilizar:"
echo ""
echo "01) Fuerza Bruta MD5"
echo "02) Ayuda"
echo "03) Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
banner
read -p "Introduce el MD5 a decifrar: " md
echo ""
read -p "Introduce la ruta de tu diccionario: " dic

# Limpiado de diccionario

per=$(pwd)
vay=$(cat $dic | sed 's/ /\n/g' > $per/Pass.txt)

# Fin de limpiado

##########################
# Inicio de fuerza bruta #
##########################

CONTADOR=0
fin=99999999999
while [ $CONTADOR -lt $fin ]; do

# Inicio de diccionario

valor=p

leer=$(cat .nm)

suma=$(expr $leer + 1 |& tee .nm)

line=$(sed -n $suma$valor Pass.txt)

linee=$(echo "$line" | md5sum | sed 's%-%%g' | sed 's% %%g')

# Fin de diccionario

# Programa test

banner
echo -e "\e[38;5;196m"
echo "Probando contraseña $suma"
echo ""
echo "Md5: $md"
echo "Md5 decifrando: $line"
echo "Md5 cifrado: $linee"
echo ""

if [ "$line" = "" ]; then
exit
fi

#echo "$line"
#echo "$linee"
#echo "$md"
#read -p "Dou" pause

if [ "$linee" = "$md" ]; then
banner
echo -e "\e[38;5;46m"
echo "Credenciales que coinciden:"
echo ""
echo "Md5: $md"
echo "Md5 decifrando: $line"
echo "Md5 cifrado: $linee"
echo ""
echo "MD5 Decifrado con exito!!"
echo ""
echo "Presiona una tecla para continuar..."
read pause
ol=$(echo "Md5: $md Decifrado: $line Cifrado: $linee" >> $HOME/MgToLs/Credenciales.txt)
bash ${0}
exit
fi

done

####################
# Fin Fuerza Bruta #
####################

fi


if [ "$num" = "2" ]; then
banner
cat Readme.txt
echo ""
read -sp "Presiona una tecla para continuar..." pause
bash ${0}
fi

if [ "$num" = "3" ]; then
banner
echo "                      Gracias por usar ${0}!!"
echo ""
fi
