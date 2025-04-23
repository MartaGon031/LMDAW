"use strict"
gestor_vectores={
    vector_numeros:new Array(),
    setDatos:function(vector) {
        this.vector_numeros=vector
    }

    , getMedia:function() {
        let suma = 0
        let media = 0
        for (pos in this.vector_numeros) {
            suma = suma + this.vector_numeros[pos]
        }
        media = suma/this.vector_numeros[pos]
        return media
    }
    , getImpares:function() {
        for (let i=0; i<100;i+2) {
            document.write(i);
        }
    }

    , getMediana:function() {
        this.vector_numeros.sort()
    }
}

let vector_prueba=new Array(3)
vector_prueba[0] = 5
vector_prueba[1] = 10
vector_prueba[2] = 8
gestor_vectores.setDatos (vector_prueba)
let media = gestor_vectores.getMedia()
document.write("La media es: " + media)