<template>
    <div>
       <p>El nombre es: {{nombre}}</p> 
       <p>La edad que tiene es: {{edad }}</p>
        <Hijo :nombre="nombre" :edad="edad"></Hijo>
    </div>
</template>

<script>
/* anidacion de componentes */
import Hijo from './Hijo.vue';

export default {
    name: "Persona",
    props: ['nombre','edad'],
    components:{
        Hijo,
    }
}
</script>