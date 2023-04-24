<script setup>
    import { useUserStore } from '@/stores/user'
    import { info } from '../assets/info'
    const store = useUserStore()

    store.firstName = info.firstName
    store.lastName = info.lastName
    store.streetAddr = info.streetAddr
    store.city = info.city
    store.state = info.state
    store.zip = info.zip
</script>

<template>
    <main>
        <div class="card">
        <div class="card-header">Profile Information</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">First Name: {{ store.firstName }}</li>
            <li class="list-group-item">Last Name: {{ store.lastName }}</li>
            <li class="list-group-item">Address: {{ store.streetAddr }}</li>
            <li class="list-group-item">{{ store.city }}, {{ store.state }}, {{ store.zip }}</li>
        </ul>
        </div>
    </main>
</template>

<style>
    .card {
        width: 25em;
    }
</style>