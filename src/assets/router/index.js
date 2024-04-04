// importo le funzioni da vue-router
import { createRouter, createWebHistory } from 'vue-router';
// importo i componenti che fungono da pagine
import HomePage from '../../components/pages/HomePage.vue';
import ContactUsPage from '../../components/pages/ContactUsPage.vue';

// definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/contact-us', component: ContactUsPage },
    ]
});

export { router }