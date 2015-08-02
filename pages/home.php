<?php
require('includes/app_top.php');

$heri_selected_tab = "Home";

ob_start();
?>

	<h1>Impulse <em>Re</em>Creations<sup><small style="color:black">beta</small></sup></h1>
	<p>Install the <a href="impulserecreations.user.js">User Script</a> to get the most out of <b>Impulse Creations</b>.
		<br/><sup><small style="padding-left:1em;">(Current version: <?=HERI_VERSION;?>)</small></sup></p>
	<p><small>Tested on Chrome and Firefox (Firefox requires
		<a href="http://www.greasespot.net/" target="_blank">Greasemonkey</a>, and
		<a href="http://tampermonkey.net/" target="_blank">Tampermonkey</a> is recommended for
		Chrome).</small></p>

	<div class="features">
		<h2>Features</h2>
		<div>
			<div class="ftr_imgs">
				<!--div><h4>New Buttons</h4><img src="imgs/ftr-btns.jpg" alt="New Buttons"/></div-->
				<div><h4>Large Cover Views</h4><img src="imgs/ftr-cvrs.jpg" alt="Large Cover Views"/></div>
				<!--div><h4>Front Page Quotes</h4><img src="imgs/ftr-quos.jpg" alt="Front Page Quotes"/></div-->
				<!--div><h4>Add to cart</h4><img src="imgs/ftr-cart.jpg" alt="Cart"/></div-->
			</div>
			<div class="clear-last"><h4>More to come&hellip;</h4></div>
		</div>
	</div>

<?php
$tmpl_body = ob_get_clean();


$tmpl_title = "A Third-Party Userscript for HeavyInk";
include('templates/default.php');
