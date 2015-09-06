window.IReC_hook = window.IReC_hook || {};

IReC_hook.subscription = function( documentObject ) {
	"use strict";

	documentObject = documentObject || document;

	D.forEach(D.queryTextAll('Remove above title', documentObject), function(elm){
		if (!D.matches(elm,'a')) { return null; }

		var titleId, subscriptionId, elmActionsRow, elmTitleRow;

		try {
			//titleId = elm.getAttribute('href').replace(/^.*?title_id=([0-1]+)*?$/, "$1");

			elmActionsRow = D.queryParent(elm,"tr");
			elmTitleRow = elmActionsRow.previousElementSibling;

			elmTitleRow.classList.add('comic-subscription');
			elmTitleRow.classList.add('comic-subscription--title');
			D.$('td:nth-child(1)', elmTitleRow).classList.add('comic-title');
			D.$('td:nth-child(2)', elmTitleRow).classList.add('start-issue');
			D.$('td:nth-child(3)', elmTitleRow).classList.add('end-issue');
			D.$('td:nth-child(4)', elmTitleRow).classList.add('quantity');
			D.$('td:nth-child(5)', elmTitleRow).classList.add('note');
			D.$('td:nth-child(6)', elmTitleRow).classList.add('unsubscribe');
			D.$('td:nth-child(7)', elmTitleRow).classList.add('edit');

			elmActionsRow.classList.add('comic-subscription');
			elmActionsRow.classList.add('comic-subscription--actions');
			D.$('td:nth-child(1)', elmActionsRow).classList.add('remove-title');
			//D.$('td:nth-child(1)', elmActionsRow).classList.add('title-id-' + titleId);
			D.$('td:nth-child(2)', elmActionsRow).classList.add('new-entry');

			//subscriptionId = D.$('.comic-title a', elmTitleRow).getAttribute('href').replace(/^.*?subsc_id=([0-1]+?).*?$/, "$1");

			//elmTitleRow.classList.add('subscription-id-' + subscriptionId);
			//elmActionsRow.classList.add('subscription-id-' + subscriptionId);
		} catch(e) {
			console.log(e);
		}

		var elmSubscTable = D.queryParent(D.$('.comic-subscription', documentObject), 'table');

		elmSubscTable.classList.add('comic-subscriptions');
		D.$('tr:nth-child(1)', elmSubscTable).classList.add('header');
	});
};

//body > table:nth-child(9) > tbody > tr > td:nth-child(3) > form > table > tbody > tr:nth-child(13) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.subs
//body > table:nth-child(9) > tbody > tr > td:nth-child(3) > form > table > tbody > tr:nth-child(13) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(3)