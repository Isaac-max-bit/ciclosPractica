// for(let index = 0; index < 5; index++){
//     let numeroUno = Number(prompt('Ingrese un número : '))
//     let numeroDos = Number(prompt('Ingrese otro número : '))

//     let operacion = prompt(
//         'seleccione: \n1 - sumar \n2 - Restar\n3 - Multiplicar\n4 - Dividir'
//     );

//     switch(operacion){
//         case "1":
//             alert("Esta es la suma : " + (numeroUno + numeroDos));
//             break;

//             case "2":
//             alert("Esta es la resta : " + (numeroUno - numeroDos));
//             break;

//             case "3":
//             alert("Esta es la multiplicación : " + (numeroUno * numeroDos));
//             break;

//             case "4":
//             alert("Esta es la división : " + (numeroUno / numeroDos));
//             break;

//             default:
//                 alert('Opcion no valida')
//     }
// }

// let index = 0;
// while(index < 5){
//     let numeroUno =  Number(prompt("Ingrese un número : "));
//     let numeroDos =  Number(prompt("Ingrese un número : "));
//     let operacion = prompt(
//         "seleccione: \n1 - sumar \n2 - Restar\n3 - Multiplicar\n4 - Dividir"
//     );

//     switch(operacion){
//     }
//     index++;
// }

let repetir = true;
let index = 0
while(repetir){
    let estado = prompt('¿Desea repetir el código?: \n1 - SI\n2 - NO');
    if(estado == "2"){
        repetir = false;
    }
    console.log("Estado de ciclo : " + repetir)
    index++
}
console.log(index)