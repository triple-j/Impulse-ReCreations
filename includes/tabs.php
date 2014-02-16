<?php
/* Tab Menu */
$tabs = array(
	array( 'url'=>"index.php", 'label'=>"Home" ),
	/*array( 'url'=>"stats.php", 'label'=>"Stats" ),*/
	array( 'url'=>"http://heavyink.com/", 'label'=>"HeavyInk" ) /* TODO: add a togle for Heavy/er Ink */
);
?>
	<div class="nav tabs">
		<ul>
<?php
foreach ($tabs as $tab):
	$class="";
	if (isset($heri_selected_tab) && $heri_selected_tab == $tab['label']) {
		$class = " class=\"selected\" ";
	}
?>
			<li<?=$class;?>><a href="<?=$tab['url'];?>"><?=$tab['label'];?></a></li>
<?php
endforeach;
?>
		</ul>
	</div>
