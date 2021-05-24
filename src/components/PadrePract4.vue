<template>
    <div>
        <button @click="mostrar=true">Mostrar componente Hijo</button>
        <!-- evento personalizado 'cerrar' viene del comp hijo -->
        <HijoPract4 @cerrar ="mostrar = false" v-show="mostrar"></HijoPract4>
    </div>
</template>

<script>
/* padre hereda componente hijo */
import HijoPract4 from './HijoPract4.vue';
export default {
        name: "PadrePract4",
        components: {
            HijoPract4,
        },
        data() {
            return {
                /* metodo que si es falso no se renderiza */
                mostrar: false,
                
            }
        },
    }
</script>

<style >

</style>