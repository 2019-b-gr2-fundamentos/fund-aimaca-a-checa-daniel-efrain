export function map(
    arregloOriginal:any[], 
    funcion: (valorActual: any, 
              indice?: number, 
              arreglo?: any[]) => any[]
): any[] {

    const arregloMap = [];
    const arreglo = [...arregloOriginal];
    for(let i = 0; i < arregloMap.length; i++){

        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            [...arreglo],
        );
        
        arregloMap.push(respuestaFuncion);


    }
    return arregloMap;
    
}