let pyramid = 1
let n = "*"

let pyr = (n) => {
    for (let i = 1; i <= 4; i += 1) {
        console.log(n.repeat(pyramid));
        n += "*"
    }
}
pyr(pyramid)

// let count = 1;
// let x = "# ";
// for (a = 0; a<=5; a +=1){
//     console.log(x.repeat(count));
//     count +=1;
// }