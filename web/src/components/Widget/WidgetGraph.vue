<template>
    <div>
        <v-card-text style="margin-bottom: -32px">
            <v-sheet color="#a2d6f9" elevation="7" class="mx-auto v-sheet--offset">
                <v-sparkline
                    :value="data.graphValue"
                    :labels="data.graphLabel"
                    height="150"
                    padding="24"
                    smooth="0"
                    auto-draw
                    label-size="10"
                ></v-sparkline>
            </v-sheet>
        </v-card-text>
        <h3 style="color: #1e3888; font-size: 24px">{{ data.widgetTitle }}</h3>
        <v-divider></v-divider>
        <v-card-text>
          {{data.graphInfo}}
        </v-card-text>
    </div>
</template>

<script>
export default {
    name: "WidgetGraph",
    props: {
        data: {
            widgetTitle: String,
            graphValue: Array,
            graphLabel: Array,
            graphInfo: String,
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
}
.widgetTitle {
    width: inherit;
    background-color: #eee;
}
.v-sheet--offset {
    margin-bottom: 30px;
    position: relative;
    border-radius: 0.5em;
}
</style>
