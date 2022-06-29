<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-info bg-dark">
      <h1></h1>
    
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
    
           <!-- Ruta al componente ListadoF -->
         <li class="nav-item">
            <router-link to="/listado">
              <a class="nav-link" href="#">Listado</a>
            </router-link>
          </li>

          <!-- Ruta al componente User Form -->
         <li class="nav-item">
            <router-link to="/user-form">
              <a class="nav-link" href="#">User-Form</a>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "src-components-navbar",
  props: [],
  mounted() {
     
  },
  data() {
    return {};
  },
  methods: {  
     mostrarPosts() {
        let posts = this.$store.state.posts
        /* console.error(posts) */
        return posts
      },
    },
  computed: {},
}
</script>

<style scoped lang="css">
.src-components-navbar {
}
</style>
