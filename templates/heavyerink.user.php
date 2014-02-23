// ==UserScript==
// @name          HeavyerInk
// @namespace     http://heavyerink.appspot.com/
// @description   A third party add-on for the web site HeavyInk.com
// @version       (px:region name="version"/)
// @include       http://heavyink.com/*
// @include       http://www.heavyink.com/*
// @include       https://heavyink.com/*
// @include       https://www.heavyink.com/*
// ==/UserScript==


// get the head/body tag so we can add to it
var elm_head = document.getElementsByTagName('head')[0],
    elm_body = document.getElementsByTagName('body')[0],
    text_style = "", text_script = "",
    elm_style, elm_script, extensions, idx;

// set HeavyerInk Userscript version variable
text_script += "var heri_version = \"(px:region name="version"/)\";\n";

// code to be added
extensions = (px:region name="extension_json"/);

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

// add ID to body for easier css overrides
elm_body.setAttribute('id', "heri");

// add style to the head
elm_style = document.createElement("style");
elm_style.setAttribute('type', "text/css");
elm_style.setAttribute('title', "heri");
if ( elm_style.styleSheet ) {
	elm_style.styleSheet.cssText = text_style;
} else {
	elm_style.appendChild(document.createTextNode( text_style ));
}
elm_head.appendChild(elm_style);

// add javascript to the head
elm_script = document.createElement("script");
elm_script.setAttribute('type','text/javascript');
elm_script.setAttribute('title', "heri");
elm_script.text = text_script;
elm_head.appendChild(elm_script);
