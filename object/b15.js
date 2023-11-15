const a = [ 1, 2, 2, 3, 4, 4,]


for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            a.splice(a[j], 1);
        }
    }
}
console.log(a);