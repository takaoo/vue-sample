<template>
  <v-app>
    <Header />
    <!-- <Menu /> <-->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
// import Menu from "@/components/Menu";
export default {
  components: {
    Header,
    // Menu
  }
};
</script>