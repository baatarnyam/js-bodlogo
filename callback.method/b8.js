const a = [1, 2, 3, 4, 6, 7]
let tegsh = 0
a.filter((e) => {
    if (e % 2 == 0) {
        tegsh++
    }
});
console.log(tegsh);
