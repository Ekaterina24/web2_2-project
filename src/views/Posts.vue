<template>
  <div class="wrapper">
    <h1>Статьи</h1>
    <v-container>
        <Filters :filterPosts="filterPosts"/>
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
    </v-container>
    <div
        class="d-flex pa-2 flex-wrap justify-start"
    >
      <v-card
          v-for="article in searchHandler"
          :key="article.id"
          class="mx-auto card"
          max-width="344"
      >
        <v-img
            src="images/preview.jpeg"
            height="200px"
        ></v-img>

        <v-card-title>
          <router-link
              :to="{ name: 'post', params: { id: article.id } }"
          >{{ article.name }}
          </router-link>
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
import Filters from "../components/Filters";

export default {
  name: "Posts",
  components: {Filters},
  data() {
    return {
      info: [],
      search: [],
      searchClosed: true,
    };
  },
  methods: {
    filterPosts(catName) {
      return this.info = this.info.filter((post) => {
        return post.category === catName
      })
    },
  },
  mounted() {
    axios
        .get('http://demo-api.vsdev.space/api/articles')
        .then(response => (this.info = response.data));
  },
  computed: {
    searchHandler() {
      return this.info.filter(post => {
        return post.name.includes(this.search)
      })
    }
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

.v-input.search.closed {
  max-width: 45px;
}

.v-input.search.closed.v-input__slot {
  background: transparent !important;
}
</style>
