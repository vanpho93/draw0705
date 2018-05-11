function veHinh(n, fn) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dk = fn(i, j, n);
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

veHinh(5, (i, j, n) => (i + j >= n + 1));
