window.IReC_hook = window.IReC_hook || {};

IReC_hook.all_pages = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	D.forEach(D.$$('.infoBoxHeading', documentObject), function(elm){
		var text = elm.textContent,
			parentElm = D.queryParent(elm,'table'),
			siblingElm = parentElm.nextElementSibling,
			className = "infoBox--";

		className += text.toLowerCase().replace(/(\s|[^a-z0-9])+/g, '-');

		parentElm.classList.add(className);
		parentElm.classList.add("infoBox-header");
		parentElm.classList.add("infoBox-item");
		siblingElm.classList.add(className);
		siblingElm.classList.add("infoBox-item");
	});
}
