// 6. Devuelve un listado con el nombre de los todos los clientes españoles.

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