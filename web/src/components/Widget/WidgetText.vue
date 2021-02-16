<template>
    <div>
        <h3 class="widgetTitle">{{ data.widgetTitle }}</h3>
        <v-card-text>
            <v-virtual-scroll :bench="0" :items="data.infos" height="250" item-height="48">
                <template v-slot:default="{ item }">
                    <v-list-item :key="item">
                        <v-list-item-content>
                            <v-list-item-title style="white-space: inherit">
                                {{ item }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-virtual-scroll>
        </v-card-text>
    </div>
</template>

<script>
export default {
    name: "WidgetGraph",
    props: {
        data: {
            widgetTitle: String,
            infos: Array,
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
.v-sheet--offset {
    top: -32px;
    position: relative;
}
.widgetTitle {
    color: #1e3888;
    font-size: 24px;
    padding-top: 10px;
}
</style>
