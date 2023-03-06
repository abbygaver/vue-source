<script setup>
  import { ref, reactive } from 'vue'

  const user = reactive({
    name: {
        first: "",
        last: ""
    },
    email: "",
    happy: true,
    tshirtModel: "",
    size: "",
    quantity: "",
    deliveryDate: "",
    deliveryAddr: {
        streetAddr1: "",
        city: "",
        state: "",
        zip: ""
    }
  })

  const model1 = ref("model1.png")
  const model2 = ref("model2.png")
  const model3 = ref("model3.png")

  function submit() {
      console.log("User data:")
      let userObj = { ...user }
      console.log(userObj)
      let jsonString = JSON.stringify(user)
      console.log(jsonString)
      let jsonObject = JSON.parse(jsonString)
      console.log(jsonObject)
  }

</script>

<template>
  <div class="container">
      <form id="form">
          <br>
          <div class="row" id="title">
            <h2 class="title">Order Form</h2>
            <p class="title">Please fill in your information and we'll be sending your order in no time.</p>
          </div>
          
          <div id="content">
          <div id="textContent">
            <br>
            <!--Name-->
            <fieldset>
              <div class="row">
                <div class="col-2">
                  <label for="name" class="form-label">Name</label>
                </div>
                <div class="col-3">
                  <input id="name" type="text" placeholder="First Name" class="form-control" v-model="user.name.first">
                </div>
                <div class="col-3">
                  <input id="name" type="text" placeholder="Last Name" class="form-control" v-model="user.name.last">
                </div>
              </div>
            </fieldset>

            <br>

            <!--Email-->
            <fieldset>
              <div class="row">
                <div class="col-2">
                  <label for="email" class="form-label">Email</label>
                </div>
                <div class="col-6">
                  <input id="email" type="email" placeholder="Email" class="form-control" v-model="user.email">
                </div>
              </div>
            </fieldset>

            <br>

            <!--T-shirt model-->
            <fieldset>
              <div class="row">
                <div class="col-2">
                  <label class="form-label">T-shirt Model</label>
                </div>
                <div class="col-2">
                  <label for="one" class="form-label"><img :src="model1" class="modelShirt"/></label>
                  <input id="one" type="radio" class="form-check-input" name="tshirt" value="one" v-model="user.tshirtModel">
                </div>
                <div class="col-2">
                  <label for="one" class="form-label"><img :src="model2" class="modelShirt"/></label>
                  <input id="two" type="radio" class="form-check-input" name="tshirt" value="two" v-model="user.tshirtModel">
                </div>
                <div class="col-2">
                  <label for="one" class="form-label"><img :src="model3" class="modelShirt"/></label>
                  <input id="three" type="radio" class="form-check-input" name="tshirt" value="three" v-model="user.tshirtModel">
                </div>
              </div>
            </fieldset>
            
            <br>

            <!--Size-->
            <fieldset>
              <div class="row">
                <div class="col-2">
                  <label for="size" class="form-label">Size</label>
                </div>
                <div class="col-6">
                  <select id="size" class="form-select" name="sizes" v-model="user.size">
                    <option value="xsmall">X-small</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">X-large</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <br>

            <!--Quantity-->
            <fieldset>
              <div class="row">
                <div class="col-2">
                  <label for="quantity" class="form-label">Quantity</label>
                </div>
                <div class="col-6">
                  <input id="quantity" type="number" placeholder="e.g. 1" class="form-control" v-model="user.quantity">
                </div>
              </div>
            </fieldset>

            <br>

            <!--Delivery Date-->
            <fieldset>
              <div class="row">
                <div class="col-2">
                  <label for="deliveryDate" class="form-label">Delivery Date</label>
                </div>
                <div class="col-6">
                  <input id="deliveryDate" type="date" class="form-control" v-model="user.deliveryDate">
                </div>
              </div>
            </fieldset>

            <br>

            <!--Delivery Address-->
            <fieldset>
              <div class="row" id="delAddy">
                <div class="col-2">
                <br>
                  <label for="deliveryAddr" class="form-label">Delivery Address</label>
                </div>
                <div class="col-6">
                <br>
                  <input id="deliveryAddr" type="text" placeholder="Street Address" class="form-control" v-model="user.deliveryAddr.streetAddr1">
                  <br>
                  <input id="deliveryAddr" type="text" placeholder="City" class="form-control" v-model="user.deliveryAddr.city">
                  <br>
                  <input id="deliveryAddr" type="text" placeholder="State" class="form-control" v-model="user.deliveryAddr.state">
                  <br>
                  <input id="deliveryAddr" type="text" placeholder="Postal/Zip Code" class="form-control" v-model="user.deliveryAddr.zip">
                  <br>
                </div>
              </div>
              <button id="submitButton" class="btn" type="button" @click="submit">Submit</button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>

    <div class="container">
      <div id="order-info">
        <div id="receipt-content"></div>
          <h2>Order Receipt</h2>
          <span>Name: {{  user.name.first }} {{ user.name.last }}</span><br>
          <span>Email: {{ user.email }}</span><br>
          <span>T-shirt model: {{ user.tshirtModel }}</span><br>
          <span>Size: {{ user.size }}</span><br>
          <span>Quantity: {{ user.quantity }}</span><br>
          <span>Delivery Date: {{ user.deliveryDate }}</span><br>
          <span>Delivery Address: {{ user.deliveryAddr.streetAddr1 }} <br> {{ user.deliveryAddr.city }}, {{ user.deliveryAddr.state }} {{ user.deliveryAddr.zip }}</span><br>
        </div>
    </div>

    <br>
</template>

<style>
  #form {
    border-radius: 25px;
    background-color: hotpink;
    margin: 1em;
  }

  #title {
    margin: 2em;
    color: aliceblue
  }

  #content {
    background-color: aliceblue;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  #textContent {
    margin: 2em;
  }

  .modelShirt {
    display: flex
  }

  #submitButton {
    background-color: rgb(51, 159, 217);
    margin: 2em;
    float: right;
    color: aliceblue;
  }

  #delAddy {
    background-color: hotpink;
    border-radius: 25px;
    color: aliceblue;
  }

  #order-info {
    background-color: aliceblue;
    border-radius: 25px;
  }

</style>