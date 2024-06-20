<script>
import ProjectCard from '../ProjectCard.vue';
import axios from 'axios';
const baseUri = 'http://localhost:8000/api/projects/';
export default {
    name: 'DetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isDetail: false
    }),
    methods: {
        async getProject() {

            try {
                // raccolgo i dati dal database
                const res = await axios.get(baseUri + this.$route.params.id);
                // destrutturo i data dalla res
                const { data } = res;
                // stampo i risultati in console
                console.log(data);
                // riassegno i dati al mio oggetto vuoto
                this.project = data;

            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }

        }
    },
    created() {
        this.getProject();
    }
}
</script>


<template>
    <main class="container">

        <ProjectCard :project="project" :isDetail="true" />
    </main>
</template>