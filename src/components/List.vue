<template>
<div>
  <ul>
    <li
        v-for="(item, index) in array"
        :key="index"
    >{{ item.user_name }}, {{ item.comment }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "List",
  props: {
    array: Array
  }
}
</script>

<style scoped>

</style>