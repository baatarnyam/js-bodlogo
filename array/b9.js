const n = [1, 2, 3, 4, 0, 149, 214, 11, 601, 13]
let anhnii = 0

for(let i = 0; i < n.length; i++){
    if( ( (n[i] - 1) / 6 ) % 2 === 0 || ((n[i] + 1) /6 ) % 2 === 1 || (((n[i] + 1) * 6 )/6 )% 2 === 0  ) {
        console.log(n[i]);
    }
}