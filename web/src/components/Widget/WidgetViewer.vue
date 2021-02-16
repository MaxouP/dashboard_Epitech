<template>
    <v-container style="width: 1500px">
        <v-dialog v-model="dialog" max-width="290">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on">Create Widget</v-btn>
            </template>
            <v-card>
                <v-card-title class="headline">
                    Choose a service
                </v-card-title>
                <v-card-text> </v-card-text>
                <v-card-actions>
                    <form>
                        <v-select
                            v-model="selectionService"
                            @change="selectedService()"
                            :items="subscribedServices"
                        ></v-select>
                        <v-select v-model="selectionWidget" :items="widgetsNameList"></v-select>
                        <v-btn @click="createWidget">Create</v-btn>
                    </form>

                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-row justify="center">
            <v-col v-for="(widget, index) in createdWidgets" :key="index" align="center">
                <component :is="widget" :index="index"></component>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Weather from "./WidgetServices/Weather/WeatherService";
import Github from "./WidgetServices/Github/GithubService";
import Speedrun from "./WidgetServices/Speedrun/SpeedrunService";
import Lichess from './WidgetServices/Lichess/LichessService';
import { firestore } from "../../config/index";

export default {
    async created() {
        const doc = await firestore
            .collection("users")
            .doc(this.$store.getters.user.id)
            .get();
        doc.data().services.forEach((service) => {
            this.subscribedServices.push(service.name);
        });
        this.$store.commit("setServicesList", [Weather, Github, Speedrun, Lichess]);
        this.servicesList = this.$store.getters.servicesList;
        this.createdWidgetsByName = doc.data().createdWidgets;
        this.createdWidgetsByName.forEach((widgetName) => {
            this.servicesList.forEach((service) => {
                service.widgets.forEach((widget) => {
                    if (widget.name == widgetName.name) {
                        this.createdWidgets.push(widget);
                    }
                });
            });
        });
    },
    data() {
        return {
            subscribedServices: [],
            servicesList: [],
            createdWidgets: [],
            createdWidgetsByName: [],
            widgetsNameList: [],
            widgetsList: [],
            dialog: false,
            selectionService: "",
            selectionWidget: "",
        };
    },
    methods: {
        selectedService() {
            this.widgetsNameList = [];
            this.servicesList.forEach((service) => {
                if (service.name == this.selectionService) {
                    service.widgets.forEach((widget) => {
                        this.widgetsList.push(widget);
                        this.widgetsNameList.push(widget.name);
                    });
                }
            });
        },
        createWidget() {
            this.widgetsList.forEach((widget) => {
                if (widget.name == this.selectionWidget) {
                    this.createdWidgetsByName.push({ name: widget.name });
                    this.createdWidgets.push(widget);
                }
            });
            firestore
                .collection("users")
                .doc(this.$store.getters.user.id)
                .update({ createdWidgets: this.createdWidgetsByName });
            this.dialog = false;
        },
    },
};
</script>

<style scoped></style>
