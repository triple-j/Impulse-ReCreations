function monthly_costs_hash_call( opts ) {
	var $content,
	    months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	if ( HerI.current_page() == "/me/calendar" ) {

		$content = $('.calendar').parent();
		$content.children(':not(.cal_nav)').addClass('tab-calendar').hide();
		$content.append( $('<div/>', { class : "tab-monthlyCosts", html : heri_stats_view() }) );

		HerI_Data.getCalanderData({
			success: function(data) {
				//console.log(data);
				//var html = [];
				var month = "x";
				var mName = null;
				//var total = null;
				$('div#heri_stats').html('');   // clear the html
				for (i in data) { // TODO: move this into the view function
					var fullDate = data[i].date;
					if (fullDate != null) {
						var date = fullDate;
						var readableDate = "Week of " + date.text;
						var rowHtml = [];

						// check if the month has changed
						if (month != date.month) {
							month = date.month;
							mName = months[month-1];
							mHtml = [];
							mHtml.push('<div class="month" id="heri_stat_'+mName+'">');
							mHtml.push('  <h2>'+mName+'</h2>');
							mHtml.push('  <table>');
							// 'rowHtml' will go here
							mHtml.push('  <tr class="subtotal"><td class="label">Subtotal</td><td class="price">$x.xx</td></tr>');
							mHtml.push('  <tr class="shipping"><td class="label">Shipping cost</td><td class="price">$x.xx</td></tr>');
							mHtml.push('  <tr class="total"><td class="label">Total</td><td class="price">$x.xx</td></tr>');
							mHtml.push('  </table>');
							mHtml.push('</div>');
							/*if (total != null) {
								html.push('total:$'+total.toFixed(2));
								total = 0;
							}*/
							//html.push('<br/>');
							$('div#heri_stats').append(mHtml.join('\n'));
						}

						// get total for items in shipment
						var shipTotal = 0;
						for (j in data[i].items) {
							shipTotal += data[i].items[j].price;
						}

						// display shipment info
						rowHtml.push('<tr class="shipment">');
						rowHtml.push('  <td class="date">'+readableDate+'</td>');
						rowHtml.push('  <td class="price">$'+shipTotal.toFixed(2)+'</td>');
						rowHtml.push('</tr>');

						$('#heri_stat_'+mName+' table .subtotal').before(rowHtml.join('\n'));
					}
				}
				//html.push('total:$'+total.toFixed(2));
				//$('div#heri_stats').append(html.join(' '));
				heri_stats_calc();
			}
		});

	} else {
		console.log("ERROR: Page not supported.");
		return false;
	}
}

function heri_stats_view() {
	var html = [];
	html.push('<div class="header"><h2>Monthly Costs</h2></div>');
	html.push('<p>(beginnings of a budget calculator)</p>');
	html.push('<form id="heri_stats_form" action="javascript:$(\'input:radio[name=ship_cost]\')[2].checked=true;heri_stats_calc();">');
	html.push(' <label><input type="radio" name="ship_cost" value="4.99" checked="checked" onchange="heri_stats_calc();"/>$4.99</label>');
	html.push(' <label><input type="radio" name="ship_cost" value="9.99" onchange="heri_stats_calc();"/>$9.99</label>');
	html.push(' <input type="radio" name="ship_cost" value="custom" onchange="heri_stats_calc();"/>$<input type="text" name="custom_cost" value="2.99" />');
	html.push('</form><br class="clear"/>');
	html.push('<div id="heri_stats">');
	html.push(' <div class="heri_load"></div>');
	html.push('</div>');

	return html.join('\n');
}

function heri_stats_calc() {
	var shipCost = heri_stats_ship_cost();
	$('div#heri_stats .month .shipping td.price').animate({ backgroundColor: "#FFFFC9" }, 300)
			.animate({ backgroundColor: "white" }, 500);
	$('div#heri_stats .month .total td.price').animate({ backgroundColor: "#FFFFC9" }, 300)
			.animate({ backgroundColor: "white" }, 500);
	//$('div#heri_stats .month .shipping td.price').animate({ color: "#b00" }, 300).animate({ color: "black" }, 500);
	//$('div#heri_stats .month .total td.price').animate({ color: "#b00" }, 300).animate({ color: "black" }, 500);

	$('div#heri_stats .month').each(function() {
		var subTotal = 0;
		var total = 0;
		//console.log($(this).children('h2').text());
		var shipments = 0;
		$(this).find('.shipment .price').each(function() {
			//console.log($(this).text());
			var price = $(this).text();
			subTotal += Number(price.substring(1));
			shipments++;
		});
		shipTotal = shipCost * shipments;
		total = subTotal + shipTotal;
		//console.log('Total: '+total);
		$(this).find('.subtotal td.price').html('$'+subTotal.toFixed(2));
		$(this).find('.shipping td.label').html('Shipping cost ('+shipments+'x)');
		$(this).find('.shipping td.price').html('$'+shipTotal.toFixed(2));
		$(this).find('.total td.price').html('$'+total.toFixed(2));
	});
}

function heri_stats_ship_cost() {
	/* get cost from form */
	var cost = $('input:radio[name="ship_cost"]:checked').val();
	if (cost == "custom")
		cost = $('input:text[name="custom_cost"]').val();

	return Number(cost);
}


if ( HerI.current_page() == "/me/calendar" ) {
	$(document).ready(function(){
		var html = "", $content = $('.calendar').parent();

		html += '<div class="cal_nav">'
			+ '<a href="/me/calendar">Shipping Calendar</a>'
			+ ' | <a href="/me/calendar#monthly_costs">Monthly Costs</a>'
			+ '</div>';

		$content.prepend( html );
	});
}
