function reversed (string) {

    string_reversed = ""

    for (let i = string.length -1 ; i >= 0; i--) {
        string_reversed = string_reversed + string[i]
    }


    return string_reversed
}

console.log(reversed("hello"))
console.log(reversed("Ala Madrid"))