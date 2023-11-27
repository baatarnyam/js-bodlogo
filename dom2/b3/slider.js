const prevous = document.getElementById("prevous")
const next = document.getElementById("next")
const imgage = document.getElementById("img")

const images = [ "./images/itachi1.jpeg", "./images/itachi2.jpeg", "./images/itachi3.jpeg", "./images/itachi4.jpeg"]
let counter = 0;
imgage.src = images[counter]

next.addEventListener("click", () => {

    if ( counter < images.length - 1){
        counter++;
       imgage.src = images[counter]
    };

});

prevous.addEventListener("click", () => {
    if(counter = counter){
        counter--;
        imgage.src = images[counter]
    }

})


