<?php
require('includes/app_top.php');

$irec_selected_tab = "Home";

ob_start();
?>

	<h1>Impulse <em>Re</em>Creations</h1>
	<p>Install the <a href="impulserecreations.user.js">User Script</a> to get the most out of <b>Impulse Creations</b>.
		<br/><sup><small style="padding-left:1em;">(Current version: <?=IREC_VERSION;?>)</small></sup></p>
	<p><small>Tested on Chrome and Firefox (Firefox requires
		<a href="http://www.greasespot.net/" target="_blank">Greasemonkey</a>, and
		<a href="http://tampermonkey.net/" target="_blank">Tampermonkey</a> is recommended for
		Chrome).</small></p>

	<div class="features">
		<h2>Features</h2>

		<h3>New Functionality</h3>

		<ul>
			<li><em>Subscription Search</em> &mdash; Narrow down comic titles in the
				'Reserve System' selection fields based on search terms.</li>
			<li>Disable and highlight subscribed titles in the 'Reserve System' selection
				fields.</li>
		</ul>

		<h3>UI Tweaks</h3>

		<ul>
			<li>Correct the text alginment of the comic description that pops up when hovering
				over a comic issue.</li>
			<li>Make individual rows of items (subscribed titles, orders, etc.) easier to
				discern.</li>
			<li>Remove excess padding between the Header/Footer and the page content.</li>
			<li>Remove the page name the shows up on the top of some pages.</li>
		</ul>
	</div>

<?php
$tmpl_body = ob_get_clean();


$tmpl_title = "A Third-Party Userscript for Impulse Creations";
include('templates/default.php');
