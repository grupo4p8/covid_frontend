const routes=[
    {path:'/pais',component:pais},
    {path:'/vacuna',component:vacuna},
    {path:'/tipodoc',component:tipodoc},
    {path:'/persona',component:persona},
    {path:'/solicitud',component:solicitud},
    {path:'/vacunaacep',component:vacunaacep},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')