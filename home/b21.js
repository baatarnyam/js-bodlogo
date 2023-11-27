const array = [2, 511, 123, 5, 999, 9999, 99999];
let saver;
let max = 0

for (let i = 0; i < array.length; i++) {
   for (let j = i + 1; j < array.length; j++) {
    if(array[i] <= array[j]){
        saver = array[i]
        // max = max + saver
        console.log(saver);
        break;
    }
    else{
        saver = array[j]
        // console.log(array[j]);
        // break;
    }
    
   }
    
}