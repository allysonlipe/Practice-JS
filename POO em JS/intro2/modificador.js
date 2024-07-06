function fnCapitalizar(collection, key) {
    var changedVector = [];

    if (typeof collection[0] == 'object') {

        if (key == null) {
            return 'insira um atributo chave!';
        } else {
            changedVector = collection.map(function (elemento) {
                var inicial = elemento[key].charAt(0).toLocaleUpperCase();
                var slice = elemento[key].slice(1);
                var elemento = inicial + slice;
                return elemento;
            })
            return changedVector;
        }

    } else {
        changedVector = collection.map(function (elemento) {
            var inicial = elemento.charAt(0).toLocaleUpperCase();
            var sliced = elemento.slice(1)
            elemento = inicial + sliced;
            return elemento;
        })
        return changedVector;
    }
    
};



function fnOrdenar(vector) {
    return vector.sort(function (a, b) {
        return a.localeCompare(b);
    })
};


function fnCaixaAlta(vector) {
    var changedVector = [];
    for (var i = 0; i < vector.length; i++) {
        var result = vector[i].toLocaleUpperCase();
        changedVector[i] = result;
    }
    return changedVector;
};

export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
};
