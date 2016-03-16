window.IReC.page_hooks.ALL_PAGES.add_classes = window.IReC.page_hooks.ALL_PAGES.add_classes || {};

IReC.page_hooks.ALL_PAGES.add_classes.group_infoBoxes = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	D.forEach(D.$$('.infoBoxHeading', documentObject), function(elm){
		var text = elm.textContent,
			parentElm = D.queryParent(elm,'table'),
			siblingElm = parentElm.nextElementSibling,
			className = "irec--infoBox--";

		className += text.toLowerCase().replace(/(\s|[^a-z0-9])+/g, '-');

		parentElm.classList.add(className);
		parentElm.classList.add("irec--infoBox-header");
		parentElm.classList.add("irec--infoBox-item");
		siblingElm.classList.add(className);
		siblingElm.classList.add("irec--infoBox-item");
	});
};