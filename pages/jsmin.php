<?php
$time_start = microtime(true);

include('includes/minify/JSMin.php');
include('includes/minify/JSMinPlus.php');

$use_plus = false;

$filename = basename($irec_page);
$filecontents = file_get_contents('userscript-data/js/'.$filename);

$minifiedJs = $use_plus ? JSMinPlus::minify($filecontents) : JSMin::minify($filecontents);
$minifiedJs = str_replace("\n","",$minifiedJs);

header('Content-type: text/javascript; charset=utf-8');

echo $minifiedJs;

echo PHP_EOL."/* Execution Time: ".round(microtime(true)-$time_start,4)." seconds */";
