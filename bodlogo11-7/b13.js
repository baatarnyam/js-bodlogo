const a = 1
const b = 1
const c = 1
const d = 1

let urjver = 1
help = 0

if(a > 5){
    urjver = urjver * a
    help++
}
if(b > 5){
    urjver = urjver * b
    help++
}
if(c > 5){
    urjver = urjver * c
    help++
}
if(d > 5){
    urjver = urjver * d
    help++
}
if(help == 0) {
    urjver = 0
    console.log(help)
}
else (
    console.log("urjver:", urjver)
)