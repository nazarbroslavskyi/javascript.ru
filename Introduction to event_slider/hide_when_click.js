/* <input type="button" id="hider" value="Нажмите, чтобы спрятать текст" /> */

//   <div id="text">Текст</div>
// console.log(fr)
// hider.addEventListener("click", () => {
// 	text.classList.add("hide");
// });
// hider.addEventListener("click", () => {
// 	text.classList.add("hide");
// });

// document.querySelector(".button").addEventListener("click", () => {
// 	document.querySelector(".sweets").classList.toggle("display");
// 	document.querySelector(".triangle").classList.toggle("rotate");
// });


// карусель


// let closeButton = document.querySelectorAll(".rm-button");
// for(let i = 0; i < closeButton.length; i++) {
// 	closeButton[i].addEventListener("click", () => {
// 		closeButton[i].parentElement.classList.add("hidden");
// 	});
// }

let margin = 0;
function eventRight() {
	console.log("hek");
	margin = margin  - 390;
	document.querySelector(".container ul").style.marginLeft = margin + "px";
}
const rightButton = document.querySelector(".right-btn");
console.log(rightButton);
const leftButton = document.querySelector(".left-btn");

rightButton.addEventListener("click", eventRight);
// карусель