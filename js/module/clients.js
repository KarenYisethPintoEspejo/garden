// 6. Devuelve un listado con el nombre de lclientsos todos los clientes españoles.

export const getAllClientsFromSpain = async() =>{
    let res = await fetch ("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.contact_name,
            nacionalidad :val.country
        })
    })
    return dataUpdate
}


//16. Devuelve un listado con todos los clientes que sean de la ciudad de Madridy cuyo representante de ventas tenga el código de empleado 11o 30.

export const getAllClientsMadrid1130 = async() => {
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate= [];
    data.forEach(val =>{
        if(val.code_employee_sales_manager == "11" || val.code_employee_sales_manager == "30"){
            dataUpdate.push({
                ...val
            })
        }
    })
    return dataUpdate
}




// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
import {getEmployeesSaleAgent} from "./employees.js"
export const getClientAndSaleAgentFullName = async() => {
    let res = await fetch("http://localhost:5501/clients")
    let dataClients = await res.json()
    let dataSaleAgents = await getEmployeesSaleAgent()
    let dataUpdated = []

    dataClients.forEach(cliente => {
        dataSaleAgents.forEach(agent => {
            if (cliente.code_employee_sales_manager == agent.codigoEmpleado) {
                dataUpdated.push({
                    codigoCliente: cliente.client_code,
                    nombreCliente: cliente.client_name,
                    nombreRepresentante: agent.nombre,
                    apellidosRepresentante: agent.apellidos
                })
            }
        })
    })
    return dataUpdated
}

// // 2.   2. Muestra el nombre de los clientes que hayan realizado pagos con el nombre de su representante de ventas.
// import
// export const getClientAndSaleAgentFullName2 = async() => {
//     let res = await fetch("http://localhost:5501/clients")
//     let dataClients = await res.json()
//     let dataSaleAgents = await getEmployeesSaleAgent2()
//     let dataPayments = await getAllPaymentClients2()
//     let dataUpdated = []

//     dataClients.forEach(cliente => {
//         dataSaleAgents.forEach(agent => {
//             dataPayments.forEach(val =>{
//                 if (cliente.client_code == val.code_client) {
//                     if (cliente.code_employee_sales_manager = agent.emplyee_code){
//                         dataUpdated.push({
//                             nombreCliente: cliente.client_name,
//                             nombreRepresentante: agent.name
//                         })
//                     }
//                 }

//             })
            
//         })
//     })
//     return dataUpdated
// }