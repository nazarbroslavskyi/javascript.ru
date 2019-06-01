// function removeChildren(elem) {
//     console.log(elem.children.length);
//     while(elem.children.length) {
//         console.log("cvd");
//         elem.removeChild(elem.children[0]);
//     }
// }
// removeChildren(ol);

function removeChildren(elem) {
   elem.innerHTML = "";
}
removeChildren(ol);
