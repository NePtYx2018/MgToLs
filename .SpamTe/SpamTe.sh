bash .banner
echo "Introduce lo que deseas hacer:"
echo ""
echo "1)Logear Numero"
echo "2)Spamear"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then
js=$(echo "1" > .nm)
bash .job
bash SpamTe.sh
fi

if [ "$num" = "2" ]; then
casa=$(cat .nm)
if [ "$casa" = "0" ]; then
bash .banner
echo "Primero reguistra un numero con la opcion 1!!"
echo ""
read -p "Presiona una tecla para continuar..." pays
bash SpamTe.sh
else
bash .banner
read -p "Numero: " a
read -p "Nombre para agendar: " c
read -p "Numero de Spam: " b
bash .banner
echo "(Para terminar presiona CTRL + C)"
echo ""
nosebro=$(cat .ls > .org)
salto=$(cat .ca)
rem=$(echo "$c" | sed "s/ /_/g")
leer=$(echo "0")
CONTADOR=0
fin=$(echo "$b")
while [  $CONTADOR -lt $fin ]; do
xd=$(expr $leer + 1)

# Inicio de la weba

# echo "sleep 0.5" >> .org
echo "$salto" >> .org
echo 'expect ">"' >> .org
echo "$salto" >> .org
echo 'send -- "msg base Spam By NePtYx\n"' >> .org
echo "$salto" >> .org

# Fin xd

echo "NUMERO: $a CONTACTO: $c SPAMS: $b SPAM: $xd"
leer=$(echo "$xd")
kaka=$(expr $CONTADOR + 1)
CONTADOR=$(echo "$kaka")
done
echo "expect eof" >> .org

# Trans

trans=$(cat .org)
#transot=$(echo "$trans" | sed "s/bas/$rem/g")
transs=$(echo "$trans" | sed "s/base/$c/g")
#transot=$(echo "$transs" | sed "s/bas/$rem/g")
transss=$(echo "$transs" | sed "s/numero/$a/g")
transsss=$(echo "$transss" | sed "s/msg $c/msg $rem/g")
finalizadoxd=$(echo "$transsss" > .org1; mv .org1 .org; chmod 777 .org)
camuflaje=$(./.org)

# Fin trans

bash .banner
echo "Se han enviado $b mensajes al numero $a!!"
echo ""
read -p "Presiona una tecla para continuar..." pause
bash SpamTe.sh

fi
fi

if [ "$num" = "3" ]; then
bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para continuar..." pusw
bash SpamTe.sh
fi

if [ "$num" = "4" ]; then
bash .banner
echo "           Gracias por usar SpamTe!!"
fi
