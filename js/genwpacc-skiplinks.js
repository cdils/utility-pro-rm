/**
 * genesis-accessible skiplinks
 * https://github.com/RRWD/genesis-accessible/
 * Version: 1.0
 * License: GPL-2.0+
 * License URI: http://www.opensource.org/licenses/gpl-license.php
 */

window.addEventListener( 'hashchange', function() {
	'use strict';
	var element = document.getElementById( location.hash.substring( 1 ) );

	if ( element ) {
		if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) {
			element.tabIndex = -1;
		}
		element.focus();
	}
}, false);
