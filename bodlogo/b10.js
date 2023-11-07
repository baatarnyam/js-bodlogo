const a = 8, b = 5, c = 7
p = (a+b+c)/2
s = Math.sqrt(p*(p-a)*(p-b)*(p-c))
if (s <= 0){
    console.log("gurvaljin bish baina")
}
else {
    console.log(s)
}