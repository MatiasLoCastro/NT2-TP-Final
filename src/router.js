import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario'
import Tabla from './components/Tabla'
import TablaVuex from './components/TablaVuex'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/formulario', component: Formulario}, 
        { path: '/tabla', component: Tabla}, 
        { path: '/tablavuex', component: TablaVuex}, 
        
    ]
})