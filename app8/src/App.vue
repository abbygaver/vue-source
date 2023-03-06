<script setup>
  import { ref, reactive } from 'vue'
  import { watch } from 'vue'
  import { watchEffect } from 'vue'
  import { onMounted } from 'vue'
  import { createClient } from 'pexels'

  // const client = createClient('81vPdZfsb5G0RnhwrK44wcV9KyJrcTJJFly8HiGCxDDtaE7uAlCn9RVh');

  let photo = reactive({
    alt: "",
    name: "",
    photographer: "",
    photographer_url: "",
    url: ""
  })

  let matchaPic = new Object(photo)
  let plantPic = new Object(photo)
  let gamePic = new Object(photo)
  const collection = reactive({
    media: [
      matchaPic = {
        alt: "Matcha Lattes from top view on a white table",
        name: "Matcha Lattes",
        photographer: "exnl",
        photographer_url: "https://www.pexels.com/@exnl/",
        url: "matchaPic.jpg"
      },
      plantPic = {
        alt: "Plants being repotted from top view on table",
        name: "Gardening",
        photographer: "Huy Phan",
        photographer_url: "https://www.pexels.com/@huy-phan-316220/",
        url: "plantsPic.jpg"
      },
      gamePic = {
        alt: "A person holding a switch playing Animal Crossing with a Cat",
        name: "Switch Games",
        photographer: "Mister Hugo Filipe and Mister Sergio Roque",
        photographer_url: "https://www.pexels.com/@bemistermister/",
        url: "gamePic.jpg"
      }
    ]
  })

  /*async function getCollection() {
    // get the meta-data for all collections
    let result = await client.collections.all({ per_page: 1 })

    // get the id of first collection
    const id = result.collections[0].id

    // get media for the collection
    result = await client.collections.media({ id, type: 'photos', per_page: 9 })

    // cache the media meta-data
    collection.media = result.media
  }*/

  async function loadImage(index) {
    photo = collection.media[index]
    /*photo.alt = collection.media[index].alt
    photo.photographer = collection.media[index].photographer
    photo.photographer_url = collection.media[index].photographer_url
    photo.url = collection.media[index].url*/
  }

  let nextVal = ref(false)
  let prevVal = ref(false)
  let i = 0
  function nextPic() {
    if (i < collection.media.length - 1) {
      nextVal.value = false
      prevVal.value = false
      i = i + 1
      loadImage(i)
    } else if (i === collection.media.length - 1) {
      nextVal.value = true
    }
  }

  function lastPic() {
    if (i >= 1) {
      nextVal.value = false
      prevVal.value = false
      i = i - 1
      loadImage(i)
    } else if (i === 0) {
      prevVal.value = true
    }
  }

  watchEffect(() => {
    console.log("collection changed")

    if (collection.media.length > 0) {
      loadImage(i)
    }
  })

  onMounted(() => {
    console.log("onmounted")
    loadImage(i)
  })

</script>

<template>

  <div id="carouselExample" class="carousel slide">
    <h1>My Favorite Things</h1>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="photo.url" class="d-block w-100"> <br>
        <a :href="photo.photographer_url" target="_blank"> {{ photo.photographer }} </a>
      </div>
    </div>
    <button :disabled=prevVal @click="lastPic" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button :disabled=nextVal @click="nextPic" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</template>

<style>

  #carouselExample {
    margin: 5em;
    text-align: center;
  }

</style>
