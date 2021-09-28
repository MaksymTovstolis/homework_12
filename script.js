let a = [2, 4, 6, 33,`hello` ,25 ,true];
let b = [`world`,5,93,false,`kebab`];
let sumA = 0;
let sumB = 0;



function showMaxValue(a,b) {
    for (i=0;i < a.length; i++) {
        if (typeof a[i] === 'number') {
           sumA += a[i];
        } 
    }
    
    for (i=0;i < b.length; i++) {
        if (typeof b[i] === 'number') {
           sumB += b[i];
        } 
    }

    if (sumA < sumB) => return b;
}