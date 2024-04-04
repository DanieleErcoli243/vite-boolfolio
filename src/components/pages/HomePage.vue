<script>
import axios from 'axios';

import ProjectsList from '../ProjectsList.vue'
const baseUri = 'http://localhost:8000/api/projects/';
export default {
    name: 'HomePage',
    components: {
        ProjectsList
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

    <div class="container">
        <ProjectsList :projects="projects" />
    </div>
</template>