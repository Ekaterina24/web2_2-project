<template>
    <div>
      <h2>Категории</h2>
      <p
          v-for="category in categories"
          :key="category.id"
          @click="() => filterPosts(category.id)"
      >
        {{ category.name }}
      </p>
    </div>
</template>

<script>
export default {
  name: "Filters",
  props: ['filterPosts'],
  mounted() {
    this.$store.dispatch("GET_CATEGORIES");
  },
  computed: {
    categories() {
      return this.$store.getters.CATEGORIES;
    },
  },
}
</script>

<style scoped>

</style>
