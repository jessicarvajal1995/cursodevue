<template>
    <div id="app">
        <h1>Ejemplo de mapState</h1>
        <p>{{ nombre }}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: 'App',
        components:{
          
        },
        computed: mapState({
            nombre: function(state){
                return state.nombre
            }
        })
    }
</script>

<style scoped>
#app{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 60px;
}
</style>