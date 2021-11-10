<template>
<div class="header">
  <div class="content">
    <div class="header__logo">
      <img src="../assets/LEGO-Logo.png" alt="logo">
    </div>
    <div class="header__menu">
      <router-link to="/">Главная</router-link>
      <router-link to="/posts">Новости</router-link>
      <router-link to="/about">О нас</router-link>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>
  img {
    width: 75px;
    height: 40px;
  }

  .content {
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: #a96de3;
  }

  .header__menu {
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
  }

  a {
    color: white;
  }
</style>