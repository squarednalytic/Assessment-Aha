<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-5">
          <v-card-title class="headline">Welcome to Simple Auth App</v-card-title>
          <v-card-text>
            <v-btn color="primary" class="mr-4" @click="$router.push('/signup')">Sign Up</v-btn>
            <v-btn color="secondary" @click="$router.push('/signin')">Sign In</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LandingPage'
};
</script>

<style scoped>

</style>
