/**
 * This script gets the content of an element with the id of scss-vars and parses it into an object.
 * To be used in conjunction the export-to-json mixin of the mazorca-core (scss) library.
 *
 * Based on the code at: https://css-tricks.com/making-sass-talk-to-javascript-with-json/
 * @author  Diego Villaseñor
 * @since  0.1.0
 */
export const getScssVars = function() {
	let el = document.getElementById('scss-vars'),
		vars = window.getComputedStyle(el, ':before').content,
		parseVars = function(string) {
		    if (typeof string === 'string' || string instanceof String) {
		        string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
			}
		    return string;
		},
		json = parseVars(vars);
	return JSON.parse(json);
};