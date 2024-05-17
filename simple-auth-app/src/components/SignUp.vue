<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-5">
          <v-card-title class="headline">Sign Up</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="signUp">
              <v-text-field
                v-model="username"
                label="Username"
                prepend-icon="fas fa-user"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                prepend-icon="fas fa-lock"
                required
              ></v-text-field>
              <v-btn color="primary" type="submit">Sign Up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async signUp() {
      try {
        await this.$store.dispatch('signUp', {
          username: this.username,
          password: this.password
        });
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Error during sign up:', error);
      }
    }
  }
};
</script>
