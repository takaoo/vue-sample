<template>
  <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn small disabled>Disabled</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn disabled>Disabled</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn large disabled>Disabled</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
