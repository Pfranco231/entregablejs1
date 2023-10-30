//Objetivo hacer un e-commerce sencillo

function commerce(){
    let howmany = Number(prompt('Cuantas personas van a comer (Maximo 2)'))

    switch(howmany){
        case 0:
            let resultado = 'Ok hasta luego';
            alert(resultado);
            console.log(resultado);
            break;
        case 1:
            let resultado1 = Number(prompt('Que va a pedir señor, Milanesa de pollo o hamburguesa completa (eliga con 1 o 2)'));
            if(resultado1 == 1){
                let opcion1 = 'Señor usted pedio: Milanesa de pollo - 1500$';
                alert(opcion1);
                console.log(opcion1)
            }
            else if(resultado1 == 2){
                let opcion2 = 'Señor usted pedio: Hamburguesa Completa - 1000$';
                alert(opcion2);
                console.log(opcion2)
            }else{
                alert('No se ha elegido una opcion correcta')
                console.log('No se ha elegido una opcion correcta')
            }
            break;
        case 2:
            let pedido1 = Number(prompt('Que va a pedir señor 1, Milanesa de pollo o hamburguesa completa (eliga con 1 o 2)'));
            let pedido2 = Number(prompt('Que va a pedir señor 2, Milanesa de pollo o hamburguesa completa (eliga con 1 o 2)'));
            if(pedido1 == 1 && pedido2 == 1){
                alert('La cuenta son de: 3000$');
                console.log('La cuenta son de: 3000$');
            }else if(pedido1 == 1 && pedido2 == 2){
                alert('La cuenta son de: 2500$');
                console.log('La cuenta son de: 2500$');
            }else if(pedido1 == 2 && pedido2 == 1){
                alert('La cuenta son de: 2500$');
                console.log('La cuenta son de: 2500$');
            }else if(pedido1 == 2 && pedido2 == 2){
                alert('La cuenta son de: 2000$');
                console.log('La cuenta son de: 2000$');
            }else{
                alert('No se ha elegido una opcion correcta');
                console.log('No se ha elegido una opcion correcta');
            }

    }
}

commerce();

