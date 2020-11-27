pkg install perl -y
pkg install unzip -y
pkg install wget -y
clear
echo ' _   _      ____  _ __   __'
echo '| \ | | ___|  _ \| |\ \ / /_  __'
echo '|  \| |/ _ \ |_) | __\ V /\ \/ /'
echo '| |\  |  __/  __/| |_ | |  >  <'
echo '|_| \_|\___|_|    \__||_| /_/\_\'
echo '////////////////////////////////'
echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
echo ""
echo "Lo sentimos por hacerte esperar,pero MgToLs se"
echo "esta descargando para luego ser descomprimido!!."
chmod 777 gdown.pl
wget --no-check-certificate 'https://midget-twine.000webhostapp.com/MgToLs.zip' -O MgToLs.zip
unzip MgToLs.zip
mkdir $HOME/Status
mv MgToLs $HOME/Status
rm -fr $HOME/MgToLs
mv $HOME/Status/MgToLs $HOME/
rm -fr $HOME/Status
bash $HOME/MgToLs/requirements.txt
clear
echo ' _   _      ____  _ __   __'
echo '| \ | | ___|  _ \| |\ \ / /_  __'
echo '|  \| |/ _ \ |_) | __\ V /\ \/ /'
echo '| |\  |  __/  __/| |_ | |  >  <'
echo '|_| \_|\___|_|    \__||_| /_/\_\'
echo '////////////////////////////////'
echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
echo ""
echo "Gracias por descargar MgToLs pasate por"
echo "mi canal ayi subo cosas interesantes:"
echo "[https://youtu.be/UrOBPSU6u-8]"
echo ""
