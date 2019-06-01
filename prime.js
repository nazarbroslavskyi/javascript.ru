function prime(n) {
    for(let i = 2; i <= n; i++) {
        let flag = 0;
        for(let j = 2; j <= i; j++) {
            if(i % j == 0) {
                flag++;
            }
        }
        if(flag == 1) {
            console.log(i);
        }
       
    }
}

console.log(prime(10));