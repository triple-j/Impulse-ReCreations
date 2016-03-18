/* global IReC */
window.IReC.page_hooks.account_history = window.IReC.page_hooks.account_history || {};

window.IReC.page_hooks.account_history.execute = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	IReC.page_hooks.account_history.add_classes.orders(documentObject);
};