<template>
    <v-container>
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title>
              Login
            </v-card-title>
            <v-card-text>
              <v-form ref="form">
                <v-text-field
                  label="Email"
                  name="email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  name="password"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    methods: {
      login() {
        // Validate the form
        if (this.$refs.form.validate()) {
          // If the form is valid, proceed with login
          console.log('Logging in...');
          // You can replace this with your login logic
        }
      }
    }
  };
  </script>
  