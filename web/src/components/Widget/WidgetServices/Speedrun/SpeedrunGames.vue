<template>
    <div>
        <Widget type="text" widgetPlaceholder="Enter game" v-on:updateValue="updateValue" :data="datas" />
    </div>
</template>

<script>
import Widget from "../../Widget";
import api from "../../../../api/services/speedrun.com";
import { firestore } from '../../../../config';
export default {
    name: "SpeedrunGames",
    components: {
        Widget,
    },
    props: {
        value: String,
        index: Number,
    },
    data() {
        return {
            datas: { widgetTitle: "Speedrun.com", infos: [] },
        };
    },
    async mounted() {
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const value = doc.data().createdWidgets[this.index].value
            if (value) this.getGameCategories(value);
    },
    methods: {
        updateValue(value) {
            this.getGameCategories(value);
        },
        async getGameCategories(game) {
            const gameInfos = await api.getSpeedrunCategoriesFromGame(game);
            if (!gameInfos || gameInfos.length <= 0) return this.datas.infos = ["Game: " + game + " doesn't exist"];
            this.updateDataInfo(gameInfos);
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const newDatas = doc.data().createdWidgets;
            newDatas[this.index] = {name: "SpeedrunGames", value: game};
            firestore.collection("users").doc(this.$store.getters.user.id).update({createdWidgets: newDatas});

        },
        updateDataInfo(infos) {
            let data = [];
            infos.forEach((info) => data.push(info.names.international));
            this.datas.infos = data;
        },
    },
};
</script>

<style></style>
