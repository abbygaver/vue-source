<script setup>
    import {ref} from 'vue'

    const cow = ref("cow.png")
</script>

<template>
    <img :src="cow"/>
</template>

<style>

</style>