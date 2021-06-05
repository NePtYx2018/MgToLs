bash .rec
bash .banner
echo "Introduce el usuario de tu victima:"
read input
bash .banner
cat .LcIp.txt
echo "#################################################"
echo "Estas son las ips conectadas a tu red, escribe"
echo "a la que te desees conectar:"
read input1
bash .banner
echo "SshConect esta trabajando espera un momemto..."
sftp $input@$input1
echo "Error coneccion rechazada..."
bash SshConect.sh