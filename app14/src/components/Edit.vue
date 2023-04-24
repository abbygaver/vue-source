<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useUserStore } from '../stores/user.js'
    import { info } from '../assets/info'

    const router = useRouter()
    const store = useUserStore()

    const firstName = ref("")
    const lastName = ref("")
    const streetAddr = ref("")
    const city = ref("")
    const state = ref("")
    const zip = ref("")

    function submitEdits() {
        info.firstName = firstName
        info.lastName = lastName
        info.streetAddr = streetAddr
        info.city = city
        info.state = state
        info.zip = zip

        router.replace({ path: '/' })
    }
</script>

<template>
    <main>
        <h2>Edit</h2>
        <form class="card" id="editStyle">
            <label for="firstName">First Name</label><br>
            <input v-model="firstName" name="firstName" type="text" />
            <br>
            <label for="lastName">Last Name</label><br>
            <input v-model="lastName" name="lastName" type="text" />
            <br>
            <label for="streetAddr">Street Address</label><br>
            <input v-model="streetAddr" name="streetAddr" type="text" />
            <br>
            <label for="city">City</label><br>
            <input v-model="city" name="city" type="text" />
            <br>
            <label for="state">State</label><br>
            <input v-model="state" name="state" type="text" />
            <br>
            <label for="zip">Zipcode</label><br>
            <input v-model="zip" name="zip" type="text" />
            <br>
            <button type="button" class="btn btn-info" @click="submitEdits">Submit Edits</button>
        </form>
    </main>
</template>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
    }

    #editStyle {
        padding: 50px;
    }

</style>