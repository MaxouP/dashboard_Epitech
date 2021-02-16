<template>
    <v-card color="#C5E6FB" class="widgetContainer">
        <v-btn v-if="authUrl" :href="authUrl" class="button" color="#1E96FC">Authenticate with Github</v-btn>
            <component :is="WidgetList[type]" :data="data"></component>
        <div v-if="!authUrl">
            <v-form @submit="updateParentValue">
                <v-text-field class="widgetInput" v-model="widgetValue" type="text" :placeholder="widgetPlaceholder" />
            </v-form>
        </div>
    </v-card>
</template>

<script>
import WidgetGraph from "./WidgetGraph.vue";
import WidgetText from "./WidgetText.vue";
export default {
    name: "Widget",
    props: {
        authUrl: String,
        type: {
            type: String,
            value: String,
        },
        data: {
            widgetTitle: String,
            infos: [],
        },
        widgetPlaceholder: String,
    },
    data() {
        return {
            WidgetTypes: {
                graph: WidgetGraph,
                text: WidgetText,
            },
            widgetValue: "",
        };
    },
    methods: {
        updateParentValue() {
            this.$emit("updateValue", this.widgetValue);
        },
    },
};
</script>

<style scoped>
.widgetContainer {
    background-color: white;
    width: 350px;
    height: 400px;
    margin-top: 10px;
    border-radius: 2em !important;
    box-shadow: 12px 17px 33px 4px rgba(0, 0, 0, 0.15) !important;
}
.widgetTitle {
    width: inherit;
    background-color: #eee;
}
.widgetInput {
    padding: 20px;
    padding-top: 0px;
    text-align-last: center;
}
.v-sheet--offset {
    top: -32px;
    position: relative;
}
</style>
