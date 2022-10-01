<script lang="ts" setup>
import { computed } from "vue";
import { UserStore } from "@/stores/UserAccount";

const signedIn = computed(() => UserStore().signedIn);
</script>

<template>
  <main class="w-full flex flex-col">
    <div class="min-h-screen self-center flex flex-row">
      <div
        class="flex flex-col p-2 w-fit self-center bg-opacity-60 bg-black rounded-xl"
      >
        <div class="self-center space-y-9 font-extrabold text-xl">
          <h1>DLS22 ONLINE</h1>
          <h1>GAME</h1>
          <h1>COMPETITIONS</h1>
        </div>
        <router-link to="/signUp" v-if="!signedIn">
          <button
            class="border-slate-500 bg-cyan-600 p-2 m-3 rounded-xl md:text-xl w-fit self-center"
          >
            CREATE ACCOUNT
          </button>
        </router-link>
      </div>
    </div>
    <div
      class="flex flex-row text-black bg-white text-2xl leading-loose min-h-screen"
    >
      <div class="self-center flex flex-col">
        <p class="self-center w-11/12 lg:w-5/12">
          <span class="font-extrabold text-orange-600 text-5xl">Welcome</span>
          to DOG_C. We've provided a virtual environment where DLS22 players can
          have fun and earn <span class="font-bold text-cyan-700">MONEY</span>
          <br />
          <router-link to="/signUp">
            <span
              class="hover:underline decoration-2 decoration-red-600 text-green-600 font-bold"
              >JOIN US</span
            >
          </router-link>
          today and stand a chance to
          <span class="font-bold italic text-orange-600"
            >double, triple, 10X, 100X</span
          >
          your deposit through
          <router-link to="/signIn">
            <span
              class="hover:underline decoration-2 decoration-red-600 text-cyan-600 font-bold"
              >GOD_C league</span
            >
          </router-link>
          competitions.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col text-white font-bold from-sky-900 bg-gradient-to-b to-red-700 via-orange-800 text-2xl leading-loose min-h-screen justify-between bg-center bg-cover"
    >
      <img
        src="/media/profile.jpg"
        alt="my profile photo"
        class="border w-2/12 h-1/6 self-center mt-10 rounded-full shadow-2xl shadow-black"
      />
      <p class="self-center w-10/12 lg:w-5/12 m-10">
        Hello there... <br />
        My name is Eric Nyaga Gitonga. The founder of DLS22 ONLINE COMPETITIONS
        (DOG_C).<br />
        I'm a student at Mount Kenya University pursuing a bachelor in Education
        Science(Physics/Chemistry). <br />
        I'm also a huge fan of tech and its ecosystem. <br />
        If you'd love to have a personal chat with me. Please do at:
      </p>
      <main class="flex flex-row w-full pl-10">
        <a class="flex-1" href="https://wa.me/+254795829177" target="_blank">
          <font-awesome-icon icon="fa-brands fa-twitter" class="text-black" />
        </a>
        <a class="flex-1" href="https://wa.me/+254795829177" target="_blank">
          <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-black" />
        </a>
        <a class="flex-1" href="mailto:erichnyaga1@gmail.com" target="_blank">
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-black" />
        </a>
        <a
          class="flex-1"
          href="https://web.facebook.com/rikiEnt/"
          target="_blank"
        >
          <font-awesome-icon icon="fa-brands fa-facebook" class="text-black" />
        </a>
        <a class="flex-1" href="https://github.com/Erichy-dev" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" class="text-black" />
        </a>
        <a
          class="flex-1"
          href="https://www.fiverr.com/rikidev_/create-a-vue3-spa"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-solid fa-money-bill-1-wave"
            class="text-black"
          />
        </a>
      </main>
    </div>
  </main>
</template>

<style>
none {
  color: blue;
}
</style>
