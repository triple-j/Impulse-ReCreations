window.IReC_Data = {};

// TODO: move function to common:functions.js
IReC_Data.getPageHtml = function( page, opts ) {

	var html, stripScripts = function( html ) {
		html = html.replace(/\s+/g, " ");
		html = html.replace(/\<script.*?\>(.|\s)*?\<\/script\>/g, "<!-- script -->");
		html = html.replace(/\<link.*?\/?\>/g, "<!-- link -->");
		return html;
	};

	if ( IReC.current_page() == page ) {

		html = stripScripts( $('html')[0].outerHTML );
		opts.success( html );

	} else {

		$.ajax({
			url: page,
			dataType: 'html',
			success: function(data) {
				html = stripScripts( data );
				opts.success( html );
			},
			error: opts.error
		});

	}
};

IReC_Data.getCalanderData = function( opts ) {

	var calJUrl = "/me/calendar",
	    months  = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	IReC_Data.getPageHtml(calJUrl, {
		success: function(html) {
			var $dom = $( html ), calData = [];

			$dom.find('.calendar .shipment').each(function(shipIdx,shipElm){
				var data = {},
				    parsePrice = function(price) { return parseFloat(String(price).replace(/^.*?\$([0-9\.]+).*?$/,"$1")); }; // TODO: move function to common:functions.js

				data.title = $(shipElm).children('h2').text();

				data.price = parsePrice( $(shipElm).find('.price').text() );

				matches = data.title.match(/([a-z]+)\s+([0-9]+),\s+([0-9]+)/i);
				if ( matches ) {
					data.date = {
						"text"  : matches[0],
						"year"  : parseInt(matches[3], 10),
						"month" : months.indexOf(matches[1]) + 1,
						"day"   : parseInt(matches[2], 10)
					};
				}

				data.items = [];
				$(shipElm).find('table.items tr').each(function(itemIdx,itemElm){
					var item = {};

					item.name  = $(itemElm).find('.cal_name a').text();
					item.url   = $(itemElm).find('.cal_name a').attr('href');
					item.price = parsePrice( $(itemElm).find('.cal_price').text() );

					item.orderNum = $(itemElm).find('.cal_order a').text().replace(/^.*?#([0-9]+).*?$/,"$1");
					item.orderUrl = $(itemElm).find('.cal_order a').attr('href');

					item.bagUrl = $(itemElm).find('.cal_bag a').attr('href');

					if ( $(itemElm).find('.cal_ship .calendar_chicklet_green').length ) {
						item.status = {
							"color" : "green",
							"text" : $('.calendar > div > .calendar_chicklet_green + p').text()
						};
					} else if ( $(itemElm).find('.cal_ship .calendar_chicklet_blue').length ) {
						item.status = {
							"color" : "blue",
							"text" : $('.calendar > div > .calendar_chicklet_blue + p').text()
						};
					} else if ( $(itemElm).find('.cal_ship .calendar_chicklet_red').length ) {
						item.status = {
							"color" : "red",
							"text" : $('.calendar > div > .calendar_chicklet_red + p').text()
						};
					}

					data.items.push( item );
				});

				calData.push( data );
			});

			//console.log( calData );
			opts.success( calData );
		},
		error: opts.error
	});

};
