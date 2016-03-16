window.IReC.page_hooks.subscription.add_classes = window.IReC.page_hooks.subscription.add_classes || {};

IReC.page_hooks.subscription.add_classes.my_subscriptions = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	D.forEach(D.queryTextAll('Remove above title', documentObject), function(elm){
		if (!D.matches(elm,'a')) { return null; }

		var elmActionsRow, elmTitleRow;

		try {
			elmActionsRow = D.queryParent(elm,"tr");
			elmTitleRow = elmActionsRow.previousElementSibling;

			elmTitleRow.classList.add('irec--comic-subscription');
			elmTitleRow.classList.add('irec--comic-subscription--title');
			D.$('td:nth-child(1)', elmTitleRow).classList.add('irec--comic-title');
			D.$('td:nth-child(2)', elmTitleRow).classList.add('irec--start-issue');
			D.$('td:nth-child(3)', elmTitleRow).classList.add('irec--end-issue');
			D.$('td:nth-child(4)', elmTitleRow).classList.add('irec--quantity');
			D.$('td:nth-child(5)', elmTitleRow).classList.add('irec--note');
			D.$('td:nth-child(6)', elmTitleRow).classList.add('irec--unsubscribe');
			D.$('td:nth-child(7)', elmTitleRow).classList.add('irec--edit');

			elmActionsRow.classList.add('irec--comic-subscription');
			elmActionsRow.classList.add('irec--comic-subscription--actions');
			D.$('td:nth-child(1)', elmActionsRow).classList.add('irec--remove-title');
			D.$('td:nth-child(2)', elmActionsRow).classList.add('irec--new-entry');
		} catch(e) {
			console.log(e);
		}

		var elmSubscTable = D.queryParent(D.$('.irec--comic-subscription', documentObject), 'table');

		elmSubscTable.classList.add('irec--comic-subscriptions');
		D.$('tr:nth-child(1)', elmSubscTable).classList.add('irec--header-row');
	});
};