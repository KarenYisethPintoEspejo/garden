// 6. Devuelve un listado con el nombre de lclientsos todos los clientes españoles.

export const getAllClientsFromSpain = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.client_name,
            nacionalidad: val.country,
            codigo:val.code_employee_sales_manager,
            ciudad: val.city
        })
    });
    return dataUpdate;
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

// 2.   2. Muestra el nombre de los clientes que hayan realizado pagos con el nombre de su representante de ventas.
import { getEmployeesSaleAgent2 } from "./employees.js";
import { getAllPaymentClients2 } from "./payments.js";
export const getClientAndSaleAgentFullName2 = async() => {
    let res = await fetch("http://localhost:5501/clients")
    let dataClients = await res.json()
    let dataSaleAgents = await getEmployeesSaleAgent2()
    let dataPayments = await getAllPaymentClients2()
    let dataUpdated = []

    dataClients.forEach(cliente => {
        dataSaleAgents.forEach(agent => {
            dataPayments.forEach(val =>{
                if (cliente.client_code == val.codigoClient) {
                    if (cliente.code_employee_sales_manager == agent.codigoEmpleado){
                        dataUpdated.push({
                            nombreCliente: cliente.client_name,
                            nombreRepresentante: agent.nombre,
                            codigoOficina: agent.codigoOficina
                        })
                    }
                }

            })
            
        })
    })
    return dataUpdated
}

// 2. 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientAndSaleAgentFullName3 = async() => {
    let res = await fetch("http://localhost:5501/clients");
    let dataClients = await res.json();
    let dataSaleAgents = await getEmployeesSaleAgent2();
    let dataPayments = await getAllPaymentClients2();
    let dataUpdated = [];

    dataClients.forEach(cliente => {
        let hasPaid = false;

        dataPayments.forEach(payment => {
            if (cliente.client_code === payment.codigoClient) {
                hasPaid = true;
            }
        });

        if (!hasPaid) {
            dataSaleAgents.forEach(agent => {
                if (cliente.code_employee_sales_manager === agent.codigoEmpleado) {
                    dataUpdated.push({
                        nombreCliente: cliente.client_name,
                        nombreRepresentante: agent.nombre,
                        codigoOficina: agent.codigoOficina
                    });
                }
            });
        }
    });

    return dataUpdated;
};

// 2. 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
import { getAllOfficesCodeAndCity } from "./offices.js";

export const getClientAndSaleAgentFullName4 = async () => {
        let clientManager = await getClientAndSaleAgentFullName2();
        let offices = await getAllOfficesCodeAndCity();
        let dataUpdate = [];

        clientManager.forEach(val => {
            offices.forEach(ofi => {
                if (val.codigoOficina == ofi.codigo) {
                    dataUpdate.push({
                        nombreCliente: val.nombreCliente,
                        nombreRepresentante: val.nombreRepresentante,
                        ciudadOficinaRepresentante: ofi.ciudad
                    });
                }
            });
        });

        return dataUpdate;
    } 

// 2. 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientAndSaleAgentFullName5 = async () => {
    let clientManager = await getClientAndSaleAgentFullName3();
    let offices = await getAllOfficesCodeAndCity();
    let dataUpdate = [];

    clientManager.forEach(val => {
        offices.forEach(ofi => {
            if (val.codigoOficina == ofi.codigo) {
                dataUpdate.push({
                    nombreCliente: val.nombreCliente,
                    nombreRepresentante: val.nombreRepresentante,
                    ciudadOficinaRepresentante: ofi.ciudad
                });
            }
        });
    });

    return dataUpdate;
}


// 2.7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllClientsAndRepresentSalesOffices = async() => {
    let client_manager = await getClientAndSaleAgentFullName();
    let office = await getAllOfficesCodeAndCity();
    let dataUpdate=[];
    client_manager.forEach(val=>{
        office.forEach(dat=>{
                dataUpdate.push({
                    nombre_cliente: val.nombreCliente,
                    nombre_representante:val.nombreRepresentante,
                    ciudad_oficina_representante: dat.ciudad
                })
        })
    })
    
    return dataUpdate


}

// 2.10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

export const getAllClients = async ()=>{
    let res =await fetch("http://localhost:5501/clients")
    let data=await res.json();
    let dataUpdate = [];
    let clientCodes = new Set();
    data.forEach(val => {   
        if (!clientCodes.has(val.client_code)) {
            clientCodes.add(val.client_code);
            dataUpdate.push({
                codigoCliente: val.client_code,
                nombreCliente: val.client_name,
                nacionalidad: val.country,
                ciudad: val.city
            });
        }
    });
    return dataUpdate;
}





import {getAllCodeRequestLate} from "./requests.js"
export const getAllClientsWithLateRequests = async() => {
    
    let dataLateRequests = await getAllCodeRequestLate()
    let dataClients = await getAllClients()
    let dataUpdate = []

    for (let lateRequest of dataLateRequests) {
        for (let client of dataClients) {
            if (client.codigoCliente == lateRequest.codigoCliente) {
                dataUpdate.push(
                    client.nombreCliente
                )
            }
        }
    }

        return dataUpdate
}