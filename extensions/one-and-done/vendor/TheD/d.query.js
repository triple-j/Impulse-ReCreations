window.D = window.D || {};

D.query = D.$ = function( selectors, documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	return documentObject.querySelector( selectors );
};

D.queryAll = D.$$ = function( selectors, documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	return documentObject.querySelectorAll( selectors );
};