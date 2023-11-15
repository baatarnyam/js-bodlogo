const n = 27

for ( let i = 2, s = Math.sqrt(n); i <= s; i++ ) {
    if ( n % i != 0) {
        console.log(true);
    }else {
        console.log(false);
        }
}