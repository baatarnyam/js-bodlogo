const n = [1, 5, 7, 9, 2]
let max = 0
for (let i = 0; i < n.length; i++) {
    if (max <= n[i]) {
        max = n[i]
    }
}
console.log(max);