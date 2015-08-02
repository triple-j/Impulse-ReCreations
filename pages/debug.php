<?php
require('includes/app_top.php');

header("HTTP/1.0 404 Not Found");

function print_arr( $array, $caption = null ) {
	$html = "<table class=\"print_arr\">";
	if ( $caption ) $html .= "<caption>{$caption}</caption>";
	foreach ( $array as $key=>$value ) {
		$html .= "<tr><th>{$key}</th><td>{$value}</td></tr>";
	}
	$html .= "</table>";

	return $html;
}

$heri_selected_tab = "[ debug ]";

ob_start();
?>

	<script type="text/javascript">
		/** http://stackoverflow.com/a/5015930 **/
		function getUTF8Length( string ) {
			var utf8length = 0;
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					utf8length++;
				} else if((c > 127) && (c < 2048)) {
					utf8length = utf8length+2;
				} else {
					utf8length = utf8length+3;
				}
			}
			return utf8length;
		}

		$(document).ready(function(){
			$.ajax({
				url: "heavyerink.user.js",
				dataType: 'text',
				success: function(data) {
					$('#userscript').val( data );
					var filesize = getUTF8Length( $('#userscript').val() );
					$('#userscript-data').html( "filesize: ~" + (filesize/1024).toFixed(3) + " KB" );
				},
				error: function(err) {
					console.log( err );
				}
			});
		});
	</script>

	<style type="text/css">
		#userscript {
			font-family: monospace;
		}

		table.print_arr {
			border-collapse: collapse
		}
		table.print_arr caption {
			font-size: 1.1em;
			font-weight: bold;
		}
		table.print_arr th {
			background-color: #C2A27D;
			text-align: left;
		}
		table.print_arr th,
		table.print_arr td {
			font-size: 0.75em;
			border: 1px solid #947C5F;
			padding: 0.2em 0.3em;
		}
	</style>

<?php
$tmpl_head = ob_get_clean();


ob_start();
?>

	<h1>debug</h1>

	<textarea id="userscript" cols="80" rows="24">
	</textarea>
	<div id="userscript-data"></div>
	<br />

	<h2>Variables</h2>
	<?=print_arr( $_SERVER, "_SERVER" );?>

<?php
$tmpl_body = ob_get_clean();


$tmpl_title = "debug";
include('templates/default.php');
