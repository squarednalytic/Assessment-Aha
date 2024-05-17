# Simple Auth App

A simple Vue.js application that demonstrates user authentication with Vuetify, Font Awesome, and a mock API.

## Project setup

### Install Vue CLI

If you don't have Vue CLI installed, install it globally:

```bash
npm install -g @vue/cli

vue create simple-auth-app
cd simple-auth-app

vue add vuetify
npm install axios @fortawesome/fontawesome-free

npm install -g json-server
Create a db.json file in your project root:
{
  "users": []
}

Run the mock server:
json-server --watch db.json --port 3000

Running the Application
To run the application:

npm run serve

Components
LandingPage.vue: Contains links to sign up and sign in.
SignUp.vue: Handles user registration.
SignIn.vue: Handles user login.
Dashboard.vue: A protected route accessible only to authenticated users.
API
The application interacts with a mock API provided by json-server at http://localhost:3000.
