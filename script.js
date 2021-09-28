let a = [2, 4, 6, 33,`hello` ,25 ,true];
let b = [`world`,5,93,false,`kebab`];
// let sumA = 0;
// let sumB = 0;



function showMaxValue(a,b) {
    let sumB;
    let sumA;
    for (let i=0;i < a.length; i++) {
        if (typeof a[i] === 'number') {
           sumA += a[i];
        } 
    }
    
    for (let j=0;j < b.length; j++) {
        if (typeof b[j] === 'number') {
           sumB += b[j];
        } 
    }

    if (sumA < sumB) {
        return b;
    } 
    return a;
}