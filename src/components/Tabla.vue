<template>

  <section class="src-componentes-api-rest-ful">
    <div class="jumbotron">
      <h2>Tabla</h2>
      <hr>
      <hr>
      <br>

      <!-- <pre>{{ usuarios }}</pre> -->

      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.edad }}</td>
              <td>{{ usuario.email }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontro {{usuarios.length}} posts.</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron posts</h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-api-rest-ful",
  props: [],
  mounted() {
    this.getUsuarios();
  },
  data() {
    return {
      url: "https://6289095c7af826e39e6800fe.mockapi.io/posts",
      usuarios: [],
    };
  },
  methods: {
    async getUsuarios() {
      try {
        let { data: usuarios } = await this.axios(this.url);
        console.log("AXIOS GET usuarios", usuarios);
        this.usuarios = usuarios;
      } catch (error) {
        console.error("Error en getUsuarios()", error.message);
      }
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
