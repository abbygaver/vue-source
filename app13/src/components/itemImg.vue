<script setup>
    import { ref } from 'vue'
    const props = defineProps({
        source: {
            type: String,
            required: true
        }
    })
    const image = ref(props.source)
</script>

<template>
    <img :src="imgSrc" style="max-width: 50%;">
</template>