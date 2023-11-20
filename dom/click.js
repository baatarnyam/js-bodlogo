const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

const input = document.getElementById("input");

let count = parseInt(input.value);
// input.value = count;

const add = (param) => {
    param = param + 1;
    return param;
};
const reducer = (param) => {
    param = param - 1;
    return param;
};

const logger = () => {
    console.log(input.value);
}

plusBtn.addEventListener( "click", (event) => {
    const result = add(count);
    count = result;
    input.value = result;
});
minusBtn.addEventListener( "click",  (event) => {
    const result = reducer(count);
    count = result;
    input.value = result;
});

input.addEventListener( "change", (event) => {
    count = parseInt(event.target.value);
    console.log(input.value);

    // input.value = result;
} );