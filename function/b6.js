const string = "abcdea"

let text = (string) => {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if ( string[j] == string[i] ) {
                console.log("string davhatssan -->", string[i]);
                break;
            }
        }   
    }
}
text(string)