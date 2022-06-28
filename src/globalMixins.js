import Vue from 'vue'

const miMixinGlobal = {
  
    methods: {
        guardarPost() {
            this.$store.dispatch("guardarPost")
        }, 
        borrarPost(id) {
            this.contador++
            this.$store.dispatch("borrarPost",id)
        }, 

        mostrarPosts() {
            let posts = this.$store.state.posts
            return posts
            }, 
                  
    },
    computed: {
         
        },
        
    }


Vue.mixin(miMixinGlobal)
