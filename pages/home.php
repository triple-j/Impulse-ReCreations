<?php
require('includes/app_top.php');

$irec_selected_tab = "Home";

ob_start();
?>

	<h1>Impulse <em>Re</em>Creations<sup><small style="color:black">beta</small></sup></h1>
	<p>Install the <a href="impulserecreations.user.js">User Script</a> to get the most out of <b>Impulse Creations</b>.
		<br/><sup><small style="padding-left:1em;">(Current version: <?=IREC_VERSION;?>)</small></sup></p>
	<p><small>Tested on Chrome and Firefox (Firefox requires
		<a href="http://www.greasespot.net/" target="_blank">Greasemonkey</a>, and
		<a href="http://tampermonkey.net/" target="_blank">Tampermonkey</a> is recommended for
		Chrome).</small></p>

	<div class="features">
		<h2>Features</h2>
		<div>
			<ul>
				<li>Subscription Search</li>
			</ul>
		</div>
	</div>

<?php
$tmpl_body = ob_get_clean();


$tmpl_title = "A Third-Party Userscript for Impulse Creations";
include('templates/default.php');
