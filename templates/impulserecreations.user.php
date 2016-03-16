// ==UserScript==
// @name          Impulse ReCreations
// @author        Jeremie Jarosh
// @namespace     http://impulserecreations.appspot.com/
// @description   A third party add-on for the web site ImpulseCreations.net
// @version       <?php if(!empty($tmpl_version)){ echo $tmpl_version; }; echo PHP_EOL; ?>
// @include       http://impulsecreations.net/catalog/*
// @include       http://www.impulsecreations.net/catalog/*
// @include       https://impulsecreations.net/catalog/*
// @include       https://www.impulsecreations.net/catalog/*
// ==/UserScript==


// get the head/body tag so we can add to it
var elm_head = document.getElementsByTagName('head')[0],
    elm_body = document.getElementsByTagName('body')[0],
    elm_html = document.getElementsByTagName('html')[0],
    text_style = "", text_script = "",
    elm_style, elm_script, extensions, idx;

// set Userscript version variable
text_script += "var irec_version = \"<?php if(!empty($tmpl_version)){ echo $tmpl_version; } ?>\";\n";

// code to be added
extensions = <?php if(!empty($tmpl_extension_json)){ echo $tmpl_extension_json; } ?>;

// compile css
if ( extensions.styles != undefined ) {
	for ( idx = 0; idx < extensions.styles.length; idx++ ) {
		text_style += extensions.styles[idx] + "\n";
	}
}

// compile javascript
if ( extensions.scripts != undefined ) {
	for ( idx = 0; idx < extensions.scripts.length; idx++ ) {
		text_script += extensions.scripts[idx] + "\n";
	}
}

// add Class to html for easier css overrides
elm_html.classList.add("IReC");

// add style to the head
elm_style = document.createElement("style");
elm_style.setAttribute('type', "text/css");
elm_style.setAttribute('title', "irec");
if ( elm_style.styleSheet ) {
	elm_style.styleSheet.cssText = text_style;
} else {
	elm_style.appendChild(document.createTextNode( text_style ));
}
elm_head.appendChild(elm_style);

// add javascript to the head
elm_script = document.createElement("script");
elm_script.setAttribute('type','text/javascript');
elm_script.setAttribute('title', "irec");
elm_script.text = text_script;
elm_head.appendChild(elm_script);
