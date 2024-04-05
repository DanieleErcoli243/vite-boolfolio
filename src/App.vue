<script>
import AppHeader from './components/AppHeader.vue'

const baseUri = 'http://localhost:8000/api/projects/';
export default {
    name: 'Boolfolio',
    components: {
        AppHeader
    },

};
</script>

<template>
    <AppHeader />
    <RouterView />
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
