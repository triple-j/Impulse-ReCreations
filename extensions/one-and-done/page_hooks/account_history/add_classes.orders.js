/* global D, IReC */
window.IReC.page_hooks.account_history.add_classes = window.IReC.page_hooks.account_history.add_classes || {};

IReC.page_hooks.account_history.add_classes.orders = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	var elmTextTitle = D.queryTextAll('My Order History', documentObject)[0],
		elmPageTable = D.queryParent(D.queryParent(elmTextTitle, 'table'), 'table'),
		elmHeaderRow = D.query('tr:nth-child(1)', elmPageTable),
		elmsSpacerRow = D.queryAll('tr:nth-child(2),tr:nth-child(5)', elmPageTable),
		elmOrdersRow = D.query('tr:nth-child(3)', elmPageTable),
		elmPagerRow = D.query('tr:nth-child(4)', elmPageTable),
		elmActionRow = D.query('tr:nth-child(5)', elmPageTable);

	elmHeaderRow.classList.add('irec--row--header');
	D.forEach(elmsSpacerRow, function(elm){ elm.classList.add('irec--row--spacer'); });
	elmOrdersRow.classList.add('irec--row--orders');
	elmPagerRow.classList.add('irec--row--pager');
	elmActionRow.classList.add('irec--row--actions');

	D.forEach(D.queryTextAll("Order Number:", elmOrdersRow), function(elm){
		var elmOrderHeader = D.queryParent(elm, 'table'),
			elmOrderBody = elmOrderHeader.nextElementSibling,
			elmSpacer = elmOrderBody.nextElementSibling;

		elmOrderHeader.classList.add('irec--order');
		elmOrderHeader.classList.add('irec--order--header');

		elmOrderBody.classList.add('irec--order');
		elmOrderBody.classList.add('irec--order--body');

		elmSpacer.classList.add('irec--row--spacer');
	});

	IReC.page_hooks.account_history.add_classes.order(elmOrdersRow);
};

IReC.page_hooks.account_history.add_classes.order = function( documentObject ) {
	"use strict";

	var labels = [
		"Order Number:",
		"Order Status:",
		"Order Date:",
		"Products:",
		"Shipped To:",
		"Order Cost:"
		];

	D.forEach(labels, function(label){
		var valueClass = "irec--" + label.toLowerCase().replace(/:$/, "").replace(/[^a-z0-9]+/g, "-"),
			labelClass = valueClass + "--label";

		D.forEach(D.queryTextAll(label, documentObject), function(elm){
			elm.classList.add(labelClass);
			D.wrapElement(elm.nextSibling, 'span').classList.add(valueClass);
		});
	});
};