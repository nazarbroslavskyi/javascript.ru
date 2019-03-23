let arr = [1, 2, 4, 6, 8, 1, 3, 4, 9, 1];

function insertionSort(arr) {
	let temple;
	for(let i = j = 0; i < arr.length; i++) {
		j = i;
		while(j > 0) {
			if(arr[j] < arr[j - 1]) {
				temple = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temple;
			}
			j--;
		}
	}


	return arr;
}

console.log(insertionSort(arr));