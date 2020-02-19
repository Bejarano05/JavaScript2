//var cadena = new Object();
var cadena = {
    sinInvertir: function () {
        //Guardo la cadena en una variable nueva
        let cad = document.getElementById("word").value;
        return cad;
    },
    invertida: function () {
        // Invierto la cadena
        //Creo una nueva cadena de caracteres con los caracteres de la principal pasando caracter por caracter pero en sentido inverso.
        let cadenaInvertida = "";
        let x = this.sinInvertir().length;

        while (x >= 0) {
            cadenaInvertida = cadenaInvertida + this.sinInvertir().charAt(x);
            x--;
        }
        document.getElementById("word").value = cadenaInvertida;
        //alert(cadenaInvertida);
        return cadenaInvertida;
    },
    encriptar: function () {

        let x = 0;
        var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
        let a = this.sinInvertir().toLowerCase(); //Paso toda la cadena a minúscula.
        let fin = "";
        //Recorremos todo este bucle FOR tantas veces como larga sea nuestra cadena
        for (x; x < a.length; x++) {
            for (let cont = 0; cont < abc.length; cont += 1) {
                if (a.charAt(x) !== "z") {
                    if (abc[cont] == a.charAt(x)) {
                        fin = fin + abc[cont + 1]; //Guardamos en una cadena los caracteres de la anterior +1
                    }
                }
                else if(cont===abc.length-1){
                    fin = fin + "a"; //Si nuestra cadena contiene una "Z" la convertimos en "A"
                }
            }
        }
        document.getElementById("word").value = fin;
        return fin;

    },
    desencriptar: function () {
        let x = 0;
        var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
        let a = this.sinInvertir().toLowerCase();
        let fin = "";
        for (x; x < a.length; x++) {
            for (let cont = 0; cont < abc.length; cont += 1) {
                if (a.charAt(x) !== "a") {
                    if (abc[cont] == a.charAt(x)) {
                        fin = fin + abc[cont - 1];
                    }
                }
                else if(cont===abc.length-1){
                    fin = fin + "z";
                }
            }
        }
        document.getElementById("word").value = fin;
        return fin;
    }
};