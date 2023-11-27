const output = document.getElementById("output");

const AC = document.getElementById("ac");
const surug = document.getElementById("+/-");
const modul = document.getElementById("%")
const tentsuu = document.getElementById("=");
const dot = document.getElementById(".");

const divide = document.getElementById("/")
const sum = document.getElementById("+");
const minus = document.getElementById("-")
const mult = document.getElementById("x")

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let result = "";
let clickedNumbers = "";
let operator = "";
let isOperatorClicked = false;

const whenNumberClicked = (whatNumber) => {
 isOperatorClickedAfterNumber();
 if (output.innerHTML === "0") {
    output.innerHTML = whatNumber;
 } else {
    output.innerHTML = output.innerHTML + whatNumber;
 }
};

const whenOperatorClicked = (whatOperator) => {
 if (operator != "") {
 computer();
 }
 operator = whatOperator;
 clickedNumbers = output.innerHTML;
 isOperatorClicked = true;

};
const isOperatorClickedAfterNumber = () => {
 if (isOperatorClicked === true) {
    output.innerHTML = "0";
 isOperatorClicked = false;
 }
};

const computer = () => {
 switch (operator) {
   case "+":
      result = parseFloat(clickedNumbers) + parseFloat(output.innerHTML);
      output.innerHTML = result;
      break;

 case "-":
      result = parseFloat(clickedNumbers) - parseFloat(output.innerHTML);
      output.innerHTML = result;
      break;

 case "x":
      result = parseFloat(clickedNumbers) * parseFloat(output.innerHTML);
      output.innerHTML = result;
      break;

 case "/":
      result = parseFloat(clickedNumbers) / parseFloat(output.innerHTML);
      output.innerHTML = result;
      break;

 case "%":
      result = parseFloat(clickedNumbers) % parseFloat(output.innerHTML);
      output.innerHTML = result;
      break;
 }
};

zero.addEventListener("click", () => {
   whenNumberClicked("0");
   console.log(whenNumberClicked);
});
one.addEventListener("click", () => {
   whenNumberClicked("1");
});
two.addEventListener("click", () => {
   whenNumberClicked("2");
});
three.addEventListener("click", () => {
   whenNumberClicked("3");
});
four.addEventListener("click", () => {
   whenNumberClicked("4");
});
five.addEventListener("click", () => {
   whenNumberClicked("5");
});
six.addEventListener("click", () => {
   whenNumberClicked("6");
});
seven.addEventListener("click", () => {
   whenNumberClicked("7");
});
eight.addEventListener("click", () => {
   whenNumberClicked("8");
});
nine.addEventListener("click", () => {
   whenNumberClicked("9");
});


dot.addEventListener("click", () => {
 isOperatorClickedAfterNumber();
 if (output.innerHTML.includes(".") === true) {
   output.innerHTML = output.innerHTML;
 } else {
   output.innerHTML = output.innerHTML + ".";
 }
});

sum.addEventListener("click", () => {
 whenOperatorClicked("+");
});

minus.addEventListener("click", () => {
   whenOperatorClicked("-");
});

mult.addEventListener("click", () => {
   whenOperatorClicked("*");
});

divide.addEventListener("click", () => {
   whenOperatorClicked("/")
});

modul.addEventListener("click", () => {
   whenOperatorClicked("%");
});

tentsuu.addEventListener("click", () => {
   computer();
});

AC.addEventListener("click", () => {
 result = "";
 clickedNumbers = "";
 operator = "";
 isOperatorClicked = false;
 output.innerHTML= "0";
});

surug.addEventListener("click", () => {
    output.innerHTML = output.innerHTML * -1;
});