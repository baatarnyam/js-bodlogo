const p = 'leve'
for (let i = 0; i < p.length; i++) {
        let temp;
        if ( i[0] == i[-1] ) {
            temp = p
            console.log(temp, "palindrom mun");
        } 
        else {
            console.log(temp, "palindrom bish");
        }
}