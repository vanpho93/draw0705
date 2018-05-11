function veHinh1(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dk = i >= j;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh2(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dk = i + j >= n + 1;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh3(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dk = i <= j;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh4(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const soBuocChan = (n - 1) / 2;
            const trungTam = (n + 1) / 2;
            const soBuocDoc = Math.abs(trungTam - i);
            const soBuocNgang = Math.abs(trungTam - j);
            const dk = soBuocNgang + soBuocDoc <= soBuocChan;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh5(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const soBuocChan = (n - 1) / 2;
            const trungTam = (n + 1) / 2;
            const soBuocDoc = Math.abs(trungTam - i);
            const soBuocNgang = Math.abs(trungTam - j);
            const namTrenCanh = soBuocNgang + soBuocDoc === soBuocChan;
            const namTrenDuongCheo = i === trungTam || j === trungTam;
            const dk = namTrenCanh || namTrenDuongCheo;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh6(n) {
    const soCot = n * 2 - 1;
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= soCot; j++) {
            const soBuocChan = n - 1;
            const soBuocDoc = Math.abs(n - i);
            const soBuocNgang = Math.abs(n - j);
            const dk = soBuocNgang + soBuocDoc <= soBuocChan;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh7(n) {
    const soCot = (n + 1) / 2;
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= soCot; j++) {
            const soBuocChan = (n - 1) / 2;
            const soTrungTam = (n + 1) / 2;
            const soBuocDoc = Math.abs(soTrungTam - i);
            const soBuocNgang = Math.abs(soTrungTam - j);
            const dk = soBuocNgang + soBuocDoc <= soBuocChan;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

veHinh7(9);
