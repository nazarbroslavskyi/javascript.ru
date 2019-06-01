function insertAfter(elem, refElem) {
    refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
const el = document.createElement("div");
el.innerHTML= "hello";
// console.log(el);
insertAfter(el, list);