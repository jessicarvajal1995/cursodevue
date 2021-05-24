<template>
  <div>
      <ComponenteSlots>
          <!-- este mensaje se muestra por que le pase un slot en su componente -->
          Hola desde el slot
          <template slot="slotdos">
            Hola desde slot 2  
        </template>
        <template slot="slottres">
            Hola desde slot 3
        </template>
      </ComponenteSlots>
      
  </div>
</template>

<script>

import ComponenteSlots from './components/ComponenteSlots.vue';

export default {
  name: 'App',
  components: {
    
    ComponenteSlots,

  }
}
</script>

<style>

</style>
