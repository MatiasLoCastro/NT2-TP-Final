<template>
  <section class="src-componentes-formulario-av">
    <div class="jumbotron">
      <Navbar/>
      <br>
      <h2>{{"Formulario de Turnos"|pasarAMayuscula}}</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <!-- --------------------- -->
        <!--     Campo nombre      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            no-espacios
          />

          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--      Campo edad       -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />

          <!-- Mensajes de validación -->
          <field-messages name="edad" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        <br>
        <!-- --------------------- -->
        <!--    Campo email     -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="email">email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
          />

          <!-- Mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <!-- Botón de envío -->
        <button class="btn btn-success mt-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>      

     <!--  <hr>
      <p><u>formData</u></p>
      <pre>{{ formData }}</pre>

      <hr>
      <p><u>formState</u></p>
      <pre>{{ formState }}</pre> -->
  </div>
  <Footer/>
  </section>
  
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import Footer from '@/components/Footer.vue';
  export default  {
    name: 'src-componentes-formulario-av',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        edadMin: 18,
        edadMax: 120,
        url: "https://6289095c7af826e39e6800fe.mockapi.io/post",
        usuarios:[]
      }
    },
    components:{
      Navbar,
      Footer,    
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          edad: '',
          email: ''
        }
      },
      enviar() {
       
        console.log({ ...this.formData })
       /*  let post = this.formData
        this.usuarios.push(post) */
        this.postUsuario()
        this.usuarios = []
        this.formData = this.getInicialData() 
        this.formState._reset()   
      },
       async postUsuario() { 
          try {
          let { data: usuario } = await this.axios.post(this.url, this.usuarios, {'content-type' : 'application/json'})
          console.log('AXIOS POST usuario', usuario)

          //this.getUsuarios()
          this.usuarios.push(usuario)
        }
        catch(error) {
          console.error('Error en postUsuario()', error.message)
        }
       },
    },
    computed: {

    }
}


</script>

<style scoped>
  
  hr {
      background-color: #bbb;
  }  

  pre {
    color: white;
  }
  
</style>
