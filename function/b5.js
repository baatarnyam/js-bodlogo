const string = "hello"
let urvuu = ""

let esreg = ( urvuu) => {
    for (let i = string.length - 1; i >= 0; i--) {
        urvuu += string[i]
    }
    console.log( urvuu);
    
}
esreg(urvuu)