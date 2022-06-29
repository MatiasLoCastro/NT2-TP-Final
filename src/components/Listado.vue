<template>

  <section class="src-components-listado">
    <div class="jumbotron">
      <Navbar/>
      <br>
      <h2>Listado de Reservas</h2> 
      <hr>
      <hr>
      <br>
      
      <input type="text" class="form-control my-3" v-model="criterioDeBusquedaNombre" placeholder="Busqueda por nombre">     
       <button @click="estado1=!estado1" class="btn btn-success my-3">cambiar color de lista</button>
      <br>
     
      <div v-if="$store.state.posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Fecha</th>
            <th>Borrar</th>
          </tr>
   
          <tr v-for="(post, index) in mostrarPosts()" :key="index" :style="getEstilos(estado1)">
              <td>{{ post.id }}</td>
              <td>{{ post.nombre }}</td>
              <td>{{ post.apellido }}</td>
              <td>{{ post.email }}</td>
              <td>{{ post.fecha }}</td>
              <td><button class="btn btn-success" @click="borrarPost(post.id)">Borrar Reserva</button></td>
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
         estado1 : true,
         estado2 : true,
        criterioDeBusquedaNombre: '',
        posts: [],  
        url:'https://62b8e721ff109cd1dc89476f.mockapi.io/tp-nt2'
      }
    },
     components:{
      Navbar,
      Footer,    
    },
    methods: {
            guardarPost() {
            this.$store.dispatch("guardarPost")
        }, 
        igualarArrary(){
            let personF = this.mostrarPost()
           return personF 
        },
        getEstilos(estado) {
          return { 
              color: estado? 'green' : 'crimson',
          }
      },
      personasFiltradas() {
                return this.url.filter((persona) => {
                    let nombre = `${persona.nombre}`
                    return nombre.toLowerCase().includes(this.criterioDeBusquedaNombre.toLowerCase())                    
                });
            },
    },
    computed: {
       /*  personasFiltradas() {
                return this.url.filter((persona) => {
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
