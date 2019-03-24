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