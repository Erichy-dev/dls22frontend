<script lang="ts" setup>
import { computed } from "vue";
import { UserStore } from "@/stores/UserAccount";
import { ChevronDownIcon } from "@heroicons/vue/solid";

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
        <router-link to="/signUp" class="self-center z-10" v-if="!signedIn">
          <button
            class="border border-slate-500 bg-cyan-600 p-2 m-1 rounded-xl mt-20 text-xl w-fit"
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
        <p class="self-center w-11/12">
          <span class="font-extrabold text-orange-600 text-5xl">Welcome</span>
          to DOG_C. The only online dls22-focused casino in Mount Kenya
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
