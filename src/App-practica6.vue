<template>
    <div id="app">
        <h1>Vuex basico Ejemplo contador</h1>
        <Contador></Contador>
        <LeerStore></LeerStore>
    </div>
</template>

<script>
import Contador from './components/Contador.vue';
import LeerStore from './components/LeerStore.vue';
    export default {
        name: 'App',
        components:{
            Contador,
            LeerStore,
        }
    }
</script>

<style scoped>
#app{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 60px;
}
</style>