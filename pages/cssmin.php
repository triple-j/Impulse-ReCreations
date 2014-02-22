<?php
$time_start = microtime(true);

include('includes/minify/CSSmin.php');

$use_plus = false;

$filename = basename($heri_page);
$filecontents = file_get_contents('userscript-data/css/'.$filename);

$cssmin = new CSSmin();

$minifiedCss = $cssmin->run( $filecontents );
#$minifiedCss = str_replace("\n","",$minifiedCss);

header('Content-type: text/css; charset=utf-8');

echo $minifiedCss;

echo PHP_EOL."/* Execution Time: ".round(microtime(true)-$time_start,4)." seconds */";
