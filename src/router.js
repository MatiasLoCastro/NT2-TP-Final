import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from './components/Login'
import Listado from './components/Listado'
import Error403 from './components/Error403'
import UserForm from './components/UserForm.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [

        { path: '/', component: Login}, 
        { path: '/listado', component: Listado},
        { path: '*', component:Error403 },
        { path: '/user-form', component: UserForm}, 
        
          
    ]
})