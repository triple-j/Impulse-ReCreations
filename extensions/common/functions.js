(function( $, window, undefined ) {

	"use strict";

	window.HerI = {
		version : window.heri_version
	};

	HerI.open_dialog = function( param ) {
		$.facebox( param );
	};

	HerI.close_dialog = function() {
		$(document).trigger('close.facebox');
	};

})( jQuery, window );
