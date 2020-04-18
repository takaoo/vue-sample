<template>
<div>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title>My Portfolio with</v-toolbar-title>

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>

  <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://github.com/takaoo.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Takao Oshima</v-list-item-title>
            <v-list-item-subtitle>https://github.com/takaoo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link to="about">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
        <v-list-item link to="j">
          <v-list-item-icon>
            <v-icon>mdi-alpha-j-box-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>J</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <Menu :d="drawer"/> -->
  </div>
</template>

<script>
// import Menu from './Menu'
  export default {
    components:{
      // Menu
    },
    data: () => ({
      drawer: false,
    }),
  }
</script>