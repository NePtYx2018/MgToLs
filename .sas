bash $HOME/MgToLs/.banner
echo "Introduce el error a solucionar:"
echo ""
echo "1)FireWhats Error"
echo "2)Terminal"
echo ""
read -p "Opcion: " num

if [ "$num" = "1" ]; then

bash $HOME/MgToLs/.banner
echo "Estamos solucionando tu error, Porfavor se pasiente..."
echo ""
skkd=$(cd $HOME;cd MgToLs; cd .lib; cd yowsup; pip install yowsup; python setup.py install)
dk=$(cd $HOME/MgToLs/)
bash $HOME/MgToLs/.banner
read -p "Errores solucionados. Presiona una telca para continuar..." xd
bash $HOME/MgToLs/.banner

fi

if [ "$num" = "2" ]; then
bash $HOME/MgToLs/.banner
bash $HOME/MgToLs/.tr
fi
