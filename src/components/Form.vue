<template>
<div>
  <v-text-field label="Имя" v-model="user_name"></v-text-field>
  <v-text-field label="Комментарий" v-model="comment"></v-text-field>
  <v-btn @click="addComment()">Добавить</v-btn>
</div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      user_name: "",
      comment: ""
    }
  },
  methods: {
    addComment() {
      this.$emit('addComment', {
        user_name: this.user_name,
        comment: this.comment
      })
      this.user_name = '';
      this.comment = ''
    }
  }
}
</script>

<style scoped>

</style>