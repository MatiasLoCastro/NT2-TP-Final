import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const delay = ms => new Promise((resolve,reject) => {
    if(typeof ms == 'number') {
        setTimeout(resolve, ms)
    }
    else {
        reject('ms no es del tipo number')
    }
})

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        posts : [],
        
    },
    actions : {
        async guardarPost({commit}) {
            try {
                await delay(1000)
                let { data: posts } = await axios('https://6289095c7af826e39e6800fe.mockapi.io/post')
               /*  console.log(posts) */
                commit('guardarPost',posts)
            }
            catch(error) {
                console.error(error)
            }
        },
        async borrarPost({commit},cant) {
            try {
                await delay(1000)
                let { data: posts } = await axios('https://6289095c7af826e39e6800fe.mockapi.io/post')
               /*  console.log(posts) */               
                commit('borrarPost',posts,cant)
            }
            catch(error) {
                console.error(error)
            }
        },          
    },
    mutations : {
        guardarPost(state, posts) {
           /*  console.warn('mutations -> guardarPost', state, posts, new Date().toLocaleString()) */
            state.posts = posts
        },
        borrarPost(state, cant) {
            /*  console.warn('mutations -> guardarPost', state, posts, new Date().toLocaleString()) */
             state.posts -= cant
         },
    }
})

