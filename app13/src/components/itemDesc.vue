<script setup>
    import { ref } from 'vue'
    const props = defineProps({
        name : {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        }
    })
    const name = ref(props.name)
    const desc = ref(props.desc)
</script>

<template>
    <h2>{{ name }}</h2>
    <h3>{{ desc }}</h3>
</template>