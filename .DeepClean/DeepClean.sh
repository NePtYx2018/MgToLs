bash .banner
echo "Introduce la opcion que deseas realizar:"
echo ""
echo "1)Limpiar carpetas vacias"
echo "2)Eliminar cache"
echo "3)Terminar procesos"
echo "4)Ayuda"
echo "5)Salir"
echo ""
read num

# Aqui comienzan los If

if [ "$num" = "1" ]; then
bash .cl
fi

if [ "$num" = "2" ]; then
bash .ch
fi

if [ "$num" = "3" ]; then
bash .prx
fi

if [ "$num" = "4" ]; then
bash .ayuda
fi

if [ "$num" = "5" ]; then
bash .banner
echo "                                  Gracias por usar DeepClean!"
fi
