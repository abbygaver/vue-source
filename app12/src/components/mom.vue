<script setup>
    import kid from "./kid.vue"
    import { provide, inject } from "vue"

    provide("momsData", "Mom's Data")
    const gigisData = inject("gigisData")
</script>

<template>
    <div id="mom">
        <h1>Mom</h1>
        <p>Gigi's Data: {{ gigisData }}</p>
        <kid/>
    </div>
</template>

<style>
    #mom {
        background-color: palevioletred;
        margin: 2em;
    }
</style>