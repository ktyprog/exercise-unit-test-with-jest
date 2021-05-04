const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = (dollar) => {
    const dollarToYen = 109.57;
    return dollar * dollarToYen;
}
const fromYenToPound = (yen) => {
    const yenToPound = 0.0066;
    return yen * yenToPound;
    }


module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound};




