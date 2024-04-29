// import "./components/clock.js";  
import { getAllOfficesCodeAndCity,getAllOfficesFromSpainCityAndMovil } from "./module/offices.js";
import { getAllEmployeesWithBossAndCodeSeven, getBossFullNameAndEmail, getAllNotRV} from "./module/employees.js";
import {getAllClientsFromSpain} from "./module/clients.js"






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
