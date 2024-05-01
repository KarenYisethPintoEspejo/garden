// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe 
// tiene un código de jefe igual a 7.
export const getAllEmployeesWithBossAndCodeSeven = async() =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email
        });
    });
    return dataUpdate;
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la 
// empresa.
export const getBossFullNameAndEmail = async()=>{
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let dataUpdate = {};
    data.forEach(val => {
        if(val.code_boss == null){
            dataUpdate.puesto= val.position
            dataUpdate.nombre = val.name
            dataUpdate.apellidos = `${val.lastname1} ${val.lastname2}`
            dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    });
    return dataUpdate;
}
//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados 
// que no sean representantes de ventas.
export const getAllNotRV = async()=>{
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position
        })
    });
    return dataUpdate;
}

// 2.  1. Obtener empleados que son Representantes de ventas
export const getEmployeesSaleAgent = async () => {
    let res = await fetch("http://localhost:5502/employees?position=Representante%20Ventas")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val => {
        dataUpdate.push({
            codigoEmpleado: val.employee_code,
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
        })
    })
    return dataUpdate
}


// 2.  2. Obtener empleados que son Representantes de ventas
export const getEmployeesSaleAgent2 = async () => {
    let res = await fetch("http://localhost:5502/employees?position=Representante%20Ventas")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val => {
        dataUpdate.push({
            codigoEmpleado: val.employee_code,
            nombre: val.name,
            codigoOficina: val.code_office
        })
    })
    return dataUpdate
}


