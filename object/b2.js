const num = [ 2, 511, 123, 5 ]
let sum = 0
let dundaj = 0

for (let i = 0; i < num.length; i++) {
     sum  += num[i];
     dundaj = sum/4
     console.log(dundaj)
}