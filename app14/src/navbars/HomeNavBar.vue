<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
                <RouterLink to="/" class="link">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/edit" class="link">Edit</RouterLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<style>
    .link {
        margin: 5px;
    }
</style>