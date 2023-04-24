<script setup>
    import {ref} from 'vue'

    const monet = ref("monet.jpeg")
</script>

<template>
    <img :src="monet"/>
</template>