<script setup>
    import { inject } from 'vue'

    const gigisData = inject("gigisData")
    const momsData = inject("momsData")
</script>

<template>
    <div id="kid">
        <h1>kid</h1>
        <p>Gigi's Data: {{ gigisData }}</p>
        <p>Mom's Data: {{ momsData }}</p>
    </div>
</template>

<style>
    #kid {
        background-color: rebeccapurple;
        margin: 3em;
    }
</style>