Element.prototype.remove = function() {
	if(this.parentElement == null) return;
	else {
		this.parentElement.removeChild(this);
	}
}

console.log(document.querySelector(".alert").remove())