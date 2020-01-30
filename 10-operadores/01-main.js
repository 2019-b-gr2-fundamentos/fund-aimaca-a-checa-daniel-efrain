"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_filter_1 = require("./02-filter");
function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Adrian", nota: 6 },
        { id: 2, nombre: "Vicente", nota: 4 },
        { id: 3, nombre: "Daniel", nota: 10 },
        { id: 4, nombre: "Cesar", nota: 4 },
        { id: 5, nombre: "Julian", nota: 7 },
    ];
    /*const respuestaForEach = arregloEstudiantes
        .forEach(
            function(valorActual,indice,arreglo){
                valorActual.nota = valorActual.nota*2;
                console.log(valorActual.nota);
    
    
            }
        );
    
        console.log(respuestaForEach); //undifined*/
    //Map -> Transformar el arreglo (Mutar el arreglo)
    //Enviamos -> valorActual modificado
    //Recibir -> Nuevo arreglo con valores modificados
    /* const respuestaMap = arregloEstudiantes
         .map(
             function(valorActual, i, arreglo){
 
                 const NuevoObjeto = {
                 id:valorActual.id,
                 nombre:valorActual.nombre,
                 nota:valorActual.nota,
                 nota20:valorActual.nota*2
                 };
                 return NuevoObjeto;
                 
             }
         );
         console.log("Respueasta Map", respuestaMap);
         console.log("Respueasta Map", arregloEstudiantes);*/
    //Filter -> filtra el arreglo 
    //Enviamos -> condicion
    //Recibir -> Nuevo arreglo con valores filtrados
    /*const respuestaFilter = arregloEstudiantes
             .filter(
                 function(valorActual, i , arreglo){
                     const condicion7 = valorActual.nota >= 7;
                     const condicion5 = valorActual.nota <= 5;
                     //Condicion es un truty
                     return condicion7 || condicion5;
                 }
             );
 
             console.log("respuesta de FILTER ES", respuestaFilter);
             console.log("arreglo de estudiantes", arregloEstudiantes);*/
    //AND -> every(todos cumplan) / or -> some (alguno)
    /*const respuestaSome = arregloEstudiantes
                .some(
                    function(valorActual, i, arr){
                        const condicion = valorActual.nota < 7;
                        //condicion truty o true
                        return condicion;
                    }
                );
                console.log("respuesta de some es", respuestaSome);
                console.log("arreglo estudiantes", arregloEstudiantes);*/
    // Every ->       devuelve verdadero o falso dependiendo de la condicion
    // si todos cumplen la condicion devuelve true
    //si no todos cumplen la consicion devuelve falso
    //Envimos-> condicion 
    //Recibimos -> Booleano
    /* const respuestaEvery = arregloEstudiantes
                     .every(
                         function(valorActual, i, arr){
                             const condicion = valorActual.nota >= 4;
                             return condicion;
                         }
                     );
                 console.log("respúetsa de every", respuestaEvery);
                 console.log("arreglode estudiantes", arregloEstudiantes);*/
    //Reduce -> devuelve un valor  con el calculo aplicado
    //Enviamos -> CALCULO
    //RECIBIR -> Valor
    /*const respuestaReduce = arregloEstudiantes
                     .reduce(
                         function(acumulador, valorActual, i, arr){ // funcion

                            const calculo = acumulador + valorActual.nota;
                            return calculo;
                         },
                         0 //valor
                     );

                    
                     console.log(respuestaReduce);
                     console.log(arregloEstudiantes); */
    var filterNuestro = _02_filter_1.filter(arregloEstudiantes, function (valorActual, i, arr) {
        //console.log('valor:', valorActual);
        //console.log('indice:', i);
        //console.log('arreglo:', arr);
        return valorActual.nota >= 7;
    });
    console.log('RespuestaFilterNuestro:', filterNuestro);
    console.log(arregloEstudiantes);
    /*const forEachNuestro =  forEach(
     arregloEstudiantes,
     function(valorActual,i, arr){
         valorActual.nota = valorActual.nota*2;
         console.log(valorActual.nota);
     }
 );
 
 console.log('Respuesta:', forEachNuestro);*/
}
main();
