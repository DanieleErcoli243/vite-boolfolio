<script>
export default {
    name: 'ProjectCard',
    props: { projects: Array }
}
</script>


<template>
    <div v-for="project in projects" :key="project.id" class="card">

        <figure>
            <img src="" alt="">
        </figure>
        <h2>{{ project.title }}</h2>
        <h4>{{ project['type']['label'] }}</h4>

        <p>{{ project.description }}</p>
    </div>
</template>