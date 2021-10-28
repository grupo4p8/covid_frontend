import { createRouter, createWebHistory } from 'vue-router' 
import App from './App.vue' 

import Personas from './components/Personas.vue'
import Permiso from './components/Permiso.vue'
import Vacunaacep from './components/Vacunaacep.vue'
// import CrearInmueble from './components/CrearInmueble.vue'
 
const routes = [{ 
    path: '/', 
    name: 'root', 
    component: App 
},
{
    path: '/personas',
    name: 'Personas',
    component: Personas
},
{
    path: '/permiso',
    name: 'Permiso',
    component: Permiso
},
{
    path: '/vacunaacep',
    name: 'Vacunaacep',
    component: Vacunaacep
},
// {
//     path: '/crearinmueble',
//     name: 'CrearInmueble',
//     component: CrearInmueble
// }

] 
 
const router = createRouter({ 
    history: createWebHistory(), 
    routes 
}) 
 
export default router 