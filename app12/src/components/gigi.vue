<script setup>
    import mom from "./mom.vue"
    import { provide } from "vue"

    provide("gigisData", "Gigi's Data")
</script>

<template>
    <div id="gigi">
        <h1>Gigi</h1>
        <mom/>
    </div>
</template>

<style>
    #gigi {
        background-color:pink;
    }
</style>