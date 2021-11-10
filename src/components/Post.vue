<template>
  <div>
    <div>Post {{ info[id-1].id }}</div>
    <p>{{ info[id-1].name }}</p>
    <p>{{ info[id-1].desc }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",
  data() {
    return {
      id: this.$route.params['id'],
      info: []
    }
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