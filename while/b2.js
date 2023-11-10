let a = [2, 7, 1, 11, 0, 22]

for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {

        let save;
        if(a[i] < a[j]){
            save = a[j]
            a[j] = a[i]
            a[i] = save
        }
    }
}
console.log(a)