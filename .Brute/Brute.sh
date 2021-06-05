echo "0" |& tee .n
bash .banner
echo "Introduce que deseas realizar:"
echo ""
echo "1)Integrar diccionario"
echo "2)Atacar"
echo "3)Defenir Servicio"
echo "4)Ayuda"
echo "5)Salir"
echo ""
read num

# Inicio de if

if [[ "$num" < "1" ]]; then
bash .banner
echo "   Seleccion incorrecta!"
read s
bash Brute.sh
fi

if [ "$num" = "1" ]; then
bash .dix
fi

if [ "$num" = "2" ]; then
bash .at
fi

if [ "$num" = "3" ]; then
bash .def
fi

if [ "$num" = "4" ]; then
bash .ay
fi

if [ "$num" = "5" ]; then
bash .banner
echo "   Gracias por usar Brute!!"
fi

if [[ "$num" > "5" ]]; then
bash .banner
echo "   Seleccion incorrecta!"
read s
bash Brute.sh
fi
