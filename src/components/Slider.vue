<template>
  <div class="slider-wrapper">
    <h2>Анонсы новостей</h2>
    <v-carousel v-if="sliderTrue">
      <v-carousel-item
          v-for="(item,i) in sliderTrue"
          :key="i"
          src="images/preview.jpeg"
          max-height="300"
          max-width="360"
      >
        <div class="text">
          {{ item.name }}
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Slider",
  data () {
    return {
      items: [],
    }
  },
  mounted() {
    axios
        .get('http://demo-api.vsdev.space/api/articles')
        .then(response => (this.items = response.data));
  },
  computed:{
    sliderTrue: function(){
      return this.items.filter(function(i){
        return i.slider === true
      })
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 40px;
}
.v-item-group {
  width: 360px;
  height: 300px !important;
}
.text {
  max-width: 360px;
  background-color: #238c8d;
  padding: 10px;
  box-sizing: border-box;
  font-size: 25px;
  margin-top: 193px;
  text-align: center;
  color: rgb(255 243 0);
}
</style>