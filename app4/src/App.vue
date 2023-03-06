<template>
  <div>
    <div>
      <h1>Change the Values below using Vue.js ref</h1>
    </div>
    <div>
      <h2>Get counting...</h2>
      <button class="buttons" @click="increment">
        {{ count }}
      </button>
    </div>

    <br>

    <div>
      <h2>Fix the addy!</h2>
      <button class="buttons" @click="changeAll">
        {{addr.street }} {{addr.city }}
      </button>
      <button class="buttons" @click="changeState">
        {{addr.state }}
      </button>
    </div>

    <br>

    <div>
      <h2>But what about MY name?</h2>
      <button class="buttons" @click="changeName">
        {{ name.first }} {{ name.last }}
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const count = ref(1)
  console.log(count.value)    // 1

  function increment() {
    count.value++
  }

  const addr = ref({
    street: "123 Main Street",
    city: "Bridgewater",
    state: "VA"
  })

  function changeAll() {
    addr.value = {
      street: "456 Water Street",
      city: "Winthrop",
      state: "NY"
    }
  }

  function changeState() {
    addr.value.state = "HI"
  }

  const name = ref({
    first: "Jesse",
    last: "Martinez"
  })

  function changeName() {
    name.value = {
      first: "Abigail",
      last: "Gaver"
    }
  }
</script>

<style>
 .buttons {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
 }

 .buttons:hover {
  background-color: #4CAF50;
  color: white;
 }
</style>