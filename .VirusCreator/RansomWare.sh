#!/bin/bash
clear
echo " _____ _             _____             _"
echo "|  |  |_|___ _ _ ___|     |___ ___ ___| |_ ___ ___"
echo "|  |  | |  _| | |_ -|   --|  _| -_| .'|  _| . |  _|"
echo " \___/|_|_| |___|___|_____|_| |___|__,|_| |___|_|"
echo "====================="
echo "By=NePtYx=RansomWare="
echo "====================="
echo " "
echo "¿Como quieres que se llame tu RansomWare (incluye extencion)?"
read input
echo " "
echo "¿Que mensajes quieres que diga?"
read input1
mkdir RansomWare
cp 3 $input.apk
mv $input.apk RansomWare
cp 4 $input1.txt
mv $input1.txt RansomWare
echo "Tu Adware a sido Creado esta en la carpeta"
echo "RansomWare"
echo " "
read input2
echo "Volviendo a menu principal"
bash VirusCreator.sh


