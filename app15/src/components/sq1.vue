<script setup>
    import { ref } from 'vue'

    const flowers = ref("flowers.jpeg")
</script>

<template>
    <img :src="flowers" />
</template>