const a = 12
const b = 7
let mult = 1


let zereg = (mult) => {
    for (let i = 1; i <= b; i++) {
        mult = mult * a
    }
    console.log(mult);
}
zereg(mult)