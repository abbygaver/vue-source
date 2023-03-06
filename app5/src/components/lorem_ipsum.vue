<script setup>
    import {ref} from 'vue'

    const title2 = ref("Lorem Ipsum")

    const lorem_p1 = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie. Consequat id porta nibh venenatis cras sed felis. Ornare suspendisse sed nisi lacus sed. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Sed faucibus turpis in eu mi bibendum neque. Quis auctor elit sed vulputate mi sit amet. Mauris vitae ultricies leo integer malesuada. Nec sagittis aliquam malesuada bibendum arcu. Sem viverra aliquet eget sit amet. Tincidunt vitae semper quis lectus nulla. Porttitor rhoncus dolor purus non enim praesent. Diam vel quam elementum pulvinar etiam non. Blandit massa enim nec dui nunc mattis enim ut. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.")

    const lorem_p2 = ref("Mi quis hendrerit dolor magna eget est lorem ipsum. Mi quis hendrerit dolor magna eget est lorem. Et netus et malesuada fames. Semper auctor neque vitae tempus quam pellentesque. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Fringilla urna porttitor rhoncus dolor. Scelerisque fermentum dui faucibus in. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Cursus metus aliquam eleifend mi in. Vulputate eu scelerisque felis imperdiet proin. Viverra orci sagittis eu volutpat odio facilisis.")

    const lorem_p3 = ref("Eu feugiat pretium nibh ipsum consequat nisl vel. At erat pellentesque adipiscing commodo elit at. Massa tincidunt dui ut ornare lectus sit amet est. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Id donec ultrices tincidunt arcu non sodales neque sodales. Nibh sed pulvinar proin gravida hendrerit lectus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ut lectus arcu bibendum at. Dui vivamus arcu felis bibendum ut. Convallis aenean et tortor at. Ac ut consequat semper viverra nam libero justo laoreet sit. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Enim nunc faucibus a pellentesque. Faucibus interdum posuere lorem ipsum dolor sit.")

    const textDec = ref("Normal")

    function changeText() {
        textDec.value = (textDec.value == "Normal") ? "newStyle" : "Normal"
    }

    function resetText(){
        textDec.value = "Normal"
    }

</script>
<template>
    <h1>{{ title2 }}</h1>
    <span v-bind:class="textDec">
        <p>{{ lorem_p1 }}</p>
        <p>{{ lorem_p2 }}</p>
        <p>{{ lorem_p3 }}</p>
    </span>

    <button @click="changeText">Change text DRAMATICALLY</button>
    <button @click="resetText">Reset text to Normal</button>

</template>
  
<style>
  .Normal {
    color: black;
    font-weight: normal;
  }

  .newStyle {
    color: hotpink;
    font-weight: bolder;
  }
</style>