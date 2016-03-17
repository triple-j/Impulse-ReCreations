window.IReC.page_hooks.account = window.IReC.page_hooks.account || {};

window.IReC.page_hooks.account.execute = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	IReC.page_hooks.account.add_classes.previous_orders(documentObject);
};