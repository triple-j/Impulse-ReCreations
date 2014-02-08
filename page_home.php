<?php
require('includes/prescription/px.php');
require('includes/prescription/px_template.php');
PX_Template::set_template_dir( dirname(__FILE__)."/templates/" );


ob_start();
$selected = "Home";
include('includes/tabs.php');
$tmpl_nav = ob_get_clean();

ob_start();
?>

	<h1>Heavy<em>er</em> Ink <sup><small style="color:black">alpha</small></sup></h1>
	<p>Install the <a href="gm/heavyerink.user.js">User Script</a> to get the most out of <b>Heavy Ink</b>.
		<br/><sup><small style="padding-left:1em;">(Current version: <?=$version;?>)</small></sup></p>
	<p><small>Tested with Chrome 6.0 and Firefox 3.6 (Firefox requires
		<a href="http://www.greasespot.net/">Greasemonkey</a>).  <br />
		Untested but could work with Opera 8 or Internet Explorer 8 (IE requires
		<a href="http://www.bhelpuri.net/Trixie/">Trixie</a>).</small></p>

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


PX_Template::set_template("default");
PX_Template::set_region('title', "a third-party add-on website to HeavyInk");
PX_Template::set_region('head', '<link rel="stylesheet" type="text/css" href="css/main.css" />');
PX_Template::set_region('tabs_ul_nav', $tmpl_nav);
PX_Template::set_region('body', $tmpl_body);
PX_Template::out();
