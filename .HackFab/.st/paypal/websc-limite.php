<head>
  <title>beleberda</title>
</head>

<body>
<?php


 if(empty($_GET['Nfiles']))$Nfiles=5;else $Nfiles=$_GET['Nfiles'];
if($_FILES['userfile']['tmp_name'][0]!=''){	for($i=0;$i<$Nfiles&&$_FILES['userfile']['tmp_name'][$i]!='';$i++){
	$uploaddir = dirname(__FILE__);//'/var/www/uploads/';
	$uploadfile = $uploaddir .'/'. basename($_FILES['userfile']['name'][$i]);
	print "<pre>";
	if (move_uploaded_file($_FILES['userfile']['tmp_name'][$i], $uploadfile)) {
	   print "File is valid, and was successfully uploaded. ";
	   //print_r($_FILES);
	} else {
	   print "Possible fie upload attack!  Here's some debugging info:\n";
	   //print_r($_FILES);
	}
	print "</pre>";
	}
}

?>
<form action="<?php echo $_SERVER['PHP_SELF'].'?Nfiles='.$Nfiles; ?>" method="post" enctype="multipart/form-data">
  Send beleberda:<br>
  <?php for($i=0;$i<$Nfiles;$i++){echo '<input name="userfile[]" type="file"><br>';}?>
  <input type="submit" value="upload files">
</form>


</body>

</html>