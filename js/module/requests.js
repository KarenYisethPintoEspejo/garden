// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllStatus = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let estadosSet = new Set(data.map(val => val.status));
    let estadosUnicos = Array.from(estadosSet);

    return estadosUnicos;
}



// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.

export const getAll = async() => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = [];
    let clientCodesIn2008 = new Set();

    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_client
        });

        if (val.date_request.substring(0, 4) === "2008") {
            clientCodesIn2008.add(val.code_client);
        }
    });

    let uniqueClientCodesIn2008 = [...clientCodesIn2008];

    return uniqueClientCodesIn2008;
}


 
