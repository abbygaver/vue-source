<script setup>
  import { ref, reactive, watch } from 'vue'
  import { onMounted, onUpdated} from 'vue'
  import validator from 'email-validator'
  import validator2 from 'validator'

  const usernameRef = ref(null)

  const user = {
    username: ref(''),
    password: ref(''),
    avatarImageFile: {}
  }

  const email = ref('')
  const phone = ref('')

  const password2 = ref('')
  const disabled = ref(true)
  
  const validUsername = ref(false)
  const validEmail = ref(false)
  const validPhone = ref(false)
  const validPassword = ref(false)
  const passwordsMatch = ref(false)

  const usernameErrorRef = ref(null)
  const emailErrorRef = ref(null)
  const phoneErrorRef = ref(null)
  const passwordErrorRef = ref(null)
  const password2ErrorRef = ref(null)

  watch(email, () => {
    validEmail.value = validator.validate(email.value)
    emailErrorRef.value.innerHTML = validEmail.value ?
      "&nbsp;" : "Email not valid"
  })

  watch(phone, () => {
    validPhone.value = validator2.isMobilePhone(phone.value, 'en-US');
    phoneErrorRef.value.innerHTML = validPhone.value ?
      "&nbsp;" : "Please enter a valid phone number."
  })

  watch(user.username, () => {
    validUsername.value.innerHTML = (validUsername.value) ?
      "&nbsp;" : "Minimum length is 4 characters"
  })

  watch(user.password, () => {
    validPassword.value = (user.password.value.length >= 8)

    passwordErrorRef.value.innerHTML = (validPassword.value) ? 
      "&nbsp;" : "Passwords do not match :("
  })

  function loadPreviewImg(evt) {
    user.avatarImageFile = evt.target.files[0]
    let reader = new FileReader()
    reader.onloadend = function () {
        let img = document.querySelector("#preview-img")
        img.src = reader.result;
    }
    reader.readAsDataURL(user.avatarImageFile)
  }

  watch(password2, () => {
    passwordsMatch.value = (user.password === password2.value)

    password2ErrorRef.value.innerHTML = (passwordsMatch.value === true) ?
      "&nbsp;" : "Passwords do not match"
  })

  watch([validUsername, validPassword, passwordsMatch, validEmail, validPhone], async () => {
    disabled.value = (validUsername.value && validPassword.value && passwordsMatch.value && validEmail.value && validPhone.value)
    console.log(disabled.value)
  })

  function submit() {
    let mssg = user.username + ", " + user.password
    console.log(mssg)
  }

  onMounted(() => {
    usernameRef.value.focus()
  })

  onUpdated(() => {
    console.log(usernameRef.value.value)
  })

</script>

<template>
  <div class="container">
        <form class="rounded border border-primary border-2 border-opacity-25 py-3 px-5 row">
            <fieldset class="d-flex flex-column col-auto">
                <legend>Create Account</legend>

                <div class="form-floating">
                    <input v-model="email" id="email" type="text" class="form-control" />
                    <label for="email" class="form-label">Email</label>
                    <span ref="emailErrorRef">&nbsp</span>
                </div>

                <div class="form-floating">
                    <input v-model="phone" id="phone" type="tel" class="form-control" />
                    <label for="phone" class="form-label">Phone Number</label>
                    <span ref="phoneErrorRef">&nbsp</span>
                </div>

                <div class="form-floating">
                    <input ref="usernameRef" v-model="user.username" id="username" type="text" class="form-control" />
                    <label for="username" class="form-label">Username</label>
                    <span ref="usernameErrorRef">&nbsp</span>
                </div>

                <div class="form-floating">
                    <input v-model="user.password" id="password" type="password" class="form-control" />
                    <label for="password" class="form-label">Password</label>
                    <span ref="passwordErrorRef">&nbsp;</span>
                </div>

                <div class="form-floating">
                    <input v-model="password2" id="password2" type="password" class="form-control" />
                    <label for="password2" class="form-label">Reenter password</label>
                    <span ref="password2ErrorRef">&nbsp;</span>
                </div>

                <div>
                    <label for="avatar" class="form-label">Choose a profile picture:</label>
                    <input id="avatar" class="form-control" type="file" name="avatar" accept="image/png, image/jpeg" @change="loadPreviewImg">
                </div> <br>

                <div>
                    <button @click="submit" class="btn btn-primary" type="button" v-bind:disabled="disabled">Create</button>
                </div>
            </fieldset>
            <fieldset class="d-flex flex-column col-auto">
                  <div id="images" class="form-floating row">
                        <div id="image-holder" class="col-auto">
                            <figure id="fig1">
                                <img id="preview-img">
                            </figure>
                        </div>
                    </div>
            </fieldset>
        </form>
    </div>
</template>

<style>
  span {
    font-size: small;
    color: red;
    vertical-align: text-top;
  }
  #preview-img {
    max-width: 50%;
    float: right;
  }
</style>