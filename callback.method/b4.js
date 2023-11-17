const n = [1,5,7,9,2]

let max = 0
 n.map((element) => {
    if ( max <= element ) {
        max = element
    }
 })
 console.log(max);