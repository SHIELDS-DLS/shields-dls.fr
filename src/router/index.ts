import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type RouterScrollBehavior,
} from "vue-router";

const Home = () => import("@/views/Home.vue");
const Shop = () => import("@/views/Shop.vue");
const TeamDls = () => import("@/views/TeamDls.vue");
const Presentation = () => import("@/views/Presentation.vue");
const Events = () => import("@/views/Events.vue");
const Projects = () => import("@/views/Projects.vue");
const Members = () => import("@/views/Members.vue");
const Ctfs = () => import("@/views/Ctfs.vue");
const LegalNotices = () => import("@/views/LegalNotices.vue");

const routes: RouteRecordRaw[] = [
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

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else if (to.hash) {
    return { el: to.hash, behavior: "smooth" };
  } else {
    return { top: 0 };
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export default router;
