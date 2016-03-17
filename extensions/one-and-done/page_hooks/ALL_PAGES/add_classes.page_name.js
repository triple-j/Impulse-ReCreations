/* global D, IReC */

window.IReC.page_hooks.ALL_PAGES.add_classes = window.IReC.page_hooks.ALL_PAGES.add_classes || {};

IReC.page_hooks.ALL_PAGES.add_classes.page_name = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	var elmBody = D.query('body', documentObject),
		pageName = IReC.get_page(),
		pageClass = "irec--page--" + pageName;

	elmBody.classList.add(pageClass);
};