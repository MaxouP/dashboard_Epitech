<template>
    <div class="home">
        <WidgetViewer />
    </div>
</template>
<script>
import WidgetViewer from "../components/Widget/WidgetViewer.vue";
export default {
    name: "Home",
    components: {
        WidgetViewer,
    },
};
</script>
<style scoped>
.home {
    text-align: center;
}
</style>
