let arr = [5, 0, 7, 1, 6, 8];

function mergeSort(array) {

	function merge(arr) {
		if(arr.length <= 1) {
			return arr;
		}

		middle = Math.floor(arr.length / 2);
		const leftSide = arr.slice(0, middle);
		const rightSide = arr.slice(middle);

		return sortTwoArray(merge(rightSide), merge(leftSide));
	}

		function sortTwoArray(leftSide, rightSide) {
		let i = j = 0;
		let newArr = [];
		while(i < leftSide.length && j < rightSide.length) {
			if(leftSide[i] < rightSide[j]) {
				newArr.push(leftSide[i]);
				i++;
			} else {
				newArr.push(rightSide[j]);
				j++;
			}
		}
		return [...newArr, ...leftSide.slice(i), ...rightSide.slice(j)];
	}


	return merge(array);
}


console.log(mergeSort(arr));