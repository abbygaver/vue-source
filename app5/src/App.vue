<script setup>

import {ref, reactive} from 'vue'
import Sunset from './components/sunset.vue'
import LoremIpsum from './components/lorem_ipsum.vue'

  /*//class test
  import {ref, reactive} from 'vue'

  const title = ref("Reactive")
  title.value = "Reactive App!"

  //reactive can only take objects, no primitives
  //all these properties in the object are now reactive
  const name = reactive({
    first: "Jack",
    last: "Black"
  })

  name.middle = "Westerfield"
  //ref vs. reactive: don't need to use .value
  name.first = "Samantha"

  //a proxy -> deeply reactive
  name.salutation = {
    first: "Mr.",
    second: "Dr."
  }

  name.salutation.first = "M."

  const disableButton = ref(false)

  function toggleDisable() {
    disableButton.value = !disableButton.value
    textColor.value = (textColor.value == "red") ? "blue" : "red"
  }

  function resetButton() {
    disableButton.value = false
    textColor.value = (textColor.value == "blue") ? "red" : "blue"
  }

  const loremIpsum = ref("Lorem Ipsum delourum")
  const textColor = ref("red")*/

</script>

<template>
  <Sunset></Sunset>
  <LoremIpsum></LoremIpsum>

  <!--<h1>{{ title }}</h1>
  <p>
    First Name: {{ name.salutation.first }} {{ name.first }}
  </p>

  <p>
    {{ "Name " + name.first }}
  </p>

  <p>
    {{ (name.first === "Sam") ? "Hello" : "Bye" }}
  </p>

  <button v-bind:disabled="disableButton" @click="toggleDisable">Toggle</button>
  <button @click="resetButton">Reset</button>

  <br>

  <span :class="textColor">{{ loremIpsum  }}</span>-->
</template>

<style>

  /*class test
  .red {
    color: red;
  }

  .blue {
    color: blue;
  }*/

</style>