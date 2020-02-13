//var cadena = new Object();
var cadena = {
    sinInvertir: function(){
        let cad = document.getElementById("string").value;
        //document.write("La cadena sin invertir es: " + cad);
        return cad;
    },
    invertida : function(){
        //document.write(this.sinInvertir());
        // Unvierto la cadena
        let cadenaInvertida = "";
        let x = this.sinInvertir().length;
        
        while (x>=0) 
        {
            cadenaInvertida=cadenaInvertida+this.sinInvertir().charAt(x);
            x--;
            
        }
        alert(cadenaInvertida);
        // return ;
    },
    visualizaCadena : function(cad){
        document.write(cad);
    }
};