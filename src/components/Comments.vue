<template>
  <div class="comments">
    <h2>Комментарии</h2>
    <List v-bind:array="this.comments"/>
    <Form @addComment="add" />
  </div>
</template>
<script>

import List from "./List";
import axios from "axios";
import Form from "./Form";

export default {
  name: "Comments",
  components: {Form, List},
  props: ['id'],
  data() {
    return {
      comments:[]
    }
  },
  mounted() {
    axios
        .get(`http://demo-api.vsdev.space/api/articles/${this.id}/comments`)
        .then(response => (this.comments = response.data));
  },
  methods: {
    add(item) {
      if (item.name !== "" && item.comment !== "") {
        this.comments.push(item)
      }
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid black;
}
</style>