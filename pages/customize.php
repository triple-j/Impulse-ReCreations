<?php
require('includes/app_top.php');

$heri_selected_tab = "Customize";

$extensions = array();

$dir = DIR_EXTENSIONS;
if ( is_dir($dir) ) {
	if ( $dh = opendir($dir) ) {
		$exclude = array( ".", ".." );
		while ( ($file = readdir($dh)) !== false ) {
			$extensionDir  = $dir . $file;
			$extensionFile = $extensionDir . "/extension.xml";
			if ( !in_array($file, $exclude) && is_dir($extensionDir)
					&& file_exists($extensionFile) ) {
				$xmlcontents = file_get_contents( $extensionFile );
				$xml = new SimpleXMLElement( $xmlcontents, LIBXML_NOCDATA );

				$extensions[$file] = (array)$xml;
				$extensions[$file]['default'] = (bool)( in_array($file, $heri_default_extensions) );
			}
		}
		closedir($dh);
	}
}

ob_start();
?>

	<h1>Customize the Userscript</h1>
	<form method="post" action="redirect" accept-charset="UTF-8">
<?php
foreach( $extensions as $ext_id=>$ext ):
	$selected = $ext['default'] ? 'checked="checked"' : '';
?>
		<div class="formitem">
			<label>
				<input type="checkbox" name="extensions[]" value="<?=$ext_id;?>" <?=$selected;?> />
				<?=$ext['name'];?>
			</label>
			<a class="info" href="<?=$heri_page;?>#info-<?=$ext_id;?>" rel="facebox">i</a>
			<div id="info-<?=$ext_id;?>" class="info-dialog">
				<h1><?=$ext['name'];?></h1>
				<div class="desc">
					<?=nl2p(htmlentities($ext['description']));?>
				</div>
			</div>
		</div>
<?php
endforeach;
?>
		<input type="submit" name="install" value="Install Userscript" />
	</form>
	<br />

<?php if ( DEBUG_LVL >= 2 ): ?>
	<h2>DEBUG</h2>
	<pre><?=htmlentities(print_r($extensions,true));?></pre>
<?php endif; ?>

<?php
$tmpl_body = ob_get_clean();


$tmpl_title = "Customize your Userscript";
include('templates/default.php');
