let traductor = "gato";
let mensaje = "gato";

switch (mensaje) {
    case "gato":
        mensaje = "cat";
        break;
    case "perro":
        mensaje = "dog";
        break;
    case "puerta":
        mensaje = "door";
        break;
    case "ventana":
        mensaje = window;
        break;
    case "mesa":
        mensaje = "table";
        break;
    default:
        mensaje = "La palabra ingresada es incorrecta" ;
        break;
}
console.log(mensaje)