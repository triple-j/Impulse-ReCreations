<?php
require('includes/app_top.php');
include('includes/minify/CSSmin.php');
include('includes/minify/JSMin.php');

$cssmin = new CSSmin();

$extensions = array( "cover-popup" );
$extensions_data = array();

foreach ( $extensions as $extension ) {
	$ext_dir = "file://".$heri_path.DIR_EXTENSIONS.$extension."/";
	$xmlfile = $ext_dir."extension.xml";

	if ( file_exists($xmlfile) ) {
		$xml = simplexml_load_file( $xmlfile );

		$css_count = $xml->stylesheet->count();
		$js_count  = $xml->javascript->count();

		if ( $css_count ) {
			$stylesheets = ($css_count > 1) ? (array)$xml->stylesheet : array( (string)$xml->stylesheet );

			foreach ( $stylesheets as $stylesheet ) {
				if ( !isset($extensions_data['styles']) ) $extensions_data['styles'] = array();

				$cssfile = $ext_dir . $stylesheet;
				if ( file_exists($cssfile) ) {
					$filecontents = file_get_contents( $cssfile );
					$minifiedCss = $cssmin->run( $filecontents );
					$extensions_data['styles'] []= $minifiedCss;
				}
			}
		}

		if ( $js_count ) {
			$javascripts = ($js_count > 1) ? (array)$xml->javascript : array( (string)$xml->javascript );

			foreach ( $javascripts as $javascript ) {
				if ( !isset($extensions_data['scripts']) ) $extensions_data['scripts'] = array();

				$jsfile = $ext_dir . $javascript;
				if ( file_exists($jsfile) ) {
					$filecontents = file_get_contents( $jsfile );
					$minifiedJs = str_replace( "\n", "", JSMin::minify($filecontents) );
					$extensions_data['scripts'] []= $minifiedJs;
				}
			}
		}
	}
}

//Set no caching
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

header('Content-type: text/javascript; charset=utf-8');

PX_Template::set_template("heavyerink.user");

PX_Template::set_region('version', HERI_VERSION." (".time().")");
PX_Template::set_region('extension_json', json_encode($extensions_data));
@PX_Template::out();
