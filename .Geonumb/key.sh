bash .banner
echo "Introduce la key:"
read input
echo "$input" |& tee .key
bash .banner
echo "       Key introducida exitosamente!!"
echo ""
