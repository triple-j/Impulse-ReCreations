<?php
require('includes/app_top.php');
ini_set("display_errors", 0);

header('Content-type: text/javascript; charset=utf-8');

PX_Template::set_template("heavyerink.user");

PX_Template::set_region('version', HERI_VERSION);
PX_Template::out();
