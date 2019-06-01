// HTMLElement.prototype.textContent = function() {};
 
 // Object.defineProperty(HTMLElement.prototype, "textContent", {
 //      get: function() {
 //        return this.innerText;
 //      },
 //      set: function(value) {
 //        this.innerText = value;
 //      }
 //    });










// console.log(document.querySelector(".chapter").innerText);
// console.log(document.querySelector(".hello").innerText);

// let div = document.getElementById("widget");
// console.log(div.getAttribute("data-widget-name"))

// let links = document.querySelectorAll("[href^='http://']:not([href^='http://internal.com'])");
// console.log(links);
// for(let i = 0; i < links.length; i++) {
// 	links[i].classList.add("external");
// }

// var css = 'a[href*="://"]:not([href^="http://internal.com"])';
// var links = document.querySelectorAll(css);

// for (var i = 0; i < links.length; i++) {
//   links[i].classList.add('external');
// }

// console.log(document.querySelector(".name").compareDocumentPosition(document.querySelector("[href^='hello.js']")))

// 


// console.log(document.body.parentElement.parentElement);

Element.prototype.remove = function() {
	if(this.parentElement == null) return;
	else {
		this.parentElement.removeChild(this);
	}
}

console.log(document.querySelector(".alert").remove())