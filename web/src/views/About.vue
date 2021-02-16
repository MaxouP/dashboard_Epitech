<template>
    <div>
        {{ aboutFile }}
    </div>
</template>
<script>
import aboutJson from "../../about.json";
export default {
    name: "About",
    created() {
        this.aboutFile = JSON.stringify(aboutJson);
    },
    data() {
        return {
            aboutFile: JSON.stringify(aboutJson),
        };
    },
};
</script>
<style scoped>
.home {
    text-align: center;
}
</style>
