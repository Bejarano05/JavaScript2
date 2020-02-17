//var cadena = new Object();
var cadena = {
    sinInvertir: function () {
        let cad = document.getElementById("string").value;
        //document.write("La cadena sin invertir es: " + cad);
        return cad;
    },
    invertida: function () {
        //document.write(this.sinInvertir());
        // Unvierto la cadena
        let cadenaInvertida = "";
        let x = this.sinInvertir().length;

        while (x >= 0) {
            cadenaInvertida = cadenaInvertida + this.sinInvertir().charAt(x);
            x--;
        }
        alert(cadenaInvertida);
        // return cadenaInvertida;
    },
    encriptar: function () {

        let x = 0;
        var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
        let a = this.sinInvertir().toLowerCase();
        let fin = "";
        for (x; x < a.length; x++) {
            for (let cont = 0; cont < abc.length; cont += 1) {
                if (a.charAt(x) !== "z") {
                    if (abc[cont] == a.charAt(x)) {
                        fin = fin + abc[cont + 1];
                    }
                }
                else if(cont===abc.length-1){
                    fin = fin + "a";
                }
            }
            /* alert(fin.charAt(x)); */
        }
        alert(fin)
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
            /* alert(fin.charAt(x)); */
        }
        alert(fin)
    },

    visualizaCadena: function (cad) {
        document.write(cad);
    }
};