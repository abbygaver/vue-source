<script>
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'

export default {
  components: { CompA, CompB },
  data() {
    return {
      activeComponent: 'CompA',
    }
  }
}
</script>

<template>
	<label>
    <input type="radio" v-model="activeComponent" value="CompA"> A
  </label>
  <label>
    <input type="radio" v-model="activeComponent" value="CompB"> B
  </label>
  <Transition name="fade" mode="out-in">
    <component :is="activeComponent"></component>
  </Transition>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  #profile {
    background-color: blue;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    text-align: center;
  }
</style>