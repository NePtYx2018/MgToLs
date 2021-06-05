apt install nano
clear
echo ".  . ,      ..__     .  ."
echo "|__|-+-._ _ |[__). .*| _| _ ._."
echo "|  | | [ | )|[__)(_|||(_](/,["
echo "=========="
echo "by=NePtYx="
echo "=========="
echo ""
echo "Que titulo quieres que diga tu pagina?"
read input
echo ""
echo "Que imagen de fondo quieres que lleve?(url)"
read input1
echo ""
echo "Imagen de Portada?(url)"
read input2
echo ""
echo "Escribe el color de la letra:"
echo "Aqua,Silver,Fuchisa,Yellow,Teal"
read input3
echo ""
echo "Escribe el contenido aqui:"
read input4
echo ""
clear
echo ".  . ,      ..__     .  ."
echo "|__|-+-._ _ |[__). .*| _| _ ._."
echo "|  | | [ | )|[__)(_|||(_](/,["
echo "=========="
echo "by=NePtYx="
echo "=========="
echo ""
echo "Tu codigo esta listo, Deseas verlo?"
echo "(Deberas copiarlo y guardarlo con extencion html)"
read input6
clear
echo ".  . ,      ..__     .  ."
echo "|__|-+-._ _ |[__). .*| _| _ ._."
echo "|  | | [ | )|[__)(_|||(_](/,["
echo "=========="
echo "by=NePtYx="
echo "=========="
echo "Gracias por usar HtmlBuilder"
echo ""
echo "<!DOCTYPE html>"
echo "<html>"
echo "<head>"
echo "<body><body "
echo "background="$input1">"
echo '<font color="Silver">'
echo '    <meta charset="UTF-8">'
echo '<html>'
echo "<title>$input</title>"
echo '<Center>'
echo '<link crossorigin="anonymous" '
echo 'href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" '
echo 'integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" '
echo 'rel="stylesheet"></link>'
echo ""
echo '<!-- Temas-->'
echo ""
echo '<link crossorigin="anonymous" '
echo 'href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" '
echo 'integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" '
echo 'rel="stylesheet"></link>'
echo '<img '
echo "src="$input2"></img>"
echo '<p>'
echo "$input4"
echo "<p>"
echo '</center>'
echo '</body>'
echo '</head>'
echo '</html>'

