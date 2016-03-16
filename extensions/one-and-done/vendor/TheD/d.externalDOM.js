window.D = window.D || {};

D.externalDOM = function( options ) {
	"use strict";

	var httpRequest,
		url        = options.url || "",
		method     = (options.method && options.method.toUpperCase() === "POST") ? "POST" : "GET",
		params     = options.params || undefined,
		onSuccess  = options.success || function( dom, request ) {},
		onError    = options.error || function( err, request ) {},
		onComplete = options.complete || function( request ) {};

	httpRequest = new XMLHttpRequest();
	httpRequest.responseType = "document";

	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status >= 200 && httpRequest.status < 400) {
				onSuccess( httpRequest.responseXML, httpRequest );
			} else {
				onError( httpRequest.status, httpRequest );
			}
			onComplete( httpRequest );
		}
	};

	if ( method === "GET" && params ) {
		var connector = url.indexOf('?') === -1 ? '?' : '&';
		url += connector + params;
	}

	httpRequest.open(method, url);

	if ( method === "POST" && params ) {
		httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		httpRequest.send(params);
	} else {
		httpRequest.send();
	}
};