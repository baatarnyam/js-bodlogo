
const counterNum = document.getElementById("counterNum")

const dragImage = document.querySelectorAll("img");
const dropBox = document.querySelectorAll( ".puzzle div");

let temporary;
let count = 0

dragImage.forEach( (el) =>{
    el.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("image", event.target.id)
    });
});


dropBox.forEach( (el) =>{
    el.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    el.addEventListener("drop", (event) => {
        temporary = event.dataTransfer.getData("image")
        const dragged = document.getElementById(temporary)
        el.appendChild(dragged)

        count++;
        counterNum.innerHTML = count;
    });
});

// const notDragel = () => {
//     if(dragImage.el){

//     }
// }
