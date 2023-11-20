const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

const outputUrjih = document.getElementById("outputUrjih")
const outputNemeh = document.getElementById("outputNemeh")
const outputHasah = document.getElementById("outputHasah")
const outputHuvaah = document.getElementById("outputHuvaah")

const onclickDiv = document.getElementById("onclick")

let multip;
let nemegduuleh;
let horogduulah;
let huvaah;

let num1;
let num2;

let mult = (number1, number2) => {
    multip = number1 * number2
    return multip
};
let sum = (number1, number2) => {
    nemegduuleh = number1 + number2
    return nemegduuleh
};
let hasah = (number1, number2) => {
    horogduulah = number1 - number2
    return horogduulah
};
let noogdvor = (number1, number2) => {
    huvaah = number1 / number2
    return huvaah
};


 input1.addEventListener("change", (event) => {
    num1 = parseFloat(event.target.value)
 });

 input2.addEventListener("change", (event) => {
    num2 = parseFloat(event.target.value)
 });

 onclickDiv.addEventListener("click", () => {
    let output1 = mult(num1, num2);
    result1(output1);

    let output2 = nemegduuleh(num1, num2);
    result2(output2);

    let output3 = horogduulah(num1, num2);
    result3(output3);

    let output4 = huvaah(num1, num2);
    result4(output4);
});


const result1 = (param1) => {
    outputUrjih.innerHTML = param1;
    // outputNemeh.innerHTML = param;
    // outputHasah.innerHTML = param;
    // outputHuvaah.innerHTML = param;
};
const result2 = (param2) => {
    outputNemeh.innerHTML = param2;
};
const result3 = (param3) => {
    outputHasah.innerHTML = param3;
};
const result4 = (param4) => {
    outputHuvaah.innerHTML = param4;
};