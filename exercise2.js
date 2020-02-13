let number = Math.floor(Math.random()*100);
alert(number);
let cont=5
function cal(){
    if(cont>0){
        var input = document.getElementById("numero").value;
        if(input<number){
            alert("El número es mayor, te quedan " + cont + " intentos");
        }
        else if(input>number){
            alert("El número es menor, te quedan " + cont + " intentos");
        }
        else {
                alert("Acertaste el número en " + cont + " intentos");
        }
        cont--;
    }
    else{
        alert("Has superado el numero de intentos, el numero correcto era: " + number);
    }
}
