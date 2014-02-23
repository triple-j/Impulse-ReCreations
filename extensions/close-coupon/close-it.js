(function( $, window, undefined ) {

	"use strict";

	$(document).ready(function() {
		if ( $('#facebox h2:contains("First time customer offer")').is(':visible') ) {
			HerI.close_dialog();
		}
	});


})( jQuery, window );
