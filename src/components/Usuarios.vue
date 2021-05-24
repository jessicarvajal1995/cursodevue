<template>
    <div>
        <!-- renderizamos las variables -->
        <p>Nombre: {{nombre}}</p>
        <p>Email: {{email}}</p>
        <p>Telefono: {{telefono}}</p>
        <hr>
    </div>
</template>

<script>
export default {
    name: "Usuarios",
    /* recibimos las variables del api con props */
    /* props: ['nombre','email','telefono'] */
    
    /* VALIDACION DE LAS PROPS PARA SABER QUE TIPO DE DATOS SON */
    props: {
        /* otro tipo de validar props, mediante objetos */
        nombre: {
            type:String,
            required:true,
            default:"Manuel",
        },
        email:String,
        telefono:String,
    }
}
</script>