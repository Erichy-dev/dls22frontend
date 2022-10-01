<script setup lang="ts">
import { RouterView } from "vue-router";
import BodyFooter from "./components/BodyFooter.vue";
import BodyNav from "./components/BodyNav.vue";
import axios from "axios";
import { UserStore } from "./stores/UserAccount";

axios.defaults.baseURL = "https://dogc.pythonanywhere.com/";
// axios.defaults.baseURL = "http://127.0.0.1:8000/";

axios({
  method: "post",
  url: "",
}).then((res) => {
  if (res.data !== "None") {
    UserStore().teamName = res.data;
    UserStore().signedIn = true;
  }
});
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

@keyframes wiggle {
  0% {
    transform: rotateZ(2deg);
  }
  20% {
    transform: rotateZ(-1deg);
  }
  40% {
    transform: rotateZ(2deg);
  }
  60% {
    transform: rotateZ(-1deg);
  }
  80% {
    transform: rotateZ(2deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

#wiggle {
  animation-name: wiggle;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>
