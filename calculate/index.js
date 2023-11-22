const output = document.getElementById("output")

const AC = document.getElementById("ac")
const surug = document.getElementById("+/-")
const modul = document.getElementById("%")
const divide = document.getElementById("/")
const mult = document.getElementById("x")
const sum = document.getElementById("-")
const minus = document.getElementById("+")
const tentsuu = document.getElementById("=")
const dot = document.getElementById(".")


const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")

let operatop;
let number;
let result;
let saver = 0;

AC.addEventListener("click", (event) => {
    operatop = "ac"
});
surug.addEventListener("click", (event) => {
    operatop = "+/-"
});
modul.addEventListener("click", (event) => {
    operatop = "%"
});
divide.addEventListener("click", (event) => {
    operatop = "/"
});
mult.addEventListener("click", (event) => {
    operatop = "x"
});
sum.addEventListener("click", (event) => {
    operatop = "+";
    output = ""
});
minus.addEventListener("click", (event) => {
    operatop = "-"
});
tentsuu.addEventListener("click", (event) => {
    operatop = "="
});
dot.addEventListener("click", (event) => {
    operatop = "."
});

output.addEventListener("change", (event) => {
    output.innerHTML = parseFloat(event.target.innerHTML)
});


zero.addEventListener("click", (event) => {
    output.innerHTML += "0";
});
one.addEventListener("click", (event) => {
    number = 1;
    output.innerHTML = number;
});
two.addEventListener("click", (event) => {
    number = 2;
    output.innerHTML += number;
});
three.addEventListener("click", (event) => {
    number = 3;
    output.innerHTML += number;
});
four.addEventListener("click", (event) => {
    number = 4;
    output.innerHTML += number;
});
five.addEventListener("click", (event) => {
    number = 5;
    output.innerHTML += number;
});
six.addEventListener("click", (event) => {
    number = 6;
    output.innerHTML += number;
});
seven.addEventListener("click", (event) => {
    number = 7;
    output.innerHTML += number;
});
eight.addEventListener("click", (event) => {
    number = 8;
    output.innerHTML += number;
});
nine.addEventListener("click", (event) => {
    number = 9;
    output.innerHTML += number;
});

AC.addEventListener("click", (event) => {
    number = "";
    output.innerHTML = number;
});
surug.addEventListener("click", (event) => {
    number = -number;
    output.innerHTML = number;
});


const uildel = () => {
    switch (operatop) {
        case "+/-":
            result = -num1, -num2
        break;
        case "%":
            result = num1 % num2
        break;
        case "/":
            result = num1 / num2
        break;
        case "x":
            result = num1 * num2
        break;
        case "-":
            result = num1 - num2
        break;
        case "+":
            result = num1 + num2;
        break;
    }
    output.innerHTML = result;
}
