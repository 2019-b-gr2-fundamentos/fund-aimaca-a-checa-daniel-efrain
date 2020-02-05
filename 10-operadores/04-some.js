"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function some(arreglo, funcion) {
    var arregloSome = [];
    for (var i = 0; i < arregloSome.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == !true) {
            return arregloSome;
        }
    }
    return arregloSome;
}
exports.some = some;
