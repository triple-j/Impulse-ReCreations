window.IReC.page_hooks.ALL_PAGES = window.IReC.page_hooks.ALL_PAGES || {};

window.IReC.page_hooks.ALL_PAGES.execute = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	IReC.page_hooks.ALL_PAGES.add_classes.group_infoBoxes(documentObject);
};