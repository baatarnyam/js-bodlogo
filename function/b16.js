const a = [1, 2, 3, 4, 6, 7, 9]

for (let i = 0; i < a.length; i++) {
    if ( ( ( a[i] + a[i + 1] ) / 2 ) % 2 == 0  || ( ( a[i] + a[i + 1] ) / 2 ) % 2 == 1 ) {
        console.log(a[i + 1] - 1);
    }
}