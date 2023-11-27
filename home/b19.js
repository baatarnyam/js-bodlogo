const array = [2,511,123,5]
let average = 0

for (let i = 0; i < array.length; i++) {
    average = average + array[i]
}
console.log(average/array.length);