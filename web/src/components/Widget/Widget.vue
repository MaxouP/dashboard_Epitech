<template>
    <v-card color="#C5E6FB" class="widgetContainer">
        <div class="divAction">
            <v-card-text class="timeoutDisplay">
                <b>{{ timeout }} seconds</b>
            </v-card-text>
            {{ initialValue }}
            <v-menu offset-x :close-on-content-click="false">
                <v-form @submit="setTimeout">
                    <v-text-field v-model="timeout" dense type="number" />
                </v-form>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" icon>
                        <v-icon color="#1E3888">mdi-timer-outline</v-icon>
                    </v-btn>
                </template>
            </v-menu>
        </div>
        <component :is="WidgetTypes[type]" :data="data"></component>
        <v-form @submit="updateParentValue">
            <v-text-field class="widgetInput" v-model="widgetValue" type="text" :placeholder="widgetPlaceholder" />
        </v-form>
    </v-card>
</template>

<script>
import WidgetGraph from "./WidgetGraph.vue";
import WidgetText from "./WidgetText.vue";
export default {
    name: "Widget",
    created() {
        this.countDown();
    },
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
        initialValue: String,
        widgetPlaceholder: String,
    },
    data() {
        return {
            WidgetTypes: {
                graph: WidgetGraph,
                text: WidgetText,
            },
            widgetValue: "",
            timeout: 7200,
            timerId: "",
        };
    },
    methods: {
        updateParentValue() {
            this.$emit("updateValue", this.widgetValue);
        },
        countDown() {
            this.timerId = setTimeout(() => {
                this.updateParentValue();
                clearTimeout(this.timerId);
                this.countDown();
            }, this.timeout * 1000);
        },
        setTimeout() {
            clearTimeout(this.timerId);
            this.countDown();
        },
    },
};
</script>

<style scoped>
.divAction {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    margin-right: 5%;
}
.timeoutDisplay {
    padding: 0;
    margin-top: 3%;
    font-size: 1rem;
}
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
