<template>
  <div id="app">
    <h1>LOGO</h1>
    <div>
      <router-link to="/main">Главная</router-link>
      <router-link to="/news">Новости</router-link>
      <router-link to="/about-us">О нас</router-link>

      <router-view></router-view>
    </div>


  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
