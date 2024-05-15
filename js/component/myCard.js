
import {getAllOfficesCodeAndCity, getAllOfficesFromSpainCityAndMovil} from "../module/offices.js"
import {getAllEmployeesWithBossAndCodeSeven, getBossFullNameAndEmail, getAllNotRV} from "../module/employees.js"
import {getAllClientsFromSpain} from "../module/clients.js"
import {getAllStatus, getAllCodeRequestLate, getAllCodeTwoDays, getAllRejected2009, getAllDeliveredJanuary} from "../module/requests.js"
import {getALLCodeRequests2008, getAllPaymentsPayPal2008, getAllPaymentMethods} from "../module/payments.js"



export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.shadowRoot.innerHTML = /*html*/ `
            <link rel="stylesheet" href="../css/myCard.css">
        `
    }

 // // 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

 async getAllOfficesCodeAndCityDesing() {
    let data = await getAllOfficesCodeAndCity()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo oficina y ciudad</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_de_oficina </b>${val.codigo}</p>
                       <p><b>Ciudad: </b>${val.ciudad}</p>

                    </div>
                </div>
            </div>
        `
    })
}


// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.


async getAllOfficesFromSpainCityAndMovilDesing() {
    let data = await getAllOfficesFromSpainCityAndMovil()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo oficina y telefono - España</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Telefono: </b>${val.telefono}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
        `
    })
}




// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.


async getAllEmployeesWithBossAndCodeSevenDesing() {
    let data = await getAllEmployeesWithBossAndCodeSeven()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Nombre-Apellidos-Email Empleados con codigo de jefe 7</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}

// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.



async getBossFullNameAndEmailDesing() {
    let data = await getBossFullNameAndEmail()
    // data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Jefe de la empresa</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Puesto: </b>${data.puesto}</p>
                        <p><b>Nombre: </b>${data.nombre}</p>
                        <p><b>Apellidos: </b>${data.apellidos}</p>
                        <p><b>Email: </b>${data.email}</p>
            
                    </div>
                </div>
            </div>
        `
    // })
}


// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.


async getAllNotRVDesing() {
    let data = await getAllNotRV()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Empleados no representantes de venta</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_empleado: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}



// 6. Devuelve un listado con el nombre de los todos los clientes españoles.


async getAllClientsFromSpainDesing() {
    let data = await getAllClientsFromSpain()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes españoles</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_Clientes: </b>${val.nombre}</p>
                        <p><b>Nacionalidad: </b>${val.nacionalidad}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}




// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

async getAllStatusDesing() {
    let data = await getAllStatus()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Estados de pedido</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_estados: </b>${val}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}


// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008.


async getALLCodeRequests2008Desing() {
    let data = await getALLCodeRequests2008()
    data.forEach(payment => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo de clientes pagos 2008</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${payment}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}


// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.


async getAllCodeRequestLateDesing() {
    let data = await getAllCodeRequestLate()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo de clientes pedidos no entregados a tiempo</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_pedido: </b>${val.codigoPedido}</p>
                        <p><b>Codigo_cliente: </b>${val.codigoCliente}</p>
                        <p><b>Fecha_esperada: </b>${val.fechaEsperada}</p>
                        <p><b>Fecha_entrega: </b>${val.fechaEntrega}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}




// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.



async getAllCodeTwoDaysDesing() {
    let data = await getAllCodeTwoDays()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo de clientes pedidos entregados dos dias antes</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_pedido: </b>${val.codigoPedido}</p>
                        <p><b>Codigo_cliente: </b>${val.codigoCliente}</p>
                        <p><b>Fecha_esperada: </b>${val.fechaEspera}</p>
                        <p><b>Fecha_entrega: </b>${val.fechaEntrega}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}



// 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.


async getAllRejected2009Desing() {
    let data = await getAllRejected2009()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Pedidos rechazados 2009</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_solicitud: </b>${val.code_request}</p>
                        <p><b>Fecha_solicitud: </b>${val.date_request}</p>
                        <p><b>Fecha_esperada: </b>${val.date_wait}</p>
                        <p><b>Fecha_entrega: </b>${val.date_delivery}</p>
                        <p><b>Estado: </b>${val.status}</p>
                        <p><b>Codigo_cliente: </b>${val.code_client}</p>
                        <p><b>id: </b>${val.id}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}




// 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.

async getAllDeliveredJanuaryDesing() {
    let data = await getAllDeliveredJanuary()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Pedidos entregados en el mes de Enero</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_solicitud: </b>${val.code_request}</p>
                        <p><b>Fecha_solicitud: </b>${val.date_request}</p>
                        <p><b>Fecha_esperada: </b>${val.date_wait}</p>
                        <p><b>Fecha_entrega: </b>${val.date_delivery}</p>
                        <p><b>Estado: </b>${val.status}</p>
                        <p><b>Codigo_cliente: </b>${val.code_client}</p>
                        <p><b>id: </b>${val.id}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}



// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.


async getAllPaymentsPayPal2008Desing() {
    let data = await getAllPaymentsPayPal2008()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Pedidos realizados 2008/PayPal </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${val.code_client}</p>
                        <p><b>Tipo_pago: </b>${val.payment}</p>
                        <p><b>id_pago: </b>${val.id_transaction}</p>
                        <p><b>Fecha_pago: </b>${val.date_payment}</p>
                        <p><b>total_pago: </b>${val.total}</p>
                        <p><b>id: </b>${val.id}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}


// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.


async getAllPaymentMethodsDesing() {
    let data = await getAllPaymentMethods()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Formas de pago </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Tipo_pago: </b>${val}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}



















static get observedAttributes() {
    return ["logic"];
}
attributeChangedCallback(name, old, now) {
    if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()
    if(name=="logic" && now=="office_2") this.getAllOfficesFromSpainCityAndMovilDesing()
    if(name=="logic" && now=="employees_3") this.getAllEmployeesWithBossAndCodeSevenDesing()
    if(name=="logic" && now=="employees_4") this.getBossFullNameAndEmailDesing()
    if(name=="logic" && now=="employees_5") this.getAllNotRVDesing()
    if(name=="logic" && now=="clients_6") this.getAllClientsFromSpainDesing()
    if(name=="logic" && now=="requests_7") this.getAllStatusDesing()
    if(name=="logic" && now=="payments_8") this.getALLCodeRequests2008Desing()
    if(name=="logic" && now=="requests_9") this.getAllCodeRequestLateDesing()
    if(name=="logic" && now=="requests_10") this.getAllCodeTwoDaysDesing()
    if(name=="logic" && now=="requests_11") this.getAllRejected2009Desing()
    if(name=="logic" && now=="requests_12") this.getAllDeliveredJanuaryDesing()
    if(name=="logic" && now=="payments_13") this.getAllPaymentsPayPal2008Desing()
    if(name=="logic" && now=="payments_14") this.getAllPaymentMethodsDesing()













    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // V
    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    


    
}}