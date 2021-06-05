bash .banner
echo -e "\e[35m"
echo "MgToLs se esta actualizando a la version mas reciente..."
echo "Porfavor espere..."
cd $HOME
rm -fr MgToLs
git clone https://github.com/NePtYx2018/MgToLs.git
cd MgToLs
bash MgToLs.sh
