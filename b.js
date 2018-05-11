function veHinh(n, fn, fnGetSoCot) {
    const soCot = fnGetSoCot ? fnGetSoCot(n) : n;
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= soCot; j++) {
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
// veHinh(5, (i, j, n) => {
//     const soBuocChan = n - 1;
//     const soBuocDoc = Math.abs(n - i);
//     const soBuocNgang = Math.abs(n - j);
//     const dk = soBuocNgang + soBuocDoc <= soBuocChan;
//     return dk;
// }, n => n * 2 - 1);
veHinh(9, (i, j, n) => {
    const soBuocChan = (n - 1) / 2;
    const soTrungTam = (n + 1) / 2;
    const soBuocDoc = Math.abs(soTrungTam - i);
    const soBuocNgang = Math.abs(soTrungTam - j);
    return soBuocNgang + soBuocDoc <= soBuocChan;
}, n => (n + 1) / 2);