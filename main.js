//VARIABLES +++++++++++++++++++++++++++++++
//VARIABLES +++++++++++++++++++++++++++++++
//VARIABLES +++++++++++++++++++++++++++++++

let usuarioRegistrado = ""
let contraseñaRegistrada = ""
let contador = 0
let inicioCorrecto = false
let acumuladorProductos = 0
let acumuladordePrecios = 0
let total = 0



//+++++++++++++++++++++++++++++++ FUNCIONES +++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++ FUNCIONES +++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++ FUNCIONES +++++++++++++++++++++++++++++++







//+++++++++++++++++++++++++++++++  ARRAY +++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++  ARRAY +++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++  ARRAY +++++++++++++++++++++++++++++++

const misProductos = [
    {id:7, nombre:"Remera M512", precio:7500, categoria:"Remeras"},
    {id:4, nombre:"Remera Matt", precio:10000, categoria:"Remeras"},
    {id:6, nombre:"Remera M504", precio:8700, categoria:"Remeras"},
    {id:5, nombre:"Remera M504", precio:8300, categoria:"Remeras"},
    {id:13, nombre:"Buzo Polar", precio:17500, categoria:"Buzos"},
    {id:17, nombre:"Buzo KV", precio:20000, categoria:"Buzos"},
    {id:2, nombre:"Buzo Ryan", precio:27000, categoria:"Buzos"},
    {id:3, nombre:"Buzo Blessed", precio:33000, categoria:"Buzos"},
    {id:11, nombre:"Jogging Gris", precio:20000, categoria:"Pantalones"},
    {id:10, nombre:"Jogging Negro", precio:20000, categoria:"Pantalones"},
    {id:9, nombre:"Jogging Duncan", precio:21000, categoria:"Pantalones"},
    {id:8, nombre:"Jogging M501", precio:20000, categoria:"Pantalones"}
]




//EJECUCION +++++++++++++++++++++++++++++++
//EJECUCION +++++++++++++++++++++++++++++++
//EJECUCION +++++++++++++++++++++++++++++++

alert("HOLA! :) , Bienvenido a nuestra tienda online, aqui encontraras nuestros mejores productos en indumientaria unisex de nuestro propio diseño, principalmente diseños oversize, y urbano.")

do {
    alert("Registrate para ingresar a nuestro catalogo de productos!")
    usuarioRegistrado = prompt("REGISTRARSE. \nElige un nombre de usuario")
    contraseñaRegistrada = prompt("Elige tu contraseña")
    if (usuarioRegistrado == ("") || contraseñaRegistrada == ("")) {
        alert("Debes rellenar los campos")
    } else {
        alert("Has sido registrado con exito!")
    }
} while (usuarioRegistrado == ("") || contraseñaRegistrada == (""));

do {
    usuario = prompt("INICIO DE SESION. (Respeta estrictamente tus datos de registro)\nIngrese su usuario")
    contraseña = prompt("Ingrese su contraseña")
    contador++
    if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
        alert("Bienvenido " + usuario + "!")
        inicioCorrecto = true
        break
    } else {
        alert("Usuario y/o contraseña incorrecto/s")
    }
} while (contador < 3 && usuario != usuarioRegistrado || contraseña != contraseñaRegistrada);

if (contador === 3) {
    alert("Bloqueo de seguridad, volve mas tarde.")

}

let opcion


do {
    alert("Bienvenido, aquí encontraras todos nuestros productos")
    let lista = ""
            misProductos.forEach(producto => lista += "ID " + producto.id + " " + producto.nombre + "\n")
            alert(lista)
    opcion = Number(prompt("Ingrese una opción: \n1- Categorías \n2-Carrito \n0 Salir"))
    switch (opcion) {
        case 1:
            opcion = Number(prompt("Ingrese una categoria \n1- Remeras \n2- Buzos \n3- Pantalones"))
            switch (opcion) {
                case 1:
                    alert("REMERAS")
                    
                    break;
                case 2:
                    alert("BUZOS")
                    
                    break;
                case 3:
                    alert("PANTALONES")
                    
                    break;
                default:
                    break;
            }
            break;
        case 2:
            
            break;
        default:
            
            break;
    }
} while (opcion != 0 );

alert("Muchas gracias por visitar nuestra tienda online " + usuario + "! Vuelva pronto!")

