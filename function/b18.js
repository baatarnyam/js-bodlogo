const num1 = 88
const num2 = 76
max = 0
for (let i = 0; i <= num1; i++) {
    if (num1 % i == 0 && num2 % i == 0 ) {
        max = i
    }
    
}
console.log(max);