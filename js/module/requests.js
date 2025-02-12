// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllStatus = async () => {
    let res = await fetch("http://localhost:5418/requests");
    let data = await res.json();
    let estadosSet = new Set(data.map(val => val.status));
    let estadosUnicos = Array.from(estadosSet);

    return estadosUnicos;
}




// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllCodeRequestLate = async () => {
    let res = await fetch("http://localhost:5418/requests?date_wait_neq_date_delivery");
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

import { parseISO, differenceInDays } from '../../node_modules/date-fns/index.mjs';

export const getAllCodeTwoDays = async() => {
    let res = await fetch("http://localhost:5418/requests");
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

// 11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

export const getAllRejected2009 = async() => {
    let res = await fetch("http://localhost:5418/requests?status=Rechazado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val=>{
        if(val.date_request.split('-')[0]==="2009"){
            dataUpdate.push({
                ...val
            })
        }
    })
    return dataUpdate
}

// 12. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

export const getAllDeliveredJanuary = async() => {
    let res = await fetch("http://localhost:5418/requests?status=Entregado");
    let data = await res.json(); 
    let dataUpdate = [];

    data.forEach(val => {
        if (val.date_delivery && val.date_delivery.split('-')[1] === "01") {
            dataUpdate.push({
                ...val
            });
        }
    });

    return dataUpdate;
}

export const getAllRequests =async ()=>{
    let res= await fetch("http://localhost:5418/requests")
    let data= await res.json();
   let dataUpdate = []
   data.forEach(val=>{
           dataUpdate.push({
               
               codigo_solicitud: val.code_request,
               codigo_cliente: val.code_client,
               fecha_solicitud: val.date_request,
               fecha_esperada: val.date_wait,
               fecha_entrega: val.date_delivery,
               estado: val.status,
    } )  }
   );
   return dataUpdate
   }   