const firstInput = document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const output = document.getElementById("output")
// const button = document.getElementById("button")

const nemeh = document.getElementById("nemeh")
const hasah = document.getElementById("hasah")
const urjih = document.getElementById("urjih")
const huvaah = document.getElementById("huvaah")
const modul = document.getElementById("modul")


let first;
let second;
let result;
let operatop;

nemeh.addEventListener("click", (event) => {
    operatop = "nemeh"
});
hasah.addEventListener("click", (event) => {
    operatop = "hasah"
});
urjih.addEventListener("click", (event) => {
    operatop = "urjih"
});
huvaah.addEventListener("click", (event) => {
    operatop = "huvaah"
});
modul.addEventListener("click", (event) => {
    operatop = "modul"
});


const numberCheck = (number) => {
    let temp = parseInt(number);
    if(typeof temp === "number" ) {
        return true;
    }
    else {
        return false;
    }
};

firstInput.addEventListener('change', (event) => {
    const result = numberCheck(event.target.value);
    if (result) {
        first = parseInt(event.target.value);
    }
    else {
        alert(`${event.target.value} is not number` )
    }
});
secondInput.addEventListener('change', (event) => {
    const result = numberCheck(event.target.value);
    if (result) {
        second = parseInt(event.target.value);
    }
    else {
        alert(`${event.target.value} is not number` )
    }
});


const uildel = () => {
    switch(operatop){
        case "urjih":
            result = first * second;
        break;
        case "huvaah":
            result = first / second;
        break;
        case "nemeh":
            result = first + second;
        break;
        case "hasah":
            result = first - second;
        break;
        case "modul":
            result = first % second;
        break;
    }
    output.innerHTML = result; 
}