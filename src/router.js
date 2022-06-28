import Vue from 'vue'
import VueRouter from 'vue-router'

import Tabla from './components/Tabla'
import Login from './components/Login'
import Listado from './components/Listado'
import Error403 from './components/Error403'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [

        { path: '/', component: Login}, 
        { path: '/tabla', component: Tabla}, 
        { path: '/listado', component: Listado},
        { path: '*', redirect: '/eror403',component:Error403 },
       /*  { path: '/tabla', component: Tabla, name:"tabla"},  */
        
          
    ]
})