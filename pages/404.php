<?php
require('includes/app_top.php');

header("HTTP/1.0 404 Not Found");

ob_start();
?>

	<h1>404</h1>
	<p>Page Not Found</p>

<?php
$tmpl_body = ob_get_clean();


PX_Template::set_region('title', "404");
PX_Template::set_region('body', $tmpl_body);
PX_Template::out();
