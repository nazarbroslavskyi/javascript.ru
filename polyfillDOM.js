<--------

if(document.documentElement.matches == undefined) {
	Element.prototype.matches = function(selector) {
		if(document.querySelector(selector) == this) {
			return true;
		} else {
			return false;
		}
	}
}
------->


