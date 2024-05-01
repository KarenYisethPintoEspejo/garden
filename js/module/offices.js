// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
export const getAllOfficesCodeAndCity = async ()=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city,
            direccion1: val.address1,
            direccion2: val.address2
        })
    });
    return dataUpdate;
}
// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOfficesFromSpainCityAndMovil = async() =>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            ciudad: val.city,
            telefono: val.movil
        })
    });
    return dataUpdate;
}


// 2. 6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.

import {getAllClientsFromSpain} from "./clients.js"
export const getOfficesWithClientsFromFuenlabrada = async() => {
    let dataOffices = await getAllOfficesCodeAndCity()
    let dataClients = await getAllClientsFromSpain()
    // let dataEmployeesSaleAgent = await getEmployeesSaleAgent()
    let res = await fetch ("http://localhost:5502/employees?position=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = new Set()

    for (let office of dataOffices) {
        for (let employee of data) {
            if (employee.code_office == office.codigo) {
                for (let client of dataClients) {
                    if (client.codigo == employee.employee_code) {
                        if (client.ciudad == "Fuenlabrada") {
                            dataUpdate.add(JSON.stringify({
                                code_office: office.codigo,
                                address: office.direccion1,
                                address2: (office.direccion2 || "N/A")
                            }))
                        }
                    }
                }   
            }
        }
    }

    dataUpdate = Array.from(dataUpdate).map(resultado => JSON.parse(resultado))
    return dataUpdate
}