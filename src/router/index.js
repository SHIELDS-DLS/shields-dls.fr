import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import TeamDls from "../views/TeamDls.vue";
import Presentation from "../views/Presentation.vue";
import Events from "../views/Events.vue";
import Projects from "../views/Projects.vue";
import Members from "../views/Members.vue";
import Ctfs from "../views/Ctfs.vue";
import LegalNotices from "../views/LegalNotices.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/presentation", name: "Presentation", component: Presentation },
  { path: "/events", name: "Events", component: Events },
  { path: "/members", name: "Members", component: Members },
  { path: "/projects/students", name: "Projects", component: Projects },
  { path: "/shop", name: "Shop", component: Shop },
  { path: "/team-dls", name: "TeamDls", component: TeamDls },
  { path: "/ctfs", name: "Ctfs", component: Ctfs },
  { path: "/legal", name: "LegalNotices", component: LegalNotices },
  { path: "/:pathMatch(.*)*", redirect: "/" },
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
