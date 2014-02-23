<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

		<title>(px:region name="title" /) - HeavyerInk</title>
		<link rel="shortcut icon" href="favicon.ico" />

		<!-- STYLE SHEET LINKS -->
		<link rel="stylesheet" type="text/css" href="<?=$opts['root'];?>css/layout.css" />
		<!--[if IE 6]>
		<link rel="stylesheet" type="text/css" href="<?=$opts['root'];?>css/ie6-haks.css" />
		<![endif]-->
		<!--[if lte IE 7]>
		<link rel="stylesheet" type="text/css" href="<?=$opts['root'];?>css/ie67-haks.css" />
		<![endif]-->

		<!-- JAVASCRIPT LINKS -->
		<!--script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script-->
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>

		<link rel="stylesheet" type="text/css" href="css/main.css" />

		(px:region name="head" /)

	</head>
	<body>
		<a href="https://github.com/triple-j/Heavyer-Ink" target="_blank"><img style="position: fixed; top: 0; right: 0; border: 0;" src="https://github-camo.global.ssl.fastly.net/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
<?php include_once("includes/analyticstracking.php"); ?>

		<div id="login-popup" style="display:none"><!-- TODO: not needed? --></div>
		<div id="header">
			<div id="account" class="nav">
				<div class="nav nav_text">

					(px:region name="extra_ul_nav" /)

				</div><!-- TODO: not needed? -->
			</div>
			<div id="logo">
				<div>
					<a href="index.php">
						<img src="imgs/logo-type.png" alt="HeavyER Ink" />
					</a>
				</div>
			</div>
			<div id="menu" class="nav">
				<div class="nav tabs">

<?php include('includes/tabs.php'); ?>

				</div>
			</div>
			<div id="search">
				<form action="http://heavyink.com/search" method="post">
					<label for="q">Search for&nbsp;</label>
					<input id="q" name="q" type="text" value="">
					<input type="submit" class="button" value="Go">
				</form>
			</div>
		</div>
		<div id="content-container">
			<div id="content">

				(px:region name="body" /)

			</div>
		</div>
		<div id="footer">
			<small>
				Heavy<strong>er</strong> Ink is a third-party add-on website to <a href="http://heavyink.com/" target="_blank">HeavyInk.com</a>
				<br/>
				Hacked together by <a href="http://triplejweb.developer.se" target="_blank">Jeremie J. Jarosh</a>
			</small>
		</div>
	</body>
</html>
