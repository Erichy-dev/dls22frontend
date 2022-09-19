<script setup lang="ts">
import { RouterView } from "vue-router";
import BodyFooter from "./components/BodyFooter.vue";
import BodyNav from "./components/BodyNav.vue";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
</script>

<template>
  <main
    class="flex flex-col min-h-screen text-white font-serif overflow-x-clip"
  >
    <section
      class="fixed min-h-screen w-full flex flex-row bg-[url('/football-suits.jpg')] bg-cover bg-center"
    ></section>
    <BodyNav />
    <RouterView class="min-h-screen" />
    <BodyFooter />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
