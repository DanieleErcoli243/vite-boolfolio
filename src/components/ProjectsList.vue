<script>
import ProjectCard from './ProjectCard.vue'
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <ProjectCard :projects="projects" />

</template>
