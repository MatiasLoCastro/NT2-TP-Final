<template>

  <section class="src-components-TablaVuex">
    <div class="jumbotron">
      <h2>TablaVuex</h2>
      <hr>
      <hr>
      <br>

      <div v-if="$store.state.posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(post, index) in mostrarPosts() " :key="index">
              <td>{{ post.id }}</td>
              <td>{{ post.nombre }}</td>
              <td>{{ post.edad }}</td>
              <td>{{ post.email }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontro {{mostrarPosts().length}} posts.</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron posts</h4>
    </div>

    <!-- <pre>{{ mostrarPosts() }}</pre> -->
  </section>
</template>

<script>
export default {
  name: "src-componentes-api-rest-ful",
  props: [],
  mounted() {
    this.guardarPost();
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
     mostrarPosts() {
        let posts = this.$store.state.posts
        /* console.error(posts) */
        return posts
      },
      guardarPost() {
            //this.contador++
           /*  console.warn('-----------------------------------------')
            console.warn('dispatch -> incrementar', new Date().toLocaleString()) */
            this.$store.dispatch("guardarPost")
        },
  },
  computed: {
      
  },
  
};
</script>

<style scoped lang="css">
.src-componentes-api-rest-ful {
}

h2 {
    color: black;    
  }
hr {
  background-color: #ddd;
}


</style>
