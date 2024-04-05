<script>
import ProjectCard from './ProjectCard.vue'
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <div class="row">
        <ProjectCard :projects="projects" />
    </div>

</template>


<style lang="scss" scoped>
/* fila di progetti */
.row {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 30px;
}
</style>