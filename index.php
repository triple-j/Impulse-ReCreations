<?php
error_reporting(E_ALL ^ E_NOTICE);
ini_set("display_errors", 1);

$page = $_SERVER['REQUEST_URI'];


if ( $page == '/' || preg_match('|^/index|',$page) ) {

	include( "pages/home.php" );

} else if ( preg_match('|^/js/|',$page) )  {

	include( "pages/jsmin.php" );

} else {

	echo "hikat2" . $page;

}
