let arr = [1, 5, 6, 7, 5, 2, 4, 6, 6];

function selectionSort(arr) {
	let min;
	let temple;
	for(let i = 0; i < arr.length; i++) {
		min = i;
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[i]) {
				min = j;
			}
		}
		temple = arr[i];
		arr[i] = arr[min];
		arr[min] = temple;
	}

	return arr;
}



console.log(selectionSort(arr));