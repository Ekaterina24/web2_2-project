<template>
  <v-container>
    <div class="wrapper">
      <h1>Мы рады вас приветствовать на нашем сайте!</h1>
      <Slider />
    </div>
  </v-container>
</template>

<script>

import Slider from "@/components/Slider";
export default {
name: "Main",
  components: {Slider},
  data () {

  },
}
</script>

<style scoped>
  .wrapper {
    padding: 20px;
  }
  h1 {
    margin: 0;
    font-size: 30px;
    font-family: "Arial", sans-serif;
  }
</style>