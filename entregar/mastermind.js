var num1 = Math.round(Math.random() * (9 - 1) + 1);
var num2 = Math.round(Math.random() * (9 - 1) + 1);
var num3 = Math.round(Math.random() * (9 - 1) + 1);
var num4 = Math.round(Math.random() * (9 - 1) + 1);
var attemps = 7;
while (num2 === num1) {
    var num2 = Math.round(Math.random() * (9 - 1) + 1);
}
while (num3 === num1 || num3 === num2) {
    var num3 = Math.round(Math.random() * (9 - 1) + 1);
}
while (num4 === num1 || num4 === num2 || num4 === num3) {
    var num4 = Math.round(Math.random() * (9 - 1) + 1);
}
var x = (num1 * 1000) + (num2 * 100) + (num3 * 10) + (num4);

function cal(){
    document.getElementById("cheat").value = x;
    let n1 = document.getElementById("inp_num").value;
    if (attemps>0){
        let attemps2 = 0;
        let xtostring = x.toString();
        let n1tostring = n1.toString();
        let position = 0;
        let nposition = 1;
        for(attemps2;attemps2<=3;attemps2++){
            let j = 0;
            while(j<=3){
                if(n1tostring[j]===xtostring[attemps2]){
                    if(j===attemps2) position++;
                    else nposition=4-position;
                }
                j++;
            }
        }
        attemps--
        $("#res").append("Hay " + position + " numeros en la posicion correcta, y " + nposition + " numeros en las que no. Le quedan " + attemps + " intentos.</br>");
        if(n1tostring===xtostring) $("#finalres").append("¡¡Has acertado!!")
        else if (attemps<=0) $("#finalres").append("Lo sentimos, no has acertado el numero")
        
    }
}