window.IReC.page_hooks.subscription.add_classes = window.IReC.page_hooks.subscription.add_classes || {};

/**
 * Add Class to subscribed titles in the selection options
 */
IReC.page_hooks.subscription.add_classes.subscribed_titles = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	//var elmsSelectOption = D.queryAll(".subscription-selects option", documentObject),
	var elmsSelectOption = D.queryAll("select option", documentObject),
		subscriptionTitles = IReC.page_hooks.subscription.list_subscriptions();

	D.forEach(elmsSelectOption, function(elm){
		var text = elm.textContent.trim();

		if ( subscriptionTitles.indexOf(text) !== -1 ) {
			elm.classList.add("irec--subscribed");
		}
	});
};

IReC.page_hooks.subscription.list_subscriptions = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	var elmsSubscriptionTitle = D.queryAll(".irec--comic-subscriptions .irec--comic-title", documentObject),
		subscriptionTitles = [];

	D.forEach(elmsSubscriptionTitle, function(elm){
		subscriptionTitles.push(elm.textContent.trim());
	});

	return subscriptionTitles;
};