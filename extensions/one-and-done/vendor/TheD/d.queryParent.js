/**
 * @require d.matches.js
 */

window.D = window.D || {};

D.queryParent = function( elementObject, selector ) {
	"use strict";

	var parentElm, tempElm = elementObject;

	do {
		tempElm = tempElm.parentNode;
		if ( D.matches( tempElm, selector ) ) {
			parentElm = tempElm;
		}
	} while ( parentElm === undefined && tempElm.tagName !== "BODY" );

	return parentElm || null;
};