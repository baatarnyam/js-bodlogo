const a = [1,2,3,4,5]

let b = (a) => {

    a.splice(-3, 1)
    console.log(a);
}
b (a)