<template>

  <section class="src-components-error-403">
    
  <p>ERROR 403</p>
  <button class="btn btn-success" @click="volver()">volver</button>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-error-403',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
       volver() {
        
        this.$router.push({
          path: '/user-form',
        })
      },
       },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-error-403 {

  }
</style>
