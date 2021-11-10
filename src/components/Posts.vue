<template>
  <div>
    <div>Newsss</div>
    <div>
      <ul>
        <router-link tag="li" v-for="(article, index) in info" :to="`/post/${index+1}`" :key="index">
          {{article.name}}
          {{article.date}}
          {{article.shortDesc}}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Posts",
  data() {
    return {
      info: []
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

</style>