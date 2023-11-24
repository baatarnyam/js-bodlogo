const output = document.getElementById("output")

const AC = document.getElementById("ac")
const surug = document.getElementById("+/-")
const modul = document.getElementById("%")
const divide = document.getElementById("/")
const mult = document.getElementById("x")
const sum = document.getElementById("+")
const minus = document.getElementById("-")
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

let operator;
let number = "";
let result;
let saver = 0;
let clicked = false;

const whenClicked = (whatNumber) => {
  
  if(output.innerHTML === "0"){
    output.innerHTML = whatNumber
  } else{
    output.innerHTML = output/innerHTML + whatNumber
  }
}
const clickedAfter = () => {
  if(clicked === true) {
    output.innerHTML = "0";
    clicked = false;
  }
};
const whenOperatorClicked = (whatOperator) => {
  if (operator != "") {
  computer();
  }
  operator = whatOperator;
  clickedNumbers = input.value;
  clickedlicked = true;
 };


surug.addEventListener("click", (event) => {
    // operator = "+/-"
});
modul.addEventListener("click", (event) => {
    if( operator > 1){
        giveResult()
      }
        operator = "%";
        result = parseFloat(output.innerHTML)
        number = "%"
        output.innerHTML = result
        saver++;
        console.log("modul");
});
divide.addEventListener("click", (event) => {
    if( operator > 1){
        giveResult()
      }
        operator = "/";
        result = parseFloat(output.innerHTML)
        number = "/"
        output.innerHTML = result
        saver++;
        console.log("huvaah");
});
mult.addEventListener("click", (event) => {
    if( operator > 1){
        giveResult()
      }
        operator = "*";
        result = parseFloat(output.innerHTML)
        number = "*"
        output.innerHTML = result
        saver++;
        console.log("mult");

});
sum.addEventListener("click", (event) => {
    if( operator > 1){
        giveResult()
      }
        operator = "+";
        result = parseFloat(output.innerHTML)
        number = "+"
        output.innerHTML = result
        saver++;
        console.log("sum");
});
minus.addEventListener("click", (event) => {
    if( operator > 1){
        giveResult()
      }
        operator = "-";
        result = parseFloat(output.innerHTML)
        number = "-"
        output.innerHTML = result
        saver++;
        console.log("minus");
});
tentsuu.addEventListener("click", (event) => {
    giveResult()
});
dot.addEventListener("click", (event) => {
    // operator = "."
});


output.addEventListener('change', (event) => {
    output.innerHTML = parseFloat(event.target.innerHTML)
});

zero.addEventListener("click", (event) => {
    if(number != "") {
        output.innerHTML = "0";
        number = ""
      }else {
        output.innerHTML += "0"
        number = ""
      }
});
one.addEventListener("click", (event) => {
    if(number!= "") {
        output.innerHTML = "1";
        number = ""
      }else {
        output.innerHTML += "1"
        number = ""
      }
});
two.addEventListener("click", (event) => {
    if(number != "") {
        output.innerHTML= "2";
        number= ""
      }else {
        output.innerHTML += "2"
        number = ""
      }
});
three.addEventListener("click", (event) => {
    if(number != "") {
        output.innerHTML = "3";
        number= ""
      }else {
        output.innerHTML += "3"
        number = ""
      }
});
four.addEventListener("click", (event) => {
    if(number != "") {
        output.innerHTML= "4";
        number = ""
      }else {
        output.innerHTML+= "4"
        number= ""
      }
});
five.addEventListener("click", (event) => {
    if(number!= "") {
        output.innerHTML= "5";
        number = ""
      }else {
        output.innerHTML+= "5"
        number= ""
      }
});
six.addEventListener("click", (event) => {
    if(number != "") {
        output.innerHTML= "6";
        number= ""
      }else {
        output.innerHTML += "6"
        number = ""
      }
});
seven.addEventListener("click", (event) => {
    if(number != "") {
        output.innerHTML= "7";
        number= ""
      }else {
        output.innerHTML += "7"
        number = ""
      }
});
eight.addEventListener("click", (event) => {
    if(number != "") {
        output.innerHTML= "8";
        number = ""
      }else {
        output.innerHTML+= "8"
        number= ""
      }
});
nine.addEventListener("click", (event) => {
    if(number!= "") {
        output.innerHTML = "9";
        number= ""
      }else {
        output.innerHTML+= "9"
        number = ""
      }
});

AC.addEventListener("click", (event) => {
    output.innerHTML = "";
});
surug.addEventListener("click", (event) => {
    number = -number;
    output.innerHTML = number;
});


const uildel = () => {
   giveResult()
    output.innerHTML = result;
}

const giveResult = () => {
    switch(operator){
      case "*": result = result * parseFloat(output.innerHTML)
      break;
      case "/": result = result / parseFloat(output.innerHTML)
      break;
      case "-": result = result - parseFloat(output.innerHTML)
      break;
      case "+": result = result + parseFloat(output.innerHTML)
      break;
      case "%": result = result % parseFloat(output.innerHTML)
      break;
  }
}