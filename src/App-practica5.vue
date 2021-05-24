<template>
    <div>
        <Elemento tipo="h1">Texto de este elemento</Elemento>
        <Elemento tipo="h2">Texto de este elemento</Elemento>
        <Elemento tipo="h3">Texto de este elemento</Elemento>
        <Elemento tipo="aside">Contenido del aside</Elemento>
    </div>
</template>

<script>
import Elemento from '@/components/Elemento.vue';
    export default {
        name: 'App',
        components:{
            Elemento,
        }
    }
</script>

<style >

</style>