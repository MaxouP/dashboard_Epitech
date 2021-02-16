<template>
    <div>
        <Widget type="text" widgetPlaceholder="Enter category (classical,bullet,blitz,rapid...)" v-on:updateValue="updateValue" :data="datas" />
    </div>
</template>

<script>
import Widget from "../../Widget";
import api from "../../../../api/services/lichess";
import { firestore } from '../../../../config';
export default {
    name: "LeaderboardCategory",
    components: {
        Widget,
    },
    props: {
        value: String,
        index: Number,
    },
    data() {
        return {
            datas: { widgetTitle: "Lichess leaderboard", infos: [] },
        };
    },
    async mounted() {
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const value = doc.data().createdWidgets[this.index].value
            if (value) this.getLeaderboardCategory(value);
    },
    methods: {
        updateValue(value) {
            this.getLeaderboardCategory(value.toLowerCase());
        },
        async getLeaderboardCategory(category) {
            const leaderboardInfo = await api.getLeaderboardFromCategory(category);
            if (!leaderboardInfo || leaderboardInfo.length <= 0) return this.datas.infos = ["Category: " + category + " doesn't exist"];
            this.updateDataInfo(leaderboardInfo.users);
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const newDatas = doc.data().createdWidgets;
            newDatas[this.index] = {name: "LeaderboardCategory", value: category};
            firestore.collection("users").doc(this.$store.getters.user.id).update({createdWidgets: newDatas});

        },
        updateDataInfo(infos) {
            let data = [];
            infos.forEach((info, index) => data.push(index+1 + ': ' + info.username + ' ' + (info.title ? info.title : 'No title')));
            this.datas.infos = data;
        },
    },
};
</script>

<style></style>
