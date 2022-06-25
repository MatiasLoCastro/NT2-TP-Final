<template>
  <section class="src-componentes-formulario-av">
    <div class="div jumbotron">
      <h3 class="text-center mt-5">Complete cada uno de los campos solicitados y haga click en el botón "Enviar".</h3>
      <br>

      <vue-form :state="formState" @submit.prevent="reservar()">
        <!-- Campo Nombre -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre"></label>
          <input 
          type="text"
          id="nombre"
          name="nombre"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nombre"
          required
          no-espacios
          min-length
          max-length
          placeholder="Nombre"
          />
          <!-- Mensajes de validacion -->
          <field-messages name="nombre" show="$dirty">
            <div v-if="formState.$dirty" slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min-length" class="alert alert-danger mt-1">Este campo requiere minimo 3 caracteres</div>
            <div slot="max-length" class="alert alert-danger mt-1">Este campo acepta un máximo 30 caracteres</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios en este campo.</div>
          </field-messages>
        </validate>

        <br>

         <!-- Campo Apellido -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre"></label>
          <input 
          type="text"
          id="apellido"
          name="apellido"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.apellido"
          required
          max-length
          placeholder="Apellido"
          />
          <!-- Mensajes de validacion -->
          <field-messages name="apellido" show="$dirty">
            <div slot="max-length" class="alert alert-danger mt-1">Este campo acepta un máximo 30 caracteres</div>
            <div v-if="formState.$dirty" slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>

        <br>

        <!-- Campo email -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre"></label>
          <input 
          type="email"
          id="email"
          name="email"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.email"
          required
          placeholder="Email"
          />
          <!-- Mensajes de validacion -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email invalido</div>
          </field-messages>
        </validate>

        <br>

        <!-- Campo fecha -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre"></label>
          <input 
          type="date"
          id="date"
          name="date"
          class="form-control"
          autocomplete="off"
          v-model="date"
          required
          />
          <!-- Mensajes de validacion -->
          <field-messages name="date" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="date" class="alert alert-danger mt-1">Fecha invalida</div>
          </field-messages>
        </validate>

        <!-- Boton envio -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Reservar</button>
      </vue-form>

      <hr>
      <p><u>formData</u></p>
      <pre>{{ formData }}</pre>

      <hr>
      <p><u>formState</u></p>
      <pre>{{ formState }}</pre>

    </div>
  </section>
</template>

<script>

  export default  {
    name: 'src-componentes-formulario-av',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
      }
    },
    methods: {
      getInitialData(){
        return {
          nombre: '',
          apellido: '',
          email: '',
          date: Date
        }
      },
      reservar() {
        console.log({ ...this.formData });
        
        /* this.formState._reset()  */

        this.$store.dispatch('POST_RESERVA', this.formData)
        this.formData = this.getInitialData() //Reset de los datos del vue-form
        this.resetState() // reset de los estados del vue-form

      },
      resetState: function () {  
        this.formState._reset()
}
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

.jumbotron {
  background-color: rgb(125, 110, 90);
  color: white;
}

hr {
  background-color: #bbb;
}

pre {
  color: white;
}
</style>