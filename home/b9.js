const n = 290
let mult = 1

for (let i = 1; i <= n; i++) {
    if(i % 2 == 0){
        mult = mult * i
    }
}
console.log(mult);