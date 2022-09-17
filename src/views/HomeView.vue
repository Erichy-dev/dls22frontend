<script lang="ts" setup>
import { ChevronDownIcon } from "@heroicons/vue/solid";

import { computed } from "vue";
import { UserStore } from "@/stores/UserAccount";

const signedIn = computed(() => UserStore().signedIn);
</script>

<template>
  <main class="flex flex-col">
    <div class="absolute self-end w-4/12 mr-5 text-5xl top-24 min-w-fit">
      <div class="flex flex-col p-2 bg-black bg-opacity-40 rounded-xl">
        <div class="self-center space-y-9">
          <h1>DLS22 ONLINE</h1>
          <h1>GAME</h1>
          <h1>COMPETITIONS</h1>
        </div>
        <router-link to="/signUp" class="self-center z-10" v-if="!signedIn">
          <button
            class="border border-slate-500 bg-cyan-600 p-2 m-1 rounded-xl mt-20 text-xl w-fit"
          >
            CREATE ACCOUNT
          </button>
        </router-link>
      </div>
    </div>
    <div class="flex flex-row min-h-screen z-0">
      <div class="flex flex-col self-end w-full">
        <div class="self-center flex">
          <ChevronDownIcon class="text-black w-4/6 animate-bounce" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-row text-black bg-white text-2xl leading-loose min-h-screen pt-6"
    >
      <div class="self-center flex flex-col">
        <p class="self-center w-6/12">
          <span class="font-extrabold text-yellow-400 text-5xl">Welcome</span> to DOG_C. The only online dls22-focused casino in Mount Kenya
          University, Thika. We purpose to not only provide maximum fun but
          financial rewards at the comfort of our clients. We also hold premium
          events for our esteemed
          <span class="font-extrabold">VVIC(Very Very Important Clients).</span>
          All comrades are considered and shall be treated as
          <span class="font-extrabold">VVIC</span>.<br />
          <span
            class="hover:underline decoration-2 decoration-red-600 text-cyan-600"
            >JOIN US</span
          >
          today and stand a chance to win cash through
          <span
            class="hover:underline decoration-2 decoration-red-600 text-cyan-600"
            >GOD_C league</span
          >
          and
          <span
            class="hover:underline decoration-2 decoration-red-600 text-cyan-600"
            >GOD_C cup</span
          >
          competitions.
        </p>
      </div>
    </div>
  </main>
</template>
