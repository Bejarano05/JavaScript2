
var words = ["dog", "cat", "lion", "tiger", "parrot"]; //Array con las palabras disponibles.
var word = words[Math.floor(Math.random() * words.length)]; //Elige una palabra del array anterior
var wordslength = [];
var attempts = 7;
let remainingLetters = word.length;

alert(word);
for (var i = 0; i < word.length; i++) {
    wordslength[i] = "_";
}
function comprobar() {
    let letter = document.getElementById("letter").value;

    var found = false;
    if(attempts<=0){
        alert("derrota");
        return;
    }
    else{
        for (var j = 0; j < word.length; j++) {
            if (word[j] == letter) {
                wordslength[j] = letter;
                remainingLetters--;
                found = true;
                document.getElementById("theword").innerHTML = wordslength;
            }
        }
        if(!found){
            alert("Te has equivocado. Te restan "+attempts+" intentos.");
            attempts--;            
        } 
    }
    if(remainingLetters==0){        
        alert("Victoria");
    }
    document.getElementById("letter").value="";
    
}
