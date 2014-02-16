// ==UserScript==
// @name          HeavyerInk
// @namespace     http://heavyerink.mooo.com
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
    elm_style, elm_script;

// add ID to body for easier css overrides
elm_body.setAttribute('id', "heri");

// create an element styles can be appended to
elm_style = document.createElement("style");
elm_style.setAttribute('type', "text/css");
elm_style.setAttribute('title', "heri");
elm_head.appendChild(elm_style);

// add javascript to the head
elm_script = document.createElement("script");
elm_script.setAttribute('type','text/javascript');
elm_script.setAttribute('title', "heri");
elm_script.text = "window.onload = function(){ alert('itworks!'); };";
elm_head.appendChild(elm_script);
