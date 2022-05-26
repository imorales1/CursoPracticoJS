const lista1 = [100,200,400000000,500];

const mitadLista1 = parseInt(lista1.length / 2);

function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    //const promedioLista = sumaLista1 / lista.length;
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

let mediana;

function CalcularMediana(lista){
    if(lista.length %2 == 0){
        console.log("Es par");
        const elemento1 = lista1[mitadLista1];
        const elemento2 = lista1[mitadLista1 - 1];
    
        const PromedioElementos = CalcularMediaAritmetica([elemento1, elemento2]);
        mediana = PromedioElementos;
        
    }else {
        console.log("Es Impar");
        mediana = lista1[mitadLista1]
    }
}





