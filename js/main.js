import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil 
} from "./module/offices.js"

// import { 
//     getAllEmployeesWithBossAndCodeSeven,
//     getBossFullNameAndEmail,
//     getAll
// } from "./module/employees.js";

// import { 
//     getAllClients
// } from "./module/clients.js";

// console.log(await getAllClients());

import {
    getAll
} from "./module/requests.js";

console.log(await getAll());