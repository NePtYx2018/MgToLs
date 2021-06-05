# find .*/ -iname "*" -type f > data.txt

pro=$(wc -l data.txt | sed 's%data.txt%%g')
read -p "Cosa a buscar: " busc

i=0
while [ $i -lt $pro ]
do
valor=p

leer=$(cat .nm)

suma=$(expr $leer + 1 |& tee .nm)

line=$(sed -n $suma$valor data.txt)

save=$(echo "$line")

juan=$(cat "$save")

echo "$juan" > juan.txt
jd=$(grep -li "$busc" "juan.txt")


if [ "$jd" = "" ]; then
k=$(echo nada)
else
echo "Encontrado: $line" >> Encontrados.txt
fi


((i++))

done
echo "0" > .nm
