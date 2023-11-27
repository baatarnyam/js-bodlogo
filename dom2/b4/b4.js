const numberRed = document.getElementById("NumberRed")
const numberBlue = document.getElementById("NumberBlue")
const button = document.getElementById("btn")

const red= document.getElementById("red")
const blue= document.getElementById("blue")

let numRed = 50;
let numBlue = 50;

// let blueImg = [blue.style = "width: 50%"]


red.addEventListener("click", () => {
    
    numRed = numRed + 2;
    numberRed.innerHTML=numRed;
    
    numBlue = numBlue - 2;
    numberBlue.innerHTML=numBlue;

    red.style.width = `${numRed}%`
    blue.style.width = `${numBlue}%`

    winner()
});
blue.addEventListener("click", () => {

    numBlue = numBlue + 2
    numberBlue.innerHTML=numBlue

    numRed = numRed - 2;
    numberRed.innerHTML=numRed;

    blue.style.width = `${numBlue}%`
    red.style.width = `${numRed}%`

    winner()
});


button.addEventListener("click", () => {
    numRed = 50
    numberRed.innerHTML = numRed;

    numBlue = 50
    numberBlue.innerHTML=numBlue;

    red.style.width = `${numRed}%`
    blue.style.width = `${numBlue}%`
});

const winner = () => {
    if (numRed == 100) {
        alert("red win!")
    }
    if(numBlue == 100) {
        alert("blue win!")
    }
}
