
import {getAllOfficesCodeAndCity, getAllOfficesFromSpainCityAndMovil} from "../module/offices.js"



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

















static get observedAttributes() {
    return ["logic"];
}
attributeChangedCallback(name, old, now) {
    if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()
    if(name=="logic" && now=="office_2") this.getAllOfficesFromSpainCityAndMovilDesing()

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

    V


    
}}