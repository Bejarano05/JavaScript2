
var words = ["dog", "cat", "lion", "tiger", "parrot"]; //Array con las palabras disponibles.
var word = words[Math.floor(Math.random() * words.length)]; //Elige una palabra del array anterior
var wordslength = [];
for (var i = 0; i < word.length; i++) {
    wordslength[i] = "_";
}
function comprobar() {
    
    let num = document.getElementById("numtr").value;
    let letter = document.getElementById("letter").value;
    let remainingLetters = word.length;
    while (remainingLetters > 0) {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === letter) {
                wordslength[j] = letter;
                remainingLetters--;
            }
        }
        document.getElementById("theword").innerHTML = wordslength;
        document.getElementById("numtr").value=num;
    }
}