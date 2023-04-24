<script setup>
    const props = defineProps({
        data: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div id="card">
        <h2>{{ data.name }}</h2>
        <h3>{{ data.song }}</h3>
    </div>
</template>

<style>
    #card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: solid 1px lightgray;
        margin: 0 30px;
    }
</style>