const n = [1,5,7,9,2, 11]
let max = 0

for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
        if(n[i] >= n[j]) {
            max = n[i]
        }
        if(n[i] <= n[j]) {
            max = n[j]
        }
    }
}
console.log(max);