window.D = window.D || {};

D.matches = function(el, selector) {
	"use strict";
	return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};