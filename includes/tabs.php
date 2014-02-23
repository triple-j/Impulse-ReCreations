<?php
/* Tab Menu */
$tabs = array(
	array( 'url'=>"index.php", 'label'=>"Home" ),
	/*array( 'url'=>"stats.php", 'label'=>"Stats" ),*/
	array( 'url'=>"https://heavyink.com/forums/1/topics/2655", 'label'=>"Discuss" ),
	array( 'url'=>"http://heavyink.com/", 'label'=>"HeavyInk" ) /* TODO: add a togle for Heavy/er Ink */
);
if ( DEBUG_LVL >= 1 ) {
	$tabs []= array( 'url'=>"debug", 'label'=>"[ debug ]" );
}
?>
	<div class="nav tabs">
		<ul>
<?php
foreach ($tabs as $tab):
	$class  = (isset($heri_selected_tab) && $heri_selected_tab == $tab['label'])
		? "class=\"selected\"" : "";
	$target = ( substr($tab['url'],0,4) == "http" )
		? "target=\"_blank\"" : "";
?>
			<li <?=$class;?>><a href="<?=$tab['url'];?>" <?=$target;?>><?=$tab['label'];?></a></li>
<?php
endforeach;
?>
		</ul>
	</div>
