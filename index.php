<?php
error_reporting(E_ALL ^ E_NOTICE);
#ini_set("display_errors", 1);

$irec_page = $_SERVER['REQUEST_URI'];


if ( $irec_page == '/' || preg_match('|^/index|',$irec_page) ) {

	include( "pages/home.php" );

} else if ( preg_match('|^/minjs/|',$irec_page) )  {

	include( "pages/jsmin.php" );

} else if ( preg_match('|^/mincss/|',$irec_page) )  {

	include( "pages/cssmin.php" );

} else if ( preg_match('|^/info$|',$irec_page) )  {

	phpinfo();

} else {

	$file = "pages/" . preg_replace('/^\/(.*?)(\/|\.php)?$/',"$1",$irec_page) . ".php";

	if ( file_exists($file) ) {
		include( $file );
	} else {
		include( "pages/404.php" );
	}

}
