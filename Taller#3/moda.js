const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const lista1Count = {};

//Este método nos ayuda a recorrer nuestro arreglo
lista1.map(
    
    function(elemento) {
        if(lista1Count[elemento]) {
            //lista1Count[elemento] = lista1Count[elemento] + 1;
            lista1Count[elemento] += 1;
        }else {
            lista1Count[elemento] = 1;
        }
    }
);

//converti un objeto a un array de
const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        valorAcumulado - nuevoValor;
    }
);



