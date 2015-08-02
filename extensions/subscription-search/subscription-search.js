(function(window, undefined) {

	"use strict";

	// define functions
	function findParentTable( elm ) {
		var parentTagName, parentElm = elm;
		do {
			parentElm = parentElm.parentNode;
			parentTagName = parentElm.tagName.toUpperCase();
		} while ( parentTagName !== "TABLE" && parentTagName !== "BODY" );
	
		return parentTagName === "TABLE" ? parentElm : undefined;
	}
	
	function createSearchBox() {
		var wrapperElm = document.createElement('div'),
			labelElm = document.createElement('label'),
			inputElm = document.createElement('input'),
			inputId = "title-search",
			wrapperId = inputId + "-wrapper";
		
		wrapperElm.setAttribute('id', wrapperId);
		
		labelElm.setAttribute('for', inputId);
		labelElm.innerHTML = "Search";
		
		inputElm.setAttribute('type', 'search');
		inputElm.setAttribute('id', inputId);
		inputElm.setAttribute('name', inputId);
		inputElm.setAttribute('placeholder', 'Find Titles');
		inputElm.addEventListener('keyup', searchEventNarrowTitles);
		inputElm.addEventListener('change', searchEventNarrowTitles);
		inputElm.addEventListener('search', searchEventNarrowTitles); // this function will be executed on click of X (clear button)
		inputElm.addEventListener('keydown', preventFormSubmitEvent);
		
		wrapperElm.appendChild(labelElm);
		wrapperElm.appendChild(inputElm);
		
		return wrapperElm;
	}
	
	function preventFormSubmitEvent( event ) {
		if ((event.keyCode || event.which || event.charCode || 0) === 13) {
			event.preventDefault();
		}
	}
	
	function searchEventNarrowTitles( event ) {
		narrowTitles(this.value);
	}
	
	function narrowTitles( query ) {
		console.log(query);
		var selIdx, optIdx, optionElmList;
		
		for (selIdx = 0; selIdx < titleSelectElmList.length; selIdx++) {
			optionElmList = titleSelectElmList[selIdx].querySelectorAll('option');
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
		
	}
	
	// set variables
	var titleSelectElmList = [];

	// do stuff
	window.addEventListener("load",function(){
		if ( IReC.current_page() === "/catalog/subscription.php" ) {
			var elmList, 
				selectElm, 
				titlesTableElm,
				i = 1;
		
			do {
				elmList = document.getElementsByName('title'+i+'[]');
				selectElm = elmList[0] || false;
				i++;
			
				if ( selectElm !== false ) {
				
					titleSelectElmList.push(selectElm);
			
					if ( titlesTableElm === undefined ) {
						titlesTableElm = findParentTable( selectElm );
					}
				}
			} while (selectElm);
		
			if ( titlesTableElm ) {
				titlesTableElm.parentNode.insertBefore(createSearchBox(),titlesTableElm);
				titlesTableElm.classList.add("subscription-selects")
			} else {
				console.error("Parent <TABLE> not found.");
			}
		}
	},false);
	
})(window);
