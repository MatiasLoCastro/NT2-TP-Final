import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue'
import Tabla from './components/Tabla.vue'
import TablaVuex from './components/TablaVuex.vue'
import UserForm from './components/UserForm.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/formulario', component: Formulario}, 
        { path: '/tabla', component: Tabla}, 
        { path: '/tablavuex', component: TablaVuex}, 
        { path: '/user-form', component: UserForm}, 
        
    ]
})