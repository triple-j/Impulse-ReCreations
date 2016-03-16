window.IReC.page_hooks.subscription = window.IReC.page_hooks.subscription || {};

window.IReC.page_hooks.subscription.execute = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	IReC.page_hooks.subscription.add_classes.my_subscriptions(documentObject);
};
