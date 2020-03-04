
var words = ["dog", "cat", "lion", "tiger", "parrot","cow","goat","pig","sheep","llama","prawn","jellyfish","lobster","squid","skunk","bear","eagle","butterfly"]; //Array con las palabras disponibles.
var word = words[Math.floor(Math.random() * words.length)]; //Elige una palabra del array anterior
var wordslength = [];
var attempts = 7;
let remainingLetters = word.length;
alert(word);
// Calculamos la longitud de la palabra y la expresamos con "_" 
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
            // Comprueba si el caracter introducido está en la palabra inicial y la muestra por pantalla
            if (word[j] == letter) {
                wordslength[j] = letter;
                remainingLetters--;
                found = true;
                document.getElementById("theword").innerHTML = wordslength;
            }
        }
        //Resta intentos si el caracter no se encuentra en la palabra
        if(!found){
            attempts--;   
            document.getElementById("numtr").value = attempts;         
        } 
    }
    if(remainingLetters==0){        
        alert("Victoria");
    }
    document.getElementById("letter").value="";
}
