/**
 * @require d.matches.js
 */

window.D = window.D || {};

D.queryTextAll = function( text, documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	var escapedText = text.replace(/'/g,'\\\'').replace(/"/g,'\\\"'),
		xPathResults, elements = [], elm;

	xPathResults = document.evaluate('//*[text()[contains(.,"'+escapedText+'")]]', documentObject, null, XPathResult.ANY_TYPE, null);

	while( elm = xPathResults.iterateNext() ) {
		if ( D.matches(elm,'script, style') ) { continue; }
		elements.push(elm);
	}

	return elements.length ? elements : null;
};

////*[@id="IReC"]/body/table[5]/tbody/tr/td[3]/form/table/tbody/tr[13]/td/table/tbody/tr/td/table/tbody/tr[4]