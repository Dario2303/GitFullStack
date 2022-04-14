// let numero1 = prompt ("Ingrese el primer numero");
// let numero2 = prompt ("ingrese el segundo numero");

// //- Solicitar 2 numeros al usuario y mostrar en consola cuál es el numero mayor.//
// if (numero1 > numero2) {
//         console.log(numero1 + " es mayor que " + numero2);
//     }
//     else {
//         console.log(numero2 + " es mayor que " + numero1);
//     }


// //- Solicitar 2 numeros sumarlos y decir si el resultado es par o impar.//
// let suma = (numero1 + numero2);
// console.log("Resultado de la suma:", suma);

//     if (suma % 2 === 0) {
//         console.log("el resultado es PAR");
//         }
//         else{
//             console.log("el resultado es IMPAR");
//     }

// //- Solicitar un numero de 1 al 12 y mostrar el mes del año al que corresponde.//

// let NumeroSol= 1;

// switch (NumeroSol) {
//     case 1:
//         console.log("Enero");
//         break;
//     case 2:
//         console.log("Febrero");
//         break;
//     case 3:
//         console.log("Marzo");
//         break;
//     case 4:
//         console.log("Abril");
//         break;
//     case 5:
//         console.log("Mayo");
//         break;
//     case 6:
//         console.log("Junio");
//         break;
//     case 7:
//         console.log("Julio");
//         break;
//     case 8:
//         console.log("Agosto");
//         break;
//     case 9:
//         console.log("Septiembre");
//         break;
//     case 10:
//         console.log("Octubre");
//         break;
//     case 11:
//         console.log("Noviembre");
//         break;
//     case 12:
//         console.log("Diciembre");
//         break;
//     default:
//         console.log("el numero de mes seleccionado no es correcto")
//     }


// // - Solicitar nombre y edad al usuario. Una vez definidas las variables se ha de 
// // visualizar un mensaje en la consola que diga “Mayor de Edad” o “Menor de Edad”, 
// // dependiendo de que la edad introducida sea mayor o menor de 18 años y el nombre de 
// // la persona.

// let Nombre = "Darío";
// let Edad = 33;

// if (Edad <= 0) {
//     console.log(Edad + " no es un valor válido, intente nuevamente");
//     } else {
//             if (Edad < 18 && Edad > 0) {
//                 console.log("Nombre: " + Nombre);
//                 console.log("Menor de edad");
//             }
//             else {
//                 console.log("Nombre: " + Nombre);
//                 console.log("Mayor de edad");
//             }
//         }

// // - Realizar un ejercicio en el cual se definan las siguientes variables “precio_kilometro”, 
// // “vehiculo”, “kms_recorridos”, “litros_consumidos”. A continuación, defina y realice los 
// // cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
// // Si el vehículo es “coche”, el precio kilometro ha de ser 0.10, si es “moto” ha de ser 0.20 y 
// // si es “autobús” 0.5. si los litros consumidos están entre 0 y 100 se ha de añadir 1 al total, 
// // si es mayor la cantidad de litros consumidos se ha de añadir 2 al total.


// let litros_consumidos = 124;
// let km_recorridos = 1870;
// let vehiculo = 2;

// switch(vehiculo) {
//     case 1:
//         console.log("Vehiculo: Moto");
//         break;
//     case 2:
//         console.log("Vehículo: Coche");
//         break;
//     case 3:
//         console.log("vehiculo: bus");
//         break;
//     default:
//         console.log("no existe el vehículo mencionado");
//         break;
//     }


// if (vehiculo === 1) {

//     let precioxKmMoto = 0.10;
//     let KmxLt = km_recorridos / litros_consumidos;
//     let precioxLt = KmxLt * precioxKmMoto;

//     console.log("Kilometros por litro: ", KmxLt);
//     console.log("Total de Km recorridos: ", km_recorridos);
//     console.log("Precio por Lt ", precioxLt);

//         if (litros_consumidos <= 100){
//             let LitrosMenor100 = (litros_consumidos + 1);
//             console.log("Litros consumidos totales: ", (LitrosMenor100));
//             console.log("precio total: ", LitrosMenor100 * precioxLt);
//         }
//         else {
//             let LitrosMayor100 = (litros_consumidos + 2);
//             console.log("Litros cosumidos totales: ", (LitrosMayor100));
//             console.log("precio total: ", LitrosMayor100 * precioxLt);
//             }
// } else if (vehiculo === 2) {

//     let precioxKmCoche = 0.20;
//     let KmxLt = km_recorridos / litros_consumidos;
//     let precioxLt = KmxLt * precioxKmCoche;

//     console.log("Kilometros por litro: ", KmxLt);
//     console.log("Total de Km recorridos: ", km_recorridos);
//     console.log("Precio por Lt ", precioxLt);

//         if (litros_consumidos <= 100){
//             let LitrosMenor100 = (litros_consumidos + 1);
//             console.log("Litros consumidos totales: ", (LitrosMenor100));
//             console.log("precio total: ", LitrosMenor100 * precioxLt);
//         }
//         else {
//             let LitrosMayor100 = (litros_consumidos + 2);
//             console.log("Litros cosumidos totales: ", (LitrosMayor100));
//             console.log("precio total: ", LitrosMayor100 * precioxLt);
//             }
// } else if (vehiculo === 3) {

//     let precioxKmBus = 0.50;
//     let KmxLt = km_recorridos / litros_consumidos;
//     let precioxLt = KmxLt * precioxKmBus;

//     console.log("Kilometros por litro: ", KmxLt);
//     console.log("Total de Km recorridos: ", km_recorridos);
//     console.log("Precio por Lt ", precioxLt);

//         if (litros_consumidos <= 100){
//             let LitrosMenor100 = (litros_consumidos + 1);
//             console.log("Litros consumidos totales: ", (LitrosMenor100));
//             console.log("precio total: ", LitrosMenor100 * precioxLt);
//         }
//         else {
//             let LitrosMayor100 = (litros_consumidos + 2);
//             console.log("Litros cosumidos totales: ", (LitrosMayor100));
//             console.log("precio total: ", LitrosMayor100 * precioxLt);
//             }
// }


// // - Hacer un programa que muestre el area de un rectangulo, un cuadrado, un triangulo y un circulo. 
// // La opcion del usuario debe ser solicitada al usuario y los datos que necesite para calcular el area 
// // de la figura. Mostrar en la consola el valor del area.


// let BaseRectangulo = 10;
// let AlturaRectangulo = 5;

// console.log("El área del rectángulo es: ", BaseRectangulo * AlturaRectangulo);

// let LadoCuadrado = 20;

// console.log("El área del cuadrado es: ", LadoCuadrado ** 2);

// let BaseTriangulo = 15;
// let AlturaTriangulo = 10;

// console.log("El área del triángulo es: ", (BaseTriangulo * AlturaTriangulo) / 2);

// let pi = 3.1415;
// let RadioCirculo = 18;

// console.log("El área del círculo es: ", pi * (RadioCirculo ** 2));


// // - Hacer un juego de piedra, papel o tijera. Solicitar la jugada del jugador 1 y en otra 
// // la jugada del jugador 2, mostrar en la console quién ganó.


    // let jugador1 = 1;

    // switch (jugador1) {
    //     case 1:
    //         console.log("Jugador 1 piedra");
    //         break;
    //     case 2:
    //         console.log("Jugador 1 papel");
    //         break;
    //     case 3:
    //         console.log("Jugador 1 tijera");
    //         break;
    // }
    // let jugador2 = 2;

    // switch (jugador2) {
    //     case 1:
    //         console.log("Jugador 2 piedra");
    //         break;
    //     case 2:
    //         console.log("Jugador 2 papel");
    //         break;
    //     case 3:
    //         console.log("Jugador 2 tijera");
    //         break;
    // }

    // if (jugador1 === 1 && jugador2 === 3 || jugador1 === 2 && jugador2 === 1 || jugador1 === 3 && jugador2 === 2) {
    //     console.log("El jugador numero 1 es el ganador");
    // } else if (jugador1 === jugador2) {
    //     console.log("es un empate");
    // }else {
    //     console.log("El jugador numero 2 es el ganador");
    // }

    let jugador1 = 1;

    switch (jugador1) {
        case 1:
            console.log("Jugador 1 piedra");
            break;
        case 2:
            console.log("Jugador 1 papel");
            break;
        case 3:
            console.log("Jugador 1 tijera");
            break;
    }
    let jugador2 = 3;

    switch (jugador2) {
        case 1:
            console.log("Jugador 2 piedra");
            break;
        case 2:
            console.log("Jugador 2 papel");
            break;
        case 3:
            console.log("Jugador 2 tijera");
            break;
    }

    if (jugador1 === 1 && jugador2 === 3 || jugador1 === 2 && jugador2 === 1 || jugador1 === 3 && jugador2 === 2) {
        console.log("El jugador numero 1 es el ganador");
    } else if (jugador1 === jugador2) {
        console.log("es un empate");
    }else {
        console.log("El jugador numero 2 es el ganador");
    }