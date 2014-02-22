<?php
require('includes/prescription/px.php');
require('includes/prescription/px_template.php');

PX_Template::set_template_dir( dirname(dirname(__FILE__))."/templates/" );
PX_Template::set_template("default");

define('HERI_VERSION', "0.2.3a");

define('DIR_EXTENSIONS', "extensions/");
