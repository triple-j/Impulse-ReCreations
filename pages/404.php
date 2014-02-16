<?php
require('includes/app_top.php');

header("HTTP/1.0 404 Not Found");

ob_start();
#$selected = "Home";
include('includes/tabs.php');
$tmpl_nav = ob_get_clean();

ob_start();
?>

	<h1>404</h1>
	<p>Page Not Found</p>

<?php
$tmpl_body = ob_get_clean();


PX_Template::set_region('title', "404");
PX_Template::set_region('tabs_ul_nav', $tmpl_nav);
PX_Template::set_region('body', $tmpl_body);
PX_Template::out();
