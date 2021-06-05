bash .banner
echo "1)Obtener DNI por nombre"
echo "2)Obtener nombre por DNI"
echo "3)Ayuda"
echo "4)Salir"
echo ""
read num

if [ "$num" = "1" ]; then

bash .banner
read -p "Nombre: " nombre
read -p "Apellido paterno: " apellidop
read -p "Apellido materno: " apellido
w3m -dump "https://eldni.com/pe/buscar-por-nombres?_token=UNktXTC8Bxe8ttQk9N0JzfsNWUjwl6uPdlwPGgEU&nombres=$nombre&apellido_p=$apellidop&apellido_m=$apellido" > .eje
name=$(echo "$nombre" | tr [:lower:] [:upper:])
ia=$(grep "$name" .eje)
bash .banner
echo "Resultados para $nombre $apellidop $apellido:"
echo ""
echo "DNI       Nombres    Apellido Paterno Apellido Materno"
echo ""
echo "$ia"
echo ""
read -p "Presiona una tecla para continuar..."
bash PEdni.sh

fi

if [ "$num" = "2" ]; then

bash .banner
read -p "Dni: " dni
w3m -dump "https://eldni.com/pe/buscar-por-dni?_token=UNktXTC8Bxe8ttQk9N0JzfsNWUjwl6uPdlwPGgEU&dni=$dni" > .dni
ia=$(grep "$dni" .dni)
bash .banner
echo "Resultados para $dni:"
echo ""
echo "DNI       Nombres    Apellido Paterno Apellido Materno"
echo ""
echo "$ia"
echo ""
read -p "Presiona una tecla para continuar..."
bash PEdni.sh

fi

if [ "$num" = "3" ]; then
bash .banner
cat Readme.txt
echo ""
read -p "Presiona una tecla para continuar..."
bash PEdni.sh
fi


if [ "$num" = "4" ]; then
bash .banner
echo "  Gracias por usar PEdni!!"
echo ""
fi
