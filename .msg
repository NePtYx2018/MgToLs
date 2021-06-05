clear
bash .banner
echo ""
w3m -dump https://whatsapp.webcindario.com/chat.txt
echo ""
read -p "Introduce el mensaje: " men


if [ "$men" = "exit" ]; then
bash .ejecute
else
# Variables

nick=$(cat $HOME/MgToLs/.username)
USER_AGENT=Google
mensaje=$men

# Fin de Variables

curl -X POST 'https://whatsapp.webcindario.com/log.php' --verbose --user-agent $USER_AGENT --data-urlencode "nombre=$nick: $mensaje"
bash .msg
fi
