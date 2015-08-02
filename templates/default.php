<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<base href="/">

		<title>(px:region name="title" /) - Impulse ReCreations</title>
		<link rel="shortcut icon" href="favicon.ico" />

		<!-- STYLE SHEET LINKS -->
		<link rel="stylesheet" type="text/css" href="css/layout.css" />
		<!--[if IE 6]>
		<link rel="stylesheet" type="text/css" href="css/ie6-haks.css" />
		<![endif]-->
		<!--[if lte IE 7]>
		<link rel="stylesheet" type="text/css" href="css/ie67-haks.css" />
		<![endif]-->

		<!-- JAVASCRIPT LINKS -->
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
		<script type="text/javascript" src="js/facebox.js"></script>
		<script type="text/javascript" src="js/general.js"></script>

		<link rel="stylesheet" type="text/css" href="css/main.css" />
		<link rel="stylesheet" type="text/css" href="css/facebox.css" />

		(px:region name="head" /)

	</head>
	<body>
		<div id="github-ribbon"><a href="https://github.com/triple-j/Impulse-ReCreations" target="_blank">Fork me on GitHub!</a></div>
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
						<h1>Impulse <em>Re</em>Creations</h1>
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
				Impulse <em>Re</em>Creations is a third-party add-on website.  It is not affiliated
				with <a href="http://www.impulsecreations.net/" target="_blank">Impulse Creations</a> in any way.
				<br/>
				Hacked together by <a href="http://triplejweb.developer.se" target="_blank">Jeremie J. Jarosh</a>
			</small>
		</div>
	</body>
</html>
