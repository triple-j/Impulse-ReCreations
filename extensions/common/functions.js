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


	HerI.user = function() {
		var user = false,
		    $linkElm = $('#welcome a');

		if ( $linkElm.length > 0 ) {
			user = $linkElm.text();
		}

		return user;
	};


	HerI.current_page = function() {
		var page = window.location.pathname;
		return page;
	};


	HerI.hash_change = function( hash ) {
		var opts     = hash.split('.'),
		    cmd      = opts.shift(),
		    hashCall = cmd.substring(1) + "_hash_call";

		// TODO: limit to given pages
		if( typeof window[hashCall] == 'function' ) {
			console.log( "calling: "+hashCall+"()" );
			window[hashCall](opts);
		}
	};

})( jQuery, window );
