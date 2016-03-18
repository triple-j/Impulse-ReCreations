window.D = window.D || {};

D.wrapElement = function( elementObject, tagName ) {
	"use strict";

	var elmWrapper = document.createElement(tagName);

	elementObject.parentNode.insertBefore(elmWrapper, elementObject);

	elmWrapper.appendChild(elementObject);

	return elmWrapper;
};