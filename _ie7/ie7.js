/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-mail': '&#xe902;',
		'icon-instagram': '&#xe903;',
		'icon-youtube': '&#xe904;',
		'icon-menu': '&#xe905;',
		'icon-close': '&#xe906;',
		'icon-cosmetic': '&#xe907;',
		'icon-woman-hair': '&#xe908;',
		'icon-trim': '&#xe909;',
		'icon-path4': '&#xe90a;',
		'icon-Vector-Stroke-8': '&#xe90b;',
		'icon-arrow-up': '&#xe901;',
		'icon-phone': '&#xe900;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
