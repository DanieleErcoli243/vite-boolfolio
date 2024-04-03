<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
const baseUri = 'http://localhost:8000/api/projects/';
export default {
    name: 'Boolfolio',
    components: {
        AppHeader
    },
    data: () => ({
        projects: []
    }),
    methods: {
        async fetchProjects() {
            try {
                const { data } = await axios.get(baseUri);
                console.log(data);

                this.projects = data;
            } catch (err) {
                console.error(err);
            }


        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <AppHeader />
    <div class="container">
        <div v-for="project in projects" :key="project.id" class="card">
            <h2>{{ project.title }}</h2>
            <figure>
                <img src="" alt="">
            </figure>
            <p>{{ project.description }}</p>
        </div>
    </div>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
