// import "./components/clock.js";  
import { getAllOfficesCodeAndCity,getAllOfficesFromSpainCityAndMovil } from "./module/offices.js";
import { getAllEmployeesWithBossAndCodeSeven, getBossFullNameAndEmail, getAllNotRV} from "./module/employees.js";
import {getAllClientsFromSpain} from "./module/clients.js"
import {getAllStatus, getAllCodeRequestLate, getAllCodeTwoDays, getAllRejected2009, getAllDeliveredJanuary} from "./module/requests.js"
import {getALLCodeRequests2008, getAllPaymentsPayPal2008, getAllPaymentMethods} from "./module/payments.js"
import {getAllGamaOrnamentales} from "./module/products.js"







const queryAboutTable1 = document.querySelector("#queryAboutTable1");
const queryAboutTable2 = document.querySelector("#queryAboutTable2"); 
const queryAboutTable3 = document.querySelector("#queryAboutTable3"); 
const queryAboutTable4 = document.querySelector("#queryAboutTable4"); 
const queryAboutTable5 = document.querySelector("#queryAboutTable5"); 
const queryAboutTable6 = document.querySelector("#queryAboutTable6"); 
const queryAboutTable7 = document.querySelector("#queryAboutTable7"); 
const queryAboutTable8 = document.querySelector("#queryAboutTable8"); 
const queryAboutTable9 = document.querySelector("#queryAboutTable9"); 
const queryAboutTable10 = document.querySelector("#queryAboutTable10"); 
const queryAboutTable11 = document.querySelector("#queryAboutTable11"); 
const queryAboutTable12 = document.querySelector("#queryAboutTable12"); 
const queryAboutTable13 = document.querySelector("#queryAboutTable13"); 
const queryAboutTable14 = document.querySelector("#queryAboutTable14"); 
const queryAboutTable15 = document.querySelector("#queryAboutTable15"); 
const queryAboutTable16 = document.querySelector("#queryAboutTable16");







queryAboutTable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo-Ciudad de Oficinas</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_de_oficina </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.


queryAboutTable2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesFromSpainCityAndMovil();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Ciudad-Telefono Oficinas de España</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Telefono: </b>${val.telefono}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

queryAboutTable3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
queryAboutTable4.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4.children
    if(!report__container.innerHTML){
        let data = await getBossFullNameAndEmail();
        let plantilla = "";
        console.log(data);
        
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div> Jefe empresa</div>
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
            `;

        report__container.innerHTML = plantilla;
    }
})

//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

queryAboutTable5.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable5.children
    if(!report__container.innerHTML){
        let data = await getAllNotRV();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div> Empleados , NO representante</div>
                </div>
            
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_empleado: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>

                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

//6. Devuelve un listado con el nombre de los todos los clientes españoles.

queryAboutTable6.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6.children
    if(!report__container.innerHTML){
        let data = await getAllClientsFromSpain();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div> Clientes españoles</div>
                </div>
            
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_Clientes: </b>${val.nombre}</p>
                        <p><b>Nacionalidad: </b>${val.nacionalidad}</p>
                

                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.


queryAboutTable7.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7.children
    if(!report__container.innerHTML){
        let data = await getAllStatus();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div> Estados pedidos</div>
                </div>
            
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_estados: </b>${val}</p>
                        
                

                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008.

queryAboutTable8.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable8.children
    if(!report__container.innerHTML){
        let data = await getALLCodeRequests2008();
        let plantilla = "";
        console.log(data);
        data.forEach(payment => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes codigo pago 2008</div>
                </div>
            
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${payment}</p>
                        
                

                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

queryAboutTable9.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable9.children
    if(!report__container.innerHTML){
        let data = await getAllCodeRequestLate();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos no entregados a tiempo</div>
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
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

queryAboutTable10.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable10.children
    if(!report__container.innerHTML){
        let data = await getAllCodeTwoDays();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos entregados al menos dos dias antes</div>
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
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

//11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.

queryAboutTable11.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable11.children
    if(!report__container.innerHTML){
        let data = await getAllRejected2009();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.

queryAboutTable12.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable12.children
    if(!report__container.innerHTML){
        let data = await getAllDeliveredJanuary();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos entregados enero</div>
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
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.

queryAboutTable13.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable13.children
    if(!report__container.innerHTML){
        let data = await getAllPaymentsPayPal2008();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pagos paypal 2008</div>
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
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.

queryAboutTable14.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable14.children
    if(!report__container.innerHTML){
        let data = await getAllPaymentMethods();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Formas de pago</div>
                </div>
            
                <div class="card__body">
                    <div class="body__marck">
                        
                        <p><b>Tipo_pago: </b>${val}</p>
                
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

queryAboutTable15.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable15.children
    if(!report__container.innerHTML){
        let data = await getAllGamaOrnamentales();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Productos ornamentales >100 - stock</div>
                </div>
            
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_producto: </b>${val.code_product}</p>
                        <p><b>Nombre: </b>${val.name}</p>
                        <p><b>Gama: </b>${val.gama}</p>
                        <p><b>Dimension: </b>${val.dimension}</p>
                        <p><b>Provedor: </b>${val.provider}</p>
                        <p><b>Stock: </b>${val.stock}</p>
                        <p><b>Precio_venta: </b>${val.price_sale}</p>
                        <p><b>id: </b>${val.id}</p>
                        


                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})