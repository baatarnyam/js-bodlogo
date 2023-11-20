const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const output = document.getElementById("output")
const onclickDiv = document.getElementById("onclick")

let multip;
let num1;
let num2;

let mult = (number1, number2) => {
    multip = number1 * number2
    return multip
};


 input1.addEventListener("change", (event) => {
    num1 = parseFloat(event.target.value)
 });

 input2.addEventListener("change", (event) => {
    num2 = parseFloat(event.target.value)
 });

 onclickDiv.addEventListener("click", () => {
    let output1 = mult(num1, num2);
    result(output1)
});


const result = (param) => {
    output.innerHTML = param;
}