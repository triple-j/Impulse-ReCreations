<?php
require('includes/app_top.php');

header("HTTP/1.0 404 Not Found");

ob_start();
?>

	<h1>404</h1>
	<p>Page Not Found</p>

<?php
$tmpl_body = ob_get_clean();


$tmpl_title = "404";
include('templates/default.php');
