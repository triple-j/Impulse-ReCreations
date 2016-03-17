window.IReC.page_hooks.subscription.subscription_search = window.IReC.page_hooks.subscription.subscription_search || {};

(function(ss, undefined) {

	"use strict";

	ss.titleSelectElmList = [];
	ss.documentObject = null;

	ss.execute = function( documentObject ) {
		ss.documentObject = documentObject || document;
		ss.titleSelectElmList = D.queryAll('.irec--comic-title-select', ss.documentObject);

		var titlesTableElm = D.query('.irec--subscription-selects', ss.documentObject);

		titlesTableElm.parentNode.insertBefore(ss.createSearchBox(),titlesTableElm);
	};

	ss.createSearchBox = function() {
		var wrapperElm = document.createElement('div'),
			labelElm = document.createElement('label'),
			inputElm = document.createElement('input'),
			inputId = "irec--title-search",
			wrapperId = inputId + "-wrapper";

		wrapperElm.setAttribute('id', wrapperId);

		labelElm.setAttribute('for', inputId);
		labelElm.innerHTML = "Search";

		inputElm.setAttribute('type', 'search');
		inputElm.setAttribute('id', inputId);
		inputElm.setAttribute('name', inputId);
		inputElm.setAttribute('placeholder', 'Find Titles');
		inputElm.addEventListener('keyup', ss.searchEventNarrowTitles);
		inputElm.addEventListener('change', ss.searchEventNarrowTitles);
		inputElm.addEventListener('search', ss.searchEventNarrowTitles); // this function will be executed on click of X (clear button)
		inputElm.addEventListener('keydown', ss.preventFormSubmitEvent);

		wrapperElm.appendChild(labelElm);
		wrapperElm.appendChild(inputElm);

		return wrapperElm;
	};

	// don't submit the form if the 'ENTER' button is pressed
	ss.preventFormSubmitEvent = function( event ) {
		if ((event.keyCode || event.which || event.charCode || 0) === 13) {
			event.preventDefault();
		}
	};

	ss.searchEventNarrowTitles = function( event ) {
		ss.narrowTitles(this.value);
	};

	ss.narrowTitles = function( query ) {
		console.log(query);
		var selIdx, optIdx, optionElmList;

		for (selIdx = 0; selIdx < ss.titleSelectElmList.length; selIdx++) {
			optionElmList = ss.titleSelectElmList[selIdx].querySelectorAll('option');
			for (optIdx = 0; optIdx < optionElmList.length; optIdx++) {
				// quick and dirty find
				if (optionElmList[optIdx].textContent.toLowerCase().indexOf(query.toLowerCase()) === -1) {
					optionElmList[optIdx].disabled = true;
					optionElmList[optIdx].selected = false;
				} else {
					optionElmList[optIdx].disabled = false;
				}
			}
		}
	};

})(window.IReC.page_hooks.subscription.subscription_search);