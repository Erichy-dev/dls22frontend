<script setup lang="ts">
import { RouterView } from "vue-router";
import BodyFooter from "./components/BodyFooter.vue";
import BodyNav from "./components/BodyNav.vue";
import axios from "axios";
import { getCookie } from "./composables/cookies";
import { UserStore } from "./stores/UserAccount";

axios.defaults.baseURL = "https://dogc.pythonanywhere.com/";

if (getCookie("nt") !== null) {
  const teamName = getCookie("nt");
  UserStore().teamName = teamName as string;
  UserStore().signedIn = true;
}

</script>

<template>
  <main
    class="flex flex-col min-h-screen text-white font-serif overflow-x-clip"
  >
    <section
      class="fixed min-h-screen w-full flex flex-row bg-[url('/media/football-suits.jpg')] bg-cover bg-center"
    ></section>
    <BodyNav />
    <RouterView class="min-h-screen" />
    <BodyFooter />
  </main>
</template>

<style>
@import "@/assets/base.css";
.toast-move,
.toast-enter-active,
.toast-leave-active {
  transition: all 1s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
