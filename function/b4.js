const a = [2, 511, 123, 99, 999, 9]
let max = 0
let ih = (max) => {
    for (let i = 0; i < a.length; i++) {
        if (max <= a[i]){
            max = a[i]
        }
    }
    console.log(max);
}
ih(max)
