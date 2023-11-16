const n = 99
// let a = 0
let fib = [0, 1];
// let i = 2;
for (let i = 2; fib[i - 1] < n; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
    fib.push(fib[i]);
    if(fib[i] > n){
        break;
    }
    console.log(fib);
}
