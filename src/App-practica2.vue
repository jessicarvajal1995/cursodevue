<template>
  <div>
    <Usuarios 
        v-for="(usuario, i) of usuarios" :key="i"
        :nombre="usuario.name"
        :email="usuario.email"
        :telefono="usuario.phone"
        >
        
    </Usuarios>
    
  </div>
</template>

<script>
import axios from 'axios';
import Usuarios from './components/Usuarios.vue';

export default {
  name: 'App',
  components: {
    Usuarios,

  },
  data(){
      return{
          usuarios: [],
      }
  },
  methods: {
      /* este metodo lo ejecutamos en el ciclo de vida mounted */
      obtenerUsuarios(){
          axios.get('https://jsonplaceholder.typicode.com/users')
                .then( (respuesta)=>this.usuarios = respuesta.data )
      }
  },
  mounted() {
      this.obtenerUsuarios()
  },
}
</script>

<style>

</style>
