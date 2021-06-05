# by NePtYx

fecha=$(date +'%m-%d-%Y-%H:%M')
rm -fr .usex1
bash .banner
echo "Que deseas realizar:"
echo ""
echo "1)Doxear persona o patente"
echo "2)Doxear compañia"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read input

# Zona if

# Zona de proteccion

if [[ "$input" < "1" ]]; then
bash .banner
echo " Lo sentimos opcion no valida!!"
echo ""
echo "Presiona una tecla para continuar..."
read input
bash Doxrut.sh
fi

# Fin de proteccion

if [ "$input" = "1" ]; then
bash .banner
echo "Introduce el nombre de la persona,rut o patente:"
read input2
a=$(echo "$input2" | sed 's/ /+/g')
r=$(w3m -dump https://www.nombrerutyfirma.com/rut?term=$a)
r1=$(w3m -dump https://www.nombrerutyfirma.com/buscar?term=$a)
#r2=$(w3m -dump https://www.volanteomaleta.cl/rut?term=$input2)
#r3=$(w3m -dump https://www.volanteomaleta.cl/nombre?term=$input2)
#r4=$(w3m -dump https://www.volanteomaleta.cl/pat?term=$input2)
mkdir Doxeos
echo "Rut: $r Nombre: $r1 Autos(1): $r2 Autos(2): $r3 Autos(3): $r4 " |& tee Doxeos/$fecha.txt
bash .banner
echo "$input2 Doxeada correctamente!!"
echo ""
cat Doxeos/$fecha.txt
echo ""
echo "Presiona una tecla para continuar..."
read input
bash Doxrut.sh
fi

if [ "$input" = "2" ]; then
bash .banner
echo "Introduce el nombre de la empresa o negocio:"
read input3
a=$(echo "$input3" | sed 's/ /+/g')
r=$(w3m -dump https://www.boletaofactura.cl/buscar?term=$a)
r1=$(w3m -dump https://www.boletaofactura.cl/rut?term=$a)
mkdir Doxeos
echo "Nombre de empresa: $r Rut empresa: $r1" |& tee Doxeos/$fecha.txt
bash .banner
echo "$input2 Doxeada correctamente!!"
echo ""
cat Doxeos/$fecha.txt
echo ""
echo "Presiona una tecla para continuar..."
read input
bash Doxrut.sh
fi

if [ "$input" = "3" ]; then
clear
cat Readme.txt
echo ""
echo "Preciona una tecla para continuar..."
read input
bash Doxrut.sh
fi

if [ "$input" = "4" ]; then
bash .banner
echo "  Gracias por usar Doxrut!!"
echo ""
fi

# Zona proteccion

if [[ "$input" > "4" ]]; then
bash .banner
echo "  Lo sentimos opcion no valida!!"
echo ""
echo "Presiona una tecla para continuar..."
read input
bash Doxrut.sh
fi
# Fin de proteccion

# Fin de if
