let n = 200
let mult = 1

for(let i = mult; i <= n; i++ ){
    if(i % 2 !== 0){
        mult = mult * i
    }
}
console.log(mult);