<?php
require('includes/app_top.php');

header("HTTP/1.0 404 Not Found");


ob_start();
?>

	<script type="text/javascript">
		$(document).ready(function(){
			$('#userscript').load("heavyerink.user.js");
		});
	</script>

	<style type="text/css">
		#userscript {
			font-family: monospace;
		}
	</style>

<?php
$tmpl_head = ob_get_clean();


ob_start();
?>

	<h1>debug</h1>

	<textarea id="userscript" cols="80" rows="24">
	</textarea>

<?php
$tmpl_body = ob_get_clean();


PX_Template::set_region('title', "debug");
PX_Template::set_region('head', $tmpl_head);
PX_Template::set_region('body', $tmpl_body);
PX_Template::out();
