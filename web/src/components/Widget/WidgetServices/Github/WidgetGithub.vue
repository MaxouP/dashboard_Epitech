<template>
    <div>
        <Widget type="text" widgetPlaceholder="Enter username" v-on:updateValue="updateValue" :data="datas" />
    </div>
</template>

<script>
import Widget from "../../Widget";
import api from "../../../../api/services/github";
import { firestore } from "../../../../config";
export default {
    name: "GithubRepo",
    components: {
        Widget,
    },
    props: {
        value: String,
        index: Number,
    },
    data() {
        return {
            datas: { widgetTitle: "Github repositories", infos: [] },
        };
    },
    async mounted() {
        const doc = await firestore
            .collection("users")
            .doc(this.$store.getters.user.id)
            .get();
        const value = doc.data().createdWidgets[this.index].value;
        if (value) this.getGithubInfos(value);
    },
    methods: {
        updateValue(value) {
            this.getGithubInfos(value);
        },
        async getGithubInfos(username) {
            const githubInfos = await api.getGithubRepositoryFromUserName(username);
            if (!githubInfos || githubInfos.length <= 0)
                return (this.datas.infos = ["User " + username + " is unknown or has an empty repository"]);

            this.updateDataInfo(githubInfos);
            const doc = await firestore
                .collection("users")
                .doc(this.$store.getters.user.id)
                .get();
            const newDatas = doc.data().createdWidgets;
            newDatas[this.index] = { name: "GithubRepo", value: username };
            firestore
                .collection("users")
                .doc(this.$store.getters.user.id)
                .update({ createdWidgets: newDatas });
        },
        updateDataInfo(infos) {
            let data = [];
            infos.forEach((info) => data.push(info.name));
            this.datas.infos = data;
        },
    },
};
</script>

<style></style>
