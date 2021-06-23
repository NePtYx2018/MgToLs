# MD5Force created by NePtYx 2021

banner() {

clear
echo -e "\e[38;5;76m"
echo '
  .-.)     (.-.     _   .-.)    _   .-.)                      
 ( OO ).  ( OO ).-.( ..( OO )_ ( ..( OO )_                    
(_)---\_) / . --. / ,--.   ,--.),--.   ,--.) ,--.   ,--.      
/    _ |  | \-.  \  |   `..   | |   `..   |   \  `..  /       
\  :` `..-.-.  |  | |         | |         | .-.)     /        
 ...`...)\| |_..  | |  |...|  | |  |...|  |(OO  \   /         
.-._)   \ |  .-.  | |  |   |  | |  |   |  | |   /  /\_        
\       / |  | |  | |  |   |  | |  |   |  | `-./  /.__)       
 `-----.  `--. `--. `--.   `--. `--.   `--.   `--.            

             ==========================
             = Sammy Tool Hash Decode =
             ==========================
               = Created by NePtYx! =
               ======================
'

}


echo "0" > .nm
banner
echo -e "\e[38;5;72m"
echo "Introduce la opcion a utilizar:"
echo ""
echo "01) Fuerza Bruta hash"
echo "02) Ayuda"
echo "03) Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
banner
echo -e "\e[38;5;72m"
read -p "Introduce el hash a decifrar: " md
echo ""
read -p "Introduce la ruta de tu diccionario: " dic
why=$(echo "$md" | wc -c)

if [ "$why" = "33" ]; then
poo=$(echo "md5sum")
fi

if [ "$why" = "41" ]; then
poo=$(echo "sha1sum")
fi

if [ "$why" = "57" ]; then
poo=$(echo "sha224sum")
fi

if [ "$why" = "65" ]; then
poo=$(echo "sha256sum")
fi

if [ "$why" = "97" ]; then
poo=$(echo "sha384sum")
fi

if [ "$why" = "129" ]; then
poo=$(echo "sha512sum")
fi

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

linee=$(echo "$line" | $poo | sed 's%-%%g' | sed 's% %%g')

# Fin de diccionario

# Programa test

banner
echo -e "\e[38;5;196m"
echo "Probando contraseña $suma"
echo ""
echo "Hash: $md"
echo "Hash decifrando: $line"
echo "Hash cifrado: $linee"
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
echo "Hash: $md"
echo "Hash decifrando: $line"
echo "Hash cifrado: $linee"
echo ""
echo "Hash Decifrado con exito!!"
echo ""
echo "Presiona una tecla para continuar..."
read pause
ol=$(echo "Hash: $md Decifrado: $line Cifrado: $linee" >> $HOME/MgToLs/Credenciales.txt)
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
echo -e "\e[38;5;72m"
echo "             Gracias por usar ${0}!"
echo ""
fi

