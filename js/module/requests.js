// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllStatus = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let estadosSet = new Set(data.map(val => val.status));
    let estadosUnicos = Array.from(estadosSet);

    return estadosUnicos;
}




// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllCodeRequestLate = async () => {
    let res = await fetch("http://localhost:5508/requests?date_wait_neq_date_delivery");
    let data = await res.json();
    let dataUpdate = data.map(val => ({
        codigoPedido: val.code_request,
        codigoCliente: val.code_client,
        fechaEsperada: val.date_wait,
        fechaEntrega: val.date_delivery
    }));
    return dataUpdate;
}


// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

import { parseISO, differenceInDays } from 'date-fns';

export const getAllCodeTwoDays = async() => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = [];
    
    data.forEach(val => {
        if (val.date_wait && val.date_delivery) {
            let fechaEspera = parseISO(val.date_wait);
            let fechaEntrega = parseISO(val.date_delivery);
            let diferenciaDias = differenceInDays(fechaEspera, fechaEntrega); 

            if (diferenciaDias >= 2) {
                dataUpdate.push({ 
                    codigoPedido: val.code_request,
                    codigoCliente: val.code_client,
                    fechaEspera: val.date_wait,
                    fechaEntrega: val.date_delivery
                });
            }
        }
    });
    
    return dataUpdate;
}



