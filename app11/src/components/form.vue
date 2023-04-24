<script setup>
    import { ref } from "vue"
    const emits = defineEmits(["submit"])

    const name = ref("")
    const song = ref("")

    const submit = () => {
        const newCard = {
            name: name.value,
            song: song.value
        }
        emits("submit", newCard)

        name.value = ""
        song.value = ""
    }
</script>

<template>
    <form @submit.prevent="submit">
        <fieldset>
            <label for="name">Name: </label>
            <input id="name" type="text" v-model="name" />
            
            <label for="song">Favorite Song: </label>
            <input id="song" type="text" v-model="song" />

            <button type="submit">Add</button>
        </fieldset>
    </form>
</template>