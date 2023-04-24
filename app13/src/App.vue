<script setup>
  import { RouterView } from 'vue-router'
  import { ref } from 'vue'
  import Navbar from './components/Navbar.vue'

  const main = ref(null)
</script>

<template>
    <Navbar />

    <main ref="main">
        <RouterView :main="main" />
    </main>
</template>

<style>
    main {
        display: block;
        padding: 50px;
        margin: 50px;
        background-color: #f3e4b1;
    }
</style>