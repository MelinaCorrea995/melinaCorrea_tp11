let pagoMes = 12000;
let aumento = 20;
let consumoKWH = 300;
let resultado = 14400;
let mensaje = "";

// if (consumoKWH < 450) {
//     pagoMes * aumento; 20000 / 100
//     mensaje = "Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que será de: ";
//     // console.log(mensaje);
//     console.log(mensaje, resultado);
// }

// else {
//     mensaje = "No consume mas de 300kwh por mes no tendrá ningún aumento";
//     console.log(mensaje);
// }


(consumoKWH > 450) ?
    (pagoMes * aumento, 20000 / 100,
        mensaje = "Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que será de: ",
        console.log(mensaje, resultado) ) :
    (mensaje = "No consume mas de 300kwh por mes , no tendrá ningún aumento",
        console.log(mensaje) ) ;
