// Write down your function down here for question one
//Required, Write a function that accepts a string as input and swaps the case of each character. 
//For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

//Declare a function(swapCase)
function swapCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}
console.log(swapCase);

//Declare a function(swapCaseAndDisplay)

function swapCaseAndDisplay() {
    const inputText = document.getElementById('textInput').value;
    const swappedText = swapCase(inputText);
    document.getElementById('output').textContent = swappedText;
}
console.log(swapCaseAndDisplay);