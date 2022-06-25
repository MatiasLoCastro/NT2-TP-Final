<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

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
          <!-- Ruta al componente Formulario -->
         <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

           <!-- Ruta al componente Tabla-->
         <li class="nav-item">
            <router-link to="/tabla">
              <a class="nav-link" href="#">Tabla</a>
            </router-link>
          </li>
           <!-- Ruta al componente Tabla Vuex -->
         <li class="nav-item">
            <router-link to="/tablavuex">
              <a class="nav-link" href="#">Tabla-Vuex</a>
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
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-navbar {
}
</style>
