window.D = window.D || {};

D.forEach = function( list, callback ) {
	"use strict";
	
	if ( list.length !== undefined ) {
		for( var i = 0; i < list.length; i++ ) {
			callback( list[i], i );
		}
	}
}