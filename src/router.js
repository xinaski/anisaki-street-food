import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Menu from './views/Menu.vue';
import OurStory from './views/OurStory.vue';
import PromotionsReviews from './views/PromotionsReviews.vue';
import Contact from './views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/our-story', component: OurStory },
  { path: '/promotions-reviews', component: PromotionsReviews },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

