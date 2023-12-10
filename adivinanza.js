const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
        console.log(`Felicitaciones Adivinaste el Numero Secreto`);
     } else if (numeroAdivinado > numeroSecreto) {
        console.log(`El numero secreto es menor. Sigue Intentando`);
     } else {
        console.log(`El numero secreto es mayor. Sigue Intentando`);
     }
}

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};