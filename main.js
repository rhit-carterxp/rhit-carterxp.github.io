/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};


/** globals */


/* Main */
/** function and class syntax examples */
rhit.main = function () {
	window.addEventListener('scroll', function() {
		var header = document.getElementById('header');
		if (window.scrollY > 50) {
			header.classList.add('navbar');
		} else {
			header.classList.remove('navbar');
		}
	});
};

rhit.main();
