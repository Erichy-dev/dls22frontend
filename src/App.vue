<script setup lang="ts">
import { RouterView } from "vue-router";
import BodyFooter from "./components/BodyFooter.vue";
import BodyNav from "./components/BodyNav.vue";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
</script>

<template>
  <main
    class="flex flex-col min-h-screen bg-[url('/DLS.jpg')] bg-cover text-white font-serif overflow-x-clip"
  >
    <section>
      <h1 class="text-6xl italic ml-2 m-1 p-1">DOG_C</h1>
    </section>
    <BodyNav />
    <RouterView class="min-h-screen" />
    <BodyFooter />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
