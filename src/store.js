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

const URL = 'https://6289095c7af826e39e6800fe.mockapi.io/posts'

export default new Vuex.Store({
    state: {
        posts: [],
        reserva: {},

    },
    actions: {
        async guardarPost({ commit }) {
            try {
                await delay(1000)
                let { data: posts } = await axios('https://6289095c7af826e39e6800fe.mockapi.io/posts')
                /*  console.log(posts) */
                commit('guardarPost', posts)
            }
            catch (error) {
                console.error(error)
            }
        },

        async POST_RESERVA({ commit }, nuevaReserva) {
            console.log('action -> postReserva', nuevaReserva)
            commit('postReserva, nuevaReserva')
        }
    },
    mutations: {
        guardarPost(state, posts) {
            /*  console.warn('mutations -> guardarPost', state, posts, new Date().toLocaleString()) */
            state.posts = posts
        },

        postUsuario(state, nuevaReserva) {
            try {
                let { res } = axios.post(URL, nuevaReserva)
                state.usuarios = res
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
    },

    modules: {

    }

})

