<template>
  <div>
     <!-- <Saludo></Saludo>
     <ComponenteDos></ComponenteDos> -->

    <!-- props: permite reutilizar un componente -->
    <Persona nombre="maria" edad="8"></Persona>
    <hr>
    <Persona nombre="jose" edad="19"></Persona>

  </div>
</template>

<script>

import Persona from './components/Persona.vue';

/* import ComponenteDos from './components/ComponenteDos.vue';
import Saludo from './components/Saludo.vue'; */



export default {
  name: 'App',
  components: {
    /* Saludo,
    ComponenteDos, */
    Persona

  }
}
</script>

<style>

</style>
