import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Menu from "./views/Menu.vue";
import OurStory from "./views/OurStory.vue";
import PromotionsReviews from "./views/PromotionsReviews.vue";
import Contact from "./views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/menu", component: Menu },
  { path: "/our-story", component: OurStory },
  { path: "/promotions-reviews", component: PromotionsReviews },
  { path: "/contact", component: Contact },
  { path: "/:pathMatch(.*)*", component: () => import("./views/NotFound.vue") },
];

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHistory(),
  routes,
});

export default router;
