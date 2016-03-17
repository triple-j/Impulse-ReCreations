window.IReC.page_hooks.subscription.add_classes = window.IReC.page_hooks.subscription.add_classes || {};


IReC.page_hooks.subscription.add_classes.selection_inputs = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	var elmsTitleSelect = D.queryAll('select[name^="title"]', documentObject),
		elmSelectWrapper = D.queryParent(elmsTitleSelect[0], 'table');

	elmSelectWrapper.classList.add("irec--subscription-selects");

	D.forEach(elmsTitleSelect, function(elm){
		elm.classList.add("irec--comic-title-select");
	});
};