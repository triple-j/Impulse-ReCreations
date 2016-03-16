
// do stuff
window.addEventListener("load",function(){
	"use strict";

	IReC.page_hooks.ALL_PAGES.execute(document);

	var currPageFunc = IReC.get_page();

	if ( IReC.page_hooks[currPageFunc] !== undefined ) {
		IReC.page_hooks[currPageFunc].execute();
	}

},false);
