// let arr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 13, 21, 45];

// function binarySearch(arr, elem) {
// 	let start = 0;
// 	let center;
// 	let end = arr.length - 1;

// 	while(start <= end) {
// 		center = Math.floor((end + start) / 2);
// 		if(arr[center] == elem) return center;
// 		else if(elem > arr[center]) start = center + 1;
// 		else if(elem < arr[center]) end = center - 1;
// 	}

// 	return -1;
// }


// console.log(binarySearch(arr, 21));

// function binarySearch(arr, elem) {
// 	let max = arr.length - 1;
// 	let min = 0;

// 	let center = Math.floor((max + min) / 2);
// 	if(elem == arr[center]) return center;
// 	else if(elem > arr[center]) min = center + 1;
// 	else if(elem < arr[center]) max = center - 1;
// 	binarySearch(arr, elem);
// }


