<template>
  <v-app>
    <Header />
    <Menu />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
export default {
  components: {
    Header,
    Menu
  }
};
</script>