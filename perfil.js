let perfil = "administrador";
let mensaje = ""

switch (mensaje) {
    case "administrador":
        mensaje = "Usted tiene los privilegios de uso del sistema";
        break;
    case "asistente":
        mensaje = "Usted sólo tiene permisos de registrar ,modificar y consultar datos";
        break;
    case "invitado":
        mensaje = "Usted sólo tiene permisos de consultar datos";
        break;
    default:
        mensaje = "Debe especificar un perfil válido"

}
console.log(mensaje)