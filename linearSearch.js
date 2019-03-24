function LinearSearch(t,arr) {
	let i = 0;
	while(arr[i++] !== t) {
		if(i == arr.length) return -1;;
		if(arr[i] == t) break;
	}

	return i;

}
let arr = [1, 0, 4, 0, 8, 3];
console.log(LinearSearch(2, arr));