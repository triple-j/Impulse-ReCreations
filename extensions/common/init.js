$(document).ready(function(){
	// open dialog based on href
	$(document).on('click', 'a[rel=heri-dialog]', function(evt){
		var selector = $(this).attr('href');
		HerI.open_dialog({ div: selector });
		evt.perventDefault();
	});

	// run functions based of the hash
	HerI.hash_change( location.hash );
	$(window).bind('hashchange', function() {
		HerI.hash_change( location.hash );
	});
});
