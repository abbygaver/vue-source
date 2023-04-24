<script setup>
    import Heading from '../components/Heading.vue'

    const props = defineProps(['main'])
    props.main.style.backgroundColor = '#f3e4b1'
</script>

<template>
    <div class="card">
        <Heading label="Home" />
        <div class="card-body">
            <img src="/sunset.jpg" class="homeImg">
        </div>
    </div>
</template>

<style>
    .homeImg {
        max-width: 50%;
    }
</style>