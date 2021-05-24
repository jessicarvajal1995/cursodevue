<template>
    <div>
        <h2>soy el componente hijo</h2>
        <button @click="emitirEvento">Cerrar Hijo</button>
    </div>
</template>

<script>
    export default {
        name: "HijoPract4",
        methods: {
            emitirEvento() {
                
                this.$emit('cerrar')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>