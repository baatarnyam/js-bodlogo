const n = "1990991"
let p = ""
for ( let i = n.length - 1; i >= 0; i-- ) {
    p += n[i]
    // console.log(p);
}
if(n == p ){
    console.log(true);
}
else {
    console.log(false);
}