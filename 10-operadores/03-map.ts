export function map(
    arreglo:any[], 
    funcion: (valorActual: any, 
              indice?: number, 
              arreglo?: any[]) => any[]
): any[] {

    const arregloMap = [];
    for(let i; i < arregloMap; i++){

        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
        


    }
    return arregloMap;
    
}