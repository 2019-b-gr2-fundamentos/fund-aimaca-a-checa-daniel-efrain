function main(){
    let uno = 1;
    let dos = uno;
    let tres = dos;
    console.log(uno);
    console.log(dos);
    console.log(tres);
    uno = 5;
    console.log(uno);
    console.log(dos);
    console.log(tres);

    let arreglo  = [1,2,3];
    let miOtroArreglo = [];
    let a = arreglo[0];
    let b = arreglo[1];
    console.log("arreglo:", arreglo);
    console.log('a', a);
    console.log('b', b);
    miOtroArreglo = arreglo;

    miOtroArreglo = [...arreglo, ...arreglo]; // COPIAR ARREGLOS (ADEMAS SE PUEDE COPIAR VARIOS ARREGLOS, SI SE DESEA)
    // asignar a mi otro arreglo una nueva direcion de memoria
    // 1 .-> Foe llenamos un nuevo arreglo
    // 2 -> fILTER -> SIEMPRE TRUE -> NUEVO ARREGLO
    // 3 -> MAP - > NUEVO ARREGLO

    // INMUTABILIDAD
    // JS-> ARREGLOS O OBJETOS -> CLONAR SIEMPRE!
    // CLON DEL ARREGLO -> CLON TRABAJAR

    miOtroArreglo.push(2);
    arreglo[0] = 9;
    arreglo[1] = 10
    console.log("arreglo:", arreglo);
    console.log(miOtroArreglo);
    console.log('a', a);
    console.log('b', b);

    let adrian= {
        id: 1,
        nombre: 'adrian',
        sueldo: 1.12
    }; 
    const soloElNombre = {... adrian};
    const copUno = {...adrian};
    const copDos = {...soloElNombre};
    const copTres = {...adrian};
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

