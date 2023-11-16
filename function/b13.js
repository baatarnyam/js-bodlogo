const n = 123
let a = 0
 for (let i = 0; i <= n; i++) {
    for( let i = 2, s = Math.sqrt(n); i <= s; i++ ) {
        if( n % i != 0){
            a = i
        }
    }
    console.log(a)
 }