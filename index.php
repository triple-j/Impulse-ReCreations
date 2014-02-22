<?php
error_reporting(E_ALL ^ E_NOTICE);
ini_set("display_errors", 1);

$heri_page = $_SERVER['REQUEST_URI'];


if ( $heri_page == '/' || preg_match('|^/index|',$heri_page) ) {

	include( "pages/home.php" );

} else if ( preg_match('|^/minjs/|',$heri_page) )  {

	include( "pages/jsmin.php" );

} else if ( preg_match('|^/mincss/|',$heri_page) )  {

	include( "pages/cssmin.php" );

} else {

	$file = "pages/" . preg_replace('/^\/(.*?)(\/|\.php)?$/',"$1",$heri_page) . ".php";

	if ( file_exists($file) ) {
		include( $file );
	} else {
		include( "pages/404.php" );
	}

}
