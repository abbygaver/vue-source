<script setup>
  import { ref } from 'vue'
  import form from './components/form.vue'
  import card from './components/card.vue'

  const inputList = ref([])

  const addCard = (newCard) => {
    inputList.value.push(newCard)
  }
</script>

<template>
  <div id="formSubmit">
    <form @submit-form="addCard"></form>
    <card v-for="(card, index) in inputList" :key="index" :data="card"></card>
  </div>
</template>

<style>
  div {
    display: flex;
    margin: 10px 10%;
  }

  #formSubmit {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  #cardList {
    width: 30%;
    padding: 10px;
    border: solid 1px black;
  }

</style>
