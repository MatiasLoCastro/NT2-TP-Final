<template>

  <section class="src-components-listado">
    <div class="jumbotron">
      <Navbar/>
      <br>
      <h2>Listado</h2> 
      <hr>
      <hr>
      <br>
      <input type="text" class="form-control" v-model="criterioDeBusquedaNombre" placeholder="Busqueda por nombre">
      
      <br>
      <div v-if="$store.state.posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Borrar</th>

          </tr>
          <tr v-for="(post, index) in mostrarPosts()" :key="index">
              <td>{{ post.id }}</td>
              <td>{{ post.nombre }}</td>
              <td>{{ post.edad }}</td>
              <td>{{ post.email }}</td>
              <td><button class="btn btn-success" @click="borrarPost(post.id)">Borra Usuario</button></td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontro {{mostrarPosts().length}} posts</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron posts</h4>
    </div>
  <div/>
      <Footer/>
  </section>
  
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
    export default  {
    name: 'src-components-listado',
    props: [],
    mounted () {
       this.guardarPost()
    },
    data () {
      return {
        criterioDeBusquedaNombre: '',
        posts: [],  
        url:"https://6289095c7af826e39e6800fe.mockapi.io/post"
      }
    },
     components:{
      Navbar,
      Footer,    
    },
    methods: {
            guardarPost() {
            /*  console.warn('-----------------------------------------')
            console.warn('dispatch -> incrementar', new Date().toLocaleString())  */
            this.$store.dispatch("guardarPost")
        },   
    },
    computed: {
       /*  personasFiltradas() {
                return this.posts.filter((persona) => {
                    let nombre = `${persona.nombre}`
                    return nombre.toLowerCase().includes(this.criterioDeBusquedaNombre.toLowerCase())                    
                });
            }, */
            
    },
    
}


</script>

<style scoped lang="css">
  .src-components-listado {

  }

  
</style>
