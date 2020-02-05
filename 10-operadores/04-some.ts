export function some(
    arreglo:any[], 
    funcion: (valorActual: any, 
              indice?: number, 
              arreglo?: any[]) => boolean 
): any[] {

    const arregloSome = [];
    for(let i = 0; i < arregloSome.length; i++){

        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
        
        if(respuestaFuncion ==! true){
        return arregloSome;
        }
    }
    return arregloSome;
    
}