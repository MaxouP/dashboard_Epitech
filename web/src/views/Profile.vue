<template>
    <div class="container profilePageContainer">
        <v-card class="cardContainer">
            <v-tabs v-model="tabs" centered background-color="#A2D6F9">
                <v-tab color="#A2D6F9" x-large width="100%" depressed>Profile</v-tab>
                <v-tab color="#A2D6F9" x-large width="100%" depressed>Services</v-tab>
            </v-tabs>
            <v-container>
                <v-tabs-items style="background-color: #A2D6F9" v-model="tabs">
                    <v-tab-item style="background-color: #A2D6F9">
                        <v-row v-for="profile in profileInfos" :key="profile.type" justify="center">
                            <v-col class="containerItem" align="start">
                                <h2>{{ profile.type }}</h2>
                                <v-card-text style="font-size: 18px">
                                    {{ profile.info }}
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <v-tab-item style="background-color: #A2D6F9">
                        <v-form @submit="submit">
                            <v-row v-for="service in servicesList" :key="service.name" justify="center">
                                <v-col class="servicesContainer" align="start">
                                    <div class="serviceSelector">
                                        <h2>{{ service.name }}</h2>
                                        <v-spacer></v-spacer>
                                        <v-switch
                                            inset
                                            v-model="subscribedServices"
                                            :value="service.name"
                                            color="#1E96FC"
                                        ></v-switch>
                                    </div>
                                    <v-divider></v-divider>
                                </v-col>
                            </v-row>
                            <v-btn type="submit">Save</v-btn>
                        </v-form>
                    </v-tab-item>
                </v-tabs-items>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import { firestore } from "../config/index.js";
export default {
    async created() {
        const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
        doc.data().services.forEach((service) => {
            this.subscribedServices.push(service.name);
        });
    },
    data() {
        return {
            tabs: null,
            profileInfos: [
                { type: "Username:", info: this.$store.getters.user.username },
                { type: "Email:", info: this.$store.getters.user.email },
            ],
            servicesList: this.$store.getters.servicesList,
            subscribedServices: [],
        };
    },
    methods: {
        async submit() {
            let newSub = [];
            this.subscribedServices.forEach(sub => {
                newSub.push({
                    name: sub,
                })
            })
            this.$store.commit("setSubscribedServices", this.subscribedServices);
            // update subscribed service
            firestore.collection("users").doc(this.$store.getters.user.id).update({services: newSub});
        },
    },
};
</script>

<style scoped>
.profilePageContainer {
    display: flex;
    justify-content: center;
}
.navigationCard {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #a2d6f9;
    border-radius: 1em;
    margin-top: 5%;
    margin-right: 5%;
    width: 15%;
    height: fit-content;
    overflow: hidden;
    padding: 0;
}
.cardContainer {
    background: #a2d6f9;
    margin-top: 5%;
    min-height: 600px;
    border-radius: 1em;
    width: 70%;
}
.containerItem {
    display: flex;
    align-items: baseline;
    margin-left: 5%;
    margin-top: 2%;
}
.servicesContainer {
    margin-left: 5%;
    margin-top: 2%;
}
.serviceSelector {
    display: flex;
    align-items: baseline;
}
</style>
