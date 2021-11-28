<template>
  <v-container>
    <v-toolbar
        color="purple lighten-1"
        flat
    >
      <v-img
          alt="logo"
          src="../assets/LEGO-Logo.png"
          max-width="70"
      ></v-img>
      <v-toolbar-items>
        <v-btn
            text
            color="#FFFFFF"
        >
          <router-link
              to="/"
              color="#FFFFFF"
          >Главная</router-link>
        </v-btn>
        <v-btn
            text
            color="#FFFFFF"
        >
          <router-link to="/posts">Новости</router-link>
        </v-btn>
        <v-btn
            text
            color="#FFFFFF"
        >
          <router-link to="/about">О нас</router-link>
        </v-btn>
        <v-btn
            text
            color="#FFFFFF"
        >
          <router-link to="/gallery">Галерея</router-link>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-text-field
          @focus="searchClosed = false"
          @blur="searchClosed = true"
          v-model="search"
          class="search mt-6"
          :class="{ 'closed' : searchClosed && !search }"
          placeholder="Поиск"
          prepend-inner-icon="mdi-magnify"
          filled
          dense
          clearable
      ></v-text-field>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
name: "Header",
  data: () => ({
    search: null,
  searchClosed: true,
}),
}
</script>

<style scoped>
.v-application a {
  color: white;
  text-decoration: none;
}
.v-input.search {
  transition: max-width 0.3s;
}

.v-input.search .v-input__slot .v-input__slot:before, .v-input.search .v-input__slot .v-input__slot:before {
    border-color: transparent !important;
  border-style: none;
}
.v-input.search.closed{
  max-width: 45px;
}

.v-input.search.closed.v-input__slot {
  background: transparent !important;
}

</style>