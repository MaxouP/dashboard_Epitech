<template>
    <div>
        <Widget type="text" widgetPlaceholder="Enter city" v-on:updateValue="updateValue" :data="datas" />
    </div>
</template>

<script>
import Widget from "../../Widget";
import api from "../../../../api/services/openWeather";
import { firestore } from '../../../../config';
export default {
    name: 'temperature',
    components: {
        Widget,
    },
    props: {
        value: String,
        index: Number,
    },
    data() {
        return {
            datas: { widgetTitle: "Temperature", infos: [] },
        };
    },
    async mounted() {
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const value = doc.data().createdWidgets[this.index].value
            if (value) this.getWeatherInfo(value);
    },
    methods: {
        updateValue(value) {
            this.getWeatherInfo(value);
        },
        async getWeatherInfo(cityName) {
            const weatherInfos = await api.getWeatherFromCityName(cityName);
            if (!weatherInfos) return this.datas.infos = ["City: " + cityName + " doesn't exist"];
            
            this.updateDataInfo(weatherInfos);
            const doc = await firestore.collection("users").doc(this.$store.getters.user.id).get();
            const newDatas = doc.data().createdWidgets;
            newDatas[this.index] = {name: "temperature", value: cityName};
            firestore.collection("users").doc(this.$store.getters.user.id).update({createdWidgets: newDatas});
        },
        updateDataInfo(infos) {
            this.datas.infos = [
                "City: " + infos.name,
                "Temperature: " + infos.main.temp + "°C",
                // "Weather: " + infos.weather[0].description,
            ];
        },
    },
};
</script>

<style></style>
