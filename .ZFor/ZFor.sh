na=$(echo "$RANDOM")
mkdir $HOME/MgToLs/Zoom
bash .banner
echo "Introduce la opcion que deseas realizar:"
echo ""
echo "1)Crear Enlaces"
echo "2)Buscar Enlaces"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read num

if [ "$num" = "1" ]; then

# Comienzo del 1

bash .banner
echo "Introduce de cuantos caracteres quieres que sean los enlaces (9/10/11):"
read enla

if [ "$enla" = "9" ]; then
bash .banner
echo "Enlaces generados:"
echo ""
CONTADOR=0
while [  $CONTADOR -lt 10 ]; do

a=$(echo $((RANDOM%9)))
b=$(echo $((RANDOM%9)))
c=$(echo $((RANDOM%9)))
d=$(echo $((RANDOM%9)))
e=$(echo $((RANDOM%9)))
f=$(echo $((RANDOM%9)))
g=$(echo $((RANDOM%9)))
h=$(echo $((RANDOM%9)))
i=$(echo $((RANDOM%9)))

echo "https://us02web.zoom.us/j/$a$b$c$d$e$f$g$h$i" >> $HOME/MgToLs/Zoom/$na.txt

let CONTADOR=CONTADOR+1

done
cat $HOME/MgToLs/Zoom/$na.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash ZFor.sh
fi

if [ "$enla" = "10" ]; then
bash .banner
echo "Enlaces generados:"
echo ""
CONTADOR=0
while [  $CONTADOR -lt 10 ]; do

a=$(echo $((RANDOM%9)))
b=$(echo $((RANDOM%9)))
c=$(echo $((RANDOM%9)))
d=$(echo $((RANDOM%9)))
e=$(echo $((RANDOM%9)))
f=$(echo $((RANDOM%9)))
g=$(echo $((RANDOM%9)))
h=$(echo $((RANDOM%9)))
i=$(echo $((RANDOM%9)))
j=$(echo $((RANDOM%9)))

echo "https://us02web.zoom.us/j/$a$b$c$d$e$f$g$h$i$j" >> $HOME/MgToLs/Zoom/$na.txt

let CONTADOR=CONTADOR+1

done
cat $HOME/MgToLs/Zoom/$na.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash ZFor.sh
fi

if [ "$enla" = "11" ]; then
bash .banner
echo "Enlaces generados:"
echo ""
CONTADOR=0
while [  $CONTADOR -lt 10 ]; do

a=$(echo $((RANDOM%9)))
b=$(echo $((RANDOM%9)))
c=$(echo $((RANDOM%9)))
d=$(echo $((RANDOM%9)))
e=$(echo $((RANDOM%9)))
f=$(echo $((RANDOM%9)))
g=$(echo $((RANDOM%9)))
h=$(echo $((RANDOM%9)))
i=$(echo $((RANDOM%9)))
j=$(echo $((RANDOM%9)))
k=$(echo $((RANDOM%9)))

echo "https://us02web.zoom.us/j/$a$b$c$d$e$f$g$h$i$j$k" >> $HOME/MgToLs/Zoom/$na.txt
let CONTADOR=CONTADOR+1

done
cat $HOME/MgToLs/Zoom/$na.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash ZFor.sh
fi

# Fin de el 1

fi

if [ "$num" = "2" ]; then
bash .banner
cosas=$(echo "https://us02web.zoom.us/j/")
var=$(echo "https://www.google.com/search?q=%$cosas%" > .url)
cad=$(sed 's/%/"/g' .url > .urla; mv .urla .url)
ka=$(cat .url)
jda=$(w3m -dump $ka)
echo "$jda" >> $HOME/MgToLs/Zoom/Buscador.txt
bash .banner
echo "$jda"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash ZFor.sh
fi

if [ "$num" = "3" ]; then
bash .banner
cat Readme.txt
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash ZFor.sh
fi

if [ "$num" = "4" ]; then
bash .banner
echo "         Gracias por usar ZFor!"
echo ""
fi
