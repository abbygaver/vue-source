<script setup>
    import { ref, onMounted } from 'vue'

    const img = ref(null)
    const audio = ref(null)

    const props = defineProps({
        title: String,
        imageFile: String,
        audioFile: String
    })

    function getImageUrl() {
        return new URL('images/${props.imageFile}.jpg', import.meta.url)
    }

    function getAudioUrl() {
        return new URL('audio/${props.audioFile}.mp3', import.meta.url)
    }

    onMounted(() => {
        img.value = getImageUrl()
        audio.value = getAudioUrl()
    })

</script>

<template>
    <div id="card">
        <h4>{{ props.title }}</h4>    
        <img ref="img">
        <audio ref="audio" controls></audio>
    </div>
</template>

<style>
    audio {
        display: block;
        padding: 0 20px 20px
    }
</style>