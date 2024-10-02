import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Actions from "../views/Actions.vue";
import Shop from "../views/Shop.vue";
import TeamDls from "../views/TeamDls.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/nos-actions", name: "Actions", component: Actions },
  { path: "/boutique", name: "Shop", component: Shop },
  { path: "/team-dls", name: "TeamDls", component: TeamDls },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
