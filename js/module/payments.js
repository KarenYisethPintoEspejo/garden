//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.
export const getALLCodeRequests2008 = async()=>{
    let res = await fetch("http://localhost:5505/payments?date_payment")
    let data = await res.json();
    let dataUpdate= []
    data.forEach(payment => {
        if(payment.date_payment.split('-')[0]==="2008"){

            dataUpdate.push(
                payment.code_client,
            )
        }
    });
    dataUpdate = [... new Set(dataUpdate)]
    return dataUpdate;
    
}

// 13. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getAllPaymentsPayPal2008 = async() => {
    let res = await fetch("http://localhost:5505/payments?payment=PayPal");
    let data = await res.json();
    let dataUpdate= [];
    
    data.forEach(val => {
        if (val.date_payment.split('-')[0] === "2008") {
            dataUpdate.push({
                ...val
            });
        }
    });
    dataUpdate.sort((a, b) => b.total - a.total);
    return dataUpdate;
}


//14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPaymentMethods = async() => {
    let res = await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let formaspago = new Set(data.map(val => val.payment));
    let formasUnicas = Array.from(formaspago);
    return formasUnicas;
}

// 2. 2.Muestra de clientes que han realizados pagos

export const getAllPaymentClients2 = async() => {
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate= [];
    data.forEach(val=>{
        dataUpdate.push({
            codigoClient: val.code_client,
        })
    })
    return dataUpdate
}

