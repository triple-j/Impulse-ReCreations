<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">

	<head>
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
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>

		(px:region name="head" /)

	</head>
	<body>
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

					(px:region name="tabs_ul_nav" /)

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
