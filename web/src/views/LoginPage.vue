<template>
  <div class="container mainContainer">
    <div class="dashboardTitle">
      <img src="../assets/DashboardLogo.png" />
    </div>
    <h1 class="cardTitle">Log in</h1>
    <v-card class="cardLogin">
      <v-form v-model="valid" @submit="login" value>
        <div>
          <span>Email</span>
        </div>
        <v-text-field
          class="inputLogin"
          id="email-input"
          v-model="form.email"
          :rules="emailRules"
          type="email"
          required
          placeholder="Your email address"
        />
        <div>
          <span class="small">Password</span>
        </div>
        <v-text-field
          class="inputLogin"
          id="input-2"
          v-model="form.password"
          :rules="passwordRules"
          type="password"
          required
          placeholder="Your password"
        />
        <span class="error" v-if="error">{{ error }}</span>
        <v-btn :disabled="!valid" class="button" type="submit" color="#1E96FC">Login</v-btn>
      </v-form>
    </v-card>
    <div class="registrationContainer">
      <p>
        Don't have an account yet ?
        <router-link class="link" to="registration">Register now</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase, { firestore } from '../config/index.js';

export default {
  name: "LoginPage",
  data() {
    return {
      error: undefined,
      valid: true,
      form: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    // updates local store with remote firebase
    async updateStore() {
      // here update local store with remote one
      const response = await firestore.collection('users').doc(this.$store.getters.user.id).get();
      const store = await response.data();
      this.$store.commit('setGithubCode', store.githubCode);
      this.$store.commit('setGithubToken', store.githubToken);
    },
    async login() {
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password);
        if (user) {
          this.$store.commit("login", user.user);
          await this.updateStore();
          this.$router.push("/");
        }
      } catch (error) {
          this.error = error.message;
      }
    },
  },
};
</script>

<style>
  .error {
    color: white;
    padding: 10px;
  }
  .dashboardTitle {
    margin: 1em;
  }

  .mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cardTitle {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .link {
    color: #1e96fc;
  }

  .link:hover {
    filter: brightness(85%);
  }
</style>

<style scoped>
  .cardLogin {
    width: 300px;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5em;
    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.2);
  }

  .registratinContainer {
    display: flex;
    flex-direction: row;
  }

  .inputLogin {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .button {
    border-radius: 1em;
    text-transform: uppercase;
    color: #fff !important;
  }
</style>
