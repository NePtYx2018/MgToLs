bash .banner
echo "Intoduce el codigo del pais de el numero:"
read n
bash .banner
echo "Introduce el numero que deseas enviar a soporte:"
read num
bash .banner
echo "Introduce su MCC de el pais:"
read mcc
bash .banner
echo "Introduce el MNC de su compañia:"
read mnc
save=$(echo "$num" > .n)
saver=$(echo "$mcc" > .mcc)
savet=$(echo "$mnc" > .mnc)
savey=$(echo "$n" > .p)
bash .sps
