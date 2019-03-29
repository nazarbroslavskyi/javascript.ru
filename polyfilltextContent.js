
Object.defineProperty(Element.prototype, 'textContent', { 
    get: function() {
    	let str = "";
    	let that = this;
    	function textContent(that) {
		if(that.childNodes.length) {
			for(let i = 0; i < that.childNodes.length; i++) {
				if(that.childNodes[i].nodeType == 3) {
					str += that.childNodes[i].data;
				} else if(that.childNodes[i].nodeType == 1) {
					textContent(that.childNodes[i]);
				}
			}
		} else {
			return null;
		}
		return str;
	}
	return textContent(that);
}    
});


console.log(document.querySelector(".chapter").textContent);