
// do stuff
window.addEventListener("load",function(){
	"use strict";
	
	IReC_hook.all_pages(document);
	
	var currPageFunc = IReC.current_page().replace(/\/catalog\/(.*)\..*?$/, '$1');

	if ( IReC_hook[currPageFunc] !== undefined ) {
		IReC_hook[currPageFunc]();
	}
	
},false);
