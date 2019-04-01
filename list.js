

// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<title>hello</title>
// 	<script defer src="polyfillDOM.js"></script>
//   <style>
//     .alert {
//       padding: 15px;
//       border: 1px solid #d6e9c6;
//       border-radius: 4px;
//       color: #3c763d;
//       background-color: #dff0d8;

//     }  
//   </style>
// </head>
// <body>
//   <p id="container">
//     <ul id="list">
//     <li>Животные
//       <ul class="he">
//         <li>Млекопитающие
//           <ul>
//             <li>Коровы</li>
//             <li>Ослы</li>
//             <li>Собаки</li>
//             <li>Тигры</li>
//           </ul>
//         </li>
//         <li>Другие
//           <ul>
//             <li>Змеи</li>
//             <li>Птицы</li>
//             <li>Ящерицы</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//     <li>Рыбы
//       <ul>
//         <li>Аквариумные
//           <ul>
//             <li>Гуппи</li>
//             <li>Скалярии</li>
//           </ul>
//         </li>
//         <li>Морские
//           <ul>
//             <li>Морская форель</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//   </ul>
//   </p>
// </body>
// </html>




function tree(list) {
	for(let i = 0; i < list.children.length; i++) {

		// console.log();
		if(list.children[i].getElementsByTagName("ul").length) {
			console.log(list.children[i].getElementsByTagName("li").length);
			let newel = document.createTextNode(`[${list.children[i].getElementsByTagName("li").length}]`);
			console.log(list.children[i].insertBefore(newel, list.children[i].firstChild.nextSibling))

			tree(list.children[i].children[0]);
		}
	}
}

let list = document.querySelector("#list");
tree(list);



