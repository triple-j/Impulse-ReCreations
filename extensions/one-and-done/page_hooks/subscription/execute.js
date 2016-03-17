window.IReC.page_hooks.subscription = window.IReC.page_hooks.subscription || {};

window.IReC.page_hooks.subscription.execute = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	IReC.page_hooks.subscription.add_classes.my_subscriptions(documentObject);
	IReC.page_hooks.subscription.add_classes.selection_inputs(documentObject);
	IReC.page_hooks.subscription.add_classes.subscribed_titles(documentObject);

	IReC.page_hooks.subscription.subscription_search.execute(documentObject);
};
