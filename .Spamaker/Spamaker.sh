bash .banner
echo "Introduce la opcion que deseas usar:"
echo ""
echo "1)Crear Spam"
echo "2)Guardar Spam"
echo "3)Salir"
echo ""
read num

if [ "$num" = "1" ]; then
jaks=$(echo "1" > .lad)
bash .banner
read -p "Introduce los caracteres a utilizar: " char
jsh=$(echo "$char" > .var)
bash .bucle
fi

if [ "$num" = "2" ]; then
bash .banner
read -p "Introduce el nombre de tu Spam: " name
echo ""
jw=$(mkdir $HOME/MgToLs/Spam)
js=$(mv .buc $HOME/MgToLs/Spam/$name.txt)
echo "Spam $name guardado correctamentw en $HOME/MgToLs/Spam/$name.txt"
echo ""
read -p "Presiona una tecla para continuar..."
bash Spamaker.sh
fi

if [ "$num" = "3" ]; then
bash .banner
echo "Gracias por usar Spamaker!!"
echo ""
fi
