import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const delay = ms => new Promise((resolve, reject) => {
    if (typeof ms == 'number') {
        setTimeout(resolve, ms)
    }
    else {
        reject('ms no es del tipo number')
    }
})

Vue.use(Vuex)

const URL = 'https://62b8e721ff109cd1dc89476f.mockapi.io/tp-nt2'

export default new Vuex.Store({
    state: {
        posts: [],
        reserva: {},

    },
    actions: {
        async guardarPost({ commit }) {
            try {
                await delay(1000)
                let { data: posts } = await axios(URL)
               /*  console.log(posts) */
                commit('guardarPost',posts)
            }
            catch (error) {
                console.error(error)
            }
        },
        async borrarPost({commit},cant) {
            try {
                await delay(1000)
                let { data: posts } = await axios(URL)
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

