<template>
    <div>
        <Widget
            style="margin-bottom: -200px"
            type="text"
            widgetPlaceholder="Enter repository"
            v-on:updateValue="updateValue"
            :data="datas"
        />
        <v-btn v-if="authUrl" :href="authUrl" class="button" color="#1E96FC">Authenticate with Github</v-btn>
    </div>
</template>

<script>
import Widget from "../../Widget";
import api, { githubAuthUrl } from "../../../../api/services/github";
import { firestore } from "../../../../config";
export default {
    name: "LastCommit",
    components: {
        Widget,
    },
    props: {
        value: String,
        index: Number,
    },
    data() {
        return {
            authUrl: !this.$store.getters.githubCode && githubAuthUrl,
            datas: { widgetTitle: "Github last commit", infos: [] },
        };
    },
    async mounted() {
        const doc = await firestore
            .collection("users")
            .doc(this.$store.getters.user.id)
            .get();
        const value = doc.data().createdWidgets[this.index].value;
        if (value) this.getLastCommit(value);
    },
    // on create check github code
    async created() {
        const hash = window.location.href;
        const code = hash.match(/code=(\w+)/);
        if (code && code[1]) {
            this.$store.commit("setGithubCode", code[1]);
            await firestore
                .collection("users")
                .doc(this.$store.getters.user.id)
                .update({ githubCode: code[1] });
            // this.$router.replace('/');
        }
    },
    methods: {
        isAuthentifiedToGithub() {
            // code is used to retrieve token but if we have neither we are not authed
            return !!this.$store.getters.githubCode;
        },

        updateValue(value) {
            if (this.$store.getters.githubCode) this.getLastCommit(value);
        },
        async getLastCommit(repo) {
            const githubInfos = await api.getLastCommitFromFirebaseIdAndRepo(this.$store.getters.user.id, repo);
            if (!githubInfos || githubInfos.length <= 0) return (this.datas.infos = ["Repo " + repo + " is unknown"]);
            this.updateDataInfo(githubInfos, repo);
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const newDatas = doc.data().createdWidgets;
            newDatas[this.index] = { name: "LastCommit", value: repo };
            firestore.collection("users").doc(this.$store.getters.user.id).update({ createdWidgets: newDatas });
        },
        updateDataInfo(infos, repo) {
            this.datas.infos = [
                'Repository: ' + repo,
                'Author: ' + infos.commit.author.name,
                'Date: ' + infos.commit.committer.date,
                'Message: ' + infos.commit.message,
            ]
        },
    },
};
</script>

<style scoped></style>
