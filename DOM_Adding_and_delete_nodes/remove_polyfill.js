Element.prototype.remove = null;
if(!Element.prototype.remove) {
    Element.prototype.remove = function() {
        if(this.parentNode) {
            this.parentNode.removeChild(this);
        }
    }
}

list.remove();