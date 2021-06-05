pkg install nmap
bash .banner
echo "Introduce tu ip privada:"
read input
bash .banner
echo "Transformando ip a la del router..."
echo "Listo!"
read input1
nmap -sP 192.168.1.1-254 |& tee Ips.txt
bash .banner
echo "Introduce lo que deseas hacer:"
echo "====================="
echo "1)Dos               ="
echo "2)Ping              ="
echo "3)Escaneo de puertos="
echo "====================="
read input2
bash .$input2
