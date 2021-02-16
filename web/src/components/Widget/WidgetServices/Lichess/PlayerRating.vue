<template>
    <div>
        <Widget type="graph" widgetPlaceholder="Enter player" v-on:updateValue="updateValue" :data='datas' />
    </div>
</template>

<script>
import Widget from "../../Widget";
import api from "../../../../api/services/lichess";
import { firestore } from '../../../../config';
export default {
    name: "PlayerRating",
    components: {
        Widget,
    },
    props: {
        value: String,
        index: Number,
    },
    data() {
        return {
            datas: { widgetTitle: "Blitz Rating", graphValue: [], graphLabel: [], graphInfo: '' },
        };
    },
    async mounted() {
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const value = doc.data().createdWidgets[this.index].value
            if (value) this.getPlayerRating(value);
    },
    methods: {
        updateValue(value) {
            this.getPlayerRating(value);
        },
        async getPlayerRating(player) {
            const playerRating = await api.getPlayerRatingFromUsername(player);
            if (!playerRating || playerRating.length <= 0) return this.datas.graphInfo = "Player: " + player + " doesn't exist";
            this.updateDataInfo(playerRating[1]);
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const newDatas = doc.data().createdWidgets;
            newDatas[this.index] = {name: "PlayerRating", value: player};
            firestore.collection("users").doc(this.$store.getters.user.id).update({createdWidgets: newDatas});
            this.datas.graphInfo = 'Last 10 rating of ' + player + ' on Blitz variant';

        },
        updateDataInfo(infos) {
            let data = [];
            data;
            let points = infos.points.slice(Math.max(infos.points.length - 10, 1));
            points.forEach((point) => {
                data.push(point[3])
            });
            this.datas.graphValue = data;
            this.datas.graphLabel = data;
        },
    },
};
</script>

<style></style>
