const n = [1, 2, 3, 4, 5]
let tegsh = 0

for(let i = 0; i < n.length; i++) {
    if(n[i] % 2 == 0){
        tegsh = n[i]
        console.log(tegsh);
    }
}