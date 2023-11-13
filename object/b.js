const array = ["lastname", "firstname", "age", "gender", "isMarried"]
const array2 = {
    lastname: "Bat",
    firstname: "Bataa",
    age: "25",
    gender: "male",
    isMarried: "married", 
    address: "address", 
    eduction: "education",
    image: "image", 
    language: "english", 
    major: "major" 
}
let d1 = {};
 for (let i = 0; i < array.length; i++) {
    d1 [array[i]] = array2[i] 
    console.log(`lastname is ${array2.lastname} firstname is ${array2.firstname}`);
 }