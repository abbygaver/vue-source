<script setup>
    import {ref} from 'vue'

    const skyview = ref("skyview.jpg")
</script>

<template>
    <img :src="skyview"/>
</template>