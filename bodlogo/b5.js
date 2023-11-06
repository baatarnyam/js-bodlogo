// bodlogo 5
const a = 7
const b = 10
const c = 11

if (a > b && a > c && b > c) {
    console.log(a, b, c)
}
 else if (a > b && a > c &&  b < c) {
    console.log(a, c, b)
}
 else if (b > a &&  b > c &&  a > c) {
    console.log(b, a, c)
}
else if (b > a &&  b > c &&  a < c) {
    console.log(b, c, a)
}

 else if (c > a &&  c > b &&  a > b) {
    console.log(c, a, b)
}
else {
    console.log(c, b, a)
}