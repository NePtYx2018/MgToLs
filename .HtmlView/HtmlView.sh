bash .banner
echo "Introduce la url a extraer el codigo fuente:"
read url
as=$(curl $url > Codigo.txt)
kas=$(mkdir $HOME/MgToLs/Html)
akf=$(mv Codigo.txt $HOME/MgToLs/Html/)
bash .banner
echo "Codigo fuente guardado exitosamente en $HOME/MgToLs/Html/Codigo.txt"
echo ""
echo "Presiona una tecla para continuar..."
read pause
bash HtmlView.sh
