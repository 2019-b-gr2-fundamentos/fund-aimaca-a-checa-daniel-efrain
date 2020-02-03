var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function main() {
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log(uno);
    console.log(dos);
    console.log(tres);
    uno = 5;
    console.log(uno);
    console.log(dos);
    console.log(tres);
    var arreglo = [1, 2, 3];
    var miOtroArreglo = [];
    var a = arreglo[0];
    var b = arreglo[1];
    console.log("arreglo:", arreglo);
    console.log('a', a);
    console.log('b', b);
    miOtroArreglo = arreglo;
    miOtroArreglo = __spreadArrays(arreglo, arreglo); // COPIAR ARREGLOS (ADEMAS SE PUEDE COPIAR VARIOS ARREGLOS, SI SE DESEA)
    // asignar a mi otro arreglo una nueva direcion de memoria
    // 1 .-> Foe llenamos un nuevo arreglo
    // 2 -> fILTER -> SIEMPRE TRUE -> NUEVO ARREGLO
    // 3 -> MAP - > NUEVO ARREGLO
    // INMUTABILIDAD
    // JS-> ARREGLOS O OBJETOS -> CLONAR SIEMPRE!
    // CLON DEL ARREGLO -> CLON TRABAJAR
    miOtroArreglo.push(2);
    arreglo[0] = 9;
    arreglo[1] = 10;
    console.log("arreglo:", arreglo);
    console.log(miOtroArreglo);
    console.log('a', a);
    console.log('b', b);
    var adrian = {
        id: 1,
        nombre: 'adrian',
        sueldo: 1.12
    };
    var soloElNombre = __assign({}, adrian);
    var copUno = __assign({}, adrian);
    var copDos = __assign({}, soloElNombre);
    var copTres = __assign({}, adrian);
    console.log('adrina', adrian);
    console.log('solo el nombre ', soloElNombre);
    delete adrian.nombre;
    soloElNombre['edad'] = 22;
    //soloElNombre.edad = 22; 
    console.log('adrina', adrian);
    console.log('solo el nombre ', soloElNombre);
    console.log('copUn', copUno);
    console.log('copDos', copDos);
    console.log('copTres', copTres);
}
main();
