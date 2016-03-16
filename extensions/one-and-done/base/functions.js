window.IReC = window.IReC || {};

(function( IReC, undefined ) {

	"use strict";

	IReC.get_path = function() {
		var path = window.location.pathname;
		return path;
	};

	IReC.get_page = function() {
		var page = IReC.get_path().replace(/\/catalog\/(.*)\..*?$/, '$1');
		return page;
	};

	// DEPRECATED
	IReC.current_page = function() {
		return IReC.get_path();
	};

})( window.IReC );