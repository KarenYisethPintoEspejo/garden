// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAll = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let estados = data.map(val => val.status); 
    let estadosUnicos = estados.filter((estado, index) => estados.indexOf(estado) === index);

    return estadosUnicos;
}
