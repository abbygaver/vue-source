<script setup>
    import { ref } from 'vue'
    import music from './components/music.vue'

</script>

<template>
    <h1>Bird calls</h1>
    <music :title="Cardinal" :imageFile="cardinal" :audioFile="cardinal"></music>
    <!--<music :title="Duck" :imageFile="ducks.jpg" :audioFile="duck.mp3"></music>
    <music :title="Crow" :imageFile="crow.jpg" :audioFile="crows.mp3"></music>
    <music :title="Eagle" :imageFile="eagle.jpg" :audioFile="eagle.mp3"></music>
    <music :title="Nightingale" :imageFile="nightingale.jpg" :audioFile="nightingale.mp3"></music>
    <music :title="Owl" :imageFile="owl.jpg" :audioFile="owl.mp3"></music>
    <music :props.title="Pacific Wren" :props.imageFile="pacificwren.jpg" :props.audioFile="pacificwren.mp3"></music>
    <music :props.title="Screech Owl" :props.imageFile="screechowl.jpg" :props.audioFile="screechowl.mp3"></music>
    <music :props.title="Seagull" :props.imageFile="seagull.jpg" :props.audioFile="seagull.mp3"></music>
    <music :props.title="Wood Thrush" :props.imageFile="woodthrush.jpg" :props.audioFile="woodthrush.mp3"></music>-->

</template>

<style>

</style>