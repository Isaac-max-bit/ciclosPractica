for(let index = 0; index < 5; index++){
    let numeroUno = Number(prompt('Ingrese un número : '))
    let numeroDos = Number(prompt('Ingrese otro número : '))

    let operacion = prompt(
        'seleccione: \n1 - sumar \n2 - Restar\n3 - Multiplicar\n4 - Dividir'
    );

    switch(operacion){
        case "1":
            alert("Esta es la suma : " + (numeroUno + numeroDos));
            break;

            case "2":
            alert("Esta es la resta : " + (numeroUno - numeroDos));
            break;

            case "3":
            alert("Esta es la multiplicación : " + (numeroUno * numeroDos));
            break;

            case "4":
            alert("Esta es la división : " + (numeroUno / numeroDos));
            break;
            
            default:
                alert('Opcion no valida')
    }
}