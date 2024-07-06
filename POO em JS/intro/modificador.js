function fnCapitalizar(vector) {
    var changedVector = []

    for (var i = 0; i < vector.length; i++) {
        var letraInicial = vector[i].charAt(0).toLocaleUpperCase();
        var restoDoTexto = vector[i].slice(1);
        var resultado = letraInicial + restoDoTexto;
        changedVector[i] = resultado;
    }

    return changedVector

}


function fnOrdenar(vector) {
    return vector.sort(function (a, b) {
        return a.localeCompare(b);
    })
};


function fnCaixaAlta(vector){
    var changedVector = []

    for (var i = 0; i < vector.length; i++) {
        var resultado = vector[i].toLocaleUpperCase();
        changedVector[i] = resultado;
    }

    return changedVector
};

export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
};
