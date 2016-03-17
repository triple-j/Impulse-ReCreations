window.IReC.page_hooks.account.add_classes = window.IReC.page_hooks.account.add_classes || {};

IReC.page_hooks.account.add_classes.previous_orders = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	var elmTextTitle = D.queryTextAll('Previous Orders', documentObject)[0],
		elmOrderTable = D.query('table', D.queryParent(elmTextTitle, 'td').nextElementSibling);

	elmOrderTable.classList.add('irec--previous-orders');
};