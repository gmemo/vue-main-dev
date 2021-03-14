<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <v-spacer>Vue CRUD Firebase</v-spacer>
    </v-app-bar>
    <v-content>
      <Form />
    </v-content>
  </v-app>
</template>

<script>
import Form from './components/Form.vue'
export default {
  name: "App",

  components: {
    Form,
  },

  data: () => ({
    //
  }),
};
</script>
