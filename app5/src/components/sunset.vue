<script setup>
    import {ref} from 'vue'

    const title = ref("Beautiful Sunset")
    const sunset_image = ref("sunset_image.jpg")
</script>

<template>
    <h1>{{ title }}</h1>
    <img :src="sunset_image"/>
</template>

<style>
    img {
    display: inline-block;
    width: 50%;
    }
</style>