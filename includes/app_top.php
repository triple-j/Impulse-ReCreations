<?php
session_name('ImpulseReCreations');
session_start();
if ( $irec_page != "/impulserecreations.user.js" ) {
	#setcookie("IREC_REQUEST", "", time() - 3600); // delete cookie
	unset($_SESSION['IREC_REQUEST']);
}

define('IREC_VERSION', "0.1.0b");

define('DIR_EXTENSIONS', "extensions/");

define('DEBUG_LVL', ($_SERVER['SERVER_NAME'] == 'localhost')?1:0);

$irec_default_extensions = array(
	"common",
	"ui-fix",
	"cover-popup",
	"close-coupon",
	"login-dialog",
	"stats"
);

function nl2p($string) {
	$br      = "<!-- newline -->";
	$brQuo   = preg_quote($br);
	$regex   = array("/{$brQuo}\s*{$brQuo}/", "/{$brQuo}/", "/[\t\ ]+/");
	$replace = array("</p>".PHP_EOL."<p>",    "",           " ");

	$string = str_replace(array("\r\n", "\r", "\n"), $br, $string);
	$string = "<p>".preg_replace($regex, $replace, $string)."</p>".PHP_EOL;

	return $string;
}

// http://www.php.net/manual/en/function.array-diff.php#110572
function identical_values( $arrayA , $arrayB ) {
	sort( $arrayA );
	sort( $arrayB );

	return $arrayA == $arrayB;
}
