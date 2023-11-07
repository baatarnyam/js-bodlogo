const a = 5 
const b = 9 
const c = 16
const d = 6

let urjver = 1
help = 0

if (a < 5){
    urjver = urjver * a
    help++
}

if (b < 5){
    urjver = urjver *  b
    help++
}
if (c < 5){
    urjver = urjver *  c
    help++
}
if (d < 5){
    urjver = urjver *  d
    help++
}
if (help == 0){
    urjver = urjver * help
    console.log(help)
}
else(
    console.log("urjver:", urjver)
)