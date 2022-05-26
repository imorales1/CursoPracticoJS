const lista1 = [100, 200, 300, 500];

//Calcular la media aritmética.
//let sumaLista1 = 0;
//for (let i=0; i < lista1.length; i++){
//    sumaLista1 = sumaLista1 + lista1[i];
//}

function CalcularMediaAritmetica(lista){
    //let sumaLista1 = 0;
    //for (let i=0; i < lista1.length; i++){
    //    sumaLista1 = sumaLista1 + lista[i];
    //for}

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    //const promedioLista = sumaLista1 / lista.length;
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
