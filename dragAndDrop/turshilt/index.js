const left = document.getElementById("left")
const right = document.getElementById("right")
const text = document.getElementById("text")


let  temp;

text.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id)
});

left.addEventListener("dragover", (event) => {
    event.preventDefault();
})
left.addEventListener("drop", (event) => {
    temp = event.dataTransfer.getData("text");
    const dragged = document.getElementById(temp);
    event.target.appendChild(dragged);
});

right.addEventListener("dragover", (event) => {
    event.preventDefault();
})
right.addEventListener("drop", (event) => {
    temp = event.dataTransfer.getData("text");
    const dragged = document.getElementById(temp);
    event.target.appendChild(dragged);
});