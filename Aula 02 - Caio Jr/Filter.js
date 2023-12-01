const array = ["Texto", 15, 58, 85, false, "Texto 2"];

console.log("array original:", array);

// Filter cria um novo array com os valores que são verdadeiros nas operações

// Filtra os itens do array retornando somente valores do tipo number (número)
const somenteNumeros = array.filter(function (valor) {
    // typeof: tipo de ...
    if (typeof valor === "number") {
        return true;
    }

    return false;
});

console.log("somente números:", somenteNumeros);

// Filtra os itens do array retornando somente valores do tipo string (Texto)
const somenteString = array.filter(function (valor) {
    if(typeof valor === "string") {
        return true;
    }

    return false;
});

console.log("somente strings:", somenteString);