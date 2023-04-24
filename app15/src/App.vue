<script setup>
    import sq1 from './components/sq1.vue'
    import sq2 from './components/sq2.vue'
    import sq3 from './components/sq3.vue'
    import sq4 from './components/sq4.vue'
    import sq5 from './components/sq5.vue'
    import sq6 from './components/sq6.vue'
</script>

<template>
    <div id="parent">
        <div class="div1"><sq1 /></div>
        <div class="div2"><sq2 /></div>
        <div class="div3"><sq3 /></div>
        <div class="div5"><sq6 /></div>
        <div class="div4"><sq5 /></div>
        <div class="div6"><sq4 /></div>
    </div>
</template>

<style>
    #parent {
        padding: 5px;
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 0.15fr);
        grid-column-gap: 3px;
        grid-row-gap: 3px;
    }

    .div1 { 
        grid-area: 1 / 1 / 2 / 5; 
    }

    .div2 { 
        grid-area: 2 / 1 / 3 / 2; 
    }

    .div3 { 
        grid-area: 2 / 2 / 3 / 5; 
    }

    .div4 {
        grid-area: 3 / 4 / 4 / 5;
    }

    .div5 { 
        grid-area: 3 / 1 / 4 / 4; 
    }

    .div6 { 
        grid-area: 4 / 1 / 5 / 5; 
    }

    img {
        max-width: 100%;
        object-fit: fill;
    }
</style>