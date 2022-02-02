<template>
  <v-app>
    <v-container>
      <v-app-bar
          app
          color="purple lighten-1"
      >
        <Header  />
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>
