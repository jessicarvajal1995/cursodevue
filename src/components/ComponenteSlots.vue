<template>
    <div>
        <h1 style="color: red">
            <slot>
                Hola desde el componente
            </slot>
        </h1>
        <hr>
        <h2>
            <slot name="slotdos">
                Hola desde el slot 2
            </slot>
        </h2>
        <hr>
        <h2>
            <slot name="slottres">
            </slot>
        </h2>
    </div>
</template>

<script>

export default {
    name: "ComponenteSlots"
}
</script>

<style scoped>

</style>

<style scoped>

</style>