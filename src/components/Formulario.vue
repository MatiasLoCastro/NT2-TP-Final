<template>
  <section class="src-components-formulario">

    <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Aplicación<br/>
          TP Final NT2
        </h2>
        <p>Solicitud de turnos</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form>
            <div class="form-group">
              <label>Usuario</label>
              <input type="text" 
              class="form-control" 
              placeholder="Usuario"
              v-model="formData.nombre"
              autocomplete="off" />
            </div>
            <div class="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                autocomplete="off"
                v-model="formData.password"
              />
            </div>
            <button type="submit" class="btn btn-black" @click="enviar()">Iniciar sesión</button>
            <button type="submit" class="btn btn-secondary my-2">Crear cuenta nueva</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Comentario -->

    <!-- 
    <div class="jumbotron">
       <h2>Formulario</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formstate" @submit.prevent="enviar()">

        NOMBRE
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" 
          v-model.trim="formData.nombre" 
          required name="nombre" 
          autocomplete="off" 
          id="nombre" 
          class="form-control"
          :minlength="minCaracteres"
          :maxlength="maxCaracteres"/>

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-warning">Este campo es requerido</div>
            <div slot="minlength" class="alert alert-warning">minimo{{minCaracteres}}caracteres</div>
            <div slot="maxlength" class="alert alert-warning">maximo{{maxCaracteres}}caracteres</div>
          </field-messages>
        </validate>
        Edad

        <validate tag="div">
          <label for="edad">Edad</label>
          <input type="number" 
          v-model="formData.edad" 
          required name="edad" 
          autocomplete="off" 
          id="edad" 
          class="form-control"
          :min="minEdad"
          :max="maxEdad"/>

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-warning">Este campo es requerido</div>
            <div slot="min" class="alert alert-warning">edad minima{{minEdad}}</div>
            <div slot="max" class="alert alert-warning">edad maxima{{maxEdad}}</div>
          </field-messages>
          </validate>

          Email
          <validate tag="div">
          <label for="email">Mail</label>
          <input type="email" 
          v-model="formData.mail" 
          required name="email" 
          autocomplete="off" 
          id="email" 
          class="form-control"
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-warning">Este campo es requerido</div>
            <div slot="email" class="alert alert-warning">Formato Mail invalido</div>
          </field-messages>
          </validate>

        <button class="btn btn-success my-4" :disabled="formstate.$invalid">Enviar</button>
      </vue-form>
     
      <pre>{{ formstate }}</pre>

    </div> -->
  </section>
</template>

<script>
export default {
  name: "src-components-formulario",
  props: [],
  mounted() {},
  data() {
    return {
      url: "https://6289095c7af826e39e6800fe.mockapi.io/posts",
      formstate: {},
      formData: this.getInicialData(),
      maxCaracteres: 15,
      minCaracteres: 3,
      maxEdad: 120,
      minEdad: 18,
      usuario: [],
    };
  },
  methods: {
    getInicialData() {
      return {
        nombre: null,
        password:null,      
      }
    },
    enviar() {
      if(this.iniciarSesion()){
        this.formData = this.getInicialData();
        this.formstate._reset();
      }    
    },

    iniciarSesion(){
      if(this.formData.nombre == this.$store.state.posts.nombre 
      && this.formData.password == this.$store.state.posts.password){
       console.log("entro")
      }  
    }, 

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
   /*  async postUsuario() {
      let usuarioNew = {
        nombre: this.formData.nombre,
        edad: this.formData.edad,
        email: this.formData.mail,
      };

      try {
        let { data: posts } = await this.axios.post(this.url, usuarioNew, {
          "content-type": "application/json",
        });
        console.log("AXIOS POST usuario", posts);
      } catch (error) {
        console.error("Error en postUsuario()", error.message);
      }
    }, */
   /*  getUsuarios() {
      console.log("usuario");
    }, */
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-formulario {
}
body {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>

