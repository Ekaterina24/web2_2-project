<template>
  <div class="wrapper">
    <h1>Статьи</h1>
<div
    class="d-flex justify-space-around mb-6 flex-wrap"
>
    <v-card
        v-for="(article, index) in info"
        :key="index"
        class="mx-auto card"
        max-width="344"
    >
      <v-img
          src="images/preview.jpeg"
          height="200px"
      ></v-img>

      <v-card-title>
        <router-link :to="`/post/${index+1}`">{{ article.name }}</router-link>
      </v-card-title>

      <v-card-subtitle>
        {{ article.shortDesc }}
      </v-card-subtitle>
    </v-card>
</div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Posts",
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    axios
        .get('./articles.json')
        .then(response => (this.info = response.data));
  }
}
</script>

<style scoped>
  .wrapper {
    padding: 20px;
  }
  h1 {
    margin: 0 0 15px;
    font-size: 30px;
    font-family: "Arial", sans-serif;
  }
  .items {
    margin: 0;
  }
  .item {
    margin-top: 10px;
  }
  .item:hover {
    cursor: pointer;
  }
  .card {
    margin: 15px;
  }
</style>