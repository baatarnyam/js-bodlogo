const N = [ 15, 2, 21, 25, 12, 7, 7, 8, 9, 10, 11]

let a = N.map((e) => {
    if ( e % 2 == 0 ) {
        return e / 2 
    }
    if ( e % 2 !== 0 ) {
        return e / 7 
    }
})
console.log(a);