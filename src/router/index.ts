import HomeViewVue from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import gameRouters from "./gameRouter";

const appRoutes = [
  {
    path: "/",
    name: "Home",
    component: HomeViewVue,
  },
  {
    path: "/loggedIn",
    redirect: "/games",
  },
  {
    path: "/signOut",
    redirect: "/",
  },
  {
    path: "/games",
    name: "games",
    component: () => import("@/views/GameView.vue"),
  },
  {
    path: "/bets",
    name: "bets",
    component: () => import("@/views/BetsView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/views/ChatView.vue"),
  },
  {
    path: "/support",
    name: "support",
    component: () => import("@/views/SupportView.vue"),
  },
  {
    path: "/signIn",
    name: "signIn",
    component: () => import("@/views/SignInView.vue"),
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("@/views/SignUpView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    path: "/termsAndConditions",
    name: "termsAndConditions",
    component: () => import("@/views/TermsAndConditions.vue"),
  },
];

appRoutes.push(...gameRouters);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: appRoutes,
});

export default router;
