<?php
/* Tab Menu */
$tabs = array(
	array( 'url'=>"index.php", 'label'=>"Home" ),
	array( 'url'=>"customize", 'label'=>"Customize" ),
	array( 'url'=>"http://www.impulsecreations.net/", 'label'=>"Impulse Creations" )
);
if ( DEBUG_LVL >= 1 ) {
	$tabs []= array( 'url'=>"debug", 'label'=>"[ debug ]" );
}
?>
	<div class="nav tabs">
		<ul>
<?php
foreach ($tabs as $tab):
	$class  = (isset($irec_selected_tab) && $irec_selected_tab == $tab['label'])
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
