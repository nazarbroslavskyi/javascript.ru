// console.log(document.documentElement.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.lastElementChild)
// if(document.body.lastElementChild.children.length === 0) {
// 	console.log("hello");
// }

// let table = document.body.firstElementChild;
// console.log(table);



// for(let i = 0; i < table.rows.length; i++) {
// 	table.rows[i].cells[i].style.background = "red";
// }


// [...table.rows].forEach((row,i) => row.cells[i].style.backgroundColor = 'red');

// document.getElementById("input").value = "1";

// console.log(document.querySelectorAll(':hover'))

// let variable1 = document.getElementById("age-list").getElementsByTagName("label");
// let variable2 = document.querySelector("tr:first-child td:first-child");
// let variable3 = document.getElementsByName("search-person");
// let variable4 = document.querySelector("form[name='search']");
// let variable5 = document.querySelector("input[name='search']");
// let variable6 = document.querySelector("input[name='info[0]']");
// let variable7 = document.querySelector("form[name='search-person'] input[name='info[0]']");



// console.log(variable6);

// console.log(document.getElementsByClassName("hello")[0].firstChild.data.replace(/\r?\n/g, "")
// );


// console.log(document.getElementById("new").children)

// console.log(document.querySelectorAll("li"));

// let elementOfLi = document.querySelectorAll("li");
// for(let i = 0; i < elementOfLi.length; i++) {
// 	alert(`${elementOfLi[i].firstChild.data.replace(/\r?\n? /g, "")}: ${elementOfLi[i].querySelectorAll("li").length}`);

// }


// function bubbleSort(array) {
// 	for(let j = 0; j < array.length; j++) {
// 		for(let i = 0; i < array.length - 1; i++) {
// 			if(array[i] > array[i + 1]) {
// 				let temple = array[i + 1];
// 				array[i + 1] = array[i];
// 				array[i] = temple; 
				
// 			}

// 		}
// 	}

// 	return array;
// }

// console.log(bubbleSort([1, 5,  7, 9, 10, 4, 6, 3, 1, 5]))


// function insertionSort(arr) {
// 	let elem;
// 	let j;
// 	for(let i = 1; i < arr.length; i++) {
// 			elem = arr[i];
// 			j = i;
// 		while(j > 0 && elem > arr[j - 1]) {
// 			arr[j] = arr[j - 1];
// 			arr[j - 1] = elem;
// 			j--;
// 		}
		

// 	}
// 	return arr;
// }





// function selectionSort(arr) {
// 	let min;
// 	let temporary;
// 	let j;
// 	for(let i = 0; i < arr.length; i++) {
// 		min = i;
// 		for(let j = i; j < arr.length; j++) {
// 			if(arr[j] < arr[min]) {
// 				min = j;
// 			}
// 		}

// 			// console.log(temporary);
			
// 		temporary = arr[i];
// 		arr[i] = arr[min];
// 		arr[min] = temporary;	
			
		


// 	}

// 	return arr;
// }

// console.log(selectionSort([5,  7, 9, 10, 4, 6, 3, 1, 5]));


// console.log([...[1,2,3], ])


	
// function numberOfRectangles(m, n) {
// 	let x = 0;
// 	let y = 0;
// 	let allamount = 0;



// 	for(let i = 1; i <= m; i++) {

// 		for(let j = 1; j <= n; j++) {
// 			if(i == 1 && j == 1) continue;
// 			while((x + i) <= m) {
// 				x++;
// 			}

// 			while((y + j) <= n) {
// 				y++;
// 			}

// 			allamount += (x * y);
// 			x = 0;
// 			y = 0;

// 		}
// 	}

// return allamount	 + (m * n);

// }

// console.log(numberOfRectangles(4, 4));


function numberOfRectangles(m, n) {
	let x = 0;
	let y = 0;
	let allamount = 0;



	for(let i = 1; i <= m; i++) {

		for(let j = 1; j <= n; j++) {
			if(i == 1 && j == 1) continue;
			allamount += ((m - i) + 1) * ((n - j) + 1);
		}
	}

return allamount	 + (m * n);

}

console.log(numberOfRectangles(3, 2));