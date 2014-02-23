$(document).ready(function(){
	var $loginLink = $('.sidebar-nav a:contains("Login or Register")'),
	    navHtml, dialogHtml;

	if ( $loginLink.is(':visible') ) {
		// change link text
		$loginLink.html("Register");

		// add link
		navHtml = '<li><a href="#heri-login" rel="heri-dialog">Login</a></li>';
		$loginLink.parent().before( navHtml );

		// build dialog
		dialogHtml = '<div id="heri-login" style="display:none;">'
			+ '<h1>Login</h1>'
			+ '<form method="post" class="heri-login" accept-charset="UTF-8" '
			+ 'action="https://heavyink.com/customer/login"><table>'
			+ '<tr><th>email:</th><td><input type="text" name="email" /></td></tr>'
			+ '<tr><th>password:</th><td><input type="password" name="password" /></td></tr>'
			+ '<tr><th> </th><td><button type="submit" class="med standard med_standard login">'
			+ '<span>Login</span></button></td></tr>'
			+ '<tr><th> </th><td><a href="https://heavyink.com/customer/reset_password">'
			+ 'Forgot your password?</a></td></tr>'
			+ '</table></form></div>';
		$('body').append( dialogHtml );
	}

});
