<?php
require('includes/app_top.php');

$heri_selected_tab = "Home";

ob_start();
?>

	<h1>Heavy<em>er</em> Ink <sup><small style="color:black">alpha</small></sup></h1>
	<p>Install the <a href="heavyerink.user.js">User Script</a> to get the most out of <b>Heavy Ink</b>.
		<br/><sup><small style="padding-left:1em;">(Current version: <?=HERI_VERSION;?>)</small></sup></p>
	<p><small>Tested on Chrome and Firefox (Firefox requires
		<a href="http://www.greasespot.net/" target="_blank">Greasemonkey</a>).</p>

	<div class="features">
		<h2>Features</h2>
		<div>
			<div class="ftr_imgs">
				<div><h4>New Buttons</h4><img src="imgs/ftr-btns.jpg" alt="New Buttons"/></div>
				<div><h4>Large Cover Views</h4><img src="imgs/ftr-cvrs.jpg" alt="Large Cover Views"/></div>
				<div><h4>Front Page Quotes</h4><img src="imgs/ftr-quos.jpg" alt="Front Page Quotes"/></div>
				<div><h4>Add to cart</h4><img src="imgs/ftr-cart.jpg" alt="Cart"/></div>
			</div>
			<div class="clear-last"><h4>and more&hellip;</h4></div>
		</div>
	</div>

<?php
$tmpl_body = ob_get_clean();


PX_Template::set_region('title', "a third-party add-on website to HeavyInk");
PX_Template::set_region('body', $tmpl_body);
PX_Template::out();
