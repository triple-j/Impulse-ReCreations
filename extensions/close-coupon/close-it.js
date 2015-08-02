(function( $, window, undefined ) {

	"use strict";

	$(document).ready(function() {
		if ( $('#facebox h2:contains("First time customer offer")').is(':visible') ) {
			IReC.close_dialog();
		}
	});


})( jQuery, window );
