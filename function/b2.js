const number = [ 2, 511, 234, 5 ]
let sum = 0

let fun = (num) => {
     for (let i = 0; i < num.length; i++) {
          sum  += num[i];
     }
     console.log(sum/num.length)
}
fun(number)