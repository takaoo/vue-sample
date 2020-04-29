<template>
    <v-navigation-drawer app temporary absolute v-model="d">
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
        <v-list-item link to="matter">
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
</template>


<script>

export default {
  components: {
    
  },
  props: ['d']
};
</script>