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

veHinh(5, (i, j) => i >= j);
// veHinh(5, (i, j, n) => i + j >= n + 1);
// veHinh(5, (i, j) => i <= j);
// veHinh(5, (i, j, n) => {
//     const soBuocChan = (n - 1) / 2;
//     const trungTam = (n + 1) / 2;
//     const soBuocDoc = Math.abs(trungTam - i);
//     const soBuocNgang = Math.abs(trungTam - j);
//     return soBuocNgang + soBuocDoc <= soBuocChan;
// });
// veHinh(9, (i, j, n) => {
//     const soBuocChan = (n - 1) / 2;
//     const trungTam = (n + 1) / 2;
//     const soBuocDoc = Math.abs(trungTam - i);
//     const soBuocNgang = Math.abs(trungTam - j);
//     const namTrenCanh = soBuocNgang + soBuocDoc === soBuocChan;
//     const namTrenDuongCheo = i === trungTam || j === trungTam;
//     return namTrenCanh || namTrenDuongCheo;
// });
