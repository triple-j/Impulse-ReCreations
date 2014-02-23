$(document).ready(function(){
	// open dialog based on href
	$(document).on('click', 'a[rel=heri-dialog]', function(evt){
		var selector = $(this).attr('href');
		HerI.open_dialog({ div: selector });
		evt.perventDefault();
	});
});
