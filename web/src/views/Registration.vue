<template>
    <div class="container mainContainer">
        <div class="dashboardTitle">
            <img src="../assets/DashboardLogo.png" />
        </div>
        <h1 class="cardTitle">Create account</h1>
        <v-card class="cardRegister">
            <v-form v-model="valid" @submit="onSubmit" value>
                <div class="textContainer">
                    <label>
                        <div>
                            <span>Name</span>
                        </div>
                        <v-text-field
                            id="username-input"
                            class="input"
                            v-model="form.username"
                            :rules="usernameRules"
                            type="text"
                            required
                            placeholder="Enter your name..."
                        />
                    </label>
                    <label>
                        <div>
                            <span class="small">Email</span>
                        </div>
                        <v-text-field
                            id="input-email"
                            class="input"
                            v-model="form.email"
                            :rules="emailRules"
                            type="email"
                            required
                            placeholder="Enter your email..."
                        />
                    </label>
                </div>
                <div class="passwordContainer">
                    <div>
                        <span>Password</span>
                    </div>
                    <v-text-field
                        id="input-password"
                        class="input"
                        v-model="form.password"
                        :rules="passwordRules"
                        type="password"
                        required
                        placeholder="Enter your password..."
                    />
                    <span class="error" v-if="error">{{ error }}</span>
                </div>
                <div class="registrationFooter">
                    <router-link class="link" to="/login">I already have an account</router-link>
                    <v-btn :disabled="!valid" type="submit" color="#1E96FC" class="button">Create account</v-btn>
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import firebase, { firestore } from "../config/index.js";

export default {
    name: "Registration",
    data() {
        return {
            error: undefined,
            valid: true,
            form: {
                username: "",
                password: "",
                email: "",
            },
            usernameRules: [
                (v) => !!v || "Name is required",
                (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
            ],
            emailRules: [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
            passwordRules: [(v) => !!v || "Password is required."],
        };
    },
    methods: {
        async onSubmit() {
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password);
                if (user) {
                    await firebase.auth().currentUser.updateProfile({
                        displayName: this.form.username,
                    });
                    this.$store.commit("login", user.user);
                    const data = { services: [], createdWidgets: [] }; // empty services for new user
                    // create empty services array
                    firestore.collection('users').doc(this.$store.getters.user.id).set(data, { merge: true })
                    this.$router.push("/");
                }
            } catch (error) {
                this.error = error.message;
            }
        },
    },
};
</script>

<style scoped>
.error {
    color: white;
    padding: 10px;
}
.textContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
}

.passwordContainer {
    padding: 1rem;
}

.cardRegister {
    border-radius: 0.5em;
    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.2);
}

.button {
    border-radius: 1em;
    margin-left: 40px;
    text-transform: uppercase;
    color: #fff;
}

.registrationFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 1rem;
}
</style>
