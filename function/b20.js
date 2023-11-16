const N = 9
const massiv = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < massiv.length; i++) {
    for (let j = 0; j < massiv.length; j++) {
        if (massiv[i] + massiv[j] == N ) {
            console.log( massiv[i], massiv[j]);
        }
        else {
            console.log("error");
        }
        
    }
    
}