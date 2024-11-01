let num1 = 2;
let num2 = 3;
let operacion = "multiplicar";
let resultado;
let mensaje;


switch (operacion) {
    case "sumar":
        resultado = num1 + num2;
        // mensaje =(num1 + num2) ,(resultado);
        console.log(`El resultado de sumar ${num1} + ${num2} es ${resultado}`)
        break;
    case "resta":
        resultado = num1 - num2;
        console.log(`El resultado de resta ${num1} - ${num2} es ${resultado}`)
        break;
    case "multiplicar":
        resultado = num1 * num2;
        console.log(`El resultado de multiplicar ${num1} * ${num2} es ${resultado}`)
        break;
    case "dividir":
        resultado = num1 / num2;
        console.log(`El resultado de dividir ${num1} / ${num2} es ${resultado}`)
        break;
    default:
        break;
}